import { JSX, splitProps, mergeProps, children as useChildren } from "solid-js";
import style from "./Menu.module.scss";
import useProps from "$/utils/useProps";



type Props = {
  children?: JSX.Element,
  title?: string | null,
};

const defaultProps: Required<Props> = {
  children: null,
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
      <div
        classList={{
          [style.title]: !!props.title,
          [style.noTitle]: !props.title,
        }}
      >
        {props.title}
      </div>
      <div
        classList={{
          [style.well]: true,
        }}
      >
        {c()}
      </div>
    </div>
  );
}

export default MenuGroup;
