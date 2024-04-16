import {
  Button,
  ButtonLook,
  Color,
  Heading3,
  Tabs,
  Tab,
  useTabs,
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
        <h-stack>
          ...
        </h-stack>
      `}>
        <h-stack>
          <Button>A</Button>
          <Button>B</Button>
          <Button>C</Button>
        </h-stack>
      </Example>

      <Example code={`
        <h-stack
          gap={PaddingSize.MEDIUM}
        >
          ...
        </h-stack>
      `}>
        <h-stack gap={PaddingSize.MEDIUM}>
          <Button>A</Button>
          <Button>B</Button>
          <Button>C</Button>
        </h-stack>
      </Example>

      <Example code={`
        <h-stack flip>
          ...
        </h-stack>
      `}>
        <h-stack flip>
          <Button>A</Button>
          <Button>B</Button>
          <Button>C</Button>
        </h-stack>
      </Example>

      <Example code={`
        <v-stack>
          ...
        </v-stack>
      `}>
        <v-stack>
          <Button>A</Button>
          <Button>B</Button>
          <Button>C</Button>
        </v-stack>
      </Example>


      <FeedHeader ref={anchors["separator"]}>
        Separator
      </FeedHeader>

      <Example code={`
        <h-stack>
          <Button>A</Button>
          <Button>B</Button>
          <Separator/>
          <Button>C</Button>
        </h-stack>
      `}>
        <h-stack>
          <Button>A</Button>
          <Button>B</Button>
          <Separator/>
          <Button>C</Button>
        </h-stack>
      </Example>


      <FeedHeader ref={anchors["padded"]}>
        padded-stack
      </FeedHeader>

      <Example code={`
        <padded-stack>
          ...
        </padded-stack>
      `}>
        <padded-stack>
          <Button>A</Button>
          <Button>B</Button>
          <Button>C</Button>
        </padded-stack>
      </Example>

      <Example code={`
        <padded-stack padding={PaddingSize.SMALLEST}>
          ...
        </padded-stack>
      `}>
        <padded-stack padding={PaddingSize.SMALLEST}>
          <Button>A</Button>
          <Button>B</Button>
          <Button>C</Button>
        </padded-stack>
      </Example>

      <Example code={`
        <padded-stack padding={PaddingSize.LARGEST}>
          ...
        </padded-stack>
      `}>
        <padded-stack padding={PaddingSize.LARGEST}>
          <Button>A</Button>
          <Button>B</Button>
          <Button>C</Button>
        </padded-stack>
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
