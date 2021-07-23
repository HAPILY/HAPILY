module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: [
    "eslint:recommended",
    "plugin:nuxt/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["vue"],
  // add your custom rules here
  rules: {
    "vue/html-closing-bracket-newline": "off",
    "no-console": "off",
    camelcase: "off",
    "no-lonely-if": "off",
  },
};
