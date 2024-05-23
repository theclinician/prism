import { ComponentProps, createEffect, JSX, mergeProps, onMount } from "solid-js";
import { customElement } from "solid-element";
import { CompositionProps, compositionStyleText, defaultCompositionProps } from "../composition/Composition";


// type Options = {
//   wide?: boolean,
// };
type Component<Props> = (props: Props & CompositionProps) => JSX.Element;


export const hakinaElement = <Props extends object>(
  name: string,
  defaultProps: Required<Props> & CompositionProps,
  styleText: string | undefined,
  // options: Options | Component<Props>,
  component: Component<Props>,
) => {
  // if(!component) {
  //   component = options as Component<Props>;
  //   options = {};
  // }
  // const opt = options as Options;
  
  customElement(
    name,
    {...defaultCompositionProps, ...defaultProps},
    (props: Props & CompositionProps, {element}) => {
      // createEffect(() => {
      //   // if(element) {
      //   element.style.width = (opt.wide || props.wide) ? "100%" : "auto";
      //   // } else {
      //     // console.log("NO PARENT", props);
      //   // }
      // })

      return (
        <>
          <style>
            {compositionStyleText}
            {styleText}
          </style>
          {component(mergeProps(props, {parent: element}) as Props & CompositionProps)}
        </>
      );
  })
}


const layoutProperties = [
  "width",
  "min-width",
  "max-width",
  "height",
  "min-height",
  "max-height",
  "flex",
  "flex-grow",
  "flex-shrink",
  "position",
  "left",
  "right",
  "top",
  "bottom",
  "z-index",
];

const pick = (object: Record<string, any>, keys: string[]) => (
  keys.reduce((obj: Record<string, any>, key: string) => {
    if (object && object.hasOwnProperty(key)) {
      obj[key] = object[key];
    }
    return obj;
   }, {})
)

export const useParentStyle = (props: CompositionProps, style: () => JSX.CSSProperties) => {
  createEffect(() => {
    props.parent.removeAttribute("style");
    [style(), pick(props.styles ?? {}, layoutProperties)].forEach(s => {
      Object.entries(s).forEach(([k, v]: [string, any]) => {
        props.parent.style.setProperty(k, v);
      })
    })
  })
}

// export const useParentComposition = (props: CompositionProps) => {
//   createEffect(() => {
//     props.parent.style.width = props.wide ? "100%" : "auto";
//   })
// }
