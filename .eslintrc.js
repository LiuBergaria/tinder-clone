module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    '@react-native-community',
    'plugin:react-native-a11y/all',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jsonc/recommended-with-jsonc',
  ],
  globals: {
    JSX: 'readonly',
  },
  overrides: [
    {
      files: ['*.json', '*.json5'],
      parser: 'jsonc-eslint-parser',
      rules: {
        '@typescript-eslint/naming-convention': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'import',
    'react-hooks',
    'jest',
    'typescript-sort-keys',
    'sort-keys-fix',
  ],
  root: true,
  rules: {
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      { allowExpressions: true },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        selector: 'variable',
      },
      {
        format: ['camelCase'],
        selector: 'parameter',
      },
      {
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        modifiers: ['private'],
        selector: 'memberLike',
      },
      {
        format: ['PascalCase'],
        selector: 'typeLike',
      },
      {
        custom: {
          match: true,
          regex: '^I[A-Z]',
        },
        format: ['PascalCase'],
        selector: 'interface',
      },
      {
        format: ['camelCase', 'PascalCase'],
        selector: 'enumMember',
      },
    ],
    '@typescript-eslint/no-empty-function': ['off'],
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-var-requires': ['off'],
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: [
          'builtin',
          'external',
          'internal',
          ['index', 'sibling', 'parent', 'object'],
        ],
        'newlines-between': 'always',
        pathGroups: [
          {
            group: 'external',
            pattern: 'react+(|-native)',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
      },
    ],
    indent: ['off'],
    'jsonc/sort-keys': 'error',
    'no-console': ['error', { allow: ['error', 'info', 'warn'] }],
    'no-dupe-class-members': ['off'],
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['..*'],
            message: 'Use only absolute imports',
          },
        ],
      },
    ],
    'no-shadow': 'off',
    'prettier/prettier': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react-native-a11y/has-accessibility-hint': ['off'],
    'react-native-a11y/has-valid-accessibility-ignores-invert-colors': ['warn'],
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-curly-brace-presence': [
      'error',
      { children: 'ignore', props: 'always' },
    ],
    'react/jsx-no-literals': 'error',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: false,
        shorthandLast: true,
      },
    ],
    'sort-keys': [
      'error',
      'asc',
      { caseSensitive: true, minKeys: 5, natural: false },
    ],
    'sort-keys-fix/sort-keys-fix': 'error',
    'typescript-sort-keys/interface': 'error',
    'typescript-sort-keys/string-enum': 'error',
  },
  settings: {
    'import/extensions': ['.ts', '.tsx', '.js', '.jsx'],
    'import/ignore': ['react-native'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['.'],
      },
      typescript: {
        alwaysTryTypes: true,
        project: './',
      },
    },
  },
};
