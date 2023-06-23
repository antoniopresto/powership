import type { Options } from 'prettier';

declare global {
  const __webpack_require__: Function | undefined;
}

const IS_WEBPACK = typeof __webpack_require__ === 'function';

export function formatWithPrettier(
  source: string,
  options?: Options
): Promise<string> {
  if (IS_WEBPACK) return Promise.resolve(source);

  return import('prettier')
    .then((module) => module.format(source, options))
    .catch(() => source);
}
