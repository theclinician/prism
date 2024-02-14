
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
  Feed,
  FeedCard,
  FeedHeader,
  Menu,
  Demo,
  MenuGroup,
  MenuItem,
  MenuLook,
} from "@zedoc/prism";
import { Example } from "$/blocks/example";


export const Template = () => {
  
  return (
    <Feed>
      
      <FeedHeader>
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


      <FeedHeader>
        Menu
      </FeedHeader>

      
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
      
      <Example
        code={`
          <Padded>
            <Demo code={"A B <div>c</div> D"}>
              A B <div>c</div> D
            </Demo>
          </Padded>
        `}
      >
        <Padded>
          <Demo code={"A B <div>c</div> D"}>
            A B <div>c</div> D
          </Demo>
        </Padded>
      </Example>

    </Feed>
  );
}

export default Template;
