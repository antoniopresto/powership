export interface GetterAttributes {
  enumerable?: boolean; // default to true
  configurable?: boolean;
  writable?: boolean;
  cache?: boolean; // defaults to true
}

export interface GettersConfig<Parent, Value> extends GetterAttributes {
  get: (parent: Parent) => Value;
}

const defaults: GetterAttributes = {
  enumerable: true,
  configurable: true,
  cache: true,
};

export function defineGetters<O extends object, Extensions extends object = {}>(
  object: O,
  getters: {
    [K in keyof Extensions]:
      | ((parent: O) => Extensions[K])
      | GettersConfig<O, Extensions[K]>;
  },
  globalOptions?: GetterAttributes
): MergeGetters<O, Extensions> {
  let res: any = object;

  const cache = new Map();

  for (let p in getters) {
    const config = getters[p];

    const attributes = (() => {
      if (typeof config === 'function') {
        const cfg = {
          ...defaults,
          ...globalOptions,
        };
        return {
          ...cfg,
          enumerable: globalOptions?.enumerable !== false,
          get() {
            if (cfg.cache) {
              if (cache.has(p)) return cache.get(p);
            }
            return config(res);
          },
        };
      }

      const cfg: GetterAttributes = {
        ...defaults,
        ...globalOptions,
        ...config,
      };

      return {
        ...cfg,
        get() {
          if (cfg.cache) {
            if (cache.has(p)) return cache.get(p);
          }
          return config.get(res);
        },
      };
    })();

    Object.defineProperty(res, p, attributes);
  }

  return res;
}

export type MergeGetters<O, Extensions> = {
  [K in keyof O as K extends keyof Extensions ? never : K]: O[K];
} & {
  [K in keyof Extensions]: Extensions[K];
} extends infer R
  ? { [K in keyof R]: R[K] } & {}
  : never;
