import type { Options } from 'prettier';

import { AnyFunction } from './typings';

export async function formatWithPrettier(
  source: string,
  options?: Options
): Promise<string> {
  if (formatWithPrettier.prettier) {
    return formatWithPrettier.prettier.format(source, options);
  }
  return source;
  // webpack is not my friend
  // if (IS_WEBPACK) return Promise.resolve(source);
  // return import('prettier')
  //   .then((module) => module.format(source, options))
  //   .catch(() => source);
}

formatWithPrettier.prettier = undefined as undefined | { format: AnyFunction };

export function setPrettier<Prettier extends { format: AnyFunction }>(
  prettier: Prettier
) {
  formatWithPrettier.prettier = prettier;
}
