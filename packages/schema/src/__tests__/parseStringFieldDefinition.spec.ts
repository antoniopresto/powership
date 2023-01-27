import { getKeys } from '@backland/utils/lib/getKeys';

import { types } from '../fields/fieldTypes';
import { parseStringDefinition } from '../parseStringDefinition';

const definitions = getKeys(types)
  .map((type) => {
    return [
      [type, { type }],
      [`${type}?`, { type,
optional: true }],
      [`[${type}]`, { type,
list: true }],
      [`[${type}]?`, { type,
optional: true,
list: true }],
    ] as const;
  })
  .flat();

describe('parseStringDefinition', () => {
  it('string', () => {
    let sut = parseStringDefinition('string');

    expect(sut).toEqual({
      type: 'string',
    });
  });

  it('works', () => {
    definitions.forEach(function (item) {
      const type = item[0];
      const expected = item[1];

      const sut = parseStringDefinition(type);

      expect(sut).toEqual(expected);
    });
  });
});
