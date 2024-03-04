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
    conditions: ["development", "browser"],
  },
  build: {
    minify: false,
    conditions: ["development", "browser"],
    ssr: false,
    // outDir: resolve(__dirname, "./dist"),
    lib: {
      entry:
        "src/index.tsx",
        // "src/solid.tsx",
        // "src/web.tsx",
      formats: ["esm"],
      name: "@theclinician/prism",
      fileName: "index",
    },
    rollupOptions: {
      external: [
      //   "Solid",
        "solid-js",
        "solid-js/web",
      //   "solid-js/dist/dev",
      ],
      output: {
        globals: {
          "solid-js": "Solid",
          "solid-js/web": "Solid",
        }
      },
      jsx: "preserve",
      moduleContext: "browser",
    }
  }
});
