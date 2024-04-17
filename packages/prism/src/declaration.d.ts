declare module "*.module.scss"; 
declare module "*.svg"; 
declare module "*.png"; 

import { JSX } from "solid-js";

// declare module "solid-js" {
declare module global {
  namespace JSX {
    interface IntrinsicElements { 
      'h-centered': any;
      'v-scroll': any;
      'stack-separator': any;
      'h-stack': any;
      'v-stack': any;
      'z-stack': any;
      'z-item': any;
      'padded-stack': any;
    }
  }
}
