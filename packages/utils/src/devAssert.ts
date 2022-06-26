import { RuntimeError } from './RuntimeError';

export function devAssert(message: string, details?: Record<string, any>): any {
  if (details) {
    throw new RuntimeError(message, details);
  }
  throw new Error(message);
}
