import {
  Feed,
  FeedHeader,
  Color,
  Heading3,
  Tabs,
  Tab,
  useTabs,
  Icon,
  I,
  TBD,
  Separator,
  Spinner,
  FeedCard,
  Divider,
  Label,
} from "@hakina/ui";

import { Example } from "$/blocks/example";
import { useAnchors } from "$/blocks/anchors";


export const StaticPage = () => {
  const [anchors] = useAnchors();
  
  return (
    <Feed>
      <FeedHeader ref={anchors["label"]}>
        Label
      </FeedHeader>

      <Example code={`
      `}>
        <FeedCard>
          <el-h-stack>

            <Label>
              Hey it's a label!
            </Label>
            <stack-separator/>
          </el-h-stack>
        </FeedCard>
      </Example>
      
      <FeedHeader ref={anchors["spinner"]}>
        Spinner
      </FeedHeader>

      <Example code={`
        <Spinner/>
      `}>
        <Spinner/>
      </Example>
      
      <FeedHeader ref={anchors["divider"]}>
        Divider
      </FeedHeader>
      
      <Example code={`
        <Divider/>
      `}>
        <Divider/>
      </Example>
      
      <Example code={`
        <Divider>
          OR
        </Divider>
      `}>
        <Divider>
          OR
        </Divider>
      </Example>

      <FeedHeader ref={anchors["icons"]}>
        Icons
      </FeedHeader>

      <Example code={`
        <Icon icon={I.user}/>
      `}>
        <Icon icon={I.user}/>
      </Example>
      
      <FeedHeader ref={anchors["tbd"]}>
        TBD
      </FeedHeader>

      <Example code={`
        <TBD/>
      `}>
        <TBD/>
      </Example>
      
      <FeedHeader ref={anchors["typography"]}>
        Typography
      </FeedHeader>


      
      
      
    </Feed>
  );
}

export default StaticPage;
