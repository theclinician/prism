
import { JSX,  children as useChildren } from "solid-js";
import style from "./Demo.module.scss";


export type DemoProps = {
  title?: string,
  code?: string,
  children?: JSX.Element,
};


export const Demo = (props: DemoProps) => {
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
