import { RuntimeError } from '@darch/utils/lib/RuntimeError';
import { escapeStringRegexp } from '@darch/utils/lib/scapeRegex';
import { Filter } from 'mongodb';

import {
  AttributeFilterKey,
  AttributeFilterRecord,
  FieldType,
  TopLevelFilterKey,
} from '../Transporter/Transporter';
import { getKeys } from '@darch/utils/lib/getKeys';
import { getTypeName } from '@darch/utils/lib/getTypeName';
import { devAssert } from '@darch/utils/lib/devAssert';
import { notNull } from '@darch/utils/lib/invariant';

export function parseAttributeFilters(attFilter: AttributeFilterRecord) {
  const $and: Filter<any>[] = [];

  getKeys(attFilter).forEach((attribute: string): any => {
    const filter = notNull(attFilter[attribute]);

    if (typeof filter === 'string' || typeof filter === 'number') {
      return $and.push({ [attribute]: filter });
    }

    switch (attribute) {
      case '$and': {
        if (!Array.isArray(filter)) {
          throw new RuntimeError(`invalid $and value`, { value: filter });
        }

        return $and.push(
          ...filter.map((el) => parseAttributeFilters(el).flat()).flat()
        );
      }

      case '$or': {
        if (!Array.isArray(filter)) {
          throw new RuntimeError(`invalid $and value`, {
            value: filter,
          });
        }

        return $and.push({
          $or: filter
            .map((el) => {
              const parsed = parseAttributeFilters(el);
              return parsed.flat();
            })
            .flat(),
        });
      }

      case '$not': {
        if (!filter || typeof filter !== 'object' || Array.isArray(filter)) {
          throw new RuntimeError(`invalid $not value`, {
            value: filter,
          });
        }

        return $and.push({
          $nor: [
            {
              $and: parseAttributeFilters(filter as any),
            },
          ],
        });
      }
    }

    if (getTypeName(filter) !== 'Object') {
      devAssert(`Invalid filter`, { filter, attribute });
    }

    const keys: (TopLevelFilterKey | AttributeFilterKey | string)[] =
      getKeys(filter);

    keys.forEach((operator) => {
      switch (operator) {
        case '$ne':
        case '$lte':
        case '$lt':
        case '$gt':
        case '$gte':
        case '$eq': {
          $and.push({ [attribute]: { [operator]: filter[operator] } });
          break;
        }

        case '$between': {
          if (
            !Array.isArray(filter[operator]) ||
            filter[operator].length !== 2
          ) {
            throw new RuntimeError(`invalid between value`, {
              value: filter[operator],
            });
          }

          $and.push({
            [attribute]: {
              $gte: filter[operator][0],
              $lte: filter[operator][1],
            },
          });
          break;
        }

        case '$exists': {
          if (typeof filter[operator] !== 'boolean') {
            throw new RuntimeError(`invalid $exists value`, {
              value: filter[operator],
            });
          }
          $and.push({ [attribute]: { [operator]: filter[operator] } });
          break;
        }

        case '$type': {
          const typeAlias = typeToMongo(filter[operator]);
          $and.push({ [attribute]: { [operator]: typeAlias } });
          break;
        }

        case '$startsWith': {
          if (!filter[operator]) {
            throw new RuntimeError(`invalid startsWith value`, {
              value: filter[operator],
            });
          }

          $and.push({
            [attribute]: new RegExp(`^${escapeStringRegexp(filter[operator])}`),
          });

          break;
        }

        case '$contains': {
          $and.push({ [attribute]: { $type: 'array' } });
          $and.push({ [attribute]: filter[operator] });
          break;
        }

        case '$matchString': {
          if (typeof filter[operator] !== 'string') {
            throw new RuntimeError(`invalid $matchString value`, {
              value: filter[operator],
            });
          }

          $and.push({
            [attribute]: new RegExp(`${escapeStringRegexp(filter[operator])}`),
          });

          break;
        }

        case '$in': {
          $and.push({ [attribute]: { [operator]: filter[operator] } });
          break;
        }

        default: {
          devAssert(`not supported attribute filter.`, { operator });
        }
      }
    });
  });

  return $and;
}

// function parse(input: AttributeFilterRecord) {
//   const value = [] as FieldFilter[];
//
//   getKeys(input).forEach(($op) => {
//     if (!isTopLevelFilterKey($op)) {
//       return
//     }
//
//     switch ($op) {
//       case '$not': {
//         const _input = notNull(input[$op]);
//         return value.push(parse(_input));
//       }
//
//       case '$or':
//       case '$and': {
//         const _input = notNull(input[$op]);
//         if (!Array.isArray(_input)) {
//           return devAssert(`Expected array fot $op ${$op}`, { input: _input });
//         }
//         return (value[$op] = _input.map((el) => parse(el)));
//       }
//
//       default:
//         devAssert(`Invalid $op ${$op}`);
//     }
//   });
//
//   return value;
// }

const typesMap: { [K in FieldType]: string } = {
  String: 'string',
  Number: 'number',
  Binary: 'binData',
  Boolean: 'bool',
  Null: 'null',
  List: 'array',
  Map: 'object',
  NumberSet: 'array',
  StringSet: 'array',
} as const;

function typeToMongo(type: unknown) {
  if (typeof type !== 'string' || !(type in typesMap)) {
    throw new RuntimeError(`invalid type`, {
      type,
      validTypes: typesMap,
    });
  }
  return typesMap[type];
}
