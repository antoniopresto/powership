import { proxyRealValue } from './createProxy';
import { describeType, getTypeName } from './getTypeName';

export function sortObject<O>(object: O, seen = new WeakMap<object, any>()): O {
  object = proxyRealValue(object);

  if (object && typeof object === 'object') {
    if (seen.has(object)) {
      return object;
    } else {
      seen.set(object, true);
    }
  }

  const { typename, native } = describeType(object);
  if (typename !== 'Object' || !native) return object;

  return Object.keys(object as object)
    .sort()
    .reduce((obj, key) => {
      let child = object[key];
      if (getTypeName(child) === 'Object') {
        child = sortObject(child, seen);
      }
      return Object.assign(Object.assign({}, obj), {
        [key]: child,
      });
    }, {}) as O;
}
