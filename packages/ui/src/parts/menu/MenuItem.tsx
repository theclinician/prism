import { JSX, children as useChildren } from "solid-js";
import { Dynamic } from "solid-js/web";
import style from "./Menu.module.scss";
import useProps from "$/utils/useProps";


type Props = {
  children?: JSX.Element,
  title?: string | null,
  onClick?: null | (() => void), 
  action?: null | (() => void),
  href?: undefined | null | string,
};

const defaultProps: Required<Props> = {
  children: null,
  title: null,
  onClick: null,
  action: null,
  href: null,
};


const MenuItem = (allProps: Props & JSX.IntrinsicElements['div']) => {
  const [props, other] = useProps(allProps, defaultProps);
  const c = useChildren(() => props.children);

  const handleClick = () => {
    props.onClick?.();
    props.action?.();
  }

  return (
    <Dynamic
      component={props.href ? "a" : "button"}
      href={props.href ?? undefined}
      classList={{
        [style.item]: true,
      }}
      onClick={handleClick}
      {...other}
    >
      {c()}
    </Dynamic>
  );
}

export default MenuItem;
