import { State } from '../State';

describe('State', () => {
  test('Constructor', () => {
    const initialState = { counter: 0 };
    const state = new State(initialState);

    expect(state.get('counter')).toEqual(0);
  });

  test('Set value', () => {
    const initialState = { counter: 0 };
    const state = new State(initialState);
    state.set('counter', 1);

    expect(state.get('counter')).toEqual(1);
  });

  test('Subscribe to updates', async () => {
    const initialState = { counter: 0 };
    const state = new State(initialState);
    const callback = jest.fn();

    state.subscribe('counter', callback);
    state.set('counter', 1);

    await new Promise((resolve) => setTimeout(resolve, 10));
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('Unsubscribe from updates', async () => {
    const initialState = { counter: 0 };
    const state = new State(initialState);
    const callback = jest.fn();

    const subscription = state.subscribe('counter', callback);
    subscription.unsubscribe();
    state.set('counter', 1);

    await new Promise((resolve) => setTimeout(resolve, 10));
    expect(callback).toHaveBeenCalledTimes(0);
  });

  test('Nested object updates', () => {
    const initialState = { data: { counter: 0 } };
    const state = new State(initialState);
    state.set('data.counter', 1);

    expect(state.get('data.counter')).toEqual(1);
  });

  test('Array updates', () => {
    const initialState = {
      array: [0, 1, 2],
    };
    const state = new State(initialState);
    state.set('array.1', 5);

    expect(state.get('array.1')).toEqual(5);
  });

  test('Multiple subscribers', async () => {
    const initialState = { counter: 0 };
    const state = new State(initialState);
    const callback1 = jest.fn();
    const callback2 = jest.fn();

    state.subscribe('counter', callback1);
    state.subscribe('counter', callback2);
    state.set('counter', 1);

    await new Promise((resolve) => setTimeout(resolve, 10));
    expect(callback1).toHaveBeenCalledTimes(1);
    expect(callback2).toHaveBeenCalledTimes(1);
  });

  test('No unnecessary updates', async () => {
    const initialState = { counter: 0 };
    const state = new State(initialState);
    const callback = jest.fn();

    state.subscribe('counter', callback);
    state.set('counter', 0);

    await new Promise((resolve) => setTimeout(resolve, 10));
    expect(callback).toHaveBeenCalledTimes(0);
  });

  test('History limit', () => {
    const initialState = { counter: 0 };
    const state = new State(initialState, { historyLimit: 5 });

    for (let i = 1; i <= 10; i++) {
      state.setImmediate('counter', i);
    }

    // @ts-ignore
    expect(state.history.length).toEqual(5);
  });

  test('Queue limit and flush', async () => {
    const initialState = { counter: 0 };
    const state = new State(initialState, { queueLimit: 2, flushDelay: 1 });
    const callback = jest.fn();

    state.subscribe('counter', callback);
    state.set('counter', 1);
    state.set('counter', 2);

    await new Promise((resolve) => setTimeout(resolve, 10));
    expect(callback).toHaveBeenCalledTimes(1);
    expect(state.get('counter')).toEqual(2);
  });

  test('Apply state updates', () => {
    const initialState = { counter: 0 };
    const state = new State(initialState);
    state.set({ counter: 2 });

    expect(state.get('counter')).toEqual(2);
  });

  test('Nested object subscribe', async () => {
    const initialState = { data: { counter: 0 } };
    const state = new State(initialState);
    const callback = jest.fn();

    state.subscribe('data.counter', callback);
    state.set('data.counter', 1);

    await new Promise((resolve) => setTimeout(resolve, 10));
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('Deep nested object updates', () => {
    const initialState = { data: { nested: { counter: 0 } } };
    const state = new State(initialState);
    state.set('data.nested.counter', 1);

    expect(state.get('data.nested.counter')).toEqual(1);
  });

  test('Update array with objects', () => {
    const initialState = {
      items: [
        { id: 1, value: 10 },
        { id: 2, value: 20 },
      ],
    };
    const state = new State(initialState);
    state.set('items.0.value', 15 as any);

    expect(state.get('items.0.value')).toEqual(15);
  });

  test('Subscribe to array item updates', async () => {
    const initialState = {
      items: [0, 1, 2],
    };
    const state = new State(initialState);
    const callback = jest.fn();

    state.subscribe('items.1', callback);
    state.set('items.1', 5);

    await new Promise((resolve) => setTimeout(resolve, 10));
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('Subscribe to array updates', async () => {
    const initialState = {
      items: [0, 1, 2],
    };
    const state = new State(initialState);
    const callback = jest.fn();

    state.subscribe('items', callback);
    state.set('items.1', 5);

    await new Promise((resolve) => setTimeout(resolve, 10));
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('Flush delay', async () => {
    const initialState = { counter: 0 };
    const state = new State(initialState, { flushDelay: 100 });
    const callback = jest.fn();

    state.subscribe('counter', callback);
    state.set('counter', 1);

    await new Promise((resolve) => setTimeout(resolve, 50));
    expect(callback).toHaveBeenCalledTimes(0);

    await new Promise((resolve) => setTimeout(resolve, 100));
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('Subscribe to any state change', async () => {
    const initialState = { counter: 0, data: { nested: { value: 1 } } };
    const state = new State(initialState);
    const callback = jest.fn();

    state.subscribe(callback);
    state.set('counter', 1);

    await new Promise((resolve) => setTimeout(resolve, 10));
    expect(callback).toHaveBeenCalledTimes(1);

    state.set('data.nested.value', 2);

    await new Promise((resolve) => setTimeout(resolve, 10));
    expect(callback).toHaveBeenCalledTimes(2);
  });

  test('should revert to the previous state after calling undo', () => {
    const initialState = { counter: 0 };
    const state = new State(initialState);

    state.set('counter', 1);
    state.undo();

    expect(state.get('counter')).toBe(initialState.counter);
  });

  test('should work correctly with multiple states', () => {
    const initialState = { counter: 0 };
    const state = new State(initialState);

    state.setImmediate('counter', 1);
    state.setImmediate('counter', 2);
    state.undo();
    state.undo();

    expect(state.get('counter')).toBe(initialState.counter);
  });

  // Teste 3: Verificar se o método undo funciona corretamente com um stateId específico
  test('should work correctly with a specific stateId', () => {
    const initialState = { counter: 0, letter: 'a' };
    const state = new State(initialState);

    state.setImmediate('letter', 'b');
    state.setImmediate('counter', 1);
    state.setImmediate('counter', 2);

    const stateId2 = state.stateId; // counter is 2 and letter is b

    state.setImmediate('letter', 'c');
    state.setImmediate('counter', 3);
    state.setImmediate('letter', 'x');
    state.setImmediate('counter', 9);

    state.goto(stateId2);

    expect(state.current).toEqual({ counter: 2, letter: 'b' });
  });
});
