import { JSX, Signal, splitProps, children as useChildren } from "solid-js";
import { TabKey } from "./utils";
import style from "./Tabs.module.scss";

export const Tab = (allProps: JSX.IntrinsicElements['div'] & {
  key: TabKey,
  title: string,
  signal: Signal<TabKey>,
  children?: JSX.Element,
}) => {
  const [props, other] = splitProps(allProps, [
    "key",
    "title",
    "signal",
    "children",
  ]);
  const c = useChildren(() => props.children);
  const [tab, setTab] = props.signal;
  const handleClick = () => setTab(props.key);
  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleClick();
    }
  };
  
  return (
    <div
      classList={{
        [style.tab]: true,
        [style.active]: tab() === props.key,
      }}
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      role="button"
      tabIndex="0"
      aria-label={props.title}
      {...other}
    >
      {c() ?? props.title}
    </div>
  )

}

export default Tab;
