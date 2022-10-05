export function dynamicRequire(request: string, _module?: NodeModule) {
  try {
    return _module!.require(request);
  } catch (e) {}

  try {
    return require(request);
  } catch (e) {}

  return null;
}
