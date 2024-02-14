import { lazy } from "solid-js";

export const routes = [{
  path: "/",
  component: lazy(() => import("$/blocks/main/Layout")),
  children: [
  
    {
      path: "/", component: lazy(() => import("$/blocks/main/Home")),
    },
    
    {
      path: "/layout", component: lazy(() => import("$/blocks/sink/composition/LayoutPage")),
    },
    
    
    {
      path: "/composition", component: lazy(() => import("$/blocks/sink/composition/CompositionPage")),
    },
    
    {
      path: "/static", component: lazy(() => import("$/blocks/sink/static/StaticPage")),
    }, {
      path: "/icons", component: lazy(() => import("$/blocks/sink/static/Icons")),
    },

    {
      path: "/actions", component: lazy(() => import("$/blocks/sink/actions/Actions")),
    }, {
      path: "/buttons", component: lazy(() => import("$/blocks/sink/actions/Buttons")),
    },
    
    
    {
      path: "/parts", component: lazy(() => import("$/blocks/sink/parts/PartsPage")),
    }, {
      path: "/feed", component: lazy(() => import("$/blocks/sink/parts/FeedPage")),
    }, {
      path: "/menu", component: lazy(() => import("$/blocks/sink/parts/MenuPage")),
    },
    

    {
      path: "/fonts", component: lazy(() => import("$/blocks/sink/themes/ThemeFonts")),
    }, {
      path: "/colors", component: lazy(() => import("$/blocks/sink/themes/ThemeColors")),
    }, {
      path: "/typography", component: lazy(() => import("$/blocks/sink/static/Typography")),
    }, {
      path: "/inputs", component: lazy(() => import("$/blocks/sink/inputs/Inputs")),
    }, {
    
    }, {
      path: "/palette", component: lazy(() => import("$/blocks/themes/Palette")),
    },
    
    {
      path: "*", component: lazy(() => import("$/blocks/main/NotFound")),
    }
  ],
}];





