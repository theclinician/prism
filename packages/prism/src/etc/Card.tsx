import { JSX, children as useChildren } from "solid-js";
import style from "./Card.module.scss";
import useProps from "$/utils/useProps";


type Props = {
  children?: JSX.Element,
}

const defaultProps: Required<Props> = {
  children: null,
}

const Card = (allProps: Props & JSX.IntrinsicElements['div']) => {
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

export default Card;
