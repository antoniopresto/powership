const { pathsToModuleNameMapper } = require('ts-jest');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testTimeout: +(process.env.TEST_TIMEOUT || 5000),
  testRegex: '(spec|test)\\.tsx?$',
  modulePathIgnorePatterns: ['node_modules', 'testing.d.ts'],
  moduleNameMapper: pathsToModuleNameMapper(
    {
      '@backland/schema': ['./index.ts'],
      '@backland/schema/*': ['./*'],
    },
    {
      prefix: '<rootDir>/src/',
    }
  ),
};
