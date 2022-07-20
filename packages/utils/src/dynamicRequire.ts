import { isProduction } from './env';

export function dynamicRequire(request: string, _module?: NodeModule) {
  try {
    return _module!.require(request);
  } catch (e) {}

  try {
    return require(request);
  } catch (e) {}

  if (!isProduction()) {
    console.warn(
      `dynamicRequire: failed to require "${request}".` +
        `This resource may not be available in bundled code.`
    );
  }
  return null;
}
