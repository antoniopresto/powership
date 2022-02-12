import _uniq from 'lodash/uniq';

export function uniq<T>(array: T[] | null | undefined): T[] {
  return _uniq(array);
}

// preventing direct code dependency from external lib.
