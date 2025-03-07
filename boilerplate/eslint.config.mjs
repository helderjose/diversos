import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,

  {
    rules: {
      "semi": "error",
      "quotes": "single",
    }
  }

  // {
  //   rules: {
  //     "semi": ["error", "always"],
  //     "quotes": ["error", "single"]
  //   }
  // }
];