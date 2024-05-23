import { JSX } from "solid-js";
import { hakinaElement, useParentStyle } from "$/utils/hakinaElement";
import { compositionClassList, CompositionProps } from "./Composition";


export type Props = {
  children?: JSX.Element,
  styles?: JSX.CSSProperties;
}

const defaultProps: Required<Props> = {
  children: null,
  styles: {},
}

const styleText = `
  .scroll {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow-y: scroll;
  }
`

hakinaElement("el-v-scroll", defaultProps, styleText, (props: Props & CompositionProps) => {
  useParentStyle(props, () => ({
    width: props.wide ? "100%" : undefined,
    height: "100%",
  }));

  return (
    <div
      classList={{
        ...compositionClassList(props),
        scroll: true,
      }}
      style={props.styles}
    >
      <slot/>
    </div>
  );
});
