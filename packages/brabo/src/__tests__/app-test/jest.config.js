// https://betterprogramming.pub/how-to-use-puppeteer-with-jest-typescript-530a139ffe40
module.exports = {
  preset: 'jest-puppeteer',
  testMatch: ['**/?(*.)+(spec|test).[t]s'],
  testPathIgnorePatterns: ['/node_modules/', 'dist'], //
  setupFiles: [],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  globalSetup: './jest.global-setup.js', // will be called once before all tests are executed
  // globalTeardown: './jest.global-teardown.ts', // will be called once after all tests are executed
};
