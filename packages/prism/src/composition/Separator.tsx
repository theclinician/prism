import { JSX, splitProps } from "solid-js";
import style from "./Separator.module.scss";



export const Separator = (allProps: JSX.IntrinsicElements['div'] & {
}) => {
  const [props, other] = splitProps(allProps, []);

  return (
    <div
      classList={{
        [style.separator]: true,
      }}
      {...other}
    />
  );
}

export default Separator;
