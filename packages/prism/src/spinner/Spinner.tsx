import { JSX } from "solid-js";
import style from "./Spinner.module.scss";
import useProps from "$/utils/useProps";
import image from "./spinner-light.png";


export enum SpinnerFlavor {
  SIMPLE = "SIMPLE",
  GROOVY = "GROOVY",
}

type Props = {
  flavor?: SpinnerFlavor,
}

const defaultProps: Required<Props> = {
  flavor: SpinnerFlavor.SIMPLE
}

const Spinner = (allProps: Props & JSX.IntrinsicElements['div']) => {
  const [props, other] = useProps(allProps, defaultProps);

  return (
    <div
      classList={{
        [style.spinner]: true,
        [style.groovy]: props.flavor === SpinnerFlavor.GROOVY,
      }}
      {...other}
    >
      <div class={style.inner}>
        <img
          class={style.image}
          src={image}
        />
      </div>
    </div>
  );
}

export default Spinner;

