import type { Options } from 'prettier';

export function formatWithPrettier(
  source: string,
  options?: Options
): Promise<string> {
  return import('prettier')
    .then((module) => module.format(source, options))
    .catch(() => source);
}
