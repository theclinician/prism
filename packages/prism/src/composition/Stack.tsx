import { JSX, mergeProps, splitProps, children as useChildren } from "solid-js";
import style from "./Stack.module.scss";
import useProps from "$/utils/useProps";
import { CompositionProps, PaddingSize, compositionClassList, useCompositionProps } from "./Composition";

export type Props = {
  children: JSX.Element,
  flip?: boolean,
}

const defaultProps: Required<Props> = {
  children: null,
  flip: false,
}


export const HStack = (allProps: Props & CompositionProps & JSX.IntrinsicElements['div']) => {
  const [composition, props, other] = useCompositionProps(allProps, defaultProps);

  const c = useChildren(() => props.children);
  return (
    <div
      classList={{
        ...compositionClassList(composition),
        [style.hstack]: !props.flip,
        [style.vstack]: !!props.flip,
      }}
      {...other}
    >
      {c()}
    </div>
  );
}

export const VStack = (allProps: Props & JSX.IntrinsicElements['div']) => {
  const [composition, props, other] = useCompositionProps(allProps, defaultProps);
  
  const c = useChildren(() => props.children);
  return (
    <div
      classList={{
        ...compositionClassList(composition),
        [style.vstack]: !props.flip,
        [style.hstack]: !!props.flip,
      }}
      {...other}
    >
      {c()}
    </div>
  );
}


export const Padded = (allProps: Props & JSX.IntrinsicElements['div']) => {
  const [composition, props, other] = useCompositionProps(allProps, defaultProps);
  const compositionWithPadding = mergeProps({ padding: PaddingSize.MEDIUM }, composition);
  
  const c = useChildren(() => props.children);
  return (
    <div
      classList={{
        ...compositionClassList(compositionWithPadding),
        [style.vstack]: !props.flip,
        [style.hstack]: !!props.flip,
      }}
      {...other}
    >
      {c()}
    </div>
  );
}


// export const MStack = (allProps: Props & JSX.IntrinsicElements['div']) => {
//   const [props, other] = useProps(allProps, defaultProps);

//   const c = useChildren(() => props.children);
//   return (
//     <div
//       classList={{
//         [style.mstack]: true,
//         [style.tall]: props.tall,
//         [style.wide]: props.wide,
//       }}
//       {...other}
//     >
//       {c()}
//     </div>
//   );
// }


// export const ZStack = (allProps: Props & JSX.IntrinsicElements['div']) => {
//   const [props, other] = useProps(allProps, defaultProps);

//   const c = useChildren(() => props.children);
//   return (
//     <div
//       classList={{
//         [style.zstack]: true,
//         [style.tall]: props.tall,
//         [style.wide]: props.wide,
//       }}
//       {...other}
//     >
//       {c()}
//     </div>
//   );
// }




