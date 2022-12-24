export function dynamicRequire(request: string, _module?: NodeModule) {
  try {
    return _module!.require(request);
  } catch (e) {}

  try {
    const req = eval('require');
    return req(request);
  } catch (e) {}

  return null;
}
