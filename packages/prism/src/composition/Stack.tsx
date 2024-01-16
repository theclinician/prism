import { JSX, splitProps, children as useChildren } from "solid-js";
import style from "./Stack.module.scss";
import useProps from "$/utils/useProps";

export type Props = {
  children: JSX.Element,
  flip?: boolean,
  tall?: boolean,
  wide?: boolean,
}

const defaultProps: Required<Props> = {
  children: null,
  flip: false,
  tall: false,
  wide: false,
}


export const HStack = (allProps: Props & JSX.IntrinsicElements['div']) => {
  const [props, other] = useProps(allProps, defaultProps);

  const c = useChildren(() => props.children);
  return (
    <div
      classList={{
        [style.hstack]: !props.flip,
        [style.vstack]: !!props.flip,
        [style.tall]: props.tall,
        [style.wide]: props.wide,
      }}
      {...other}
    >
      {c()}
    </div>
  );
}


export const VStack = (allProps: Props & JSX.IntrinsicElements['div']) => {
  const [props, other] = useProps(allProps, defaultProps);

  const c = useChildren(() => props.children);
  return (
    <div
      classList={{
        [style.vstack]: !props.flip,
        [style.hstack]: !!props.flip,
        [style.tall]: props.tall,
        [style.wide]: props.wide,
      }}
      {...other}
    >
      {c()}
    </div>
  );
}


export const MStack = (allProps: Props & JSX.IntrinsicElements['div']) => {
  const [props, other] = useProps(allProps, defaultProps);

  const c = useChildren(() => props.children);
  return (
    <div
      classList={{
        [style.mstack]: true,
        [style.tall]: props.tall,
        [style.wide]: props.wide,
      }}
      {...other}
    >
      {c()}
    </div>
  );
}


export const ZStack = (allProps: Props & JSX.IntrinsicElements['div']) => {
  const [props, other] = useProps(allProps, defaultProps);

  const c = useChildren(() => props.children);
  return (
    <div
      classList={{
        [style.zstack]: true,
        [style.tall]: props.tall,
        [style.wide]: props.wide,
      }}
      {...other}
    >
      {c()}
    </div>
  );
}
