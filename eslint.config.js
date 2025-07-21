import js from '@eslint/js'
import globals from 'globals'

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'semi': ['error', 'never'],
      'quotes': ['error', 'single'],
      'indent': ['error', 2],
      'comma-dangle': ['error', 'never'],
      'eol-last': ['error', 'always'],
      'no-trailing-spaces': 'error',
      'eqeqeq': ['error', 'always'],
      'curly': ['error', 'all'],
      'no-var': 'error',
      'prefer-const': 'error',
      'arrow-spacing': 'error',
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'prefer-template': 'error',
      'template-curly-spacing': ['error', 'never']
    }
  },
  {
    ignores: [
      'node_modules/',
      'dist/',
      'build/',
      '*.min.js',
      'vendor/',
      'public/'
    ]
  }
]
