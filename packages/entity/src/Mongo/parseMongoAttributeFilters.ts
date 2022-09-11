import { RuntimeError } from '@brabo/utils/lib/RuntimeError';
import { devAssert } from '@brabo/utils/lib/devAssert';
import { getKeys } from '@brabo/utils/lib/getKeys';
import { getTypeName } from '@brabo/utils/lib/getTypeName';
import { escapeStringRegexp } from '@brabo/utils/lib/scapeRegex';
import { Filter } from 'mongodb';

import {
  AttributeFilterKey,
  FilterRecord,
  IndexFilterRecord,
  TopLevelFilterKey,
  TransporterFieldType,
} from '../Transporter';
import {
  AnyCollectionIndexConfig,
  createDocumentIndexBasedFilters,
} from '../Transporter';

export function createMongoIndexBasedFilters(options: {
  filter: IndexFilterRecord;
  indexConfig: AnyCollectionIndexConfig;
}) {
  const { indexConfig, filter } = options;
  const { filters } = createDocumentIndexBasedFilters(filter, indexConfig);
  return parseMongoAttributeFilters({ $and: filters });
}

export function parseMongoAttributeFilters(attFilter: FilterRecord) {
  const $and: Filter<any>[] = [];

  getKeys(attFilter).forEach((attribute: string): any => {
    const filter = attFilter[attribute];
    if (filter === undefined) return;

    if (
      typeof filter === 'string' ||
      typeof filter === 'number' ||
      filter === null
    ) {
      return $and.push({ [attribute]: filter });
    }

    switch (attribute) {
      case '$and': {
        if (!Array.isArray(filter)) {
          throw new RuntimeError(`invalid $and value`, { value: filter });
        }

        return $and.push(
          ...filter.map((el) => parseMongoAttributeFilters(el).flat()).flat()
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
              const parsed = parseMongoAttributeFilters(el);
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
              $and: parseMongoAttributeFilters(filter),
            },
          ],
        });
      }
    }

    if (getTypeName(filter) !== 'Object') {
      devAssert(`Invalid filter`, { attribute, filter });
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
          const value = filter[operator];

          if (typeof value !== 'string') {
            throw new RuntimeError(`Invalid value for operator $startsWith`, {
              value,
            });
          }

          $and.push({
            [attribute]: { $regex: `^${escapeStringRegexp(value)}` },
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
          devAssert(`not supported attribute filter "${operator}".`);
        }
      }
    });
  });

  return $and;
}

const typesMap: { [K in TransporterFieldType]: string } = {
  Binary: 'binData',
  Boolean: 'bool',
  List: 'array',
  Map: 'object',
  Null: 'null',
  Number: 'number',
  NumberSet: 'array',
  String: 'string',
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
