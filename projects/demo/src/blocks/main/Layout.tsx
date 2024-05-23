import { JSX, children, createEffect, children as useChildren } from "solid-js";
import {
  
  ButtonLook,
  Color,
  Heading3,
  Tabs,
  Tab,
  
  TBD,
  Card,
  Modal,
  Mobile,
} from "@hakina/ui";

import AppMenu from "./AppMenu"

export type Props = {
  children?: JSX.Element;
}


export const Layout = (props: Props) => {
  const c = useChildren(() => props.children)

  // createEffect(() => {
  //   console.log("CHILDREN", c())
  // })

  // <el-h-stack tall={true} styles={"max-width: 536px"}>
  return (
    <el-h-stack tall={true} styles={{"max-width": "1536px"}}>
      <el-v-scroll wide={true} styles={{"max-width": "240px"}}>
        <AppMenu/>
        <el-stack-separator/>
      </el-v-scroll>
      <stack-separator/>
      <el-v-scroll wide={true} styles={{"max-width": "720px"}}>
        {c()}
        <el-stack-separator/>
      </el-v-scroll>
      <el-stack-separator/>
    </el-h-stack>
  );
}
// {/* <el-h-stack tall={true} styleOverride={{"max-width": "536px"}}> */}

export default Layout;

