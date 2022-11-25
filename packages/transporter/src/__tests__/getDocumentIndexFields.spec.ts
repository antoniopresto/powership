import { getDocumentIndexFields } from '../CollectionIndex';

describe('getDocumentIndexFields', () => {
  it('should mount PK', async () => {
    const sut = getDocumentIndexFields(
      { name: 'fulano', age: 5 },
      {
        entity: 'foo',
        indexes: [
          {
            name: 'foo',
            field: '_id',
            PK: ['.name'],
            SK: ['.age'],
          },
          {
            name: 'bar',
            field: '_id1',
            PK: ['.age'],
            SK: ['.name'],
          },
        ],
      }
    );

    expect(sut).toEqual({
      error: null,
      firstIndex: {
        key: '_id',
        value: 'foo:_id#fulano↠715',
      },
      indexFields: {
        _id: 'foo:_id#fulano↠715',
        _id1: 'foo:_id1#715↠fulano',
        _id1PK: '715',
        _id1SK: 'fulano',
        _idPK: 'fulano',
        _idSK: '715',
        id: expect.any(String),
      },
      invalidFields: null,
      parsedIndexKeys: [
        {
          PK: {
            definition: ['.name'],
            parsed: expect.any(Object),
            requiredFields: ['name'],
          },
          SK: {
            definition: ['.age'],
            parsed: expect.any(Object),
            requiredFields: ['age'],
          },
          entity: 'foo',
          index: {
            PK: ['.name'],
            SK: ['.age'],
            field: '_id',
            name: 'foo',
          },
        },
        {
          PK: {
            definition: ['.age'],
            parsed: expect.any(Object),
            requiredFields: ['age'],
          },
          SK: {
            definition: ['.name'],
            parsed: expect.any(Object),
            requiredFields: ['name'],
          },
          entity: 'foo',
          index: {
            PK: ['.age'],
            SK: ['.name'],
            field: '_id1',
            name: 'bar',
          },
        },
      ],
      valid: true,
      uniqIndexCondition: {
        $not: {
          $or: [
            {
              _id: 'foo:_id#fulano↠715',
            },
            {
              _id1: 'foo:_id1#715↠fulano',
            },
          ],
        },
      },
    });
  });

  it('should mount PK + SK', async () => {
    const oneField = getDocumentIndexFields(
      { name: 'NAME', age: 0 },
      {
        entity: 'foo',
        indexes: [
          {
            name: 'foo',
            field: '_id',
            PK: ['.age', '.name'],
            SK: ['#nice', '.age'],
          },
        ],
      }
    );

    expect(oneField).toEqual({
      error: null,
      firstIndex: {
        key: '_id',
        value: 'foo:_id#5#NAME↠nice#5',
      },
      indexFields: {
        _id: 'foo:_id#5#NAME↠nice#5',
        _idPK: '5#NAME',
        _idSK: 'nice#5',
        id: expect.any(String),
      },
      invalidFields: null,
      parsedIndexKeys: [
        {
          PK: {
            definition: ['.age', '.name'],
            parsed: expect.any(Object),
            requiredFields: ['age', 'name'],
          },
          SK: {
            definition: ['#nice', '.age'],
            parsed: expect.any(Object),
            requiredFields: ['age'],
          },
          entity: 'foo',
          index: {
            PK: ['.age', '.name'],
            SK: ['#nice', '.age'],
            field: '_id',
            name: 'foo',
          },
        },
      ],
      valid: true,
      uniqIndexCondition: {
        $not: {
          $or: [
            {
              _id: 'foo:_id#5#NAME↠nice#5',
            },
          ],
        },
      },
    });
  });

  it('should throw on missing fields', async () => {
    const oneField = getDocumentIndexFields(
      { name: '' },
      {
        entity: 'foo',
        indexes: [
          {
            name: 'foo',
            field: '_id',
            PK: ['.age', '.name'],
            SK: ['#nice', '.age'],
          },
        ],
      }
    );

    expect(oneField).toEqual({
      error: expect.any(Object),
      firstIndex: null,
      indexFields: null,
      invalidFields: [
        {
          details: 'Expected string or number, found undefined.',
          documentField: '.age',
          indexField: '_id',
          indexPartKind: 'PK',
          reason: 'missing',
        },
        {
          details: 'Expected string or number, found string with value: .',
          documentField: '.name',
          indexField: '_id',
          indexPartKind: 'PK',
          reason: 'invalid',
        },
        {
          details: 'Expected string or number, found undefined.',
          documentField: '.age',
          indexField: '_id',
          indexPartKind: 'SK',
          reason: 'missing',
        },
      ],
      parsedIndexKeys: [
        {
          PK: {
            definition: ['.age', '.name'],
            parsed: expect.any(Object),
            requiredFields: ['age', 'name'],
          },
          SK: {
            definition: ['#nice', '.age'],
            parsed: expect.any(Object),
            requiredFields: ['age'],
          },
          entity: 'foo',
          index: {
            PK: ['.age', '.name'],
            SK: ['#nice', '.age'],
            field: '_id',
            name: 'foo',
          },
        },
      ],
      valid: false,
    });
  });

  describe('relatedTo', () => {
    test('case 1', () => {
      const oneField = getDocumentIndexFields(
        { accountId: 1234, kind: 'phone', value: '+55119988788' },
        {
          entity: 'AccessType',
          indexes: [
            {
              name: 'kind',
              field: '_id',
              PK: ['.accountId'],
              SK: ['.kind', '.value'],
              relatedTo: 'Account',
            },
          ],
        }
      );

      expect(oneField).toEqual({
        error: null,
        firstIndex: {
          key: '_id',
          value: 'account:_id#741234≻accesstype↠phone#+55119988788',
        },
        indexFields: {
          _id: 'account:_id#741234≻accesstype↠phone#+55119988788',
          _idPK: '741234',
          _idSK: 'phone#+55119988788',
          id: '~!YWNjb3VudDpfaWQjNzQxMjM04om7YWNjZXNzdHlwZeKGoHBob25lIys1NTExOTk4ODc4OA==',
        },
        invalidFields: null,
        parsedIndexKeys: [
          {
            PK: {
              definition: ['.accountId'],
              parsed: expect.any(Object),
              requiredFields: ['accountId'],
            },
            SK: {
              definition: ['.kind', '.value'],
              parsed: expect.any(Object),
              requiredFields: ['kind', 'value'],
            },
            entity: 'accesstype',
            index: {
              PK: ['.accountId'],
              SK: ['.kind', '.value'],
              field: '_id',
              name: 'kind',
              relatedTo: 'account',
            },
          },
        ],
        valid: true,
        uniqIndexCondition: {
          $not: {
            $or: [
              {
                _id: 'account:_id#741234≻accesstype↠phone#+55119988788',
              },
            ],
          },
        },
      });
    });
  });
});
