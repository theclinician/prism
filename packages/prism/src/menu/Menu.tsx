import { JSX, splitProps, children as useChildren } from "solid-js";
import style from "./Menu.module.scss";

const Menu = (allProps: {
  children?: JSX.Element,
}) => {
  const [props, other] = splitProps(allProps, [
    "children",
  ]);
  const c = useChildren(() => props.children);

  return (
    <div
      classList={{
        [style.menu]: true,
      }}
      {...other}
    >
      {c()}
    </div>
  );
}

export default Menu;
