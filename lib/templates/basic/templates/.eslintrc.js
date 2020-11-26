module.exports = {
  env: {
    browser: true,
    es2021: true,
    commonjs: true,
    node: true,
  },
  parser: 'babel-eslint',
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {},
};
