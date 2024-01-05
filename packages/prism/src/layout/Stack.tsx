import { JSX, splitProps, children as useChildren } from "solid-js";
import style from "./Stack.module.scss";

export const HStack = (allProps: JSX.IntrinsicElements['div'] & {
  children: JSX.Element,
  flip?: boolean,
}) => {
  const [props, other] = splitProps(allProps, [
    "children",
    "flip"
  ]);

  const c = useChildren(() => props.children);
  return (
    <div
      classList={{
        [style.hstack]: !props.flip,
        [style.vstack]: !!props.flip,
      }}
      {...other}
    >
      {c()}
    </div>
  );
}

export const VStack = (allProps: JSX.IntrinsicElements['div'] & {
  children?: JSX.Element,
  flip?: boolean,
  stretch?: boolean,
}) => {
  const [props, other] = splitProps(allProps, [
    "children",
    "flip",
    "stretch",
  ]);

  const c = useChildren(() => props.children);
  return (
    <div
      classList={{
        [style.vstack]: !props.flip,
        [style.hstack]: !!props.flip,
        [style.vstretch]: !!props.stretch,
      }}
      {...other}
    >
      {c()}
    </div>
  );
}

export const MStack = (allProps: JSX.IntrinsicElements['div'] & {
  children?: JSX.Element,
}) => {
  const [props, other] = splitProps(allProps, [
    "children",
  ]);

  const c = useChildren(() => props.children);
  return (
    <div
      classList={{
        [style.mstack]: true,
      }}
      {...other}
    >
      {c()}
    </div>
  );
}

export const ZStack = (allProps: JSX.IntrinsicElements['div'] & {
  children?: JSX.Element,
}) => {
  const [props, other] = splitProps(allProps, [
    "children",
  ]);

  const c = useChildren(() => props.children);
  return (
    <div
      classList={{
        [style.zstack]: true,
      }}
      {...other}
    >
      {c()}
    </div>
  );
}

