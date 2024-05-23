import { JSX, children, children as useChildren } from "solid-js";
import {
  ButtonLook,
  Color,
  Heading3,
  Tabs,
  Card,
  PaddingSize,
  TBD,
  Menu,
  MenuItem,
  MenuGroup,
} from "@hakina/ui";


export type Props = {
}

export const AppMenu = (props: Props) => {
  return (
    <Menu
      style={{"height": "100%"}}
    >
      <el-h-stack>
      <img
        src="/prism.png"
        style={{
          width: "50%"
        }}
      />
      </el-h-stack>
      <Card>
        Prism
        <div>
          A good looking Solid.
        </div>
      </Card>

      <MenuGroup
        title="Usage"
        href="/body"
      >
      </MenuGroup>
      

      {/* 

      <MenuGroup title="Layout">
        <MenuItem
          href="/layout"
        >
          •••
        </MenuItem>
      </MenuGroup>
      */}
      
      <MenuGroup
        title="Composition"
        href="/composition"
      >
        <MenuItem href="/composition#stack">Stack</MenuItem>
        <MenuItem href="/composition#separator">Separator</MenuItem>
        <MenuItem href="/composition#padded">Padded</MenuItem>
        <MenuItem href="/composition#centered">Centered</MenuItem>
        <MenuItem href="/composition#props">Composition props</MenuItem>
      </MenuGroup>

      <MenuGroup
        title="Static"
        href="/static"
      >
        <MenuItem href="/static#label">Label</MenuItem>
        <MenuItem href="/static#spinner">Spinner</MenuItem>
        <MenuItem href="/static#divider">Divider</MenuItem>
        <MenuItem href="/static#icons">Icons</MenuItem>
        <MenuItem href="/static#tbd">TBD</MenuItem>
        <MenuItem href="/static#typography">Typography</MenuItem>
      </MenuGroup>

      <MenuGroup
        title="Action"
        href="/action"
      >
        <MenuItem href="/action#button">Button</MenuItem>
        <MenuItem href="/action#dropdown">Dropdown</MenuItem>
        <MenuItem href="/action#tabs">Tabs</MenuItem>
      </MenuGroup>

      <MenuGroup
        title="Data controls"
        href="/control"
      >
        <MenuItem href="/control#input">Input</MenuItem>
        <MenuItem href="/control#code">Code input</MenuItem>
        <MenuItem href="/action#toggle">Toggle</MenuItem>
        <MenuItem href="/control#choice">Choice</MenuItem>
        <MenuItem href="/control#select">Select</MenuItem>
      </MenuGroup>

      <MenuGroup
        title="Data display"
        href="/display"
      >
        <MenuItem href="/display#value">Value</MenuItem>
        <MenuItem href="/display#tag">Tag</MenuItem>
      </MenuGroup>

      <MenuGroup
        title="Part"
        href="/part"
      >
        <MenuItem href="/part#feed">Feed</MenuItem>
        <MenuItem href="/part#menu">Menu</MenuItem>
        <MenuItem href="/part#modal">Modal</MenuItem>
        <MenuItem href="/part#demo">Demo</MenuItem>
      </MenuGroup>

      <MenuGroup
        title="Theme"
        href="/theme"
      >
        <MenuItem href="/theme#colors">Colors</MenuItem>
        <MenuItem href="/theme#fonts">Fonts</MenuItem>
      </MenuGroup>

      <el-stack-separator/>
      <el-padded-stack padding={PaddingSize.LARGEST}/>
    </Menu>
  );
}

export default AppMenu;
