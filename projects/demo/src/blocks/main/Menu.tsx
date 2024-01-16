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

export type Props = {
}

export const Layout = (props: Props) => {
  return (
    <Menu
      style={{"height": "100%"}}
    >

      <MenuGroup title="Layout">
      </MenuGroup>
      
      <MenuGroup title="Composition">
      </MenuGroup>

      <MenuGroup title="Static">
        <MenuItem
          href="/icons"
        >
          Typography
        </MenuItem>
        <MenuItem
          href="/icons"
        >
          Icons
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

      <MenuGroup title="Common elements">
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
