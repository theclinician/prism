import { JSX, children as useChildren } from "solid-js";
import style from "./Feed.module.scss";
import useProps from "$/utils/useProps";


export type FeedProps = {
  children?: JSX.Element,
}

const defaultProps: Required<FeedProps> = {
  children: null,
}

export const Feed = (allProps: FeedProps & JSX.IntrinsicElements['div']) => {
  const [props, other] = useProps(allProps, defaultProps);
  const c = useChildren(() => props.children);

  return (
    <div
      classList={{
        [style.feed]: true,
      }}
      {...other}
    >
      {c()}
    </div>
  );
}

export default Feed;
