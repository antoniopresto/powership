import { BJSON } from './BJSON';
import { proxyRealValue } from './createProxy';
import { describeConstructor, getNativeConstructorType } from './getTypeName';
import { hashName, hashString, stringHash } from './hashString';
import { sortObject } from './sortObject';

export function simpleObjectHash(value: any): string {
  return hashName(_simpleObjectHash(value));
}

export function _simpleObjectHash(value: any): string {
  const nativeTof = getNativeConstructorType(value);
  if (nativeTof) return `__literal__${nativeTof}:${value}`;

  value = proxyRealValue(value);

  if (typeof value === 'function' && value.name) {
    const json = BJSON.stringify(value);
    const hash = stringHash(json);
    return `;function(${value.name}_${hash});`;
  }

  const { constructorName, native } = describeConstructor(value);

  if (!native) {
    if (value?.__isGraphType === true) {
      return `${constructorName}_${simpleObjectHash(value.definition)}_${
        value.optionalId || ''
      }`;
    }
    if (value?.__isSolarwindObject === true) {
      return `;${constructorName}(${simpleObjectHash(value.definition)}_${
        value.id || ''
      });`;
    }
  }

  const sorted = sortObject(value);

  const bJSON = BJSON.stringify(sorted);

  return `;${constructorName}(${hashString(bJSON)})`;
}
