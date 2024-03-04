import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import withSolid from "rollup-preset-solid";
import alias from "@rollup/plugin-alias";
import postcss from "rollup-plugin-postcss";


// console.log("META", import.meta.url);
const dir = dirname(fileURLToPath(import.meta.url));


export default withSolid([
  {
    input: "src/index.tsx",
    targets: ["esm", "cjs"],
    plugins: [
      alias({
        entries: [{
          find: "$",
          replacement: resolve(dir, "src"),
        }],
      }),
      postcss({
        extract: true,
        modules: true,
        use: ["sass"]
     }),
    ]
  },
]);


