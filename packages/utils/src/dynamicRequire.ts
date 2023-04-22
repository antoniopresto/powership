import * as module from 'module';

/**
 * Requires a module which is protected against bundler minification.
 *
 * @param mod
 * @param {string} request
 */
export function dynamicRequire(request: string, mod?: NodeModule) {
  try {
    return mod!.require(request);
  } catch (e) {}

  try {
    // @ts-ignore
    const get = module.require;
    return get(request);
  } catch (e) {}

  return null;
}
