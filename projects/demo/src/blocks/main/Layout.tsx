import { JSX, children, children as useChildren } from "solid-js";
import {
  Button,
  ButtonLook,
  Color,
  Heading3,
  Tabs,
  Tab,
  Scroll,
  Padded,
  HStack,
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

  return (
    <HStack tall>
      <HStack tall style={{"max-width": "1536px"}}>
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
      </HStack>
    </HStack>
  );
}

export default Layout;
