import { JSX } from "solid-js";
import { prismElement, useParentStyle } from "$/utils/prismElement";
import { compositionClassList, CompositionProps } from "./Composition";


export type Props = {
}

const defaultProps: Required<Props> = {
}

const styleText = `
  .separator {
    flex: 1 1 auto;
  }
`

prismElement("stack-separator", defaultProps, styleText, (props: Props & CompositionProps) => {
  useParentStyle(props, () => ({
    flex: "1 1 auto",
  }));

  return (
    <div
      classList={{
        ...compositionClassList(props),
        separator: true,
      }}
      style={props.styles}
    />
  );
});

