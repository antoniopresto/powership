import { createIndexToIDHelpers } from '../CollectionIndex';

describe('mountID', () => {
  test('simple', async () => {
    const sut = createIndexToIDHelpers({
      entity: 'users',
      PKEscapedString: 'abc',
      SKEscapedString: '123',
      indexConfig: {
        name: '_id',
        field: '_id',
        PK: [],
        SK: [],
      },
      relatedTo: undefined,
    });

    expect(sut).toEqual({
      mountRelationCondition: expect.any(Function),
      PKPart: 'users:_id#abc»',
      PKPartWithoutPKSKSeparator: 'users:_id#abc',
      SKPart: '123',
      documentIndexFields: {
        _e: 'users',
        _id: 'users:_id#abc»123',
        _idPK: 'users:_id#abc»',
        _idSK: '123',
      },
      fullID: 'users:_id#abc»123',
      graphID: '~!dXNlcnM6X2lkI2FiY8K7MTIz',
    });
  });

  test('as child index', async () => {
    const sut = createIndexToIDHelpers({
      entity: 'banana',
      PKEscapedString: 'abc',
      SKEscapedString: '123',
      indexConfig: {
        name: '_id',
        field: '_id',
        PK: [],
        SK: [],
      },
      relatedTo: 'fruits',
    });

    expect(sut).toEqual({
      mountRelationCondition: expect.any(Function),
      PKPart: 'fruits:_id#abc»banana«',
      PKPartWithoutPKSKSeparator: 'fruits:_id#abc',
      SKPart: '123',
      documentIndexFields: {
        _e: 'banana',
        _id: 'fruits:_id#abc»banana«123',
        _idPK: 'fruits:_id#abc»banana«',
        _idSK: '123',
        _rt: ['fruits:_id#abc»'],
      },
      fullID: 'fruits:_id#abc»banana«123',
      graphID: '~!ZnJ1aXRzOl9pZCNhYmPCu2JhbmFuYcKrMTIz',
    });
  });
});
