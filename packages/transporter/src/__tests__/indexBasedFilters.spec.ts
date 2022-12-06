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
              name: 'kind',
              field: '_id',
              PK: ['.accountId'],
              SK: ['.username'],
              relations: [{ name: 'access', entity: 'AccessType' }],
            },
          ],
        }
      );

      expect(oneField).toEqual({
        PK: {
          key: '_id',
          value: '741234',
        },
        filters: {
          _id: 'account:_id#741234»antonio',
        },
        foundKeyPairs: [
          {
            PK: '741234',
            SK: 'antonio',
            entity: 'account',
            index: {
              PK: ['.accountId'],
              SK: ['.username'],
              field: '_id',
              name: 'kind',
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
        isFullKeyFilter: true,
        relationFilters: [
          {
            _id: {
              $startsWith: 'account:_id#741234»accesstype«',
            },
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
            name: 'kind',
            field: '_id',
            PK: ['.accountId'],
            SK: ['.username'],
            relations: [{ name: 'access', entity: 'AccessType' }],
          },
        ],
      }
    );

    expect(oneField.isFullKeyFilter).toBe(false);

    expect(oneField).toEqual({
      PK: {
        key: '_id',
        value: '741234',
      },
      filters: {
        _id: {
          $startsWith: 'account:_id#741234»a',
        },
      },
      foundKeyPairs: [
        {
          PK: '741234',
          SK: {
            $startsWith: 'a',
          },
          entity: 'account',
          index: {
            PK: ['.accountId'],
            SK: ['.username'],
            field: '_id',
            name: 'kind',
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
      isFullKeyFilter: false,
      relationFilters: [
        {
          _id: {
            $startsWith: 'account:_id#741234»accesstype«',
          },
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
            name: 'kind',
            field: '_id',
            PK: ['.accountId'],
            SK: ['.username'],
            relations: [{ name: 'access', entity: 'AccessType' }],
          },
        ],
      }
    );

    expect(oneField.isFullKeyFilter).toBe(false);

    expect(oneField).toEqual({
      PK: {
        key: '_id',
        value: '741234',
      },
      filters: {
        _id: {
          $startsWith: 'account:_id#741234»',
        },
      },
      foundKeyPairs: [
        {
          PK: '741234',
          SK: undefined,
          entity: 'account',
          index: {
            PK: ['.accountId'],
            SK: ['.username'],
            field: '_id',
            name: 'kind',
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
            nullableFound: {
              value: undefined,
            },
            requiredFields: ['username'],
            valid: true,
          },
        },
      ],
      isFullKeyFilter: false,
      relationFilters: [
        {
          _id: {
            $startsWith: 'account:_id#741234»accesstype«',
          },
        },
      ],
    });
  });
});
