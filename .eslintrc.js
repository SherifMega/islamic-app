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
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': 'off',

    // disallow React to be incorrectly marked as unused
    'react/jsx-uses-react': 'off',
    // disable validating import React in every jsx scope
    'react/react-in-jsx-scope': 'off',
    'global-require': 'off',
    'import/no-extraneous-dependencies': 'off',

    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
  },
}
