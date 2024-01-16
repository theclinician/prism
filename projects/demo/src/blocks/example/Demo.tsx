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
import style from "./Demo.module.scss";


export const Demo = (props: {
  children: JSX.Element,
}) => {
  const c = useChildren(() => {
    return props.children;
  });
  return (
    <div class={style.demo}>
      {c()}
    </div>
  );
}

export default Demo;
