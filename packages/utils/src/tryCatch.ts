import { assertError, ErrorWithStack } from './invariant';

export function tryCatch<T>(
  fn: () => T
): [T] extends [Promise<infer R>]
  ? Promise<[ErrorWithStack, null] | [null, R]>
  : [ErrorWithStack, null] | [null, T] {
  let isPromise = false;

  try {
    const result: any = fn();

    if (
      typeof result?.then === 'function' &&
      typeof result?.catch === 'function'
    ) {
      isPromise = true;
      return (async () => {
        return [null, await result] as any;
      })() as any;
    }

    return [null, result] as any;
  } catch (e) {
    assertError(e);
    if (isPromise) return Promise.resolve([e, null]) as any;
    return [e, null] as any;
  }
}
