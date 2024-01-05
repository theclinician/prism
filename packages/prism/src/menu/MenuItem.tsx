import { JSX, children as useChildren } from "solid-js";
import style from "./Menu.module.scss";
import useProps from "$/utils/useProps";


type Props = {
  children?: JSX.Element,
  title?: string | null,
  onClick?: null | (() => void), 
  action?: null | (() => void),
};

const defaultProps: Required<Props> = {
  children: null,
  title: null,
  onClick: null,
  action: null,
};


const MenuItem = (allProps: Props & JSX.IntrinsicElements['div']) => {
  const [props, other] = useProps(allProps, defaultProps);
  const c = useChildren(() => props.children);

  const handleClick = () => {
    props.onClick?.();
    props.action?.();
  }

  return (
    <div
      classList={{
        [style.item]: true,
      }}
      onClick={handleClick}
      {...other}
    >
      {c()}
    </div>
  );
}

export default MenuItem;
