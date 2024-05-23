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
    },
  },
  build: {
    lib: {
      entry: "src/index.ts",
      name: "@hakina/ui",
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
