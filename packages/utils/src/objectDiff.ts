import { Diff, diff } from 'deep-diff';

import { getByPath } from './getByPath';

export type ObjectDiff = {
  kind: 'add' | 'remove' | 'update';
  newValue: any;
  oldValue: any;
  path: string;
  paths: string[];
};

export function objectDiffPaths(
  originObject: any,
  newObject: any
): ObjectDiff[] {
  const diffs: ObjectDiff[] = [];

  const kinds = {
    N: 'add',
    D: 'remove',
    E: 'update',
    A: 'update',
  } as const;

  const differences = diff(originObject, newObject);

  if (!differences) {
    return diffs;
  }

  function pushDiff(difference: Diff<any>) {
    const { kind } = difference;

    if (kind === 'A') {
      pushDiff({
        ...difference,
        kind: difference.item.kind,
        path: [...difference.path!, difference.index],
      } as any);
      return;
    }

    const paths = difference.path || [];
    const path = paths.join('.');

    const objectDiff: ObjectDiff = {
      kind: kinds[kind],
      newValue: null,
      oldValue: null,
      path: path,
      paths: [],
    };

    Object.defineProperties(objectDiff, {
      newValue: {
        get() {
          return getByPath(newObject, path);
        },
      },
      oldValue: {
        get() {
          return getByPath(originObject, path);
        },
      },
      paths: {
        get() {
          if (!paths[0]) return [];

          const p: string[] = [];

          let full = paths[0];
          p.push(full);

          paths.slice(1).forEach((path) => {
            full += `.${path}`;
            p.push(full);
          }, []);

          return p;
        },
      },
    });

    diffs.push(objectDiff);
    return objectDiff;
  }

  differences.forEach((difference) => {
    pushDiff(difference);
  });

  return diffs;
}
