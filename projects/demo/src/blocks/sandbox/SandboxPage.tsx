
import {
  Button,
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
} from "@theclinician/prism";
import { Example } from "$/blocks/example";
import { createSignal, onCleanup, onMount } from "solid-js";
import { PaddingSize } from "@theclinician/prism";




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
          <padded-stack>
            {clock()}
          </padded-stack>
        `}
      >
        <padded-stack>
          THIS IS PADDED! {clock()}
        </padded-stack>
      </Example>

    
    <Example
        code={`
          <padded-stack>
            {clock()}
          </padded-stack>
        `}
      >
        <padded-stack padding={PaddingSize.LARGEST}>
          THIS IS PADDED! {clock()}
        </padded-stack>
      </Example>
    </Feed>
  );
}

export default SandboxPage;
