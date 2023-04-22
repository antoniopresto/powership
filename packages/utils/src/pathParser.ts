import { LRU, LRUOptions } from './LRU';
import { Diff, getDiff } from './diff/diff';
import { pick } from './pick';
import { PathType } from './typings';

export type PathParser<Path extends string = string> = {
  readonly list: ReadonlyArray<string>;
  readonly affected: Set<string>;
  readonly affectedList: ReadonlyArray<string>;
  readonly path: Path;
  readonly pick: <O>(object: O) => PathType<O, Path>;
  readonly diff: (prev: any, next: any) => Diff[];
};

export function pathParser(init: string | (string | number)[]) {
  return [...createPathParser(init).list];
}

export function parseAffectedPaths(
  init: string | (string | number)[]
): Set<string> {
  return createPathParser(init).affected;
}

export function createPathParser(init: string | (string | number)[]) {
  if (!createPathParser.cache) {
    const cache = new LRU<string | (string | number)[], PathParser>(
      createPathParser.cacheOptions
    );

    const get = cache.get.bind(cache);
    const set = cache.set.bind(cache);

    cache.get = function (k, getOptions) {
      const key = Array.isArray(k) ? k.join('.') : `${k}`;
      return get(key, getOptions);
    };

    cache.set = function (k, opt) {
      const key = Array.isArray(k) ? k.join('.') : `${k}`;
      return set(key, opt);
    };

    createPathParser.cache = cache;
  }

  const existing = createPathParser.cache.get(init);
  if (existing) return existing;

  const list = _pathParser(init);
  const path = list.join('.');

  let affected: Set<string>;
  let affectedList: string[];

  function _pick(obj: any) {
    return pick(obj, path);
  }

  function diff(prev: any, next: any): Diff[] {
    const p = _pick(prev);
    const n = _pick(next);
    return getDiff(p, n).map((el) => {
      el.paths.unshift(...list);
      return el;
    });
  }

  const res: PathParser = Object.defineProperties(
    { pick: _pick, diff } as PathParser,
    {
      affected: {
        get() {
          return (affected = affected || _parseAffectedPaths(res.path));
        },
      },
      affectedList: {
        get() {
          return (affectedList = affectedList || [...res.affected.values()]);
        },
      },
      list: {
        get() {
          return list;
        },
      },
      path: {
        get() {
          return path;
        },
      },
    }
  );

  createPathParser.cache.set(path, res);

  return res;
}

createPathParser.cacheOptions = { max: 30000 } as LRUOptions<
  string | (string | number)[]
>;

createPathParser.cache = undefined as
  | undefined
  | LRU<string | (string | number)[], PathParser>;

export function _pathParser(path: string | (string | number)[]) {
  if (!path?.length) return [];

  return Array.isArray(path)
    ? [...path].map((el) => `${el}`)
    : `${path}`
        .replace(/\[([0-9]*)]/gim, '.$1')
        .replace(/^\./, '') // when the first item is [number]
        .split('.');
}

export function _parseAffectedPaths(path: string | string[]): Set<string> {
  const set = new Set<string>();
  const parts = _pathParser(path);
  let current = parts.join('.');

  set.add(current);

  while (parts.pop() !== undefined) {
    if (!parts.length) continue;
    const next = parts.join('.');
    set.add(next);
  }

  return set;
}
