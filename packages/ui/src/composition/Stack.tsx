import { createEffect, JSX, onMount } from "solid-js";
import {
  compositionClassList,
  CompositionProps,
  compositionStyleText,
  PaddingSize,
} from "./Composition";
import { hakinaElement, useParentStyle } from "$/utils/hakinaElement";

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


hakinaElement("el-v-stack", defaultProps, styleText, (props: Props & CompositionProps) => {
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

hakinaElement("el-h-stack", defaultProps, styleText, (props: Props & CompositionProps) => {
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


hakinaElement(
  'el-padded-stack',
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

hakinaElement("el-z-stack", defaultProps, styleText, (props: Props & CompositionProps) => {
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

hakinaElement("el-z-item", defaultProps, styleText, (props: Props & CompositionProps) => {
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


