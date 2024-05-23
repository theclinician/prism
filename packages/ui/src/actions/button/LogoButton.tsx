import { JSX } from "solid-js";
import style from "./LogoButton.module.scss";
import useProps from "../../utils/useProps";

type Props = {
  src: string,
}

const defaultProps: Required<Props> = {
  src: "",
}


const Button = (allProps: Props & JSX.IntrinsicElements['button']) => {
  const [props, other] = useProps(allProps, defaultProps);

  return (
    <button
      classList={{
        [style.logoButton]: true,
      }}
      {...other}
    >
      <img
        class={style.icon}
        src={props.src}
      />
    </button>
  );
}

export default Button;
