
import {
  ButtonLook,
  Color,
  Heading3,
  Tabs,
  Tab,
  useTabs,
  Demo,
  Feed,
  FeedCard,
  FeedHeader,
  Menu,
  MenuGroup,
  MenuItem,
  MenuLook,
  PaddingSize,
} from "@hakina/ui";
import { Example } from "$/blocks/example";
import { createSignal, onCleanup, onMount } from "solid-js";




export const SandboxPage = () => {
  const [clock, setClock] = createSignal(0);
  let interval: number | null = null;


  onMount(() => {
    interval = setInterval(() => {
      setClock(i => i + 1)
    }, 1000)
  })

  onCleanup(() => {
    if(interval !== null) {
      clearInterval(interval);
      interval = null;
    }
  })

  
  return (
    <Feed>      
      <FeedHeader>
        Sandbox
      </FeedHeader>

      <FeedHeader>
        Clock
      </FeedHeader>

      <Example
        code={`
          <el-padded-stack>
            {clock()}
          </el-padded-stack>
        `}
      >
        <el-padded-stack>
          THIS IS PADDED! {clock()}
        </el-padded-stack>
      </Example>

    
    <Example
        code={`
          <el-padded-stack>
            {clock()}
          </el-padded-stack>
        `}
      >
        <el-padded-stack padding={PaddingSize.LARGEST}>
          THIS IS PADDED! {clock()}
        </el-padded-stack>
      </Example>
    </Feed>
  );
}

export default SandboxPage;
