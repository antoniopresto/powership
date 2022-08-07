import { ID_KEY_SEPARATOR, mountID } from '../CollectionIndex';

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
      'cart_item#user\\#fulano\\↠\\#store\\#abc\\↠stoId007↠product\\#store\\\\#abc\\\\↠stoId007\\↠batata_sku'
    );

    const cart_item_by_store = mountID({
      PK: [customer, store].join(ID_KEY_SEPARATOR),
      SK: null,
      entity: 'cart_item',
    });

    expect(cart_item_by_store).toEqual(
      'cart_item#user\\#fulano\\↠\\#store\\#abc\\↠stoId007↠'
    );
  });
});
