import { Demo } from "@hakina/ui";
import { JSX,  createMemo,  children as useChildren } from "solid-js";
import style from "./Example.module.scss";
import { Token, TokenType, parseCode, trimCode } from "./utils";


export const Example = (props: {
  title?: string,
  code?: string,
  children?: JSX.Element,
}) => {
  const c = useChildren(() => {
    return props.children;
  });
  const code = createMemo((): Token[] => {
    const parsed = parseCode(trimCode(props.code ?? ""));
    return parsed;
  });

  return (
    <Demo
      title={props.title}
      code={
        code().map(token => (
          <span
            classList={{
              boo: true,
              [style.token]: true,
              [style.operatorToken]: token.type === TokenType.OPERATOR,
              [style.bracketToken]: token.type === TokenType.BRACKET,
              [style.tagToken]: token.type === TokenType.TAG,
              [style.propToken]: token.type === TokenType.PROP,
              [style.valueToken]: token.type === TokenType.VALUE,
              [style.contentToken]: token.type === TokenType.CONTENT,
              [style.unknownToken]: token.type === TokenType.UNKNOWN,
            }}
          >{token.value}</span>
        ))
      }
    >
      <el-padded-stack>
        {c()}
      </el-padded-stack>
    </Demo>
  );
}

export default Example;
