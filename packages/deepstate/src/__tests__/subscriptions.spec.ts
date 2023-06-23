import { DeepState } from '../DeepState';
import { SubscriptionContext } from '../interfaces/DeepState';

describe('subscriptions', () => {
  // afterEach();

  const getSut = () =>
    new DeepState(
      't1',
      {
        name: 'string',
        address: {
          object: {
            street: 'string',
          },
          optional: true,
        },
      },
      () => ({ name: '-' })
    );

  test('basic test', () => {
    const sut = getSut();
    expect(typeof sut.subscribe).toEqual('function');
    expect(sut.subscriptions).toEqual(new Set());
    const unsubscribe = sut.subscribe('', () => {});
    expect(typeof unsubscribe).toEqual('function');
    expect(sut.subscriptions.size).toEqual(1);
    unsubscribe();
    expect(sut.subscriptions.size).toEqual(0);
  });

  test('context', () => {
    const sut = getSut();
    let context!: SubscriptionContext<any, any, any>;
    let newValue;

    sut.subscribe('', (nv, ctx) => {
      newValue = nv;
      context = ctx;
    });

    sut.set('name', 'Antonio');

    expect(newValue).toEqual('Antonio');

    expect(context.affected('name')).toEqual({
      newValue: 'Antonio',
      oldValue: '-',
    });

    expect(context).toEqual({
      affected: expect.any(Function),
      differences: [
        {
          action: 'update',
          newValue: 'Antonio',
          oldValue: '-',
          pathParts: ['name'],
        },
      ],
      newValue: 'Antonio',
      oldValue: '-',
      set: expect.any(Function),
      subscriptionPath: '',
    });
  });

  test('unsubscribe', () => {
    const sut = getSut();
    let context;

    const unsubscribe = sut.subscribe('', (_, ctx) => {
      context = ctx;
    });

    sut.set('name', 'Antonio');
    sut.set('name', 'Rafaela');

    const exopected1 = {
      set: expect.any(Function),
      affected: expect.any(Function),
      differences: [
        {
          action: 'update',
          newValue: 'Rafaela',
          oldValue: 'Antonio',
          pathParts: ['name'],
        },
      ],
      newValue: 'Rafaela',
      oldValue: 'Antonio',
      subscriptionPath: '',
    };
    expect(context).toEqual(exopected1);

    unsubscribe();

    sut.set('name', 'Maggie');

    // not changed
    expect(context).toEqual(exopected1);

    expect(sut.subscriptions.size).toEqual(0);
  });

  test('diff sub paths from root subscription', () => {
    const sut = getSut();
    let context;
    let addressContext;

    sut.subscribe('', (_, ctx) => {
      context = ctx;
    });

    sut.subscribe('address', (_, ctx) => {
      addressContext = ctx;
    });

    sut.set('address.street', 'Maggie Avenue');

    expect(context).toEqual({
      affected: expect.any(Function),
      differences: [
        {
          action: 'add',
          newValue: {
            street: 'Maggie Avenue',
          },
          pathParts: ['address'],
        },
      ],
      oldValue: undefined,
      newValue: {
        street: 'Maggie Avenue',
      },
      set: expect.any(Function),
      subscriptionPath: '',
    });

    expect(addressContext).toEqual({
      affected: expect.any(Function),
      set: expect.any(Function),
      differences: [
        {
          action: 'add',
          newValue: {
            street: 'Maggie Avenue',
          },
          pathParts: ['address'],
        },
      ],
      newValue: { street: 'Maggie Avenue' },
      subscriptionPath: 'address',
    });
  });

  test('diff sub paths from sub path with child', () => {
    const sut = getSut();
    let context;

    sut.subscribe('address.street', (_, ctx) => {
      context = ctx;
    });

    sut.set('address', { street: 'Maggie Avenue' });

    expect(context).toEqual({
      affected: expect.any(Function),
      differences: [
        {
          action: 'add',
          newValue: 'Maggie Avenue',
          pathParts: ['address', 'street'],
        },
      ],
      newValue: 'Maggie Avenue',
      set: expect.any(Function),
      subscriptionPath: 'address.street',
    });
  });
});
