import { JSX, children as useChildren } from "solid-js";
import style from "./Tabs.module.scss";

export const Tabs = (props: {
  children: JSX.Element,
}) => {
  const c = useChildren(() => props.children);
  return (
    <div class={style.tabs}>
      {c()}
    </div>
  );
};

export default Tabs;
