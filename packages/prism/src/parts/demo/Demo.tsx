
import { JSX,  children as useChildren } from "solid-js";
import style from "./Demo.module.scss";
import useProps from "../../utils/useProps";


export type DemoProps = {
  title?: string,
  code?: string,
  children?: JSX.Element,
};

const defaultProps: Required<MenuProps> = {
  title: "",
  code: "",
  children: null,
}



export const Demo = (allProps: DemoProps) => {
  const [props, other] = useProps(allProps, defaultProps);
  const c = useChildren(() => {
    return props.children;
  });

  return (
    <div class={style.demo}>
      <div class={style.title}>
        {props.title}
      </div>
      <div class={style.code}>
        {props.code}
      </div>
      <div class={style.display}>
        {c()}
      </div>
    </div>
  );
}

export default Demo;
