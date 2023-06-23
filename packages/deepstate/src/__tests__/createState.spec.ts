import { createType } from '@powership/schema';
import { AnyRecord, getTypeName } from '@powership/utils';
import { DeepState } from '../DeepState';
import { DeepStateBase } from '../interfaces/DeepState';

describe('get', () => {
  // afterEach();

  test('implementation', () => {
    const sut = new DeepState(
      't1',
      {
        name: 'string',
        age: 'int?',
      },
      () => ({ name: '' })
    );

    const expectedShape: { [K in keyof DeepStateBase<any>]: string } = {
      call: 'Function',
      doc: 'Doc',
      get: 'Function',
      subscribe: 'Function',
      isDeepState: 'Boolean',
      map: 'YMap',
      methods: 'Function',
      resolvers: 'Function',
      schema: 'ObjectType',
      set: 'Function',
      state: 'Object',
      subscriptions: 'Set',
      symbol: 'Symbol',
      unsubscribe: 'Function',
      updateMany: 'Function',
    };

    const current = Object.keys(expectedShape).reduce<AnyRecord>((acc, key) => {
      return { ...acc, [key]: getTypeName(sut[key]) };
    }, {});

    expect(current).toEqual(expectedShape);
  });

  test('basic test', () => {
    const sut = new DeepState(
      't1',
      {
        name: 'string',
        age: 'int?',
      },
      () => ({ name: '' })
    );

    const obj = createType({ object: { a: 'string' } });

    expect(obj.constructor.name).toEqual('GraphType');
    expect(sut.constructor.name).toEqual('DeepState');

    expect(sut).toHaveProperty('get');
    expect(sut).toHaveProperty('shape');
    expect(sut.isDeepState).toEqual(true);
  });
});
