import {
  Button,
  ButtonLook,
  Color,
  Heading3,
  Tabs,
  Tab,
  useTabs,
  Padded,
  HStack,
  VStack,
  MStack,
  TBD,
  Card,
  Modal,
} from "@zedoc/prism";
import { JSX, children as useChildren } from "solid-js";
import style from "./Code.module.scss";

console.log("STYLE?", style);

export const Code = (props: {
  children: string,
}) => {
  const c = useChildren(() => {
    const lines = props.children.split("\n");
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
  });
  return (
    <div class={style.code}>
      {c()}
    </div>
  );
}

export default Code;
