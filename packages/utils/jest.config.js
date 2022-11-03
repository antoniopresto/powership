module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testTimeout: +(process.env.TEST_TIMEOUT || 5000),
  testRegex: '(spec|test)\\.tsx?$',
};
