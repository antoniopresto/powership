import _uniq from 'lodash/uniq';
import _uniqBy from 'lodash/uniqBy';

// preventing direct code dependency from external lib.

export function uniq<T>(array: T[] | null | undefined): T[] {
  return _uniq(array);
}

export const uniqBy = _uniqBy;
