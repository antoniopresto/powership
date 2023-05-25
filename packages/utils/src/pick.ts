import { parsePath } from './parsePath';
import { IsKnown, PathType } from './typings';

/**
 * Pick one object property by path
 * @param object
 * @param path
 */
export function pick<O, P extends string | (string | number)[]>(
  object: O,
  path: P
): IsKnown<O> extends 1 ? (P extends string ? PathType<O, P> : any) : any;

export function pick(object, path: string | (string | number)[]): any {
  if (!path?.length) return object;

  const parts = [...parsePath(path).parts];
  const field = parts.shift();

  if (field === '$' && object && typeof object === 'object') {
    if (object && typeof object === 'object') {
      if ('$' in object) return object['$'];
    }

    const level = parts.length;

    return Object.values(object)
      .reduce((acc: any[], item) => {
        const next = pick(item, parts);
        if (next === undefined) return acc;
        return [...acc, next];
      }, [])
      .flat(level);
  }

  let value = get(object, field);
  if (!parts.length) return value;
  return pick(value, parts);
}

function get(value: unknown, field: string | undefined) {
  if (!field) return value;
  if (value === null || value === undefined) {
    if (field) return undefined;
    return value;
  }
  return value[field];
}
