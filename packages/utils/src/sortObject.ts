import { proxyRealValue } from './createProxy';
import { describeType, getTypeName } from './getTypeName';

export function sortObject<O>(object: O): O {
  object = proxyRealValue(object);
  const { typename, native } = describeType(object);
  if (typename !== 'Object' || !native) return object;

  return Object.keys(object as object)
    .sort()
    .reduce((obj, key) => {
      let child = object[key];
      if (getTypeName(child) === 'Object') {
        child = sortObject(child);
      }
      return Object.assign(Object.assign({}, obj), {
        [key]: child,
      });
    }, {}) as O;
}
