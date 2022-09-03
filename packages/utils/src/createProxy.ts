export type CreateProxyOptions<T> = {
  onGet?: <K extends keyof T>(field: K) => T[K] | null;
  onSet?: <K extends keyof T>(field: K, v: any) => true | null;
  onHas?: <K extends keyof T>(field: K) => boolean | null;
};

export function createProxy<T extends Record<string, any>>(
  thunk: () => T,
  options?: CreateProxyOptions<T>
): T {
  const data = {} as any;
  let isResolved = false;
  const getFC: any = () => {
    if (!isResolved) {
      isResolved = true;
      const tmp = typeof thunk === 'function' ? thunk() : thunk;
      Object.keys(tmp).forEach((k) => {
        data[k] = tmp[k];
      });
    }
    return data;
  };

  const proxy = new Proxy(data, {
    get(_o, k: any) {
      if (options?.onGet) {
        const res: any = options.onGet(k);
        if (res !== null) return res;
      }
      return getFC()[k];
    },
    set(_o, k: any, v: any) {
      if (options?.onSet) {
        const res: any = options.onSet(k, v);
        if (res !== null) return res;
      }
      getFC()[k] = v;
      return true;
    },
    has(_o, k: any) {
      if (options?.onHas) {
        const res: any = options.onHas(k);
        if (res !== null) return res;
      }
      return k in getFC();
    },
    deleteProperty(_o, k) {
      delete getFC()[k];
      return true;
    },
    ownKeys() {
      return Reflect.ownKeys(getFC());
    },
    defineProperty(_o, k, d: any) {
      return Object.defineProperty(getFC(), k, d);
    },
    // @ts-expect-error
    getOwnPropertyNames() {
      return Object.getOwnPropertyNames(getFC());
    },
    getOwnPropertyDescriptor(_o, k: any) {
      return Object.getOwnPropertyDescriptor(getFC(), k);
    },
  });

  return proxy as any;
}
