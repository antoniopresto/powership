import { getDocumentIndexFields } from '../DocumentIndex';

describe('createDocumentIndexMapper', () => {
  it('should mount PK', async () => {
    const sut = getDocumentIndexFields(
      { name: 'fulano', age: 5 },
      {
        entity: 'foo',
        indexes: [
          {
            field: '_id',
            PK: ['.name'],
            SK: ['.age'],
          },
          {
            field: '_id1',
            PK: ['.age'],
            SK: ['.name'],
          },
        ],
      }
    );

    expect(sut).toEqual({
      indexFields: {
        _id: 'foo#fulano↠715',
        _id1: 'foo#715↠fulano',
        _id1PK: '715',
        _id1SK: 'fulano',
        _idPK: 'fulano',
        _idSK: '715',
      },
      firstIndex: {
        key: '_id',
        value: 'foo#fulano↠715',
      },
      partialIndexFilter: {
        key: '_id',
        value: 'foo#fulano↠715',
      },
      invalidFields: null,
      error: null,
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
            field: '_id',
            PK: ['.age', '.name'],
            SK: ['#nice', '.age'],
          },
        ],
      }
    );

    expect(oneField).toEqual({
      indexFields: {
        _id: 'foo#5#NAME↠nice#5',
        _idPK: '5#NAME',
        _idSK: 'nice#5',
      },
      firstIndex: {
        key: '_id',
        value: 'foo#5#NAME↠nice#5',
      },
      partialIndexFilter: {
        key: '_id',
        value: 'foo#5#NAME↠nice#5',
      },
      invalidFields: null,
      error: null,
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
            field: '_id',
            PK: ['.age', '.name'],
            SK: ['#nice', '.age'],
          },
        ] as any,
      }
    );

    expect(oneField).toEqual({
      indexFields: null,
      firstIndex: null,
      partialIndexFilter: null,
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
      valid: false,
      error: expect.objectContaining({
        message: 'Failed to mount document indexes.',
      }),
    });
  });
});
