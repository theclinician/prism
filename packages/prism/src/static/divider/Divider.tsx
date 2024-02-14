import { JSX, children as useChildren } from "solid-js";
import style from "./Divider.module.scss";
import useProps from "$/utils/useProps";


type Props = {
  children?: JSX.Element,
}

const defaultProps: Required<Props> = {
  children: null,
}

const Divider = (allProps: Props & JSX.IntrinsicElements['div']) => {
  const [props, other] = useProps(allProps, defaultProps);
  const c = useChildren(() => props.children);

  return (
    <div
      classList={{
        [style.divider]: true,
      }}
      {...other}
    >
      <div class={style.line}/>
      {c()}
      <div class={style.line}/>
    </div>
  );
}

export default Divider;
