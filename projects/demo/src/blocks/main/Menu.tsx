import { JSX, children, children as useChildren } from "solid-js";
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
  Menu,
  MenuItem,
  MenuGroup,
} from "@zedoc/prism";
import { Separator } from "@zedoc/prism";
import { Card } from "@zedoc/prism";

export type Props = {
}

export const Layout = (props: Props) => {
  return (
    <Menu
      style={{"height": "100%"}}
    >
      <img
        src="/dark_prism.png"
        style={{
          width: "100%"
        }}
      />
      <Card>
        Prism
        <div>
          A good looking Solid.
        </div>
      </Card>

      {/* 
      <MenuGroup title="Body">
        <MenuItem
          href="/body"
        >
          •••
        </MenuItem>
      </MenuGroup>
      
      <MenuGroup title="Layout">
        <MenuItem
          href="/layout"
        >
          •••
        </MenuItem>
      </MenuGroup>
      */}
      
      <MenuGroup title="Composition">
        <MenuItem
          href="/Composition"
        >
          •••
        </MenuItem>
      </MenuGroup>

      <MenuGroup
        title="Static"
        href="/static"
      >
        <MenuItem
          href="/divider"
        >
          Divider
        </MenuItem>
        <MenuItem
          href="/icons"
        >
          Icons
        </MenuItem>
        <MenuItem
          href="/spinner"
        >
          Spinner
        </MenuItem>
        <MenuItem
          href="/tbd"
        >
          TBD
        </MenuItem>
        <MenuItem
          href="/typography"
        >
          Typography
        </MenuItem>
      </MenuGroup>

      <MenuGroup title="Action">
        <MenuItem
          href="/buttons"
        >
          Buttons
        </MenuItem>
      </MenuGroup>

      <MenuGroup title="Data control">
        <MenuItem
          href="/inputs"
        >
          Inputs
        </MenuItem>
      </MenuGroup>

      <MenuGroup title="Data display">
      </MenuGroup>

      <MenuGroup
        title="Parts"
        href="/parts"
      >
        <MenuItem
          href="/feed"
        >
          Feed
        </MenuItem>
        <MenuItem
          href="/menu"
        >
          Menu
        </MenuItem>
        <MenuItem
          href="/modal"
        >
          Modal
        </MenuItem>
      </MenuGroup>

      <MenuGroup title="Theme">
        <MenuItem
          href="/fonts"
        >
          Fonts
        </MenuItem>
        <MenuItem
          href="/colors"
        >
          Colors
        </MenuItem>
      </MenuGroup>

      <Separator/>
    </Menu>
  );
}

export default Layout;
