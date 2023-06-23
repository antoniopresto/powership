import { MicroState } from '../MicroState';
import { AnyFunction } from '../typings';

describe('MicroState', () => {
  // afterEach();

  test('basic test', () => {
    const sut = new MicroState({ name: 'antonio' });
    expect(sut).toMatchObject({ value: { name: 'antonio' } });
    expect(sut.clone()).toMatchObject({ value: { name: 'antonio' } });
    expect(sut.clone()).not.toBe(sut);
  });

  test('set', () => {
    const sut = new MicroState({
      name: 'antonio',
      address: { street: 'avenida' },
    });

    sut.set('address.street', 'new street');

    expect(sut.clone().value).toEqual({
      address: {
        street: 'new street',
      },
      name: 'antonio',
    });
  });

  test('useState', () => {
    const sut = new MicroState({
      name: 'antonio',
      address: { street: 'avenida' },
    });

    let v: any;

    const React = {
      useEffect: (cb: AnyFunction) => {
        return cb();
      },
      useState: (cb) => {
        return [
          cb(),
          function setState(value: any) {
            v = value;
          },
        ];
      },
      useMemo: (cb) => {
        return cb();
      },
    };

    const useState = sut.createRook(React);

    expect(useState()).toEqual([
      {
        address: {
          street: 'avenida',
        },
        name: 'antonio',
      },
      expect.any(Function),
    ]);

    expect(useState('address.street')[0]).toEqual('avenida');

    sut.set('address.street', 'new street');

    expect(v).toEqual('new street');
    expect(useState('address.street')[0]).toEqual('new street');
  });

  test('useState: call only subscribers', () => {
    const sut = new MicroState({
      name: 'antonio',
      address: { street: 'avenida' },
    });

    let effects = 0;
    let v;
    const React = {
      useEffect: (cb: AnyFunction) => {
        ++effects;
        return cb();
      },
      useState: (cb) => {
        return [
          cb(),
          function setState(value: any) {
            v = value;
          },
        ];
      },
      useMemo: (cb) => {
        return cb();
      },
    };

    console.log(v);
    const useState = sut.createRook(React);

    const onChange = jest.fn();

    useState('address.street', onChange);

    sut.set('address.street', 'new street');

    expect(onChange).toBeCalledWith(
      'new street',
      expect.objectContaining({ subscriptionPath: 'address.street' })
    );

    // @ts-expect-error
    sut.set('x', 1);

    expect(onChange).toBeCalledTimes(1);

    expect(effects).toEqual(1);
  });
});
