import { createDocumentIndexBasedFilters } from '../createDocumentIndexBasedFilters';
import { escapeCursorChars, joinPKSK } from '@backland/utils';

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
            _idPK: { $startsWith: 'account⋮_id⋮741234⊰' },
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
          _idPK: { $startsWith: 'account⋮_id⋮741234⊰' },
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
          _idPK: { $startsWith: 'account⋮_id⋮741234⊰' },
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
        _id: 'account⋮_id⋮foooooo⋮73555⋮',
        _idPK: 'account⋮_id⋮foooooo⋮',
        _idSK: '73555',
      },
      relationFilters: [
        {
          _idPK: { $startsWith: 'account⋮_id⋮foooooo⊰' },
        },
      ],
    });
  });

  test('filtering by second index', () => {
    const oneField = createDocumentIndexBasedFilters(
      { storeId: 'store1', SKU: 'sku_ORANGE' },
      {
        entity: 'Account',
        indexes: [
          {
            name: '_id',
            PK: ['.storeId'],
            SK: ['.ulid'],
          },
          {
            name: '_id1',
            PK: ['.storeId'],
            SK: ['.SKU'],
          },
        ],
      }
    );

    expect(oneField).toEqual({
      indexFilter: {
        _id1PK: 'account⋮_id1⋮store1⋮',
        _id1SK: 'sku_ORANGE',
        _idPK: 'account⋮_id⋮store1⋮',
      },
      relationFilters: undefined,
    });
  });

  describe('Partial fields search', () => {
    test('filter with partial SK', () => {
      const filterParsed = createDocumentIndexBasedFilters(
        {
          accountId: '0100000000',
          kind: 'password',
          createdFor: '0100000000',
        },
        {
          entity: 'AccountsToken',
          indexes: [
            {
              PK: ['.accountId'],
              SK: ['.kind', '.createdFor', '.ulid'],
              name: '_id',
              relatedTo: 'Account',
            },
          ],
        }
      );

      expect(filterParsed).toEqual({
        indexFilter: {
          _idPK: 'account⋮_id⋮0100000000⊰accountstoken⋮',
          _idSK: {
            $startsWith: 'password∙0100000000',
          },
        },
      });
    });

    test('filter with partial SK with relation', () => {
      const filterParsed = createDocumentIndexBasedFilters(
        {
          accountId: '0100000000',
          kind: 'password',
          createdFor: '0100000000',
        },
        {
          entity: 'AccountsToken',
          indexes: [
            {
              PK: ['.accountId'],
              SK: ['.kind', '.createdFor', '.ulid'],
              name: '_id',
              relatedTo: 'Account',
              relations: [{ name: 'subsub', entity: 'SubSub' }],
            },
          ],
        }
      );

      expect(filterParsed).toEqual({
        indexFilter: {
          _idPK: 'account⋮_id⋮0100000000⊰accountstoken⋮',
          _idSK: {
            $startsWith: 'password∙0100000000',
          },
        },
        relationFilters: [
          {
            _idPK: {
              $startsWith: 'account⋮_id⋮0100000000⊰accountstoken⊰',
            },
          },
        ],
      });
    });

    describe('filter SK not searchable as $startsWith', () => {
      const indexConfig = {
        entity: 'AccountsToken',
        indexes: [
          {
            PK: ['.accountId'],
            SK: ['.kind', '.createdFor', '.ulid'],
            name: '_id',
          },
        ],
      } as const;

      test('only first part', () => {
        const filterParsed = createDocumentIndexBasedFilters(
          {
            accountId: '0100000000',
            kind: 'password',
            ulid: 'UULL123',
          },
          indexConfig
        );

        expect(filterParsed).toEqual({
          indexFilter: {
            _idPK: 'accountstoken⋮_id⋮0100000000⋮',
            _idSK: {
              $startsWith: 'password',
            },
          },
        });
      });

      test('last SK part', () => {
        const filterParsed = createDocumentIndexBasedFilters(
          {
            accountId: '0100000000',
          },
          indexConfig
        );

        expect(filterParsed).toEqual({
          indexFilter: {
            _idPK: 'accountstoken⋮_id⋮0100000000⋮',
          },
        });
      });

      test('with id of d', () => {
        const accountId = escapeCursorChars(
          joinPKSK(
            {
              SK: ['A', 'B'],
              PK: ['0100000000', 'POTATOS', 'BANANAS'],
            },
            { destination: 'document' }
          )
        );

        const filterParsed = createDocumentIndexBasedFilters(
          {
            accountId: accountId,
          },
          {
            entity: 'AccountsToken',
            indexes: [
              {
                PK: ['.accountId'],
                SK: ['.kind', '.createdFor', '.ulid'],
                name: '_id',
                relatedTo: 'potatos',
              },
            ],
          }
        );

        expect(filterParsed).toEqual({
          indexFilter: {
            _idPK: 'potatos⋮_id⋮0100000000⦁POTATOS∙BANANAS⦙A∙B⊰accountstoken⋮',
          },
        });
      });
    });
  });
});
