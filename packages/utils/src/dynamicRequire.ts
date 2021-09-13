import { isBrowser } from './isBrowser';

export function dynamicRequire(request: string) {
  if (isBrowser() || typeof module?.require !== 'function') return null;
  return module.require(request);
}
