module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {},
};
