import { proxyRealValue } from './createProxy';
import { describeConstructor, getNativeConstructorType } from './getTypeName';
import { objectHash } from './hashObject';
import { hashName, hashString } from './hashString';

export function simpleObjectHash(value: any): string {
  return hashName(_simpleObjectHash(value));
}

export function _simpleObjectHash(value: any): string {
  const nativeTof = getNativeConstructorType(value);
  if (nativeTof) return `__literal__${nativeTof}:${value}`;

  value = proxyRealValue(value);

  if (typeof value === 'function' && value.name) {
    const hash = objectHash(value);
    return `;function(${value.name}_${hash});`;
  }

  const { constructorName, native } = describeConstructor(value);

  if (!native) {
    if (value?.__isGraphType === true) {
      return `${constructorName}_${simpleObjectHash(value.definition)}_${
        value.optionalId || ''
      }`;
    }
    if (value?.__isPowershipObject === true) {
      return `;${constructorName}(${simpleObjectHash(value.definition)}_${
        value.id || ''
      });`;
    }
  }

  const bJSON = objectHash(value);

  return `;${constructorName}(${hashString(bJSON)})`;
}
