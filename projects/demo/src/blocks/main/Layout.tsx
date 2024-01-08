import { JSX, children, children as useChildren } from "solid-js";
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
  Mobile,
} from "@zedoc/prism";

export type Props = {
  children?: JSX.Element;
}

export const Layout = (props: Props) => {
  const c = useChildren(() => props.children)

  return (
    <HStack>
      <Mobile>
        <VStack>
          <Button href="/buttons">Buttons</Button>
          <Button href="/inputs">Inputs</Button>
          <Button href="/icons">Icons</Button>
        </VStack>
      </Mobile>
      <Mobile>
        <Card>
          <Padded>
            Layout
          </Padded>
          <Padded>
            {c()}
          </Padded>
        </Card>
      </Mobile>
    </HStack>
  );
}

export default Layout;
