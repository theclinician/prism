import { lazy } from "solid-js";

export const routes = [{
  path: "/",
  component: lazy(() => import("$/blocks/main/Layout")),
  children: [
  
    {
      path: "/", component: lazy(() => import("$/blocks/main/Home")),
    }, {
      path: "/body", component: lazy(() => import("$/blocks/sink/body/BodyPage")),
    }, {
      path: "/layout", component: lazy(() => import("$/blocks/sink/composition/LayoutPage")),
    }, {
      path: "/composition", component: lazy(() => import("$/blocks/sink/composition/CompositionPage")),
    }, {
      path: "/static", component: lazy(() => import("$/blocks/sink/static/StaticPage")),
    }, {
      path: "/action", component: lazy(() => import("$/blocks/sink/action/ActionPage")),
    }, {
      path: "/control", component: lazy(() => import("$/blocks/sink/control/ControlPage")),
    }, {
      path: "/display", component: lazy(() => import("$/blocks/sink/display/DisplayPage")),
    }, {
      path: "/part", component: lazy(() => import("$/blocks/sink/part/PartPage")),
    }, {
      path: "/theme", component: lazy(() => import("$/blocks/sink/theme/ThemePage")),
    }, {
      path: "*", component: lazy(() => import("$/blocks/main/NotFound")),
    }
  ],
}];





