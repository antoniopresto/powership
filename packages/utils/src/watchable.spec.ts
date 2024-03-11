import { watchable } from './watchable';

describe('watchable', () => {
  test('should delay execution until accessed', async () => {
    let executed = false;
    const watchableFunction = watchable(() => {
      executed = true;
      return { message: 'Hello World' };
    });

    expect(executed).toBe(false);

    expect(watchableFunction.message).toBe('Hello World');
    expect(executed).toBe(true);
  });

  test('should handle promise results properly', async () => {
    const asyncFunction = watchable(
      () =>
        new Promise<{ message: string }>((resolve) =>
          setTimeout(() => resolve({ message: 'Async Hello World' }), 100)
        )
    );

    expect(asyncFunction.then).toBeDefined();
    const data = await asyncFunction;
    expect(data.message).toBe('Async Hello World');
  });

  test('should allow access to the current value', () => {
    const watchableFunction = watchable(() => {
      return { message: 'Current Value' };
    });

    // before access
    expect(watchableFunction.current()).toBeUndefined();

    // force run
    expect(watchableFunction.message).toBe('Current Value');

    // after access
    expect(watchableFunction.current()).toEqual({ message: 'Current Value' });
  });

  test('should throw if trying to access rejected promise', async () => {
    const failingFunction = watchable(
      () =>
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Failed')), 100)
        )
    );

    let err: any = undefined;
    try {
      await failingFunction;
    } catch (error: any) {
      err = error;
    }

    expect(err).toBeInstanceOf(Error);
    expect(err.message).toBe('Failed');
  });

  test('should resolve subscribers in the order they were added', async () => {
    const asyncFunction = watchable(
      () =>
        new Promise((resolve) =>
          setTimeout(() => resolve({ value: 'Ordered' }), 100)
        )
    );

    const results: string[] = [];

    asyncFunction.then(() => results.push('first'));
    asyncFunction.then(() => results.push('second'));

    await new Promise((resolve) => setTimeout(resolve, 200)); // Espera a resolução

    expect(results).toEqual(['first', 'second']);

    expect(await asyncFunction).toEqual({
      value: 'Ordered',
    });

    expect(await asyncFunction).toEqual({
      value: 'Ordered',
    });
  });
});
