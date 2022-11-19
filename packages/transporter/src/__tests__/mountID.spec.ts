import { createIndexToIDHelpers } from '../CollectionIndex';

describe('mountID', () => {
  test('simple', async () => {
    const sut = createIndexToIDHelpers({
      entity: 'users',
      PKEscapedString: 'abc',
      SKEscapedString: '123',
      indexField: '_id',
      relatedTo: undefined,
    });

    expect(sut).toEqual({
      mountRelationCondition: expect.any(Function),
      PKPart: 'users:_id#abc↠',
      PKPartWithoutPKSKSeparator: 'users:_id#abc',
      SKPart: '123',
      documentIndexFields: {
        _id: 'users:_id#abc↠123',
        _idPK: 'abc',
        _idSK: '123',
      },
      fullID: 'users:_id#abc↠123',
      graphID: '~!dXNlcnM6X2lkI2FiY+KGoDEyMw==',
      prefix: 'users:_id',
    });
  });

  test('as child index', async () => {
    const sut = createIndexToIDHelpers({
      entity: 'banana',
      PKEscapedString: 'abc',
      SKEscapedString: '123',
      indexField: '_id',
      relatedTo: 'fruits',
    });

    expect(sut).toEqual({
      mountRelationCondition: expect.any(Function),
      PKPart: 'fruits:_id#abc≻banana↠',
      PKPartWithoutPKSKSeparator: 'fruits:_id#abc≻banana',
      SKPart: '123',
      documentIndexFields: {
        _id: 'fruits:_id#abc≻banana↠123',
        _idPK: 'abc',
        _idSK: '123',
      },
      fullID: 'fruits:_id#abc≻banana↠123',
      graphID: '~!ZnJ1aXRzOl9pZCNhYmPiibtiYW5hbmHihqAxMjM=',
      prefix: 'fruits:_id',
    });
  });
});
