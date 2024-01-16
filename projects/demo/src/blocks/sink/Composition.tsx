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


export const Composition = () => {
  
  return (
    <VStack>
      <Card>
        <Padded>
          HStack
        </Padded>
      </Card>
      <Card>
        <Padded>
          VStack
        </Padded>
      </Card>
      
      <Card>
        <Padded>
          Separator
        </Padded>
      </Card>
      <Card>
        <Padded>
          Row
        </Padded>
      </Card>
      <Card>
        <Padded>
          Column
        </Padded>
      </Card>
      
    </VStack>
  );
}

export default Composition;
