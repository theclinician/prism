declare module "*.module.scss"; 
declare module "*.svg"; 
declare module "*.png"; 

import { JSX } from "solid-js";

// declare module "solid-js" {
declare module global {
  namespace JSX {
    interface IntrinsicElements { 
      'el-h-centered': any;
      'el-v-scroll': any;
      'el-stack-separator': any;
      'el-h-stack': any;
      'el-v-stack': any;
      'el-z-stack': any;
      'el-z-item': any;
      'el-padded-stack': any;
      'el-button': any;
    }
  }
}
