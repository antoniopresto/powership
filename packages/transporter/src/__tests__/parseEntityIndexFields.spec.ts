import { createType, ObjectType } from '@backland/schema';

import { parseEntityIndexFields } from '../parseEntityIndexFields';

describe('parseEntityIndexFields', () => {
  afterEach(ObjectType.reset);

  test('works', async () => {
    const oneField = parseEntityIndexFields({
      entity: 'Account',
      indexes: [
        {
          name: '_id',
          PK: ['.accountId'],
          SK: ['.username'],
          relations: [{ name: 'access',
entity: 'AccessType' }],
        },
      ],
    });

    const type = createType('AccountFields', {
      object: oneField,
    });

    const sut = await type.typescriptPrint();

    expect(sut.split('\n')).toEqual([
      'export interface AccountFields {',
      '  /**',
      '   * The full string value of the first index following the RegExp format "^account⋮_id⋮.*"',
      '   */',
      '  _id: string;',
      '  /**',
      '   * The _idPK field in the RegExp format "^account⋮_id⋮.*"',
      '   */',
      '  _idPK: string;',
      '  /**',
      '   * The _idSK field.',
      '   */',
      '  _idSK: string;',
      '}',
      '',
    ]);
  });

  test('without SK', async () => {
    const oneField = parseEntityIndexFields({
      entity: 'Account',
      indexes: [
        {
          name: '_id',
          PK: ['.accountId'],
        },
      ],
    });

    const type = createType('AccountFields', {
      object: oneField,
    });

    const sut = await type.typescriptPrint();

    expect(sut.split('\n')).toEqual([
      'export interface AccountFields {',
      '  /**',
      '   * The full string value of the first index following the RegExp format "^account⋮_id⋮.*"',
      '   */',
      '  _id: string;',
      '  /**',
      '   * The _idPK field in the RegExp format "^account⋮_id⋮.*"',
      '   */',
      '  _idPK: string;',
      '}',
      '',
    ]);
  });

  test('with relation', async () => {
    const oneField = parseEntityIndexFields({
      entity: 'Account',
      indexes: [
        {
          name: '_id',
          PK: ['.accountId'],
          relatedTo: 'User',
        },
      ],
    });

    const type = createType('AccountFields', {
      object: oneField,
    });

    const sut = await type.typescriptPrint();

    expect(sut.split('\n')).toEqual([
      'export interface AccountFields {',
      '  /**',
      '   * The full string value of the first index following the RegExp format "^user⋮_id⋮[^⊰]*⊰account⋮.*"',
      '   */',
      '  _id: string;',
      '  /**',
      '   * The _idPK field in the RegExp format "^user⋮_id⋮[^⊰]*⊰account⋮.*"',
      '   */',
      '  _idPK: string;',
      '  _rpk: string[];',
      '}',
      '',
    ]);
  });
});
