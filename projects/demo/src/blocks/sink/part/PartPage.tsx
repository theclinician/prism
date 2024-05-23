
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
} from "@hakina/ui";
import { Example } from "$/blocks/example";
import { useAnchors } from "$/blocks/anchors";


export const PartPage = () => {
  const [anchors] = useAnchors();
  
  return (
    <Feed>
      
      <FeedHeader ref={anchors["feed"]}>
        Feed
      </FeedHeader>

      <Example
        code={`
          <Feed
            look={FeedLook.CARDS}
          >
            <FeedHeader>
              Posts
            </FeedHeader>
            <FeedCard>
              A
            </FeedCard>
            <FeedCard>
              B
            </FeedCard>
            <FeedCard>
              C
            </FeedCard>
          </Feed>
        `}
      >
        <Feed>
          <FeedHeader> Posts </FeedHeader>
          <FeedCard> A </FeedCard>
          <FeedCard> B </FeedCard>
          <FeedCard> C </FeedCard>
        </Feed>
      </Example>
    

      <FeedHeader ref={anchors["menu"]}>
        Menu
      </FeedHeader>

      <Example
        code={`<Menu look={MenuLook.CAPSULE}/>`}
      >
        <Menu look={MenuLook.CAPSULE}>
          <MenuGroup title="Yellow">
            <MenuItem>Canary</MenuItem>
            <MenuItem>Gamboge</MenuItem>
            <MenuItem>Ochre</MenuItem>
            <MenuItem>Primary</MenuItem>
          </MenuGroup>
          <MenuGroup title="Red">
            <MenuItem>Carmine</MenuItem>
            <MenuItem>Crimson</MenuItem>
            <MenuItem>Maroon</MenuItem>
            <MenuItem>Scarlet</MenuItem>
          </MenuGroup>
          <MenuGroup title="Blue">
            <MenuItem>Cerulean</MenuItem>
            <MenuItem>Cobalt</MenuItem>
            <MenuItem>Indanthrene</MenuItem>
            <MenuItem>Indigo</MenuItem>
            <MenuItem>Prussian</MenuItem>
          </MenuGroup>
        </Menu>
      </Example>
      
      <Example
        code={`<Menu look={MenuLook.GHOST}/>`}
      >
        <Menu look={MenuLook.GHOST}>
          <MenuGroup title="Yellow">
            <MenuItem
              href="/#canary"
            >
              Canary
            </MenuItem>
            <MenuItem>Gamboge</MenuItem>
            <MenuItem>Ochre</MenuItem>
            <MenuItem>Primary</MenuItem>
          </MenuGroup>
          <MenuGroup title="Red">
            <MenuItem>Carmine</MenuItem>
            <MenuItem>Crimson</MenuItem>
            <MenuItem>Maroon</MenuItem>
            <MenuItem>Scarlet</MenuItem>
          </MenuGroup>
          <MenuGroup title="Blue">
            <MenuItem>Cerulean</MenuItem>
            <MenuItem>Cobalt</MenuItem>
            <MenuItem>Indanthrene</MenuItem>
            <MenuItem>Indigo</MenuItem>
            <MenuItem>Prussian</MenuItem>
          </MenuGroup>
        </Menu>
      </Example>
      
      <FeedHeader ref={anchors["modal"]}>
        Modal
      </FeedHeader>

      <FeedHeader ref={anchors["demo"]}>
        Demo
      </FeedHeader>

      <Example
        code={`
          <el-padded-stack>
            <Demo code={"A B <div>c</div> D"}>
              A B <div>c</div> D
            </Demo>
          </el-padded-stack>
        `}
      >
        <el-padded-stack>
          <Demo code={"A B <div>c</div> D"}>
            A B <div>c</div> D
          </Demo>
        </el-padded-stack>
      </Example>

    </Feed>
  );
}

export default PartPage;
