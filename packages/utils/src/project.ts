import { pick } from './pick';
import { setByPath } from './setByPath';
import { Paths } from './typings';

export function project<T, Path = Paths<T>>(
  value: T,
  paths: ArrayLike<Path> | '*'
) {
  if (paths === '*') {
    return value;
  }

  let result = {};

  (paths as any[]).forEach((path) => {
    const picked = pick(value, path);
    if (picked === undefined) return;
    result = setByPath(result, path, picked);
  });

  return result;
}
