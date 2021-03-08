module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'airbnb-base'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    /* ESLint Options */
    'array-bracket-newline': ['error', 'consistent'],
    'array-bracket-spacing': ['error', 'never'],
    'array-callback-return': 'error',
    'array-element-newline': ['error', 'consistent'],
    'block-scoped-var': 'error',
    'block-spacing': 'error',
    'brace-style': ['error', 'stroustrup', { allowSingleLine: false }],
    'camelcase': 'error',
    'class-methods-use-this': 'off',
    'comma-dangle': ['error', 'never'],
    'comma-style': ['error', 'last'],
    'consistent-return': 'error',
    'curly': 'error',
    'default-case': 'error',
    'default-param-last': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': ['error', { allowKeywords: false }],
    'eol-last': ['error', 'always'],
    'eqeqeq': ['error', 'smart'],
    'func-call-spacing': ['error', 'never'],
    'import/extensions': ['error', 'always', {
      '.ts': 'never'
    }],
    'indent': ['error', 2, {
      SwitchCase: 1,
      FunctionExpression: { body: 1, parameters: 2 },
      FunctionDeclaration: { body: 1, parameters: 2 },
      CallExpression: { arguments: 'first' },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      MemberExpression: 2
    }],
    'key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'minimum' }],
    'keyword-spacing': ['error', { after: true }],
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': ['error', {
      beforeLineComment: true,
      allowBlockStart: true,
      allowBlockEnd: true,
      allowObjectStart: true,
      allowObjectEnd: true,
      allowArrayStart: true,
      allowArrayEnd: true,
      allowClassEnd: true,
      allowClassStart: true
    }],
    'lines-between-class-members': 'off',
    'max-classes-per-file': 'error',
    'max-len': ['error', {
      code: 100,
      tabWidth: 2,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreTemplateLiterals: true,
      ignoreTrailingComments: false
    }],
    'max-lines': ['error', 1000],
    'max-statements': ['error', 150],
    'max-statements-per-line': ['error', { max: 1 }],
    'new-cap': 'error',
    'new-parens': 'error',
    'no-console': 'off',
    'no-constructor-return': 'error',
    'no-continue': 'off',
    'no-else-return': 'off',
    'no-empty-function': 'error',
    'no-eq-null': 'error',
    'no-extra-parens': 'error',
    'no-floating-decimal': 'error',
    'no-invalid-this': 'error',
    'no-label-var': 'error',
    'no-lonely-if': 'error',
    'no-magic-numbers': ['error', {
      detectObjects: false,
      ignoreArrayIndexes: true,
      ignore: [-1, 0, 1, 2, 200, 204, 404] /* ignore response codes and common numbers */
    }],
    'no-mixed-operators': ['error', { allowSamePrecedence: true }],
    'no-multi-spaces': 'off',
    'no-multiple-empty-lines': ['error', { max: 2 }],
    'no-new': 'error',
    'no-param-reassign': 'error',
    'no-redeclare': 'error',
    'no-return-assign': 'error',
    'no-shadow': 'error',
    'no-tabs': 'error',
    'no-template-curly-in-string': 'error',
    'no-trailing-spaces': 'error',
    'no-undef-init': 'error',
    'no-underscore-dangle': 'off',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': 'error',
    'no-use-before-define': 'off',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'no-warning-comments': 'error',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': ['error', 'beside'],
    'object-curly-spacing': ['error', 'always'],
    'one-var-declaration-per-line': ['error', 'always'],
    'operator-assignment': ['error', 'always'],
    'operator-linebreak': ['error', 'after'],
    'padded-blocks': ['error', 'never'],
    'prefer-destructuring': 'off',
    'prefer-exponentiation-operator': 'error',
    'prefer-object-spread': 'error',
    'prefer-regex-literals': 'error',
    'quote-props': ['error', 'consistent-as-needed'],
    'quotes': ['error', 'single'],
    'radix': ['error', 'as-needed'],
    'require-atomic-updates': 'error',
    'require-unicode-regexp': 'error',
    'semi': 'error',
    'semi-spacing': ['error', { before: false, after: true }],
    'semi-style': ['error', 'last'],
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'spaced-comment': ['error', 'always', { exceptions: ['*'] }],
    'switch-colon-spacing': 'error',
    'yoda': 'error',

    /* TypeScript ESLint Options */
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/naming-convention': ['error',
      {
        selector: 'default',
        format: ['camelCase']
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE']
      },
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allow'
      },
      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'require'
      },
      {
        selector: 'typeLike',
        format: ['PascalCase']
      }],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-parameter-properties': 'error',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/type-annotation-spacing': ['error', { before: false, after: false }]
  },
  overrides: [
    {
      files: ['.eslintrc.js'],
      rules: {
        'no-magic-numbers': 'off',
        '@typescript-eslint/naming-convention': 'off'
      }
    }
  ]
};
