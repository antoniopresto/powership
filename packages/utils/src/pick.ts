import { pathParser } from './pathParser';

/**
 * Pick one object property by path
 * @param object
 * @param path
 */
export function pick(object, path: string | string[]) {
  if (!path?.length) return object;

  const paths = pathParser(path);

  const field = paths.shift();

  if (field === '$' && Array.isArray(object)) {
    if (!paths.length) return object;

    return object.reduce((acc: any[], item) => {
      const next = pick(item, paths);
      if (next === undefined) return acc;
      return [...acc, next];
    }, []);
  }

  let value = get(object, field);
  if (!paths.length) return value;
  return pick(value, paths);
}

function get(value: unknown, field: string | undefined) {
  if (!field) return value;
  if (value === null || value === undefined) {
    if (field) return undefined;
    return value;
  }
  return value[field];
}
