import { JSX } from "solid-js";
import { customElement, noShadowDOM } from "solid-element";
import { render } from "solid-js/web";




export const prismElement = <Props extends object>(
  name: string,
  component: (props: Props) => JSX.Element,
) => {
  customElement(name, (props: Props, { element } : { element: any }) => {
    noShadowDOM()
    render(() => component(props), element);
  })
}

// customElement("h-stack", (allProps: Props & JSX.IntrinsicElements['div'], {element}: any) => {
  
  
//   const [composition, props, other] = useCompositionProps(allProps, defaultProps);
//   const c = useChildren(() => props.children);
  
//   render(() => (
//     <>
//       <style>{style}</style>
//       <div
//         classList={{
//           ...compositionClassList(composition),
//           hstack: !props.flip,
//           vstack: !!props.flip,
//         }}
//         style={{"background-color": "olive"}}
//         {...other}
//       >
//         <slot/>
//       </div>
//     </>
//   ), element);
// });