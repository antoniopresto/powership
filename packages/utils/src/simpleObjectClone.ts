import { RuntimeError } from './RuntimeError';

export function simpleObjectClone<T>(input: T): T {
  if (!input || typeof input !== 'object') {
    throw new RuntimeError('input is not a valid object', { input });
  }

  try {
    return JSON.parse(JSON.stringify(input));
  } catch (e: any) {
    throw new RuntimeError(
      'Failed to execute JSON.stringify() on input object',
      {
        input,
      }
    );
  }
}
