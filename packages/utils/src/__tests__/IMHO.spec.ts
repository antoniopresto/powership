import { IMO } from '../IMO';

xdescribe('IMO', () => {
  test('Constructor', () => {
    const initialState = { counter: 0 };
    const imo = new IMO(initialState);

    expect(imo.get('counter')).toEqual(0);
  });

  test('Set value', () => {
    const initialState = { counter: 0 };
    const imo = new IMO(initialState);
    imo.set('counter', 1);

    expect(imo.get('counter')).toEqual(1);
  });

  test('Subscribe to updates', async () => {
    const initialState = { counter: 0 };
    const imo = new IMO(initialState);
    const callback = jest.fn();

    imo.subscribe('counter', callback);
    imo.set('counter', 1);

    await new Promise((resolve) => setTimeout(resolve, 10));
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('Nested object updates', () => {
    const initialState = { data: { counter: 0 } };
    const imo = new IMO(initialState);
    imo.set('data.counter', 1);

    expect(imo.get('data.counter')).toEqual(1);
  });

  test('Array updates', () => {
    const initialState = {
      array: [0, 1, 2],
    };
    const imo = new IMO(initialState);
    imo.set('array.1', 5);

    expect(imo.get('array.1')).toEqual(5);
  });

  test('Multiple subscribers', async () => {
    const initialState = { counter: 0 };
    const imo = new IMO(initialState);
    const callback1 = jest.fn();
    const callback2 = jest.fn();

    imo.subscribe('counter', callback1);
    imo.subscribe('counter', callback2);
    imo.set('counter', 1);

    await new Promise((resolve) => setTimeout(resolve, 10));
    expect(callback1).toHaveBeenCalledTimes(1);
    expect(callback2).toHaveBeenCalledTimes(1);
  });

  test('History limit', () => {
    const initialState = { counter: 0 };
    const imo = new IMO(initialState, { historyLimit: 5 });

    for (let i = 1; i <= 10; i++) {
      imo.set('counter', i);
    }

    // @ts-ignore
    expect(imo.history.length).toEqual(5);
  });

  test('JSON representation', () => {
    const initialState = { counter: 0, data: { nested: { value: 1 } } };
    const imo = new IMO(initialState);

    imo.set('counter', 1);
    imo.set('data.nested.value', 2);

    expect(imo.toJSON()).toEqual({
      counter: 1,
      data: { nested: { value: 2 } },
    });
  });

  test('Undo', () => {
    const initialState = { counter: 0 };
    const imo = new IMO(initialState);

    imo.set('counter', 1);
    imo.undo();

    expect(imo.get('counter')).toEqual(0);
  });
});
