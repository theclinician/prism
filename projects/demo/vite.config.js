import { defineConfig } from "vite"
import solid from "vite-plugin-solid"
import fs from "fs";
import { resolve } from "path";



export default defineConfig(({command, mode}) => ({
  ...(process.env.NODE_ENV === 'development' ? {
    define: {
      global: {},
    },
  } : {}),
  server: (command === "serve" && mode === "development") ? {
    host: "prism-local.dev",
    https: {
      key: fs.readFileSync(`${__dirname}/config/prism-local.dev-key.gitignored.pem`),
      cert: fs.readFileSync(`${__dirname}/config/prism-local.dev.gitignored.pem`),
    },
    fs: {
      allow: [`${__dirname}`, `${__dirname}/../../common/temp/node_modules`],
    },
  } : {},
  base: '/',
  plugins: [
    solid(),
  ],
  resolve: {
    alias: {
      "$": resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: resolve(__dirname, "./dist"),
    output: {
      rollupOptions: {
        // Ensure that the output is a self-contained file
        // and does not assume that assets are in the same folder as the HTML
        inlineDynamicImports: true,
      },
    },
  },
}));








