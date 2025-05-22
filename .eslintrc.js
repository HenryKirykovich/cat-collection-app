module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-native/all',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-native'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn'],
    'react-native/no-color-literals': 'off', // отключить цвета
    'react-native/no-inline-styles': 'off', // отключить inline стили
    'react-native/no-raw-text': 'off', // отключить <Text> правило
    'react-native/no-unused-styles': 'warn',
  },
};
