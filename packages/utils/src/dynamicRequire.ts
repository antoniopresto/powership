import { isBrowser } from './isBrowser';

export function dynamicRequire(request: string, module?: any) {
  if (isBrowser() || typeof module?.require !== 'function') return null;
  return module.require(request);
}
