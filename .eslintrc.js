module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2020
  },
  extends: ['plugin:nuxt/recommended', 'plugin:prettier/recommended', 'prettier'],
  plugins: ['vue', 'prettier'],
  // add your custom rules here
  rules: {
    'vue/html-closing-bracket-newline': 'off',
    'no-console': 'off',
    camelcase: 'off',
    'no-lonely-if': 'off'
  }
}
