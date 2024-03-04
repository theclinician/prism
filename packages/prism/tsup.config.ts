import { defineConfig } from "tsup";
import * as preset from "tsup-preset-solid"

// import { resolve } from "path";

export default defineConfig({
  entry: {
    index: "src/index.tsx",

    // dev_entry: true,
  },
  format: ["esm"], // Equivalent to the "formats: ["es"]" in Vite config
  target: "esnext",
  dts: true, // Generates .d.ts files. Make sure to install tsup"s DTS plugin if needed.
  external: ["solid-js"], // Marking "solid-js" as external
  // alias: {
    // Aliases setup might need to be handled differently as tsup doesn"t support it natively.
    // Consider using path mapping in tsconfig.json for similar functionality.
  // },
  // Since tsup doesn"t have a direct equivalent for Vite"s lib mode,
  // the output configuration is not needed. tsup automatically handles ES module output.
  // For globals, consider manual adjustments or post-build steps as tsup might not directly support this.
});



/*


import { defineConfig } from 'tsup'
import * as preset from 'tsup-preset-solid'

const preset_options: preset.PresetOptions = {
  // array or single object
  entries: [
    // default entry (index)
    {
      // entries with '.tsx' extension will have `solid` export condition generated
      entry: 'src/index.tsx',
      // will generate a separate development entry
      dev_entry: true,
    },
  ],
  // Set to `true` to remove all `console.*` calls and `debugger` statements in prod builds
  drop_console: true,
  // Set to `true` to generate a CommonJS build alongside ESM
  // cjs: true,
}

const CI =
  process.env['CI'] === 'true' ||
  process.env['GITHUB_ACTIONS'] === 'true' ||
  process.env['CI'] === '"1"' ||
  process.env['GITHUB_ACTIONS'] === '"1"'

export default defineConfig(config => {
  const watching = !!config.watch

  const parsed_options = preset.parsePresetOptions(preset_options, watching)

  if (!watching && !CI) {
    const package_fields = preset.generatePackageExports(parsed_options)

    console.log(`package.json: \n\n${JSON.stringify(package_fields, null, 2)}\n\n`)

    // will update ./package.json with the correct export fields
    preset.writePackageJson(package_fields)
  }

  return preset.generateTsupOptions(parsed_options)
})

*/

