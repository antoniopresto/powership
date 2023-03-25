import { isObject } from './isObject';
import { ChangeList, objectDiffPaths } from './objectDiff';
import { project } from './project';
import { AnyRecord, ObjectPath } from './typeUtils';

export function diffChecker<Value extends AnyRecord>(
  value: Value,
  paths: ArrayLike<ObjectPath<Value, 5>> | '*'
) {
  let previous = paths === '*' ? value : project(value, paths);

  return function checkDiff(next: any): ChangeList<Value> {
    const projection =
      paths === '*' ? next : isObject(next) ? project(next, paths) : {};
    const diff: any = objectDiffPaths(previous, projection);
    previous = projection;
    return diff;
  };
}
