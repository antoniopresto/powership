module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: { project: './tsconfig.prod.json' },
  env: { es6: true },
  ignorePatterns: ['node_modules', 'build', 'dist', 'lib', 'coverage', '*.js'],
  plugins: ['import', 'eslint-comments'],
  extends: [
    'plugin:eslint-comments/recommended',
    'plugin:import/typescript',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  globals: { BigInt: true, console: true, WebAssembly: true },
  rules: {
    'eslint-comments/no-unlimited-disable': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
    'eslint-comments/no-unused-disable': 'error',
    'import/order': ['error', { 'newlines-between': 'always', alphabetize: { order: 'asc' } }],
    'sort-imports': ['error', { ignoreDeclarationSort: true, ignoreCase: true }],
  },
};
