import _get from 'lodash/get';

// get an object field from a given dot notation
// eg: GetFieldByDotNotation<{a: { b: 1 }}, 'a.b'> === 1
export type GetFieldByDotNotation<Obj, DotNotation> =
  //
  DotNotation extends `${infer Left}.${infer Right}`
    ? Left extends keyof Obj
      ?
          | GetFieldByDotNotation<Exclude<Obj[Left], undefined>, Right>
          | Extract<Obj[Left], undefined>
      : undefined
    : DotNotation extends keyof Obj
    ? Obj[DotNotation]
    : undefined;

export function getByPath<T, K extends string>(
  obj: T,
  key: K
): GetFieldByDotNotation<T, K> {
  return _get(obj, key);
}
