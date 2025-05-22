module.exports = {
  preset: 'jest-expo',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-navigation|expo(nent)?|@expo|@unimodules|@testing-library|@react-native-community|react-native-safe-area-context|@react-native-picker)'
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};
