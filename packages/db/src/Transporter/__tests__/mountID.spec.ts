import {
  ID_KEY_SEPARATOR,
  mountGraphID,
  mountID,
  parseGraphID,
} from '../CollectionIndex';

describe('mountID', () => {
  it('1', async () => {
    const sut = mountID({ PK: 'abc', SK: '123', entity: 'batata' });
    expect(sut).toBe('batata#abc↠123');
  });

  it('2', async () => {
    const customer = mountID({ PK: 'fulano', SK: null, entity: 'user' });
    const store = mountID({ PK: 'abc', SK: 'stoId007', entity: 'store' });
    const product = mountID({ PK: store, SK: 'batata_sku', entity: 'product' });

    const cart_item = mountID({
      PK: [customer, store].join(ID_KEY_SEPARATOR),
      SK: product,
      entity: 'cart_item',
    });

    expect(cart_item).toBe(
      'cart_item#user\u0000#fulano\u0000↠\u0000#store\u0000#abc\u0000↠stoId007↠product\u0000#store\u0000\u0000#abc\u0000\u0000↠stoId007\u0000↠batata_sku'
    );

    const cart_item_by_store = mountID({
      PK: [customer, store].join(ID_KEY_SEPARATOR),
      SK: null,
      entity: 'cart_item',
    });

    expect(cart_item_by_store).toEqual(
      'cart_item#user\u0000#fulano\u0000↠\u0000#store\u0000#abc\u0000↠stoId007↠'
    );
  });

  describe('mountGraphID', () => {
    const indexConfig = {
      entity: 'users',
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
    } as const;

    test('1', () => {
      expect(() => mountGraphID({}, indexConfig)).toThrow(
        'Failed to mount document indexes.'
      );
    });

    test('2', () => {
      const id = mountGraphID({ name: 'antonio', age: 32 }, indexConfig);

      expect(id).toEqual('dXNlcnM6X2lkOnVzZXJzI2FudG9uaW/ihqA3MjMy');

      expect(parseGraphID(id)).toEqual({
        e: 'users',
        i: '_id',
        v: 'users#antonio↠7232',
      });
    });
  });
});
