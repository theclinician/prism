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

  return (
    <h-stack tall={true} data-testid="LayoutBox" style={{"max-width": "1536px"}}>
      <Scroll style={{"max-width": "240px"}}>
        <AppMenu/>
        <Separator/>
      </Scroll>
      <Separator/>
      <Scroll style={{"max-width": "720px"}}>
        {c()}
        <Separator/>
      </Scroll>
      <Separator/>
    </h-stack>
  );
}

export default Layout;
