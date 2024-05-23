
import { splitProps, mergeProps, JSX } from "solid-js";

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
  parent?: any;
  styles?: JSX.CSSProperties;

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

export const defaultCompositionProps: Required<CompositionProps> = {
  parent: null,
  styles: {},
  tall: false,
  wide: false,
  padding: null,
  horizontal: null,
  vertical: null,
  top: null,
  bottom: null,
  left: null,
  right: null,
  gap: null,
}

const compositionKeys: (keyof CompositionProps)[] = Object.keys(defaultCompositionProps) as (keyof CompositionProps)[];


export const compositionStyleText = `
  // http://meyerweb.com/eric/tools/css/reset/
  //  v2.0 | 20110126
  //  License: none (public domain)
  // Added lines by @subhog
  //  2023-12-29

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video,
  input, textarea { // Added tags
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    text-decoration: none; // Added rule
    box-sizing: border-box; // Added rule
  }

  // HTML5 display-role reset for older browsers
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after, q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  button, button:active, button:focus { // Added section
    -webkit-appearance: none;
    border: 0px solid none;
    border-width: 0px;
    box-shadow: none;
    outline: none;
  }

  html, body, #root {
    height: 100%;
  
    background: var(--hakina-body-background);
    color: var(--hakina-body-color);
    font-family: var(--hakina-font-body);
  }

  .tall { height: 100%; }
  .wide { width: 100%; }
  .gapSmallest { gap: var(--hakina-padding-smallest); }
  .gapSmaller { gap: var(--hakina-padding-smaller); }
  .gapSmall { gap: var(--hakina-padding-small); }
  .gapMedium { gap: var(--hakina-padding-medium); }
  .gapLarge { gap: var(--hakina-padding-large); }
  .gapLarger { gap: var(--hakina-padding-larger); }
  .gapLargest { gap: var(--hakina-padding-largest); }
  .paddingLeftSmallest { padding-left: var(--hakina-padding-smallest); }
  .paddingLeftSmaller { padding-left: var(--hakina-padding-smaller); }
  .paddingLeftSmall { padding-left: var(--hakina-padding-small); }
  .paddingLeftMedium { padding-left: var(--hakina-padding-medium); }
  .paddingLeftLarge { padding-left: var(--hakina-padding-large); }
  .paddingLeftLarger { padding-left: var(--hakina-padding-larger); }
  .paddingLeftLargest { padding-left: var(--hakina-padding-largest); }
  .paddingRightSmallest { padding-right: var(--hakina-padding-smallest); }
  .paddingRightSmaller { padding-right: var(--hakina-padding-smaller); }
  .paddingRightSmall { padding-right: var(--hakina-padding-small); }
  .paddingRightMedium { padding-right: var(--hakina-padding-medium); }
  .paddingRightLarge { padding-right: var(--hakina-padding-large); }
  .paddingRightLarger { padding-right: var(--hakina-padding-larger); }
  .paddingRightLargest { padding-right: var(--hakina-padding-largest); }
  .paddingTopSmallest { padding-top: var(--hakina-padding-smallest); }
  .paddingTopSmaller { padding-top: var(--hakina-padding-smaller); }
  .paddingTopSmall { padding-top: var(--hakina-padding-small); }
  .paddingTopMedium { padding-top: var(--hakina-padding-medium); }
  .paddingTopLarge { padding-top: var(--hakina-padding-large); }
  .paddingTopLarger { padding-top: var(--hakina-padding-larger); }
  .paddingTopLargest { padding-top: var(--hakina-padding-largest); }
  .paddingBottomSmallest { padding-bottom: var(--hakina-padding-smallest); }
  .paddingBottomSmaller { padding-bottom: var(--hakina-padding-smaller); }
  .paddingBottomSmall { padding-bottom: var(--hakina-padding-small); }
  .paddingBottomMedium { padding-bottom: var(--hakina-padding-medium); }
  .paddingBottomLarge { padding-bottom: var(--hakina-padding-large); }
  .paddingBottomLarger { padding-bottom: var(--hakina-padding-larger); }
  .paddingBottomLargest { padding-bottom: var(--hakina-padding-largest); }
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
}

