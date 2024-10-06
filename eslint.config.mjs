import globals from "globals";
import pluginVue from "eslint-plugin-vue";


export default [
  {files: ["**/*.{js,mjs,cjs,vue}"]},
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  ...pluginVue.configs["flat/essential"],
];