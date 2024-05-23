import { JSX, children as useChildren } from "solid-js";
import { Color } from "$/utils/Color";
import { hakinaElement, useParentStyle } from "$/utils/hakinaElement";
import { Dynamic } from "solid-js/web";

import { CompositionProps } from "$/composition/Composition";


const styleText = `
  .button {
    // @include font-body-medium;
    padding: 0px;
    background: none;
    border: none;
    display: inline-block;
  }

  .wide {
    width: 100%;
  }

  .inline {
    width: auto;
  }


  .primary {
    // --button-main: var(--color-brand);
    // --button-hover: var(--color-hover);
    // --button-on-main: var(--text-inverse);
    // --button-transparent: color.change(var(--color-brand), $alpha: 0);

    // &:disabled {
    //   --button-main: var(--color-disabled);
    //   --button-hover: var(--color-disabled);
    //   --button-transparent: color.change(var(--color-disabled), $alpha: 0);
    // }
    // background: var(--button-main);
    // color: var(--button-on-main);
    // border: 0px solid var(--button-main);
  }

  .inner {
    @include animated;

    width: 100%;
    height: 100%;
    padding: 0px 16px;
    text-align: center;
    border-radius: 8px;
    box-sizing: border-box;
  }

  .small {

  }

  .medium {
    height: 32px;
    line-height: 32px;
  }

  .large {
    height: 48px;
    font: var(--hakina-button-large-font);
    line-height: 48px;
  }




  .fill {
    background: linear-gradient(to bottom, var(--hakina-button-primary-background), var(--hakina-button-primary-accent));
    box-shadow: 0px 0px 8px var(--hakina-button-primary-accent) inset;
    color: var(--hakina-button-primary-text);
    border: 0px solid rgba(0,0,0,0);

    .button:hover & {
      background: linear-gradient(to bottom, var(--hakina-button-primary-hover-background), var(--hakina-button-primary-accent));
      box-shadow: 0px 0px 8px var(--hakina-button-primary-hover-background) inset;
      color: var(--hakina-button-primary-hover-text);
    }
  }

  .flat {
    background: var(--hakina-button-primary-background);
    color: var(--hakina-button-primary-text);
    border: 0px solid rgba(0,0,0,0);

    .button:hover & {
      background: var(--hakina-button-primary-hover-background);
      color: var(--hakina-button-primary-hover-text);
    }
  }

  .ghost {
    background: rgba($color: var(--hakina-button-primary-hover-background), $alpha: 0);
    color: var(--hakina-button-primary-background);
    border: 0px solid rgba(0,0,0,0);

    .button:hover & {
      color: var(--hakina-button-primary-hover-background)
    }
  }

  .outline {
    @include animated;
    background: rgba(0, 0, 0, 0);
    color: var(--hakina-button-primary-outline);
    border: 1px solid var(--hakina-button-primary-outline);

    .button:hover & {
      background: rgba(0, 0, 0, 0);
      color: var(--hakina-button-primary-hover-outline);
      border: 1px solid var(--hakina-button-primary-hover-outline);
    }
  }
`;

export enum ButtonLook {
  FILL = "FILL",
  FLAT = "FLAT",
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
  wide?: boolean,
  disabled?: boolean,
}

const defaultProps: Required<Props> = {
  children: null,
  look: ButtonLook.FILL,
  size: ButtonSize.MEDIUM,
  color: Color.PRIMARY,
  inline: false,
  innerStyle: {},
  href: null,
  wide: false,
  disabled: false,
}


// const Button = (allProps: Props & JSX.IntrinsicElements['button']) => {
//   const [props, other] = useProps(allProps, defaultProps);

//   const c = useChildren(() => props.children);
//   return (
//     <Dynamic
//       component={props.href ? "a" : "button"}
//       href={props.href ?? undefined}
//       classList={{
//         [style.button]: true,
//         [style.inline]: props.inline,
//         [style.wide]: props.wide,
//         [style.primary]: true,
//         // [style.secondary]: props.color === Color.SECONDARY,
//         // [style.neutral]: props.color === Color.NEUTRAL,
//         // [style.error]: props.color === Color.ERROR,
//         // [style.warning]: props.color === Color.WARNING,
//         // [style.success]: props.color === Color.SUCCESS,
//         // [style.info]: props.color === Color.INFO,
//       }}
//       {...other}
//     >
//       <div
//         classList={{
//           [style.inner]: true,

//           [style.fill]: props.look === ButtonLook.FILL,
//           [style.flat]: props.look === ButtonLook.FLAT,
//           [style.ghost]: props.look === ButtonLook.GHOST,
//           [style.outline]: props.look === ButtonLook.OUTLINE,

//           [style.small]: props.size === ButtonSize.SMALL,
//           [style.medium]: props.size === ButtonSize.MEDIUM,
//           [style.large]: props.size === ButtonSize.LARGE,
//         }}
//         style={props.innerStyle ?? {}}
//       >
//         {c()}
//       </div>
//     </Dynamic>
//   );
// }

// export default Button;


hakinaElement("el-button", defaultProps, styleText, (props: Props & CompositionProps) => {
  useParentStyle(props, () => ({
    width: props.wide ? "100%" : undefined,
    height: props.tall ? "100%" : undefined,
  }));

  return (
    <Dynamic
      component={props.href ? "a" : "button"}
      href={props.href ?? undefined}
      classList={{
        'button': true,
        'inline': props.inline,
        'wide': props.wide,
        'primary': true,
      }}
    >
      <div
        classList={{
          'inner': true,

          'fill': props.look === ButtonLook.FILL,
          'flat': props.look === ButtonLook.FLAT,
          'ghost': props.look === ButtonLook.GHOST,
          'outline': props.look === ButtonLook.OUTLINE,

          'small': props.size === ButtonSize.SMALL,
          'medium': props.size === ButtonSize.MEDIUM,
          'large': props.size === ButtonSize.LARGE,
        }}
        style={props.innerStyle ?? {}}
      >
        <slot/>
      </div>
    </Dynamic>
  );
});

