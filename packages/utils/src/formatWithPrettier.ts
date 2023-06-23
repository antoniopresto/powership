import type { Options } from 'prettier';

import { AnyFunction } from './typings';

export async function formatWithPrettier(
  source: string,
  options?: Options
): Promise<string> {
  const prettier = await dynamicRequire<typeof import('prettier')>('prettier');
  return prettier.format(source, options);
}

async function dynamicRequire<T = any>(name: string): Promise<T> {
  // @only-server
  const text = `import('${name}');`;
  /**
   * Using "eval" to prevent webpack warning
   * about "Import trace for requested module"
   */
  // @only-server
  return await eval(text);
}
