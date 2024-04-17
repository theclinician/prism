import { createEffect, JSX, onMount } from "solid-js";
import {
  compositionClassList,
  CompositionProps,
  compositionStyleText,
  PaddingSize,
} from "./Composition";
import { prismElement, useParentStyle } from "$/utils/prismElement";

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
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .vstack {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .zstack {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .zitem {
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
  }
`;


prismElement("v-stack", defaultProps, styleText, (props: Props & CompositionProps) => {
  useParentStyle(props, () => ({
    width: props.wide ? "100%" : undefined,
    height: props.tall ? "100%" : undefined,
  }));

  return (
    <div
      classList={{
        ...compositionClassList(props),
        vstack: !props.flip,
        hstack: !!props.flip,
      }}
      style={props.styles}
    >
      <slot/>
    </div>
  );
});

prismElement("h-stack", defaultProps, styleText, (props: Props & CompositionProps) => {
  useParentStyle(props, () => ({
    width: props.wide ? "100%" : undefined,
    height: props.tall ? "100%" : undefined,
  }));

  return (
    <div
      classList={{
        ...compositionClassList(props),
        hstack: !props.flip,
        vstack: !!props.flip,
      }}
      style={props.styles}
    >
      <slot/>
    </div>
  );
});


prismElement(
  'padded-stack',
  {...defaultProps, padding: PaddingSize.MEDIUM},
  styleText,
  (props: Props & CompositionProps) => {
    useParentStyle(props, () => ({
      width: props.wide ? "100%" : undefined,
      height: props.tall ? "100%" : undefined,
    }));

    return (
      <div
        classList={{
          ...compositionClassList(props),
          hstack: !props.flip,
          vstack: !!props.flip,
        }}
        style={props.styles}
      >
        <slot/>
      </div>
    );
  }
);

prismElement("z-stack", defaultProps, styleText, (props: Props & CompositionProps) => {
  useParentStyle(props, () => ({
    width: props.wide ? "100%" : undefined,
    height: props.tall ? "100%" : undefined,
  }));

  return (
    <div
      classList={{
        ...compositionClassList(props),
        zstack: true,
      }}
      style={props.styles}
    >
      <slot/>
    </div>
  );
});

prismElement("z-item", defaultProps, styleText, (props: Props & CompositionProps) => {
  useParentStyle(props, () => ({
    width: props.wide ? "100%" : undefined,
    height: props.tall ? "100%" : undefined,
  }));

  return (
    <div
      classList={{
        ...compositionClassList(props),
        zitem: true,
      }}
      style={props.styles}
    >
      <slot/>
    </div>
  );
});


