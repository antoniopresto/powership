import type { Options } from 'prettier';
// @only-server
import { format } from 'prettier';

export async function formatWithPrettier(
  source: string,
  options?: Options
): Promise<string> {
  if (typeof format === 'function') {
    return format(source, options);
  }
  return source;
}
