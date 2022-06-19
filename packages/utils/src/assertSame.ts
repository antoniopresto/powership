import { objectDiff } from './objectDiff';

export function assertSame<A>(message: string, a: A, b: any): asserts b is A {
  const diff = objectDiff(a, b);
  if (!diff) return;
  if (diff.indexOf('Compared values have no visual difference.') !== -1) return;

  throw new Error(`${message}\nDifference:\n\n${diff}`);
}
