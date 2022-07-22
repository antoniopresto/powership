import { RuntimeError } from './RuntimeError';
import { areEqual } from './areEqual';
import { dynamicRequire } from './dynamicRequire';

const jestDiff = dynamicRequire(
  'jest-diff',
  module
) as typeof import('jest-diff');

export function assertSame<A>(message: string, a: A, b: any): asserts b is A {
  if (!areEqual(a, b)) {
    if (jestDiff) {
      console.info(jestDiff.diff(a, b));
    }

    throw new RuntimeError(message, {
      expected: a,
      actual: b,
    });
  }
}
