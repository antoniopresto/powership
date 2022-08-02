import { createDocumentIndexMapper } from '../DocumentIndex';

describe('createDocumentIndexMapper', () => {
  it('should mount PK', async () => {
    const oneField = createDocumentIndexMapper({
      indices: [
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
    });

    expect(oneField({ name: 'fulano', age: 5 })).toEqual({
      indexFields: {
        _id: 'fulano↠715',
        _id1: '715↠fulano',
      },
      firstIndex: {
        key: '_id',
        value: 'fulano↠715',
      },
      invalidFields: null,
      error: null,
      valid: true,
    });
  });

  it('should mount PK + SK', async () => {
    const oneField = createDocumentIndexMapper({
      indices: [
        {
          field: '_id',
          PK: ['.age', '.name'],
          SK: ['#nice', '.age'],
        },
      ],
    });

    expect(oneField({ name: 'NAME', age: 0 })).toEqual({
      indexFields: {
        _id: '5#NAME↠nice#5',
      },
      firstIndex: {
        key: '_id',
        value: '5#NAME↠nice#5',
      },
      invalidFields: null,
      error: null,
      valid: true,
    });
  });

  it('should throw on missing fields', async () => {
    const oneField = createDocumentIndexMapper({
      indices: [
        {
          field: '_id',
          PK: ['.age', '.name'],
          SK: ['#nice', '.age'],
        },
      ],
    });

    expect(oneField({ name: '' })).toEqual({
      indexFields: null,
      firstIndex: null,
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

  it('should convert filter.$eq to corresponding value', async () => {
    const oneField = createDocumentIndexMapper({
      indices: [
        {
          field: '_id',
          PK: ['#batata', '.name'],
        },
      ],
    });

    expect(oneField({ name: { $eq: 'fulano' } })).toEqual({
      error: null,
      firstIndex: {
        key: '_id',
        value: 'batata#fulano↠',
      },
      indexFields: {
        _id: 'batata#fulano↠',
      },
      invalidFields: null,
      valid: true,
    });
  });
});
