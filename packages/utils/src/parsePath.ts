import { StrictMap } from './StrictMap';
import { Difference, diff as getDiff } from './diff';
import { pick } from './pick';
import { PathType } from './typings';

export type PathParsed<Path extends string = string> = {
  readonly affected: Set<string>;
  readonly affectedList: ReadonlyArray<string>;
  readonly path: Path;
  readonly parts: ReadonlyArray<string>;
  readonly pick: <O>(object: O) => PathType<O, Path>;
  readonly diff: (prev: any, next: any) => Difference[];
};

export function parsePath(init: string | (string | number)[]): PathParsed {
  const parts = _pathToList(init);
  const path = parts.join('.');

  let affected: Set<string>;
  let affectedList: string[];

  function _pick(obj: any) {
    return pick(obj, path);
  }

  function diff(prev: any, next: any): Difference[] {
    const p = _pick(prev);
    const n = _pick(next);
    return getDiff(p, n, parts);
  }

  const res: PathParsed = Object.defineProperties(
    { pick: _pick, diff } as PathParsed,
    {
      affected: {
        get() {
          return (affected = affected ?? _parseAffectedPaths(res.path));
        },
      },
      parts: {
        get() {
          return parts;
        },
      },
      affectedList: {
        get() {
          return (affectedList = affectedList || [...res.affected.values()]);
        },
      },
      path: {
        get() {
          return path;
        },
      },
    },
  );

  return res;
}

const cache = new StrictMap<string, string[]>();

export function _pathToList(path: string | (string | number)[]) {
  const key = path.toString();
  if (cache.has(key)) return [...cache.get(key)];

  let existing: string[];

  if (!path?.length) {
    existing = [];
  } else if (Array.isArray(path)) {
    existing = [...path].map((el) => el.toString());
  } else {
    existing = `${path}`
      .replace(/\[([0-9]*)]/gim, '.$1')
      .replace(/^\./, '') // when the first item is [number]
      .split('.');
  }

  cache.set(key, existing);

  return existing;
}

export function _parseAffectedPaths(path: string | string[]): Set<string> {
  const set = new Set<string>();
  const parts = [..._pathToList(path)];
  let current = parts.join('.');

  set.add(current);

  while (parts.pop() !== undefined) {
    if (!parts.length) continue;
    const next = parts.join('.');
    set.add(next);
  }

  return set;
}
