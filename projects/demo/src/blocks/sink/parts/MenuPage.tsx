import {
  Scroll, Menu,
} from "@zedoc/prism";
import { Code, Demo, Example } from "$/blocks/example";
import { MenuGroup } from "@zedoc/prism";
import { MenuItem } from "@zedoc/prism";



export const MenuExample = () => {
  
  return (
    <Scroll>
      <Example title="Menu">
        <Code>{`<Menu>`}</Code>
        <Demo>
          <Menu>
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
        </Demo>
      </Example>
    </Scroll>
  );
}

export default MenuExample;
