import { Signal, createSignal } from "solid-js"

export type TabKey = string | symbol;

export const useTabs = (initial: TabKey): [(_: TabKey) => boolean, Signal<TabKey>] => {
  const [tab, setTab] = createSignal(initial);
  const isTab = (t: TabKey): boolean => t === tab();
  return [isTab, [tab, setTab]];
}



// const ensureArray = (element: JSX.Element): JSX.ArrayElement => {
//   if(Array.isArray(element)) {
//     return element;
//   }
//   return [element];
// }

