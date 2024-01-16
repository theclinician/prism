import { JSX, splitProps, children as useChildren } from "solid-js";
import style from "./Padded.module.scss";

export enum PaddingSize {
  SMALLEST = "SMALLEST",
  SMALLER = "SMALLER",
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
  LARGER = "LARGER",
  LARGEST = "LARGEST",
}

const sizes = {
  [PaddingSize.SMALLEST]: 4,
  [PaddingSize.SMALLER]: 8,
  [PaddingSize.SMALL]: 12,
  [PaddingSize.MEDIUM]: 16,
  [PaddingSize.LARGE]: 24,
  [PaddingSize.LARGER]: 32,
  [PaddingSize.LARGEST]: 40,
}

const paddingFor = (standard: boolean, first: undefined | PaddingSize, second: undefined | PaddingSize): string => {
  if(standard) {
    return `${sizes[PaddingSize.MEDIUM]}px`;
  }
  if(second) {
    return `${sizes[second]}px`;
  }
  if(first) {
    return `${sizes[first]}px`;
  }
  return "0px";
}


export const Padded = (allProps: JSX.IntrinsicElements['div'] & {
  children?: JSX.Element,
  h?: PaddingSize,
  v?: PaddingSize,
  t?: PaddingSize,
  b?: PaddingSize,
  l?: PaddingSize,
  r?: PaddingSize,
}) => {
  const [props, other] = splitProps(allProps, [
    "h",
    "v",
    "t",
    "b",
    "l",
    "r",
    "children",
  ]);

  const c = useChildren(() => props.children);
  const standard = () => (
    props.h === undefined &&
    props.v === undefined &&
    props.t === undefined &&
    props.b === undefined &&
    props.l === undefined &&
    props.r === undefined
  )

  return (
    <div
      classList={{
        [style.padded]: true,
      }}
      style={{
        "padding-left": paddingFor(standard(), props.h, props.l),
        "padding-right": paddingFor(standard(), props.h, props.r),
        "padding-top": paddingFor(standard(), props.v, props.t),
        "padding-bottom": paddingFor(standard(), props.v, props.b),
      }}
      {...other}
    >
      {c()}
    </div>
  );
}

export default Padded;
