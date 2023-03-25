import deepDiff, {
  Diff as _DDiff,
  Accumulator,
  applyChange,
  Diff,
  diff,
  DiffArray,
  DiffDeleted,
  DiffEdit,
  DiffNew,
  revertChange,
} from 'deep-diff';
import { ulid } from 'ulid';

import { ObjectPath, ObjectUnion, Pick } from './typeUtils';

export class ChangeList<Obj = any> extends Array<ObjectChange<Obj>> {
  differences: Diff<any>[] = [];
  time = Date.now();
  ulid = '';

  constructor(origin?: Obj, next?: any) {
    super();

    let id = '';
    let self = this;
    Object.defineProperties(this, {
      ulid: {
        get() {
          return (id = id || ulid(self.time));
        },
      },
    });

    if (origin) {
      this.init(origin, next);
    }
  }

  init = (origin: Obj, next?: any) => {
    this.differences = diff(origin, next) || [];

    this.differences.forEach((difference, index) => {
      const item = new ObjectChange({
        time: this.time,
        parentId: this.ulid,
        difference,
        index,
      });

      this.push(item);
    });
  };

  revert = <T>(dest: T): T => {
    this.forEach((change) => {
      change.revert(dest);
    });
    return dest;
  };

  apply = <T>(dest: T, source: any = {}): T => {
    this.forEach((change) => {
      change.apply(dest, source);
    });
    return dest;
  };

  toJSON = (): ObjectDiff<Obj>[] => {
    return this.map((el): any => {
      const { oldValue, path, paths, newValue, kind } = el;

      const res: any = {
        newValue,
        oldValue,
        paths,
        kind,
        path,
      };

      Object.defineProperties(res, {
        ulid: {
          get() {
            return el.ulid;
          },
        },
      });

      return res;
    });
  };

  toString(): string {
    return JSON.stringify(this.toJSON());
  }

  static hydrate = (value: string): ChangeList => {
    try {
      const data = JSON.parse(value) as ChangeList;
      const changeList = new ChangeList();

      if (!Array.isArray(data?.differences) || !(changeList.time > 0)) {
        throw new Error('INVALID_VALUE_TO_HYDRATE');
      }

      changeList.differences = data.differences;
      changeList.time = data.time;
      return changeList;
    } catch (e: any) {
      throw new Error(`Failed to hydrate ChangeList. ${e.message}`);
    }
  };
}

export function objectDiffPaths<Obj>(
  originObject: Obj,
  newObject: any
): ObjectDiff<Obj>[] {
  return new ChangeList<Obj>(originObject, newObject).toJSON();
}

export function applyChanges(
  target: any,
  changes: ChangeList<any>,
  source = {}
) {
  changes.differences.forEach((change) => {
    applyChange(target, source, change);
  });
  return target;
}

export function revertChanges(
  target: any,
  changes: ChangeList<any>,
  source = {}
) {
  changes.differences.forEach((change) => {
    revertChange(target, source, change);
  });
  return target;
}

export type ObjectDiff<Obj = any> = ObjectPath<Obj, 5> extends infer Path
  ? Path extends unknown
    ? Pick<Obj, Path> extends infer Value
      ? {
          kind: 'add' | 'remove' | 'update';
          newValue: Value;
          oldValue: Value;
          path: Path;
          paths: string[];
          ulid: string;
        }
      : never
    : never
  : never;

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

export type ChangeKind = 'add' | 'remove' | 'update';

export class ObjectChange<T = any> {
  kind: ChangeKind;
  newValue?: T | undefined;
  oldValue?: T | undefined;
  path: string;
  paths: string[];
  ulid: string;
  time: number;
  difference: DeepDiff;

  constructor({
    time,
    index,
    difference,
    parentId,
  }: {
    difference: Diff<any>;
    time: number;
    parentId: string;
    index: number;
  }) {
    this.difference = difference;

    const { newValue, oldValue, path, paths, kind } = processPaths(difference);
    this.paths = paths;
    this.path = path;
    this.kind = kind;
    this.ulid = `${parentId}:${index}`;
    this.time = time;
    this.oldValue = oldValue;
    this.newValue = newValue;
  }

  apply = <Dest>(destination: Dest, source = {}): Dest => {
    applyChange(destination, source, this.difference);
    return destination;
  };

  revert = <Dest>(destination: Dest) => {
    revertChange(destination, {}, this.difference);
    return destination;
  };
}

function processPaths(difference: Diff<any>): {
  newValue?: any;
  oldValue?: any;
  path: string;
  paths: string[];
  kind: ChangeKind;
} {
  if (difference.kind === 'N') {
    return {
      kind: 'add',
      newValue: difference.rhs,
      ...affectedPaths(difference.path),
    };
  }

  if (difference.kind === 'A') {
    return processPaths({
      ...difference,
      ...difference.item,
      path: [...difference.path!, difference.index],
    });
  }

  if (difference.kind === 'E') {
    return {
      kind: 'update',
      oldValue: difference.lhs,
      newValue: difference.rhs,
      ...affectedPaths(difference.path),
    };
  }

  if (difference.kind === 'D') {
    const { paths, path } = affectedPaths(difference.path);
    return {
      kind: 'remove',
      oldValue: difference.lhs,
      paths,
      path,
    };
  }

  throw new Error(`Invalid diff.`);
}

function affectedPaths(pathParts: (string | number)[] = []): {
  paths: string[];
  path: string;
} {
  if (!pathParts[0]) return { path: '', paths: [] };

  const p: (string | number)[] = [];

  let full = pathParts[0];
  p.push(full);

  pathParts.slice(1).forEach((pathPart) => {
    full += `.${pathPart}`;
    p.push(full);
  }, []);

  return {
    path: full.toString(),
    paths: p.map((el) => el.toString()),
  };
}
