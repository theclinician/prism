import { createEffect } from "solid-js";
import { useLocation } from "@solidjs/router";


export const useAnchors = () => {
  const loc = useLocation();
  let anchors: Record<string, HTMLElement> = {};
  createEffect(() => {
    let hash = (loc.hash ?? "#").substring(1);
    if(anchors[hash]) {
      anchors[hash].scrollIntoView();
    }
  });
  return [anchors];
}
