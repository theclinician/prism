import { resolve } from "path";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import dts from "vite-plugin-dts";


export default defineConfig({
  plugins: [
    solidPlugin(),
    dts(),
  ],
  resolve: {
    alias: {
      "$": resolve(__dirname, "src"),
      // "solid-js": "solid-js/dist/solid.js",
    },
  },
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
    lib: {
      entry: "src/index.tsx",
      name: "@theclinician/prism",
      fileName: "index",
    },
    rollupOptions: {
      external: ["solid-js"],
      output: {
        globals: {
          "solid-js": "Solid"
        }
      }
    }
  }
});
