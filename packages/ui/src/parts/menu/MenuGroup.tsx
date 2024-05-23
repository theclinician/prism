import { JSX, splitProps, mergeProps, children as useChildren } from "solid-js";
import { Dynamic } from "solid-js/web";
import style from "./Menu.module.scss";
import useProps from "$/utils/useProps";



type Props = {
  children?: JSX.Element,
  href?: string | null,
  title?: string | null,
};

const defaultProps: Required<Props> = {
  children: null,
  href: null,
  title: null,
};


const MenuGroup = (allProps: Props & JSX.IntrinsicElements['div']) => {
  const [props, other] = useProps(allProps, defaultProps);
  const c = useChildren(() => props.children);

  return (
    <div
      classList={{
        [style.group]: true,
      }}
      {...other}
    >
      <Dynamic
        component={props.href ? "a" : "div"}
        href={props.href ?? undefined}
        classList={{
          [style.title]: !!props.title,
          [style.noTitle]: !props.title,
        }}
      >
        {props.title}
      </Dynamic>
      <div
        classList={{
          [style.groupCapsule]: true,
        }}
      >
        {c()}
      </div>
    </div>
  );
}

export default MenuGroup;
