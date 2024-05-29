const symbol = Symbol('__:: cacheable ::__');

export function cacheable<T>(self: object, evaluate: () => T, key?: string): T {
  if (!self || typeof self !== 'object') {
    throw new Error(`expected target to be an object.`);
  }

  const cache = (() => {
    if (self[symbol]) return self[symbol];
    const cx = Object.create(null);
    cx[symbol] = true;
    Object.defineProperty(self, symbol, {
      enumerable: false,
      configurable: false,
      get() {
        return cx;
      },
    });
    return cx;
  })();

  key = key || evaluate.toString(); // meh
  if (!key || key.endsWith(' { [native code] }')) {
    throw new Error(`invalid hash key: "${key}"`);
  }
  if (key in cache) return cache[key];
  return (cache[key] = evaluate());
}

cacheable.symbol = symbol;
