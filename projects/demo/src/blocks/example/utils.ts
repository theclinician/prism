export const trimCode = (code: string): string => {
  const lines = (code ?? "").split("\n");
  const indent = Math.min(
    ...lines
    .filter(line => line.match(/\S/))
    .map(line => (line.match(/^\s*/) ?? [""])[0].length)
  );
  const result = lines.map(line => line.substring(indent))
  while(result[0].match(/^\s*$/)) {
    result.shift();
    if(result.length === 0) break;
  }
  return result.join("\n");
}
  
export enum TokenType {
  "OPERATOR" = "OPERATOR",
  "BRACKET" = "BRACKET",
  "TAG" = "TAG",
  "PROP" = "PROP",
  "VALUE" = "VALUE",
  "CONTENT" = "CONTENT",
  "EMPTY" = "EMPTY",
  "UNKNOWN" = "UNKNOWN",
}

export type Token = {
  type: TokenType,
  value: string,
}

export const parseCode = (html: string): Token[] => {
  const tokenRegex = /<\/?[^>]+>|[^<>]+/g;
  // const partRegex = /\s*[^\s=]+[=][^=]+(\s|$)|\s*\w+/g;
  const partRegex = /\s*[^\s=]+[=]\"[^=]+\"(\s|$)|\s*[^\s=]+[=]\{[^=]+\}(\s|$)|\s*\w+|\s+/g;
  
  
  const tokens = html.match(tokenRegex) ?? [];
  // console.log("TOKENS", tokens);
  const result: Token[] = [];
  
  tokens.forEach(token => {
    if (token.startsWith("<") && token.endsWith(">")) {
      if (token.startsWith("</")) {
        result.push({ type: TokenType.OPERATOR, value: "</" });
        result.push({ type: TokenType.TAG, value: token.slice(2, -1) });
        result.push({ type: TokenType.OPERATOR, value: ">" });
      } else {
        const closingOperator = token.endsWith("/>") ? "/>" : ">";
        const [tag, params] = token.slice(1, -closingOperator.length).split(/(\s.*)$/s);
        const parts = params ? (params.match(partRegex) ?? []) : [];
        
        result.push({ type: TokenType.OPERATOR, value: "<" });
        result.push({ type: TokenType.TAG, value: tag });
        parts.forEach(part => {
          if (part.includes("=")) {
            const [prop, value] = part.split("=");
            const values = ` ${value} `.split(/(^\s*|\s*$)/);

            result.push({ type: TokenType.PROP, value: prop });
            result.push({ type: TokenType.OPERATOR, value: "=" });
            result.push({ type: TokenType.VALUE, value: values[1].slice(1)});
            if (values[2].startsWith("{") && values[2].endsWith("}")) {
              result.push({ type: TokenType.BRACKET, value: "{" });
              result.push({ type: TokenType.VALUE, value: values[2].slice(1, -1) });
              result.push({ type: TokenType.BRACKET, value: "}" });
            } else {
              result.push({ type: TokenType.VALUE, value: values[2] });
            }
            result.push({ type: TokenType.VALUE, value: values[3].slice(0, -1)});
            
          } else {
            result.push({ type: TokenType.PROP, value: part });
          }
        });
        result.push({ type: TokenType.OPERATOR, value: closingOperator });
      }
    } else if (token.trim() === "") {
      result.push({ type: TokenType.EMPTY, value: token });
    } else if (/^[^<>]+$/.test(token)) {
      result.push({ type: TokenType.CONTENT, value: token });
    } else {
      result.push({ type: TokenType.UNKNOWN, value: token });
    }
  });
  
  return result;
}
