module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'standard',
    'standard-jsx',
    'prettier',
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'react-native',
    'react-hooks',
    'import',
    'prettier',
  ],
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
