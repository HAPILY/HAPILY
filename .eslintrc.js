module.exports = {
  extends: [
    'eslint:recommended',
    '@nuxtjs/eslint-config-typescript'
  ],
  rules: {
    semi: [2, 'never'],
    'vue/html-self-closing': 'off',
    'no-unused-vars': 'off',
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off'
  }
}
