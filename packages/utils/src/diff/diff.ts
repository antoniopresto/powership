import { defineGetters } from '../getters';
import { parsePath, PathParsed } from '../parsePath';
import { pick } from '../pick';
import { Paths, PathType } from '../typings';

export type DifferencePath = string | number;

export type DifferenceAction = 'add' | 'update' | 'delete';

export type Difference<Type = any> = Type extends unknown
  ? Type extends object
    ? {
        [P in Paths<Type>]: PathType<Type, P> extends infer R
          ? R extends unknown
            ? [R] extends [never]
              ? _UnknownDiff
              : _Difference<R, P>
            : never
          : never;
      }[Paths<Type>] extends infer R
      ? R extends unknown
        ? { [K in keyof R]: R[K] } & {}
        : never
      : never
    : _Difference<Type, ''>
  : never;

export type _Difference<Value, Path extends string> = {
  action: DifferenceAction;
  parsed: PathParsed<Path>;
  path: Path;
  pathParts: DifferencePath[];
  oldValue?: Value;
  newValue?: Value;
};

export type _UnknownDiff = {
  action: DifferenceAction;
  parsed: PathParsed;
  path: string;
  pathParts: DifferencePath[];
  oldValue?: unknown;
  newValue?: unknown;
};

const richTypes = { Date: true, RegExp: true, String: true, Number: true };

/**
 * Returns a list of differences between two types
 * @param current
 * @param next
 * @param pathToLook
 */
export function diff(
  current: any,
  next: any,
  pathToLook?: DifferencePath[] | string
): Difference[] {
  const seen: Record<string, any>[] = [];

  function close(el: __MicroDiff) {
    return defineGetters(
      el,
      {
        path() {
          return parsePath(el.pathParts).path;
        },
        parsed() {
          return parsePath(el.pathParts);
        },
      },
      { enumerable: false, configurable: true }
    );
  }
  if (pathToLook) {
    const a = pick(current, pathToLook);
    const b = pick(next, pathToLook);
    const { parts: list } = parsePath(pathToLook);

    return _diff(a, b, seen).map((el) => {
      el.pathParts.unshift(...list);
      return close(el);
    });
  }

  return _diff(current, next, seen).map(close);
}

type __MicroDiff = Omit<_Difference<any, any>, 'path' | 'parsed'>;

function _diff(from: any, to: any, seen: Record<string, any>[]): __MicroDiff[] {
  const isCurrentArray = Array.isArray(from);
  const isNextArray = Array.isArray(to);

  if (
    !from ||
    !to ||
    typeof from !== 'object' ||
    typeof to !== 'object' ||
    isCurrentArray !== isNextArray
  ) {
    return areDifferentElements(from, to)
      ? [
          {
            pathParts: [],
            action: from === undefined ? 'add' : 'update',
            newValue: to,
            oldValue: from,
          },
        ]
      : [];
  }

  let diffs: __MicroDiff[] = [];

  for (const key in from) {
    const currentElement = from[key];
    const path = isCurrentArray ? +key : key;

    if (!(key in to)) {
      diffs.push({
        action: 'delete',
        pathParts: [path],
        oldValue: from[key],
      });
      continue;
    }
    const nextElement = to[key];
    const areObjects = areTypeOfObject(currentElement, nextElement);

    if (
      currentElement &&
      nextElement &&
      areObjects &&
      // @ts-ignore
      !richTypes[Object.getPrototypeOf(currentElement)?.constructor?.name] &&
      !seen.includes(currentElement)
    ) {
      seen.push(currentElement);
      const nestedDiffs = _diff(currentElement, nextElement, seen);
      diffs.push.apply(
        diffs,
        nestedDiffs.map((difference) => {
          difference.pathParts.unshift(path);
          return difference;
        })
      );
    }

    if (areDifferentElements(currentElement, nextElement)) {
      diffs.push({
        pathParts: [path],
        action: 'update',
        newValue: nextElement,
        oldValue: currentElement,
      });
    }
  }

  const isNewObjArray = Array.isArray(to);

  for (const key in to) {
    if (!(key in from)) {
      diffs.push({
        action: 'add',
        pathParts: [isNewObjArray ? +key : key],
        newValue: to[key],
      });
    }
  }

  return diffs;
}

export function areDifferentElements(currentElement: any, nextElement: any) {
  const areObjects = areTypeOfObject(currentElement, nextElement);

  return (
    // https://github.com/AsyncBanana/microdiff/blob/66397c17351120c1b20c103215748ae98659464d/index.ts#L57
    currentElement !== nextElement &&
    !(
      typeof currentElement === 'number' &&
      isNaN(currentElement) &&
      typeof nextElement === 'number' &&
      isNaN(nextElement)
    ) &&
    !(
      areObjects &&
      (isNaN(currentElement)
        ? currentElement + '' === nextElement + ''
        : +currentElement === +nextElement)
    )
  );
}

function areTypeOfObject(currentElement: any, nextElement: any) {
  return typeof currentElement === 'object' && typeof nextElement === 'object';
}
