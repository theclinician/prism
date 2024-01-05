import { JSX, splitProps, children as useChildren } from "solid-js";
import style from "./Float.module.scss";
import useProps from "../utils/useProps";


type Props = {
  children?: JSX.Element,
}

const defaultProps: Required<Props> = {
  children: null,
}

export const RightFloat = (allProps: Props & JSX.IntrinsicElements['div']) => {
  const [props, other] = useProps(allProps, defaultProps);
  const c = useChildren(() => props.children);

  return (
    <div
      classList={{
        [style.float]: true,
        [style.right]: true,
      }}
      {...other}
    >
      {c()}
    </div>
  );
}

export default RightFloat;
