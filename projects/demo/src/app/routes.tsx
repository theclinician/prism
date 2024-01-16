import { lazy } from "solid-js";

export const routes = [{
  path: "/",
  component: lazy(() => import("$/blocks/main/Layout")),
  children: [{
    path: "/", component: lazy(() => import("$/blocks/main/Home")),
  }, {
    path: "/buttons", component: lazy(() => import("$/blocks/sink/Buttons")),
  }, {
    path: "/fonts", component: lazy(() => import("$/blocks/sink/ThemeFonts")),
  }, {
    path: "/colors", component: lazy(() => import("$/blocks/sink/ThemeColors")),
  }, {
    path: "/typography", component: lazy(() => import("$/blocks/sink/Typography")),
  }, {
    path: "/inputs", component: lazy(() => import("$/blocks/sink/Inputs")),
  }, {
    path: "/icons", component: lazy(() => import("$/blocks/sink/Icons")),
  }, {
    path: "/palette", component: lazy(() => import("$/blocks/themes/Palette")),
  }, {
    path: "*", component: lazy(() => import("$/blocks/main/NotFound")),
  }],
}];





