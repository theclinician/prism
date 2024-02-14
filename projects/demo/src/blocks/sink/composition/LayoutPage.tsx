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
  Scroll,
} from "@zedoc/prism";
import Example from "$/blocks/example/Example";
import Code from "$/blocks/example/Code";
import Demo from "$/blocks/example/Demo";


export const Layout = () => {
  
  return (
    <Scroll>
      <Example>
        <Code>{`<body>`}</Code>
      </Example>
      <Example>
        <Code>{`<div id="root">`}</Code>
      </Example>
      <Example>
        <Code>{`<PrismWrap>`}</Code>
      </Example>
    </Scroll>

  );
}

export default Layout;
