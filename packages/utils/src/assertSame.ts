import { RuntimeError } from './RuntimeError';
import { areEqual } from './areEqual';

export function assertSame<A>(message: string, a: A, b: any): asserts b is A {
  if (!areEqual(a, b)) {
    throw new RuntimeError(message, {
      expected: a,
      actual: b,
    });
  }
}
