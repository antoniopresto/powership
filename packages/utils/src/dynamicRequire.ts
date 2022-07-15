import { isProduction } from './env';

export function dynamicRequire(request: string, _module?: any) {
  try {
    if (_module) {
      return _module.require(request);
    } else {
      const req = typeof require === 'function' ? require : undefined;
      return req?.(request);
    }
  } catch (e) {
    if (!isProduction()) {
      console.warn(
        `dynamicRequire: failed to require "${request}".` +
          `This resource is not available in bundled code.`,

        {
          request,
          NodeModule: _module,
          require: typeof require !== undefined ? require : undefined,
        }
      );
    }
    return null;
  }
}
