import {
  Scroll, Menu, Feed, FeedCard, FeedHeader,
} from "@zedoc/prism";
import { Code, Demo, Example } from "$/blocks/example";



export const FeedExample = () => {
  
  return (
    <Feed>
      <FeedHeader>
        
      </FeedHeader>
      <FeedCard>


      </FeedCard>

      <Example title="Feed">
        <Code>{`<Feed>`}</Code>
        <Demo>
          <Menu/>
        </Demo>
      </Example>
    </Feed>
  );
}

export default FeedExample;
