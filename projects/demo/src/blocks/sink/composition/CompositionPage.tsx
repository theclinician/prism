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
        <h-stack flip={true}>
          ...
        </h-stack>
      `}>
        <h-stack flip={true}>
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

      <Example code={`
        <z-stack>
          ...
        </z-stack>
      `}>
        <z-stack wide={true}>
          <h-centered>
            <Button>Center</Button>
          </h-centered>
          <z-item>
            <h-stack wide={true}>
              <stack-separator/>
              <Button>X</Button>
            </h-stack>
          </z-item>
        </z-stack>
      </Example>


      <FeedHeader ref={anchors["separator"]}>
        Separator
      </FeedHeader>

      <Example code={`
        <h-stack wide={true}>
          <Button>A</Button>
          <Button>B</Button>
          <stack-separator/>
          <Button>C</Button>
        </h-stack>
      `}>
        <h-stack wide={true}>
          <Button>A</Button>
          <Button>B</Button>
          <stack-separator/>
          <Button>C</Button>
        </h-stack>
      </Example>


      <FeedHeader ref={anchors["padded"]}>
        Padded Stack
      </FeedHeader>

      <Example code={`
        <padded-stack>
          ...
        </padded-stack>
      `}>
        <padded-stack
          styles={{border: "1px dotted red"}}
        >
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
        <padded-stack
          padding={PaddingSize.SMALLEST}
          styles={{border: "1px dotted red"}}
        >
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
        <padded-stack
          padding={PaddingSize.LARGEST}
          styles={{border: "1px dotted red"}}
        >
          <Button>A</Button>
          <Button>B</Button>
          <Button>C</Button>
        </padded-stack>
      </Example>


      <FeedHeader ref={anchors["centered"]}>
        Centered
      </FeedHeader>

      <Example code={`
        <h-centered>
          ...
        </h-centered>
      `}>
        <h-centered>
          <Button>A</Button>
          <Button>B</Button>
          <Button>C</Button>
        </h-centered>
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
