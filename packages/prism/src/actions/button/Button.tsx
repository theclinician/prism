import { JSX, children as useChildren } from "solid-js";
import { Color } from "$/utils/Color";
import style from "./Button.module.scss";
import useProps from "../../utils/useProps";
import { Dynamic } from "solid-js/web";


export enum ButtonLook {
  FILL = "FILL",
  GHOST = "GHOST",
  OUTLINE = "OUTLINE",
}

export enum ButtonSize {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
}

type Props = {
  children?: JSX.Element,
  look?: ButtonLook,
  size?: ButtonSize,
  color?: Color,
  inline?: boolean,
  innerStyle?: JSX.CSSProperties,
  href?: undefined | null | string,
}

const defaultProps: Required<Props> = {
  children: null,
  look: ButtonLook.FILL,
  size: ButtonSize.MEDIUM,
  color: Color.PRIMARY,
  inline: false,
  innerStyle: {},
  href: null,
}


const Button = (allProps: Props & JSX.IntrinsicElements['button']) => {
  const [props, other] = useProps(allProps, defaultProps);

  const c = useChildren(() => props.children);
  return (
    <Dynamic
      component={props.href ? "a" : "button"}
      href={props.href ?? undefined}
      classList={{
        [style.button]: true,
        [style.inline]: props.inline,
        [style.primary]: props.color === Color.PRIMARY,
        [style.secondary]: props.color === Color.SECONDARY,
        [style.neutral]: props.color === Color.NEUTRAL,
        [style.error]: props.color === Color.ERROR,
        [style.warning]: props.color === Color.WARNING,
        [style.success]: props.color === Color.SUCCESS,
        [style.info]: props.color === Color.INFO,
      }}
      {...other}
    >
      <div
        classList={{
          [style.inner]: true,

          [style.fill]: props.look === ButtonLook.FILL,
          [style.ghost]: props.look === ButtonLook.GHOST,
          [style.outline]: props.look === ButtonLook.OUTLINE,

          [style.small]: props.size === ButtonSize.SMALL,
          [style.medium]: props.size === ButtonSize.MEDIUM,
          [style.large]: props.size === ButtonSize.LARGE,
        }}
        style={props.innerStyle ?? {}}
      >
        {c()}
      </div>
    </Dynamic>
  );
}

export default Button;
