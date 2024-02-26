
import { splitProps, mergeProps } from "solid-js";
import style from "./Composition.module.scss";

export enum PaddingSize {
  SMALLEST = "SMALLEST",
  SMALLER = "SMALLER",
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
  LARGER = "LARGER",
  LARGEST = "LARGEST",
}

export type CompositionProps = {
  tall?: boolean,
  wide?: boolean,
  padding?: PaddingSize | null,
  horizontal?: PaddingSize | null,
  vertical?: PaddingSize | null,
  top?: PaddingSize | null,
  bottom?: PaddingSize | null,
  left?: PaddingSize | null,
  right?: PaddingSize | null,
  gap?: PaddingSize | null,
}

const compositionKeys: (keyof CompositionProps)[] = [
  "tall",
  "wide",
  "padding",
  "horizontal",
  "vertical",
  "top",
  "bottom",
  "left",
  "right",
  "gap",
]

export const useCompositionProps = <Props>(
  allProps: Props & CompositionProps,
  defaultProps: Required<Props>,
) => {
  return splitProps(mergeProps(defaultProps, allProps), compositionKeys, Object.keys(defaultProps) as (keyof Props)[]);
}




export const compositionClassList = (props: CompositionProps) => {
  const paddingLeft = props.left ?? props.horizontal ?? props.padding ?? null;
  const paddingRight = props.right ?? props.horizontal ?? props.padding ?? null;
  const paddingTop = props.top ?? props.vertical ?? props.padding ?? null;
  const paddingBottom = props.bottom ?? props.vertical ?? props.padding ?? null;

  return {
    [style.tall]: props.tall,
    [style.wide]: props.wide,
    [style.gapSmallest]: props.gap === PaddingSize.SMALLEST,
    [style.gapSmaller]: props.gap === PaddingSize.SMALLER,
    [style.gapSmall]: props.gap === PaddingSize.SMALL,
    [style.gapMedium]: props.gap === PaddingSize.MEDIUM,
    [style.gapLarge]: props.gap === PaddingSize.LARGE,
    [style.gapLarger]: props.gap === PaddingSize.LARGER,
    [style.gapLargest]: props.gap === PaddingSize.LARGEST,
    [style.paddingLeftSmallest]: paddingLeft === PaddingSize.SMALLEST,
    [style.paddingLeftSmaller]: paddingLeft === PaddingSize.SMALLER,
    [style.paddingLeftSmall]: paddingLeft === PaddingSize.SMALL,
    [style.paddingLeftMedium]: paddingLeft === PaddingSize.MEDIUM,
    [style.paddingLeftLarge]: paddingLeft === PaddingSize.LARGE,
    [style.paddingLeftLarger]: paddingLeft === PaddingSize.LARGER,
    [style.paddingLeftLargest]: paddingLeft === PaddingSize.LARGEST,
    [style.paddingRightSmallest]: paddingRight === PaddingSize.SMALLEST,
    [style.paddingRightSmaller]: paddingRight === PaddingSize.SMALLER,
    [style.paddingRightSmall]: paddingRight === PaddingSize.SMALL,
    [style.paddingRightMedium]: paddingRight === PaddingSize.MEDIUM,
    [style.paddingRightLarge]: paddingRight === PaddingSize.LARGE,
    [style.paddingRightLarger]: paddingRight === PaddingSize.LARGER,
    [style.paddingRightLargest]: paddingRight === PaddingSize.LARGEST,
    [style.paddingTopSmallest]: paddingTop === PaddingSize.SMALLEST,
    [style.paddingTopSmaller]: paddingTop === PaddingSize.SMALLER,
    [style.paddingTopSmall]: paddingTop === PaddingSize.SMALL,
    [style.paddingTopMedium]: paddingTop === PaddingSize.MEDIUM,
    [style.paddingTopLarge]: paddingTop === PaddingSize.LARGE,
    [style.paddingTopLarger]: paddingTop === PaddingSize.LARGER,
    [style.paddingTopLargest]: paddingTop === PaddingSize.LARGEST,
    [style.paddingBottomSmallest]: paddingBottom === PaddingSize.SMALLEST,
    [style.paddingBottomSmaller]: paddingBottom === PaddingSize.SMALLER,
    [style.paddingBottomSmall]: paddingBottom === PaddingSize.SMALL,
    [style.paddingBottomMedium]: paddingBottom === PaddingSize.MEDIUM,
    [style.paddingBottomLarge]: paddingBottom === PaddingSize.LARGE,
    [style.paddingBottomLarger]: paddingBottom === PaddingSize.LARGER,
    [style.paddingBottomLargest]: paddingBottom === PaddingSize.LARGEST,
  };
}

