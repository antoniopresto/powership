import { createDocumentIndexBasedFilters } from '../createDocumentIndexBasedFilters';

describe('getDocumentIndexFields', () => {
  describe('relatedTo', () => {
    test('case 1', () => {
      const oneField = createDocumentIndexBasedFilters(
        { accountId: 1234, username: 'antonio' },
        {
          entity: 'Account',
          indexes: [
            {
              name: '_id',
              PK: ['.accountId'],
              SK: ['.username'],
              relations: [{ name: 'access', entity: 'AccessType' }],
            },
          ],
        }
      );

      expect(oneField).toMatchObject({
        indexFilter: {
          _id: 'account⋮_id⋮741234⋮antonio⋮',
          _idPK: 'account⋮_id⋮741234⋮',
          _idSK: 'antonio',
        },
        relationFilters: [
          {
            _idPK: 'account⋮_id⋮741234⊰',
          },
        ],
      });
    });
  });

  test('isFullKeyFilter false - sk is filter', () => {
    const oneField = createDocumentIndexBasedFilters(
      { accountId: 1234, username: { $startsWith: 'a' } },
      {
        entity: 'Account',
        indexes: [
          {
            name: '_id',
            PK: ['.accountId'],
            SK: ['.username'],
            relations: [{ name: 'access', entity: 'AccessType' }],
          },
        ],
      }
    );

    expect(oneField).toMatchObject({
      indexFilter: {
        _idPK: 'account⋮_id⋮741234⋮',
        _idSK: {
          $startsWith: 'a',
        },
      },
      relationFilters: [
        {
          _idPK: 'account⋮_id⋮741234⊰',
        },
      ],
    });
  });

  test('isFullKeyFilter false - sk is empty', () => {
    const oneField = createDocumentIndexBasedFilters(
      { accountId: 1234 },
      {
        entity: 'Account',
        indexes: [
          {
            name: '_id',
            PK: ['.accountId'],
            SK: ['.username'],
            relations: [{ name: 'access', entity: 'AccessType' }],
          },
        ],
      }
    );

    expect(oneField).toMatchObject({
      indexFilter: {
        _idPK: 'account⋮_id⋮741234⋮',
      },
      relationFilters: [
        {
          _idPK: 'account⋮_id⋮741234⊰',
        },
      ],
    });
  });

  test('filtering by the final indexFieldName', () => {
    const oneField = createDocumentIndexBasedFilters(
      { _idPK: 'foooooo', _idSK: 555 },
      {
        entity: 'Account',
        indexes: [
          {
            name: '_id',
            PK: ['.accountId'],
            SK: ['.username'],
            relations: [{ name: 'access', entity: 'AccessType' }],
          },
        ],
      }
    );

    expect(oneField).toMatchObject({
      indexFilter: {
        _idPK: 'account⋮_id⋮741234⋮',
      },
      relationFilters: [
        {
          _idPK: 'account⋮_id⋮741234⊰',
        },
      ],
    });
  });
});
