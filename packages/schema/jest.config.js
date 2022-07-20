const { pathsToModuleNameMapper } = require('ts-jest');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: '(spec|test)\\.tsx?$',
  modulePathIgnorePatterns: ['node_modules'],

  moduleNameMapper: pathsToModuleNameMapper(
    {
      '@darch/schema': ['./index.ts'],
      '@darch/schema/*': ['./*'],
    },
    {
      prefix: '<rootDir>/src/',
    }
  ),
};
