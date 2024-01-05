import { JSX, children as useChildren } from "solid-js";
import style from "./Well.module.scss";
import useProps from "$/utils/useProps";


type Props = {
  children?: JSX.Element,
}

const defaultProps: Required<Props> = {
  children: null,
}

const Well = (allProps: Props & JSX.IntrinsicElements['div']) => {
  const [props, other] = useProps(allProps, defaultProps);
  const c = useChildren(() => props.children);

  return (
    <div
      classList={{
        [style.well]: true,
      }}
      {...other}
    >
      {c()}
    </div>
  );
}

export default Well;
