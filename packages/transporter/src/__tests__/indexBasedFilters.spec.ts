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
          $or: [
            {
              _id: {
                $startsWith: 'Account:_id#741234≻AccessType',
              },
            },
            {
              _id: 'Account:_id#741234↠antonio',
            },
          ],
        },
      });
    });
  });
});
