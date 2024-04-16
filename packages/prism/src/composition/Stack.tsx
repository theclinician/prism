import { createEffect, JSX, mergeProps, splitProps, children as useChildren } from "solid-js";
import { customElement, noShadowDOM } from 'solid-element';
import style from "./Stack.module.scss";
import {
  compositionClassList,
  CompositionProps,
  compositionStyleText,
  PaddingSize,
  useCompositionProps,
} from "./Composition";
import { render } from "solid-js/web";
import { prismElement } from "$/utils/prismElement";

export type Props = {
  flip?: boolean,
  children?: JSX.Element,
}

const defaultProps: Required<Props> = {
  flip: false,
  children: null,
}

const styleText = `
  .hstack {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: red;
  }

  .vstack {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;



customElement("v-stack", (allProps: Props & CompositionProps & JSX.IntrinsicElements['div'], {element}: {element: any}) => {
  // noShadowDOM();
  const [composition, props, other] = useCompositionProps(allProps, defaultProps);
  // const c = useChildren(() => props.children);

  return <>
    <style>
      {compositionStyleText}
      {styleText}
    </style>
    <div
      classList={{
        ...compositionClassList(composition),
        vstack: !props.flip,
        hstack: !!props.flip,
      }}
      {...other}
    >
      <slot/>
    </div>
  </>

  // render(() => (
  //   <div
  //     classList={{
  //       ...compositionClassList(composition),
  //       [style.vstack]: !props.flip,
  //       [style.hstack]: !!props.flip,
  //     }}
  //     {...other}
  //   >
  //     {c()}
  //   </div>
  // ), element);
});
// prismElement("v-stack", (allProps: Props & CompositionProps & JSX.IntrinsicElements['div']) => {
//   const [composition, props, other] = useCompositionProps(allProps, defaultProps);
//   const c = useChildren(() => props.children);

//   return (
//     <div
//       classList={{
//         ...compositionClassList(composition),
//         vstack: !props.flip,
//         hstack: !!props.flip,
//       }}
//       {...other}
//     >
//       {c()}
//     </div>
//   );
// });

customElement("h-stack", {tall: false}, (allProps: Props & CompositionProps & JSX.IntrinsicElements['div'], {element}: {element: any}) => {
  // noShadowDOM();
  const [composition, props, other] = useCompositionProps(allProps, defaultProps);
  // const c = useChildren(() => props.children);

  // const cn = element.childNodes;
  
  // console.log("HELEMENT", element);

  // console.log("CHILDRFEN?", allProps);
  createEffect(() => {

    console.log("HSTACK COMP",
      allProps,
      composition,
      compositionClassList(composition)
    );
  })

  return (
    <>
      <style>
        {compositionStyleText}
        {styleText}
      </style>
      <div
        classList={{
          ...compositionClassList(composition),
          hstack: !props.flip,
          vstack: !!props.flip,
        }}
        style={{"background-color": "olive"}}
        {...other}
      >
        <slot/>
      </div>
    </>
  );
  // ), element);
  // render(() => (
  //   <div
  //     classList={{
  //       ...compositionClassList(composition),
  //       [style.hstack]: !props.flip,
  //       [style.vstack]: !!props.flip,
  //     }}
  //     style={{"background-color": "olive"}}
  //     {...other}
  //   >
  //     <slot/>
  //   </div>
  // ), element);
});
// prismElement("h-stack", (allProps: Props & JSX.IntrinsicElements['div']) => {
//   const [composition, props, other] = useCompositionProps(allProps, defaultProps);
//   const c = useChildren(() => props.children);

//   return (
//     <div
//       classList={{
//         ...compositionClassList(composition),
//         hstack: !props.flip,
//         vstack: !!props.flip,
//       }}
//       style={{"background-color": "olive"}}
//       {...other}
//     >
//       {c()}
//     </div>
//   );
// });

customElement('padded-stack', (allProps: Props & CompositionProps & JSX.IntrinsicElements['div'], {element}: {element: any}) => {
  // noShadowDOM();
  const [composition, props, other] = useCompositionProps(allProps, defaultProps);
  const compositionWithPadding = mergeProps({ padding: PaddingSize.MEDIUM }, composition);
  return (
    <>
    <style>
        {compositionStyleText}
        {styleText}
      </style>
    <div
      classList={{
        ...compositionClassList(compositionWithPadding),
        vstack: !props.flip,
        hstack: !!props.flip,
      }}
      {...other}
    >
      <slot/> 
    </div>
    </>
  );
  // render(() => (
  //   <div
  //     classList={{
  //       ...compositionClassList(compositionWithPadding),
  //       [style.vstack]: !props.flip,
  //       [style.hstack]: !!props.flip,
  //     }}
  //     {...other}
  //   >
  //     <slot/> 
  //   </div>
  // ), element);
});
// prismElement('padded-stack', (allProps: Props & JSX.IntrinsicElements['div']) => {
//   const [composition, props, other] = useCompositionProps(allProps, defaultProps);
//   const compositionWithPadding = mergeProps({ padding: PaddingSize.MEDIUM }, composition);
//   return (
//     <div
//       classList={{
//         ...compositionClassList(compositionWithPadding),
//         vstack: !props.flip,
//         hstack: !!props.flip,
//       }}
//       {...other}
//     >
//       <slot/> 
//     </div>
//   );
// });

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements { 
      'h-stack': any;
      'v-stack': any;
      'padded-stack': any;
    }
  }
}


// declare global {
//   namespace JSX {
//     interface IntrinsicElements {
//       "padded-stack": any;
//     }
//   }
// }


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




