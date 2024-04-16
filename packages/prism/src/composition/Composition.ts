
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

export const compositionStyleText = `
  .tall { height: 100%; }
  .wide { width: 100%; }
  .gapSmallest { gap: var(--prism-padding-smallest); }
  .gapSmaller { gap: var(--prism-padding-smaller); }
  .gapSmall { gap: var(--prism-padding-small); }
  .gapMedium { gap: var(--prism-padding-medium); }
  .gapLarge { gap: var(--prism-padding-large); }
  .gapLarger { gap: var(--prism-padding-larger); }
  .gapLargest { gap: var(--prism-padding-largest); }
  .paddingLeftSmallest { padding-left: var(--prism-padding-smallest); }
  .paddingLeftSmaller { padding-left: var(--prism-padding-smaller); }
  .paddingLeftSmall { padding-left: var(--prism-padding-small); }
  .paddingLeftMedium { padding-left: var(--prism-padding-medium); }
  .paddingLeftLarge { padding-left: var(--prism-padding-large); }
  .paddingLeftLarger { padding-left: var(--prism-padding-larger); }
  .paddingLeftLargest { padding-left: var(--prism-padding-largest); }
  .paddingRightSmallest { padding-right: var(--prism-padding-smallest); }
  .paddingRightSmaller { padding-right: var(--prism-padding-smaller); }
  .paddingRightSmall { padding-right: var(--prism-padding-small); }
  .paddingRightMedium { padding-right: var(--prism-padding-medium); }
  .paddingRightLarge { padding-right: var(--prism-padding-large); }
  .paddingRightLarger { padding-right: var(--prism-padding-larger); }
  .paddingRightLargest { padding-right: var(--prism-padding-largest); }
  .paddingTopSmallest { padding-top: var(--prism-padding-smallest); }
  .paddingTopSmaller { padding-top: var(--prism-padding-smaller); }
  .paddingTopSmall { padding-top: var(--prism-padding-small); }
  .paddingTopMedium { padding-top: var(--prism-padding-medium); }
  .paddingTopLarge { padding-top: var(--prism-padding-large); }
  .paddingTopLarger { padding-top: var(--prism-padding-larger); }
  .paddingTopLargest { padding-top: var(--prism-padding-largest); }
  .paddingBottomSmallest { padding-bottom: var(--prism-padding-smallest); }
  .paddingBottomSmaller { padding-bottom: var(--prism-padding-smaller); }
  .paddingBottomSmall { padding-bottom: var(--prism-padding-small); }
  .paddingBottomMedium { padding-bottom: var(--prism-padding-medium); }
  .paddingBottomLarge { padding-bottom: var(--prism-padding-large); }
  .paddingBottomLarger { padding-bottom: var(--prism-padding-larger); }
  .paddingBottomLargest { padding-bottom: var(--prism-padding-largest); }
`;


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
    tall: props.tall,
    wide: props.wide,
    gapSmallest: props.gap === PaddingSize.SMALLEST,
    gapSmaller: props.gap === PaddingSize.SMALLER,
    gapSmall: props.gap === PaddingSize.SMALL,
    gapMedium: props.gap === PaddingSize.MEDIUM,
    gapLarge: props.gap === PaddingSize.LARGE,
    gapLarger: props.gap === PaddingSize.LARGER,
    gapLargest: props.gap === PaddingSize.LARGEST,
    paddingLeftSmallest: paddingLeft === PaddingSize.SMALLEST,
    paddingLeftSmaller: paddingLeft === PaddingSize.SMALLER,
    paddingLeftSmall: paddingLeft === PaddingSize.SMALL,
    paddingLeftMedium: paddingLeft === PaddingSize.MEDIUM,
    paddingLeftLarge: paddingLeft === PaddingSize.LARGE,
    paddingLeftLarger: paddingLeft === PaddingSize.LARGER,
    paddingLeftLargest: paddingLeft === PaddingSize.LARGEST,
    paddingRightSmallest: paddingRight === PaddingSize.SMALLEST,
    paddingRightSmaller: paddingRight === PaddingSize.SMALLER,
    paddingRightSmall: paddingRight === PaddingSize.SMALL,
    paddingRightMedium: paddingRight === PaddingSize.MEDIUM,
    paddingRightLarge: paddingRight === PaddingSize.LARGE,
    paddingRightLarger: paddingRight === PaddingSize.LARGER,
    paddingRightLargest: paddingRight === PaddingSize.LARGEST,
    paddingTopSmallest: paddingTop === PaddingSize.SMALLEST,
    paddingTopSmaller: paddingTop === PaddingSize.SMALLER,
    paddingTopSmall: paddingTop === PaddingSize.SMALL,
    paddingTopMedium: paddingTop === PaddingSize.MEDIUM,
    paddingTopLarge: paddingTop === PaddingSize.LARGE,
    paddingTopLarger: paddingTop === PaddingSize.LARGER,
    paddingTopLargest: paddingTop === PaddingSize.LARGEST,
    paddingBottomSmallest: paddingBottom === PaddingSize.SMALLEST,
    paddingBottomSmaller: paddingBottom === PaddingSize.SMALLER,
    paddingBottomSmall: paddingBottom === PaddingSize.SMALL,
    paddingBottomMedium: paddingBottom === PaddingSize.MEDIUM,
    paddingBottomLarge: paddingBottom === PaddingSize.LARGE,
    paddingBottomLarger: paddingBottom === PaddingSize.LARGER,
    paddingBottomLargest: paddingBottom === PaddingSize.LARGEST,
  };
  // return {
  //   [style.tall]: props.tall,
  //   [style.wide]: props.wide,
  //   [style.gapSmallest]: props.gap === PaddingSize.SMALLEST,
  //   [style.gapSmaller]: props.gap === PaddingSize.SMALLER,
  //   [style.gapSmall]: props.gap === PaddingSize.SMALL,
  //   [style.gapMedium]: props.gap === PaddingSize.MEDIUM,
  //   [style.gapLarge]: props.gap === PaddingSize.LARGE,
  //   [style.gapLarger]: props.gap === PaddingSize.LARGER,
  //   [style.gapLargest]: props.gap === PaddingSize.LARGEST,
  //   [style.paddingLeftSmallest]: paddingLeft === PaddingSize.SMALLEST,
  //   [style.paddingLeftSmaller]: paddingLeft === PaddingSize.SMALLER,
  //   [style.paddingLeftSmall]: paddingLeft === PaddingSize.SMALL,
  //   [style.paddingLeftMedium]: paddingLeft === PaddingSize.MEDIUM,
  //   [style.paddingLeftLarge]: paddingLeft === PaddingSize.LARGE,
  //   [style.paddingLeftLarger]: paddingLeft === PaddingSize.LARGER,
  //   [style.paddingLeftLargest]: paddingLeft === PaddingSize.LARGEST,
  //   [style.paddingRightSmallest]: paddingRight === PaddingSize.SMALLEST,
  //   [style.paddingRightSmaller]: paddingRight === PaddingSize.SMALLER,
  //   [style.paddingRightSmall]: paddingRight === PaddingSize.SMALL,
  //   [style.paddingRightMedium]: paddingRight === PaddingSize.MEDIUM,
  //   [style.paddingRightLarge]: paddingRight === PaddingSize.LARGE,
  //   [style.paddingRightLarger]: paddingRight === PaddingSize.LARGER,
  //   [style.paddingRightLargest]: paddingRight === PaddingSize.LARGEST,
  //   [style.paddingTopSmallest]: paddingTop === PaddingSize.SMALLEST,
  //   [style.paddingTopSmaller]: paddingTop === PaddingSize.SMALLER,
  //   [style.paddingTopSmall]: paddingTop === PaddingSize.SMALL,
  //   [style.paddingTopMedium]: paddingTop === PaddingSize.MEDIUM,
  //   [style.paddingTopLarge]: paddingTop === PaddingSize.LARGE,
  //   [style.paddingTopLarger]: paddingTop === PaddingSize.LARGER,
  //   [style.paddingTopLargest]: paddingTop === PaddingSize.LARGEST,
  //   [style.paddingBottomSmallest]: paddingBottom === PaddingSize.SMALLEST,
  //   [style.paddingBottomSmaller]: paddingBottom === PaddingSize.SMALLER,
  //   [style.paddingBottomSmall]: paddingBottom === PaddingSize.SMALL,
  //   [style.paddingBottomMedium]: paddingBottom === PaddingSize.MEDIUM,
  //   [style.paddingBottomLarge]: paddingBottom === PaddingSize.LARGE,
  //   [style.paddingBottomLarger]: paddingBottom === PaddingSize.LARGER,
  //   [style.paddingBottomLargest]: paddingBottom === PaddingSize.LARGEST,
  // };
}

