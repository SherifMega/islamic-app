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
    'simple-import-sort',
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
    'react-native/no-color-literals': 'off',

    // disallow React to be incorrectly marked as unused
    'react/jsx-uses-react': 'off',
    // disable validating import React in every jsx scope
    'react/react-in-jsx-scope': 'off',
    'global-require': 'off',
    'import/no-extraneous-dependencies': 'off',

    'simple-import-sort/exports': ['error'],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // type imports.
          ['\\u0000$'],
          // packages: `react` and `expo` related packages come first
          ['^react', 'react', 'expo', '^@?\\w'],
          // side effect imports.
          ['^\\u0000'],
          // $root imports
          ['^\\$root'],
          // $src imports
          ['^\\$src/core'],
          ['^\\$src/modules'],
          ['^\\$assets'],
          // relative imports: parents, children, same-folder  `..` and `.` last
          [
            '^\\.\\.(?!/?$)',
            '^\\.\\./?$',
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$',
          ],
        ],
      },
    ],

    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['.*'],
            message: 'Please use absolute import instead',
          },
        ],
        paths: [
          {
            name: 'expo',
            message: "import from 'expo-*' modules instead",
          },
          {
            name: 'styled-components',
            message: "import styled from  '@styled-components/native'",
          },
        ],
      },
    ],

    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
  },
}
