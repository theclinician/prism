import { JSX, children as useChildren } from "solid-js";
import style from "./Label.module.scss";
import useProps from "$/utils/useProps";


type Props = {
  children?: JSX.Element,
}

const defaultProps: Required<Props> = {
  children: null,
}

const Label = (allProps: Props & JSX.IntrinsicElements['div']) => {
  const [props, other] = useProps(allProps, defaultProps);
  const c = useChildren(() => props.children);

  return (
    <div
      classList={{
        [style.label]: true,
      }}
      {...other}
    >
      {c()} 
    </div>
  );
}

export default Label;
