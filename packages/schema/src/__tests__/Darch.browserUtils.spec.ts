/**
 * @jest-environment jsdom
 */

import { __DarchModulesRecord__, Darch } from '../Darch';

describe('Darch.browserUtils', () => {
  test('smock', async () => {
    const sut = Object.keys(Darch).sort();

    sut.forEach((key) => {
      if (__DarchModulesRecord__[key].server) {
        expect(() => Darch[key]).toThrow(
          `Trying to require ${key} in the browser`
        );
      } else {
        expect(Darch[key][key]).toBe(__DarchModulesRecord__[key].module()[key]);
      }
    });

    expect(sut).toEqual([
      'GraphType',
      'clientUtils',
      'createGraphQLSchema',
      'createResolver',
      'getQueryExamples',
      'graphql',
      'graphqlParser',
      'objectToTypescript',
      'prettier',
    ]);
  });
});
