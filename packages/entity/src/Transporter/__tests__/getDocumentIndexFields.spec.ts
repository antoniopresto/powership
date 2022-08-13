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
        value: 'foo#fulano↠715',
      },
      indexFields: {
        _id: 'foo#fulano↠715',
        _id1: 'foo#715↠fulano',
        _id1PK: '715',
        _id1SK: 'fulano',
        _idPK: 'fulano',
        _idSK: '715',
        id: expect.any(String)
      },
      invalidFields: null,
      parsedIndexKeys: [
        {
          PK: {
            definition: ['.name'],
            requiredFields: ['name'],
          },
          SK: {
            definition: ['.age'],
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
            requiredFields: ['age'],
          },
          SK: {
            definition: ['.name'],
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
      partialIndexFilter: {
        key: '_id',
        value: 'foo#fulano↠715',
      },
      valid: true,
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
        value: 'foo#5\u0000#NAME↠nice#5',
      },
      indexFields: {
        _id: 'foo#5\u0000#NAME↠nice#5',
        _idPK: '5#NAME',
        _idSK: 'nice#5',
        id: expect.any(String)
      },
      invalidFields: null,
      parsedIndexKeys: [
        {
          PK: {
            definition: ['.age', '.name'],
            requiredFields: ['age', 'name'],
          },
          SK: {
            definition: ['#nice', '.age'],
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
      partialIndexFilter: {
        key: '_id',
        value: 'foo#5\u0000#NAME↠nice#5',
      },
      valid: true,
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
            requiredFields: ['age', 'name'],
          },
          SK: {
            definition: ['#nice', '.age'],
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
      partialIndexFilter: null,
      valid: false,
    });
  });
});
