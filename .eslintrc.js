module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
        singleQuote: true,
        jsxSingleQuote: true,
        semi: false,
      },
    ],
    // react-native styles are defined after components
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',

    // disallow React to be incorrectly marked as unused
    'react/jsx-uses-react': 'off',
    // disable validating import React in every jsx scope
    'react/react-in-jsx-scope': 'off',

    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
  },
}
