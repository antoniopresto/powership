import { RuntimeError } from './RuntimeError';

export function devAssert(
  message: string,
  details?: Record<string, any>,
  options?: {
    skipStackLines?: number;
    depth: number;
  },
): any {
  if (details) {
    throw new RuntimeError(
      message,
      details,

      options?.skipStackLines,
      options?.depth,
    );
  }
  throw new Error(message);
}
