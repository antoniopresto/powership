const { pathsToModuleNameMapper } = require('ts-jest');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testTimeout: +(process.env.TEST_TIMEOUT || 30000),
  testRegex: '(spec|test)\\.tsx?$',
  modulePathIgnorePatterns: ['node_modules', 'testing.d.ts'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  moduleNameMapper: pathsToModuleNameMapper(
    {
      '@powership/schema': ['./index.ts'],
      '@powership/schema/*': ['./*'],
    },
    {
      prefix: '<rootDir>/src/',
    }
  ),
};
