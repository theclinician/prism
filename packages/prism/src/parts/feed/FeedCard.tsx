import { JSX, children as useChildren } from "solid-js";
import style from "./Feed.module.scss";
import useProps from "$/utils/useProps";


export type FeedCardProps = {
  children?: JSX.Element,
}

const defaultProps: Required<FeedCardProps> = {
  children: null,
}

export const FeedCard = (allProps: FeedCardProps & JSX.IntrinsicElements['div']) => {
  const [props, other] = useProps(allProps, defaultProps);
  const c = useChildren(() => props.children);

  return (
    <div
      classList={{
        [style.card]: true,
      }}
      {...other}
    >
      {c()}
    </div>
  );
}

export default FeedCard;
