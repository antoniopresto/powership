import deepDiff, {
  Diff as _DDiff,
  Accumulator,
  diff,
  DiffArray,
  DiffDeleted,
  DiffEdit,
  DiffNew,
} from 'deep-diff';

import { pick } from './pick';
import { AnyRecord, ObjectPath, ObjectUnion, Pick } from './typeUtils';

export type ObjectDiff<Obj extends AnyRecord = AnyRecord> = ObjectPath<
  Obj,
  5
> extends infer Path
  ? Path extends unknown
    ? Pick<Obj, Path> extends infer Value
      ? {
          kind: 'add' | 'remove' | 'update';
          newValue: Value;
          oldValue: Value;
          path: Path;
          paths: string[];
        }
      : never
    : never
  : never;

export function objectDiffPaths<Obj extends AnyRecord>(
  originObject: Obj,
  newObject: any
): ObjectDiff<Obj>[] {
  const diffs: ObjectDiff<Obj>[] = [];

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

  function pushDiff(difference: DeepDiff) {
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

    const objectDiff = {
      kind: kinds[kind],
      newValue: undefined,
      oldValue: undefined,
      path: path,
      paths: [],
    } as unknown as ObjectDiff<Obj>;

    Object.defineProperties(objectDiff, {
      newValue: {
        get() {
          return pick(newObject, path);
        },
      },
      oldValue: {
        get() {
          return pick(originObject, path);
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

export type DeepDiff<T = any> = ObjectUnion<
  _DDiff<T>,
  Partial<DiffArray<any>> & Partial<DiffNew<any>>
> &
  _DDiff<T>;

export {
  Accumulator,
  DiffEdit,
  deepDiff,
  diff,
  DiffArray,
  DiffDeleted,
  DiffNew,
};
