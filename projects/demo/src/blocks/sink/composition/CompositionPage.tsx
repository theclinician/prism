import {
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
} from "@hakina/ui";
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
        <el-h-stack>
          ...
        </el-h-stack>
      `}>
        <el-h-stack>
          <el-button>A</el-button>
          <el-button>B</el-button>
          <el-button>C</el-button>
        </el-h-stack>
      </Example>

      <Example code={`
        <el-h-stack
          gap={PaddingSize.MEDIUM}
        >
          ...
        </el-h-stack>
      `}>
        <el-h-stack gap={PaddingSize.MEDIUM}>
          <el-button>A</el-button>
          <el-button>B</el-button>
          <el-button>C</el-button>
        </el-h-stack>
      </Example>

      <Example code={`
        <el-h-stack flip={true}>
          ...
        </el-h-stack>
      `}>
        <el-h-stack flip={true}>
          <el-button>A</el-button>
          <el-button>B</el-button>
          <el-button>C</el-button>
        </el-h-stack>
      </Example>

      <Example code={`
        <el-v-stack>
          ...
        </el-v-stack>
      `}>
        <el-v-stack>
          <el-button>A</el-button>
          <el-button>B</el-button>
          <el-button>C</el-button>
        </el-v-stack>
      </Example>

      <Example code={`
        <el-z-stack>
          ...
        </el-z-stack>
      `}>
        <el-z-stack wide={true}>
          <h-centered>
            <el-button>Center</el-button>
          </h-centered>
          <el-z-item>
            <el-h-stack wide={true}>
              <stack-separator/>
              <el-button>X</el-button>
            </el-h-stack>
          </el-z-item>
        </el-z-stack>
      </Example>


      <FeedHeader ref={anchors["separator"]}>
        Separator
      </FeedHeader>

      <Example code={`
        <el-h-stack wide={true}>
          <el-button>A</el-button>
          <el-button>B</el-button>
          <stack-separator/>
          <el-button>C</el-button>
        </el-h-stack>
      `}>
        <el-h-stack wide={true}>
          <el-button>A</el-button>
          <el-button>B</el-button>
          <stack-separator/>
          <el-button>C</el-button>
        </el-h-stack>
      </Example>


      <FeedHeader ref={anchors["padded"]}>
        Padded Stack
      </FeedHeader>

      <Example code={`
        <el-padded-stack>
          ...
        </el-padded-stack>
      `}>
        <el-padded-stack
          styles={{border: "1px dotted red"}}
        >
          <el-button>A</el-button>
          <el-button>B</el-button>
          <el-button>C</el-button>
        </el-padded-stack>
      </Example>

      <Example code={`
        <el-padded-stack padding={PaddingSize.SMALLEST}>
          ...
        </el-padded-stack>
      `}>
        <el-padded-stack
          padding={PaddingSize.SMALLEST}
          styles={{border: "1px dotted red"}}
        >
          <el-button>A</el-button>
          <el-button>B</el-button>
          <el-button>C</el-button>
        </el-padded-stack>
      </Example>

      <Example code={`
        <el-padded-stack padding={PaddingSize.LARGEST}>
          ...
        </el-padded-stack>
      `}>
        <el-padded-stack
          padding={PaddingSize.LARGEST}
          styles={{border: "1px dotted red"}}
        >
          <el-button>A</el-button>
          <el-button>B</el-button>
          <el-button>C</el-button>
        </el-padded-stack>
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
          <el-button>A</el-button>
          <el-button>B</el-button>
          <el-button>C</el-button>
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
