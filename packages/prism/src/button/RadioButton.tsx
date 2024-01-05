import { JSX, splitProps, children as useChildren } from "solid-js";
import style from "./RadioButton.module.scss";

const RadioButton = (allProps: {
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

export default RadioButton;
