import { jsonToType } from '../jsonToType';
import { readTypescriptJSON } from '../readTypescriptJSON';

describe('readTypescriptJSON', () => {
  // afterEach();

  test('basic test', () => {
    const sut = readTypescriptJSON('./src/__tests__/example1.ts');

    expect(sut).toEqual({
      $ref: '#/definitions/Product',
      $schema: 'http://json-schema.org/draft-07/schema#',
      definitions: {
        Product: {
          additionalProperties: false,
          properties: {
            categories: {
              description: 'Product categories',
              items: {
                type: 'string',
              },
              type: 'array',
            },
            id: {
              type: 'string',
            },
            name: {
              type: 'string',
            },
          },
          required: ['id', 'name', 'categories'],
          type: 'object',
        },
      },
    });
  });

  test('jsonToType', () => {
    const sut = readTypescriptJSON('./src/__tests__/example1.ts');
    const parsed = jsonToType(sut);
    expect(parsed).toEqual({
      categories: {
        description: 'Product categories',
        list: true,
        type: 'string',
      },
      id: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
    });
  });
});
