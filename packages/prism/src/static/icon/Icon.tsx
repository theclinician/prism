import { Component, JSX, createEffect, createSignal } from "solid-js";
import { Dynamic } from "solid-js/web";
import style from "./Icon.module.scss";
import useProps from "$/utils/useProps";
import { lazy } from "solid-js";



export enum I {
  "eye-open" = "eye-open",
  "eye-closed" = "eye-closed",
  "lock" = "lock",
  "unlock" = "unlock",
  "user" = "user",
}

const components = {
  [I["eye-open"]] : lazy(() => import("./icons/eye-open")),
  [I["eye-closed"]] : lazy(() => import("./icons/eye-closed")),
  [I["lock"]] : lazy(() => import("./icons/eye-closed")),
  [I["unlock"]] : lazy(() => import("./icons/eye-closed")),
  [I["user"]] : lazy(() => import("./icons/eye-closed")),
}

export enum IconSize {
  TINY = "TINY",
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
}

type Props = {
  icon?: I,
  custom?: null | Component,
  size?: IconSize,
}

const defaultProps: Required<Props> = {
  icon: I["eye-open"],
  custom: null,
  size: IconSize.MEDIUM,
}

export const Icon = (allProps: Props & JSX.IntrinsicElements['div']) => {
  const [props, other] = useProps(allProps, defaultProps);

  return (
    <span
      classList={{
        [style.icon]: true,
        [style.tiny]: props.size === IconSize.TINY,
        [style.small]: props.size === IconSize.SMALL,
        [style.medium]: props.size === IconSize.MEDIUM,
      }}
      {...other}
    >
      <svg viewBox="0 0 480 480">
        <Dynamic component={props.custom ?? components[props.icon]} />
      </svg>
    </span>
  );
}

export default Icon;
