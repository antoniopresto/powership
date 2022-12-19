import { jsonToSchemaDefinition } from '../jsonToType';

describe('jsonToType', () => {
  // afterEach();

  test('works', async () => {
    const t = jsonToSchemaDefinition({
      json: {
        name: ['a', 1],
      },
    });

    expect(t).toEqual({
      name: {
        array: {
          of: {
            union: [
              {
                string: {},
              },
              {
                int: {},
              },
            ],
          },
        },
      },
    });
  });
});
