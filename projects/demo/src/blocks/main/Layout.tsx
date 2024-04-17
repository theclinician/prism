import { JSX, children, createEffect, children as useChildren } from "solid-js";
import {
  Button,
  ButtonLook,
  Color,
  Heading3,
  Tabs,
  Tab,
  Scroll,
  Centered,
  Separator,
  TBD,
  Card,
  Modal,
  Mobile,
} from "@theclinician/prism";

import AppMenu from "./AppMenu"

export type Props = {
  children?: JSX.Element;
}


export const Layout = (props: Props) => {
  const c = useChildren(() => props.children)

  // createEffect(() => {
  //   console.log("CHILDREN", c())
  // })

  // <h-stack tall={true} styles={"max-width: 536px"}>
  return (
    <h-stack tall={true} styles={{"max-width": "1536px"}}>
      <v-scroll wide={true} styles={{"max-width": "240px"}}>
        <AppMenu/>
        <stack-separator/>
      </v-scroll>
      <stack-separator/>
      <v-scroll wide={true} styles={{"max-width": "720px"}}>
        {c()}
        <stack-separator/>
      </v-scroll>
      <stack-separator/>
    </h-stack>
  );
}
// {/* <h-stack tall={true} styleOverride={{"max-width": "536px"}}> */}

export default Layout;

