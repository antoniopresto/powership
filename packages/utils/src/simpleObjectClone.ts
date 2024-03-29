import clone from 'fast-copy';

import { RuntimeError } from './RuntimeError';
import { proxyRealValue } from './createProxy';
import { sortObject } from './sortObject';

export function simpleObjectClone<T>(input: T, options = { sort: false }): T {
  input = proxyRealValue(input);
  const { sort } = options;
  if (!input || typeof input !== 'object') {
    throw new RuntimeError('input is not a valid object', { input });
  }

  try {
    if (input && typeof input === 'object') {
      input = { ...input };
    }
    const res = clone(input);
    return sort ? sortObject(res) : res;
  } catch (e: any) {
    debugger;
    throw new RuntimeError(
      'Failed to execute JSON.stringify() on input object',
      {
        input,
      }
    );
  }
}
