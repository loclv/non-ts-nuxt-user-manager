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
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'no-alert': 2,
    'no-useless-concat': 2,
    'prefer-template': 2,
    'template-curly-spacing': 2,
  },
}
