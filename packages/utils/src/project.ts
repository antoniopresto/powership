import { pick } from './pick';
import { setByPath } from './setByPath';
import { AnyRecord, ObjectPath } from './typeUtils';

export function project<T extends AnyRecord, Path = ObjectPath<T>>(
  value: T,
  paths: ArrayLike<Path> | '*'
) {
  if (paths === '*') {
    return { ...value };
  }

  let result = {};

  (paths as any[]).forEach((path) => {
    const picked = pick(value, path);
    if (picked === undefined) return;
    result = setByPath(result, path, picked);
  });

  return result;
}
