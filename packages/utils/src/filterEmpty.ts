import { isPlainObject } from './isObject';
import { AnyArray } from './typings';

const types = [
  'null',
  'undefined',
  'false',
  'string',
  'array',
  'object',
  'number',
  'set',
  'map',
] as const;

export type FilterableEmptyType = (typeof types)[number];

export type FilterEmptyOptions = {
  types?: AnyArray<FilterableEmptyType>;
  typeSet?: Set<FilterableEmptyType>;
};

const defaultOptions: Required<FilterEmptyOptions> = {
  types,
  typeSet: new Set(types),
};

export function filterEmpty<T>(
  input: AnyArray<T | null | undefined>,
  options?: FilterEmptyOptions,
): T[] {
  //
  //
  const { typeSet } = (() => {
    if (!options) return defaultOptions;
    return {
      // deep: options.deep ?? true,
      typeSet:
        options.typeSet || options.types
          ? new Set(options.types)
          : defaultOptions.typeSet,
    };
  })();

  return input.filter((el) => {
    if (el === null && typeSet.has('null')) return false;
    if (el === undefined && typeSet.has('undefined')) return false;
    if (el === '' && typeSet.has('string')) return false;
    if (typeSet.has('number') && typeof el === 'number') {
      return el > 0 || el < 0;
    }
    if (el === false && typeSet.has('false')) return false;
    if (Array.isArray(el) && !el.length && typeSet.has('array')) return false;
    if (typeSet.has('object') && isPlainObject(el)) {
      return !!Object.keys(el).length;
    }
    if (typeSet.has('set') && el instanceof Set && !el.size) return false;
    if (typeSet.has('map') && el instanceof Map && !el.size) return false;
    //
    return true;
  }) as T[];
}
