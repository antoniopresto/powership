export interface UFO<V> {
  name: 'UFO';
  __isUFO: true;
  <NV>(handler: (value: V, _) => NV): UFO<NV>;
  (): V;
}

export function ufo<V>(current: V): UFO<V> {
  function result(...args: any[]) {
    if (typeof args[0] === 'function') {
      return ufo(args[0](current));
    }
    return current;
  }

  Object.defineProperties(result, {
    name: { value: 'UFO' },
    __isUFO: { value: true },
  });

  return result as UFO<V>;
}

ufo.is = isUFO;

export const $ = ufo;
export const ufos = ufo;

export function isUFO(input: any): input is UFO<unknown> {
  return input && typeof input === 'function' && input.__isUFO === true;
}
