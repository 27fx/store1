import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";


// eslint.config.js
export default [
  {
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error"
    }
  }
];