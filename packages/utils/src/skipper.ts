export function skipper<T>(callback: (skip: (value: T) => T) => T): T {
  const symbol = Symbol('SKIP');

  try {
    return callback((value) => {
      throw [symbol, value];
    });
  } catch (e: any) {
    if (Array.isArray(e) && e[0] === symbol) return e[1];
    throw e;
  }
}
