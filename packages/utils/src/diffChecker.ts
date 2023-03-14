import { isObject } from './isObject';
import { ObjectDiff, objectDiffPaths } from './objectDiff';
import { project } from './project';
import { AnyRecord, ObjectPath } from './typeUtils';

export function diffChecker<Value extends AnyRecord>(
  value: Value,
  paths: ArrayLike<ObjectPath<Value, 5>> | '*'
) {
  let previous = paths === '*' ? value : project(value, paths);

  return function checkDiff(next: any): ObjectDiff<Value>[] {
    const projection =
      paths === '*' ? next : isObject(next) ? project(next, paths) : {};
    const diff = objectDiffPaths(previous, projection);
    previous = projection;
    return diff;
  };
}
