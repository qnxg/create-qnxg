module.exports = {
  parser: '@typescript-eslint/parser',
  rules: {
    'prettier/prettier': 'error',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  env: {
    node: true,
  },
};
