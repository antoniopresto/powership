module.exports = {
  preset: 'ts-jest',
  testRegex: '(spec|test)\\.tsx?$',
  modulePathIgnorePatterns: ['node_modules', 'testing.d.ts'],
  testEnvironment: 'node',
  testTimeout: +(process.env.TEST_TIMEOUT || 30000),
  setupFilesAfterEnv: ['<rootDir>/setupTests.cjs'],
};
