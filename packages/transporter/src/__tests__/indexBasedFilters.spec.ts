import { createDocumentIndexBasedFilters } from '../CollectionIndex';

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

      expect(oneField).toEqual({
        foundKeyPairs: [
          {
            PK: 'account⋮_id⋮741234⋮',
            SK: 'antonio',
            entity: 'account',
            index: {
              PK: ['.accountId'],
              SK: ['.username'],
              name: '_id',
              relations: [
                {
                  entity: 'accesstype',
                  name: 'access',
                },
              ],
            },
            indexField: '_id',
            parsePK: {
              PK_SK: 'PK',
              foundParts: ['741234'],
              indexField: '_id',
              invalidFields: [],
              isFilter: false,
              requiredFields: ['accountId'],
              valid: true,
            },
            parseSK: {
              PK_SK: 'SK',
              foundParts: ['antonio'],
              indexField: '_id',
              invalidFields: [],
              isFilter: false,
              requiredFields: ['username'],
              valid: true,
            },
          },
        ],
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

    expect(oneField).toEqual({
      attributeFilter: {
        _idSK: {
          $startsWith: 'a',
        },
      },
      foundKeyPairs: [
        {
          PK: 'account⋮_id⋮741234⋮',
          SK: {
            $startsWith: 'a',
          },
          entity: 'account',
          index: {
            PK: ['.accountId'],
            SK: ['.username'],
            name: '_id',
            relations: [
              {
                entity: 'accesstype',
                name: 'access',
              },
            ],
          },
          indexField: '_id',
          parsePK: {
            PK_SK: 'PK',
            foundParts: ['741234'],
            indexField: '_id',
            invalidFields: [],
            isFilter: false,
            requiredFields: ['accountId'],
            valid: true,
          },
          parseSK: {
            PK_SK: 'SK',
            conditionFound: {
              $startsWith: 'a',
            },
            foundParts: [],
            indexField: '_id',
            invalidFields: [],
            isFilter: true,
            requiredFields: ['username'],
            valid: true,
          },
        },
      ],
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

    expect(oneField).toEqual({
      foundKeyPairs: [
        {
          PK: 'account⋮_id⋮741234⋮',
          entity: 'account',
          index: {
            PK: ['.accountId'],
            SK: ['.username'],
            name: '_id',
            relations: [
              {
                entity: 'accesstype',
                name: 'access',
              },
            ],
          },
          indexField: '_id',
          parsePK: {
            PK_SK: 'PK',
            foundParts: ['741234'],
            indexField: '_id',
            invalidFields: [],
            isFilter: false,
            requiredFields: ['accountId'],
            valid: true,
          },
          parseSK: {
            PK_SK: 'SK',
            foundParts: [],
            indexField: '_id',
            invalidFields: [],
            isFilter: false,
            nullableFound: {},
            requiredFields: ['username'],
            valid: true,
          },
        },
      ],
      indexFilter: {
        _id: 'account⋮_id⋮741234⋮⋮',
        _idPK: 'account⋮_id⋮741234⋮',
        _idSK: '',
      },
      relationFilters: [
        {
          _idPK: 'account⋮_id⋮741234⊰',
        },
      ],
    });
  });
});
