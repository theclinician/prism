import { JSX } from "solid-js";
import { hakinaElement, useParentStyle } from "$/utils/hakinaElement";
import { compositionClassList, CompositionProps } from "./Composition";


export type Props = {
  children?: JSX.Element,
}

const defaultProps: Required<Props> = {
  children: null,
}

const styleText = `
  .centered {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`

hakinaElement("el-h-centered", defaultProps, styleText, (props: Props & CompositionProps) => {
  useParentStyle(props, () => ({
    width: props.wide ? "100%" : undefined,
    height: props.tall ? "100%" : undefined,
  }));

  return (
    <div
      classList={{
        ...compositionClassList(props),
        centered: true,
      }}
      style={props.styles}
    >
      <slot/>
    </div>
  );
});
