module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    ecmaVersion: 2021,
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'eslint:recommended',
    'prettier',
    'plugin:vue-scoped-css/recommended',
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'no-alert': 2,
    'no-useless-concat': 2,
    'prefer-template': 2,
    'template-curly-spacing': 2,
    'vue/component-name-in-template-casing': [2, 'PascalCase'],
    'vue/no-empty-component-block': 2,
    'vue-scoped-css/no-deprecated-v-enter-v-leave-class': 2,
    'vue-scoped-css/require-selector-used-inside': 2,
  },
}
