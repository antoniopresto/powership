import { encodeNumber } from '@powership/utils';

export function encodeIndexValue(value: any) {
  if (value === undefined || value === null) return value;
  if (typeof value === 'string') return value;
  if (typeof value === 'number') return encodeNumber(value);
  if (Array.isArray(value)) {
    return value.map((el) => encodeIndexValue(el));
  }
  if (typeof value === 'object') {
    return Object.entries(value).reduce((acc, [k, v]) => {
      return { ...acc, [k]: encodeIndexValue(v) };
    }, {});
  }
  return value;
}
