import { resolve } from "path";
import { defineConfig } from "vite";
import solid from 'vite-plugin-solid';
import dts from "vite-plugin-dts";


export default defineConfig({
  plugins: [
    solid(),
    dts(),
  ],
  resolve: {
    alias: {
      "$": resolve(__dirname, "src"),
    },
  },
  build: {
    target: ["esnext"],
    lib: {
      entry: "src/index.tsx",
      name: "@theclinician/prism",
      formats: ["es"],
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




// const getEntries = async () => {
//   const entries = (await glob('src/**/index.@(ts|tsx)')).reduce(
//     (acc, entry) => {
//       const name = entry
//         .substring(0, entry.lastIndexOf('.'))
//         .replace(`src${sep}`, '')
//         .replace(`stories${sep}`, '');
//       return { ...acc, [name]: entry };
//     },
//     {},
//   );
//   return entries;
// };

// interface Metadata {
//   main: string;
//   module: string;
//   types: string;
//   browser: {};
//   exports: {
//     [key: string]: {
//       import: {
//         types: string;
//         default: string;
//       };
//     };
//   };
//   typesVersions: {
//     '*': {
//       [key: string]: string[];
//     };
//   };
// }

// const entries = await getEntries();

// export default defineConfig({
//   resolve: {
//     alias: {
//       "$": resolve(__dirname, "src"),
//     },
//   },
//   plugins: [
//     solid(),
//     dts({
//       include: 'src/**/index.@(ts|tsx)',
//       beforeWriteFile: (filePath, content) => {
//         return { filePath: filePath.replace('stories/', ''), content };
//       },
//       afterBuild: async () => {
//         const metadata = {
//           main: './dist/index.js',
//           module: './dist/index.js',
//           types: './dist/index.d.ts',
//           browser: {},
//           exports: {
//             '.': {
//               import: {
//                 types: './dist/index.d.ts',
//                 default: './dist/index.js',
//               },
//             },
//           },
//           typesVersions: { '*': {} },
//         };
//         for (const key of Object.keys(entries)) {
//           if (key === 'index') continue;
//           const name = key.replace(`${sep}index`, '');
//           metadata.exports[`./${name}`] = {
//             import: {
//               types: `./dist/${name}/index.d.ts`,
//               default: `./dist/${name}/index.js`,
//               import: `./dist/${name}/index.js`,
//               solid: `./dist/${name}/index.js`,
//               browser: `./dist/${name}/index.js`,
//               node: `./dist/${name}/index.js`,
//             },
//           };
//           metadata.typesVersions['*'][name] = [`./dist/${name}/index.d.ts`];
//         }
//         const packageJson = JSON.parse(await readFile('package.json', 'utf-8'));
//         await writeFile(
//           'package.json',
//           `${JSON.stringify({ ...packageJson, ...metadata }, null, 2)}\n`,
//           'utf-8',
//         );
//       },
//     }),
//   ],
//   server: { port: 3000 },
//   build: {
//     target: 'esnext',
//     lib: { formats: ['es'], entry: entries },
//     rollupOptions: { external: ['solid-js'] },
//   },
// });

