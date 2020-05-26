module.exports = {
  parser: '@typescript-eslint/parser',
  rules: {
    'prettier/prettier': 'error',
    'react/prop-types': [2, {ignore: ['children']}],
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  env: {
    node: true,
  },
};
