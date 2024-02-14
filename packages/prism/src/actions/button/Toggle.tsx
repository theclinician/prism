import { JSX, splitProps, children as useChildren } from "solid-js";
import style from "./Button.module.scss";

const Toggle = (allProps: {
  children: JSX.Element,
}) => {
  const [props, other] = splitProps(allProps, [
    "children",
  ]);

  const c = useChildren(() => props.children);
  return (
    <button
      classList={{
        [style.button]: true,
      }}
      {...other}
    >
      {c()}
    </button>
  );
}

export default Toggle;
