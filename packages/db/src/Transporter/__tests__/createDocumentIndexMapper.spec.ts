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
      indexes: {
        _id: 'fulano↠715',
        _id1: '715↠fulano',
      },
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
      indexes: {
        // '.age', '.name' + '#nice', '.age'
        _id: '5#NAME↠nice#5',
      },
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

    expect(() => oneField({})).toThrow(
      'Failed to mount index: Field "age" expected string or number, found undefined. Field "name" expected string or number, found undefined.'
    );
  });
});
