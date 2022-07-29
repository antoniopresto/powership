import { RuntimeError } from '@darch/utils/lib/RuntimeError';
import { encodeNumber } from '@darch/utils/lib/conust';
import { KeyType } from '../Transporter/Transporter';

export function hashQueryKey(entry: { PK: KeyType; SK?: KeyType }) {
  const { SK, PK } = entry;

  const PKStringTrim =
    typeof PK === 'number' ? encodeNumber(PK.toString()) : PK.toString();

  const SKString =
    SK === null || SK === undefined
      ? ''
      : typeof SK === 'number'
      ? encodeNumber(SK.toString())
      : SK.toString();

  // TODO re-encode?
  if (ID_SEPARATOR_REGEX.test(PKStringTrim)) {
    throw new RuntimeError(`Invalid characters found in key ${PKStringTrim}`, {
      PK,
    });
  }

  const prefix = `${PKStringTrim}${ID_SEPARATOR}`;

  if (!SKString) {
    return prefix;
  }

  if (ID_SEPARATOR_REGEX.test(SKString)) {
    throw new RuntimeError(`Invalid characters found in key ${SKString}.`, {
      key: SKString,
    });
  }

  return `${prefix}${SKString}`;
}

export const ID_SEPARATOR = '↠';
export const ID_SEPARATOR_REGEX = new RegExp(ID_SEPARATOR, 'g');
