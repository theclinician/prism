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
  Icon,
  MStack,
  TBD,
  Card,
  Spinner,
  Scroll,
  Divider,
} from "@zedoc/prism";

import { Code, Demo, Example } from "$/blocks/example";


export const StaticPage = () => {
  
  return (
    <Scroll>
      <Example title="Divider">
        <Divider/>
      </Example>
      <Example>
        <Icon/>
      </Example>
      <Example>
        <Spinner/>
      </Example>
      <Example>
        <TBD/>
      </Example>
    </Scroll>
  );
}

export default StaticPage;
