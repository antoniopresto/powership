const { pathsToModuleNameMapper } = require('ts-jest');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testTimeout: +(process.env.TEST_TIMEOUT || 30000),
  testRegex: '(spec|test)\\.tsx?$',
  modulePathIgnorePatterns: ['node_modules', 'testing.d.ts'],
  moduleNameMapper: pathsToModuleNameMapper(
    {
      '@swind/schema': ['./index.ts'],
      '@swind/schema/*': ['./*'],
    },
    {
      prefix: '<rootDir>/src/',
    }
  ),
};
