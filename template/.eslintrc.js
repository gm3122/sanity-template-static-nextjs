module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:typescript-sort-keys/recommended',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    jest: {
      version: 27,
    },
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'import',
    'unused-imports',
    'simple-import-sort',
    'sort-keys-fix',
    'sort-destructure-keys',
    'typescript-sort-keys',
    'jest',
  ],
  ignorePatterns: ['**/next.config.js', '**/schema-types.ts'],
  rules: {
    'no-console': 'warn',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/jsx-sort-props': [
      'error',
      {
        shorthandFirst: true,
      },
    ],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'function-declaration',
      },
    ],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^react$', '^next.*', '^sanity.*', '^core.*', '^@storybook.*', '^[a-z-]+'],
          ['^@.*'],
          ['^#/.*'],
          ['^C/.*'],
          ['^~/.*'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    'sort-imports': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    // develop
    '@typescript-eslint/no-empty-interface': 'off',
    'no-empty-pattern': 'off',
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {},
    },
    {
      files: ['*.stories.ts', '*.stories.tsx'],
      rules: {
        'react/function-component-definition': 'off',
      },
    },
    {
      files: ['**/scripts/**'],
      rules: {
        'no-console': 'off',
      },
    },
    {
      files: ['packages/next.js/**'],
      rules: {
        'sort-keys-fix/sort-keys-fix': 'warn',
        'sort-destructure-keys/sort-destructure-keys': [2, { caseSensitive: true }],
      },
    },
    {
      files: ['packages/sanity/index.ts'],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
      },
    },
  ],
}
