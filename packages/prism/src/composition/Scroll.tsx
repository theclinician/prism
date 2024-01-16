import { JSX, splitProps, children as useChildren } from "solid-js";
import style from "./Scroll.module.scss";

export const Scroll = (allProps: JSX.IntrinsicElements['div'] & {
  children?: JSX.Element,
}) => {
  const [props, other] = splitProps(allProps, [
    "children",
  ]);

  const c = useChildren(() => props.children);
  return (
    <div
      classList={{
        [style.scroll]: true,
      }}
      {...other}
    >
      {c()}
    </div>
  );
}

export default Scroll;