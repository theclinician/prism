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
  FeedCard,
  Feed,
  PaddingSize,
  FeedHeader,
  Separator,
} from "@theclinician/prism";
import { Example } from "$/blocks/example";
import { useAnchors } from "$/blocks/anchors";


export const Composition = () => {
  const [anchors] = useAnchors();
  
  return (
    <Feed>
      <FeedHeader ref={anchors["stack"]}>
        Stack
      </FeedHeader>

      <Example code={`
        <HStack>
          ...
        </HStack>
      `}>
        <HStack>
          <Button>A</Button>
          <Button>B</Button>
          <Button>C</Button>
        </HStack>
      </Example>

      <Example code={`
        <HStack
          gap={PaddingSize.MEDIUM}
        >
          ...
        </HStack>
      `}>
        <HStack gap={PaddingSize.MEDIUM}>
          <Button>A</Button>
          <Button>B</Button>
          <Button>C</Button>
        </HStack>
      </Example>

      <Example code={`
        <HStack flip>
          ...
        </HStack>
      `}>
        <HStack flip>
          <Button>A</Button>
          <Button>B</Button>
          <Button>C</Button>
        </HStack>
      </Example>

      <Example code={`
        <VStack>
          ...
        </VStack>
      `}>
        <VStack>
          <Button>A</Button>
          <Button>B</Button>
          <Button>C</Button>
        </VStack>
      </Example>


      <FeedHeader ref={anchors["separator"]}>
        Separator
      </FeedHeader>

      <Example code={`
        <HStack>
          <Button>A</Button>
          <Button>B</Button>
          <Separator/>
          <Button>C</Button>
        </HStack>
      `}>
        <HStack>
          <Button>A</Button>
          <Button>B</Button>
          <Separator/>
          <Button>C</Button>
        </HStack>
      </Example>


      <FeedHeader ref={anchors["padded"]}>
        Padded
      </FeedHeader>

      <Example code={`
        <Padded>
          ...
        </Padded>
      `}>
        <Padded>
          <Button>A</Button>
          <Button>B</Button>
          <Button>C</Button>
        </Padded>
      </Example>

      <Example code={`
        <Padded padding={PaddingSize.SMALLEST}>
          ...
        </Padded>
      `}>
        <Padded padding={PaddingSize.SMALLEST}>
          <Button>A</Button>
          <Button>B</Button>
          <Button>C</Button>
        </Padded>
      </Example>

      <Example code={`
        <Padded padding={PaddingSize.LARGEST}>
          ...
        </Padded>
      `}>
        <Padded padding={PaddingSize.LARGEST}>
          <Button>A</Button>
          <Button>B</Button>
          <Button>C</Button>
        </Padded>
      </Example>


      <FeedHeader ref={anchors["props"]}>
        Composition props
      </FeedHeader>

      <Example code={`
        tall?: boolean,
        wide?: boolean,
        padding?: PaddingSize | null,
        horizontal?: PaddingSize | null,
        vertical?: PaddingSize | null,
        top?: PaddingSize | null,
        bottom?: PaddingSize | null,
        left?: PaddingSize | null,
        right?: PaddingSize | null,
        gap?: PaddingSize | null,
      `}/>

    </Feed>
  );
}

export default Composition;
