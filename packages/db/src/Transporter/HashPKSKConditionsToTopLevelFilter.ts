import { RuntimeError } from '@darch/utils/lib/RuntimeError';
import { encodeNumber } from '@darch/utils/lib/conust';
import { isPlainQueryKey, PKSKValueType, IndexFilter } from './Transporter';
import { getKeys } from '@darch/utils/lib/getKeys';

export function hashPKSKConditionsToTopLevelFilter(
  config: IndexFilter
): IndexFilter[] {
  const { PK, SK } = config;

  const keys = getKeys(SK);

  if (!keys.length) return [];

  if (keys.length !== 1) {
    throw new RuntimeError(
      `KeyCondition should only contain one condition per key`,
      { SK }
    );
  }

  const comparator = keys[0];
  const operand = SK[comparator];

  const valueError = new RuntimeError(`[${comparator}]: invalid value.`, {
    value: operand,
  });

  switch (comparator) {
    case '$startsWith': {
      if (typeof operand !== 'string') {
        throw valueError;
      }

      return [
        {
          $startsWith: hashKey({ PK, SK: operand }),
        },
      ];
    }

    case '$between': {
      if (!(Array.isArray(operand) && operand.length === 2)) {
        throw valueError;
      }

      return [
        { $startsWith: hashKey({ PK, SK: null }) },
        {
          $between: [
            hashKey({ PK, SK: operand[0] }),
            //
            hashKey({ PK, SK: operand[1] }),
          ],
        },
      ];
    }

    case '$eq': {
      if (
        typeof operand !== 'string' &&
        typeof operand !== 'number' &&
        operand !== null
      ) {
        throw valueError;
      }

      return [{ [comparator]: hashKey({ PK, SK: operand }) }];
    }

    case '$gt':
    case '$gte':
    case '$lt':
    case '$lte': {
      if (
        typeof operand !== 'string' &&
        typeof operand !== 'number' &&
        operand !== null
      ) {
        throw valueError;
      }

      return [
        { $startsWith: hashKey({ PK, SK: null }) },
        //
        { [comparator]: hashKey({ PK, SK: operand }) },
      ];
    }

    default: {
      throw new Error(`invalid operator "${comparator}"`);
    }
  }
}

export function hashKey(entry: {
  PK: PKSKValueType;
  SK?: PKSKValueType | null;
}) {
  const { SK, PK } = entry;

  const PKStringTrim =
    typeof PK === 'number' ? encodeNumber(PK.toString()) : PK.toString();

  const isSKPlainValue = isPlainQueryKey(SK);

  let SKString;

  if (isSKPlainValue) {
    if (typeof SK === 'number') {
      SKString = encodeNumber(SK.toString());
    } else {
      SKString = SK;
    }
  } else {
    SKString = '';
  }

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
