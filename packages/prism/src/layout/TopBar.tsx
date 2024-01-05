import { JSX, children as useChildren } from "solid-js";
import style from "./TopBar.module.scss";
import useProps from "$/utils/useProps";


type Props = {
  children?: JSX.Element,
}

const defaultProps: Required<Props> = {
  children: null,
}

const TopBar = (allProps: Props & JSX.IntrinsicElements['div']) => {
  const [props, other] = useProps(allProps, defaultProps);
  const c = useChildren(() => props.children);

  return (
    <div
      classList={{
        [style.topBar]: true,
      }}
      {...other}
    >
      {c()}
    </div>
  );
}

export default TopBar;
