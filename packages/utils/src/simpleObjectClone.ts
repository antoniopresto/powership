import clone from 'fast-copy';

import { RuntimeError } from './RuntimeError';

export function simpleObjectClone<T>(input: T): T {
  if (!input || typeof input !== 'object') {
    throw new RuntimeError('input is not a valid object', { input });
  }

  try {
    return clone(input);
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
