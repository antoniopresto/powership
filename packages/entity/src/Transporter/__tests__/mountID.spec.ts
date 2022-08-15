import { ID_KEY_SEPARATOR, mountID } from '../CollectionIndex';

describe('mountID', () => {
  it('1', async () => {
    const sut = mountID({
      entity: 'users',
      PK: 'abc',
      SK: '123',
      indexField: 'batata',
    });
    expect(sut).toBe('users:batata#abc↠123');
  });

  it('2', async () => {
    const customer = mountID({
      entity: 'users',
      PK: 'fulano',
      SK: null,
      indexField: '_id',
    });

    const store = mountID({
      entity: 'store',
      PK: 'abc',
      SK: 'stoId007',
      indexField: '_id',
    });

    const product = mountID({
      entity: 'product',
      PK: store,
      SK: 'batata_sku',
      indexField: '_id',
    });

    const cart_item = mountID({
      entity: 'cart_item',
      PK: [customer, store].join(ID_KEY_SEPARATOR),
      SK: product,
      indexField: '_id',
    });

    expect(cart_item).toBe(
      'cart_item:_id#users:_id #fulano ↠ #store:_id #abc ↠stoId007↠product:_id #store:_id  #abc  ↠stoId007 ↠batata_sku'
    );

    const cart_item_by_store = mountID({
      entity: 'cart_item',
      PK: [customer, store].join(ID_KEY_SEPARATOR),
      SK: null,
      indexField: '_id',
    });

    expect(cart_item_by_store).toEqual(
      'cart_item:_id#users:_id #fulano ↠ #store:_id #abc ↠stoId007↠'
    );
  });
});
