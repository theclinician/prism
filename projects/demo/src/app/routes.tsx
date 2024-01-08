import { lazy } from "solid-js";

export const routes = [{
  path: "/",
  component: lazy(() => import("$/blocks/main/Layout")),
  children: [{
    path: "/", component: lazy(() => import("$/blocks/main/Home")),
  }, {
    path: "/buttons", component: lazy(() => import("$/blocks/sink/Buttons")),
  }, {
    path: "/inputs", component: lazy(() => import("$/blocks/sink/Inputs")),
  }, {
    path: "/icons", component: lazy(() => import("$/blocks/sink/Icons")),
  }, {
    path: "*", component: lazy(() => import("$/blocks/main/NotFound")),
  }],
}];





