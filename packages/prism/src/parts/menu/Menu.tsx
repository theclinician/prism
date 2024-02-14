import { JSX, splitProps, children as useChildren } from "solid-js";
import useProps from "../../utils/useProps";
import style from "./Menu.module.scss";
import MenuItem from "./MenuItem";



export enum MenuLook {
  GHOST = "GHOST",
  CAPSULE = "CAPSULE",
}

export type MenuProps = {
  children?: JSX.Element,
  look?: MenuLook,
}

const defaultProps: Required<MenuProps> = {
  children: null,
  look: MenuLook.GHOST,
}


const Menu = (allProps: {
  look?: MenuLook,
  children?: JSX.Element,
}) => {
  const [props, other] = useProps(allProps, defaultProps);

  const c = useChildren(() => props.children);

  return (
    <div
      classList={{
        [style.menu]: true,
        [style.ghost]: props.look === MenuLook.GHOST,
        [style.capsule]: props.look === MenuLook.CAPSULE,
      }}
      {...other}
    >
      {c()}
    </div>
  );
}

export default Menu;
