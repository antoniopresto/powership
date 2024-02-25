import { uniq as _uniq } from 'lodash';
import { uniqBy as _uniqBy } from 'lodash';

// preventing direct code dependency from external lib.

export function uniq<T>(array: T[] | null | undefined): T[] {
  return _uniq(array);
}

export const uniqBy = _uniqBy;
