export * from 'deep-object-diff';

export type ObjectDiff = {
  kind: 'add' | 'remove' | 'update';
  newValue: any;
  oldValue: any;
  path: string;
  paths: string[];
};

export function objectDiffPaths(
  originObject: Record<string, any>,
  newObject: Record<string, any>
) {
  const changes: ObjectDiff[] = [];

  function walkObject(
    _originObject: Record<string, any>,
    _newObject: Record<string, any>,
    paths: string[]
  ) {
    const path = paths[paths.length - 1] || '';

    function _currentPath(parent: Record<string, any>, key: string) {
      const isArray = Array.isArray(parent);
      return isArray ? path + `[${key}]` : !path ? key : `${path}.${key}`;
    }

    for (const key of Object.keys(_originObject)) {
      const currentPath = _currentPath(_originObject, key);

      if (!_newObject.hasOwnProperty(key)) {
        changes.push({
          kind: 'remove',
          newValue: undefined,
          oldValue: _originObject[key],
          path: currentPath,
          paths: [...paths, currentPath],
        });
      }
    }

    for (const [key, value] of Object.entries(_newObject)) {
      if (value === _originObject[key]) continue;

      const currentPath = _currentPath(_newObject, key);

      if (!_originObject.hasOwnProperty(key)) {
        changes.push({
          kind: 'add',
          newValue: _newObject[key],
          oldValue: undefined,
          path: currentPath,
          paths: [...paths, currentPath],
        });
      } else {
        if (
          value &&
          typeof value === 'object' &&
          _originObject[key] &&
          typeof _originObject[key] === 'object'
        ) {
          walkObject(_originObject[key], value, [...paths, currentPath]);
        } else {
          changes.push({
            kind: 'update',
            newValue: _newObject[key],
            oldValue: _originObject[key],
            path: currentPath,
            paths: [...paths, currentPath],
          });
        }
      }
    }
  }

  walkObject(originObject, newObject, []);

  return changes;
}

export const getObjectDiffPaths = objectDiffPaths;
