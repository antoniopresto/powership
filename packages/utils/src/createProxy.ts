export type CreateProxyOptions<T> = {
  onGet?: <K extends keyof T>(field: K) => T[K] | null;
  onSet?: <K extends keyof T>(field: K, v: any) => true | null;
  onHas?: <K extends keyof T>(field: K) => boolean | null;
};

export function proxyRealValue<T>(obj: T): T {
  // @ts-ignore
  if (obj?.__proxyRealValue__) return obj.__proxyRealValue__;
  return obj;
}

export function createProxy<T extends Record<string, any>>(
  thunk: () => T,
  options?: CreateProxyOptions<T>,
): T {
  let data;

  let isResolved = false;
  const run = () => {
    if (isResolved) return data;
    isResolved = true;
    data = typeof thunk === 'function' ? thunk() : thunk;
    return data;
  };

  const proxy = new Proxy(
    {},
    {
      get(_o, k: any) {
        if (k === '__proxyRealValue__') return run();
        if (k === '__isBProxy__') return true;

        if (options?.onGet) {
          const res: any = options.onGet(k);
          if (res !== null) return res;
        }

        const realValue = run();

        return realValue[k];
      },
      set(_o, k: any, v: any) {
        if (options?.onSet) {
          const res: any = options.onSet(k, v);
          if (res !== null) return res;
        }
        run()[k] = v;
        return true;
      },
      has(_o, k: any) {
        if (options?.onHas) {
          const res: any = options.onHas(k);
          if (res !== null) return res;
        }
        return k in run();
      },
      deleteProperty(_o, k) {
        delete run()[k];
        return true;
      },
      ownKeys() {
        return Reflect.ownKeys(run());
      },
      defineProperty(_o, k, d: any) {
        return Object.defineProperty(run(), k, d);
      },
      // @ts-expect-error
      getOwnPropertyNames() {
        return Object.getOwnPropertyNames(run());
      },
      getOwnPropertyDescriptor(_o, k: any) {
        return Object.getOwnPropertyDescriptor(run(), k);
      },
    },
  );

  return proxy as any;
}
