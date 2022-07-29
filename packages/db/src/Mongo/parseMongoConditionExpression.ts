import { RuntimeError } from '@darch/utils/lib/RuntimeError';
import { escapeStringRegexp } from '@darch/utils/lib/scapeRegex';
import { Filter } from 'mongodb';

import {
  AttributeFilter,
  AttributeType,
  isValidateTopLevelOperatorKey,
  isValidAttributeFilterKey,
  ConditionExpressions,
} from '../Transporter/Transporter';

export function parseMongoConditionExpression<T extends string = string>(
  conditions: ConditionExpressions<T>
) {
  const $and: Filter<any>[] = [];

  Object.entries(conditions).forEach(function ([key, value]): void {
    if (!key.startsWith('$') || isValidAttributeFilterKey(key)) {
      $and.push(...parseAttributeFilters({ $attribute: key, ...value }));
      return;
    }

    if (!isValidateTopLevelOperatorKey(key)) {
      throw new RuntimeError(`invalid TopLevelOperatorKey`, { key });
    }

    if (!value) {
      throw new RuntimeError(`invalid AttributeFilter`, { value });
    }

    switch (key) {
      case '$and': {
        if (!Array.isArray(value)) {
          throw new RuntimeError(`invalid $and value`, { value });
        }

        $and.push(
          ...value.map((el) => parseMongoConditionExpression(el)).flat()
        );
        break;
      }

      case '$or': {
        if (!Array.isArray(value)) {
          throw new RuntimeError(`invalid $and value`, { value });
        }
        $and.push({
          $or: value
            .map((el) => parseMongoConditionExpression(el).flat())
            .flat(),
        });
        break;
      }

      case '$not': {
        if (Array.isArray(value) || typeof value !== 'object') {
          throw new RuntimeError(`invalid $not value`, { value });
        }

        $and.push({
          $nor: [
            {
              $and: parseMongoConditionExpression(value),
            },
          ],
        });
        break;
      }

      default: {
        throw new RuntimeError(`reached the end of conditions`, { value });
      }
    }
  });

  return $and;
}

export function parseAttributeFilters(attFilter: AttributeFilter) {
  const { $attribute: attribute, ...filter } = attFilter;
  const $and: Filter<any>[] = [];

  Object.entries(filter).forEach(([key, value]) => {
    if (!isValidAttributeFilterKey(key)) {
      throw new RuntimeError(`not supported attribute filter.`, {
        attribute,
        key,
        value,
      });
    }

    switch (key) {
      case '$ne':
      case '$lte':
      case '$lt':
      case '$gt':
      case '$gte':
      case '$eq': {
        $and.push({ [attribute]: { [key]: value } });
        break;
      }

      case '$between': {
        if (!Array.isArray(value) || value.length !== 2) {
          throw new RuntimeError(`invalid between value`, { value });
        }
        $and.push({ [attribute]: { $gte: value[0], $lte: value[1] } });
        break;
      }

      case '$exists': {
        if (typeof value !== 'boolean') {
          throw new RuntimeError(`invalid $exists value`, { value });
        }
        $and.push({ [attribute]: { [key]: value } });
        break;
      }

      case '$type': {
        const typeAlias = dynamoDataTypeToMongo(value as any);
        $and.push({ [attribute]: { [key]: typeAlias } });
        break;
      }

      case '$startsWith': {
        if (!value) {
          throw new RuntimeError(`invalid startsWith value`, { value });
        }

        $and.push({
          [attribute]: new RegExp(`^${escapeStringRegexp(value.toString())}`),
        });

        break;
      }

      case '$contains': {
        $and.push({ [attribute]: { $type: 'array' } });
        $and.push({ [attribute]: value });
        break;
      }

      case '$matchString': {
        if (typeof value !== 'string') {
          throw new RuntimeError(`invalid $matchString value`, { value });
        }

        $and.push({
          [attribute]: new RegExp(`${escapeStringRegexp(value)}`),
        });

        break;
      }

      // case '$size': {
      //   throw new Error(`filter $size are not supported.`);
      // }

      case '$in': {
        $and.push({ [attribute]: { [key]: value } });
        break;
      }

      default: {
        throw new Error(`invalid key "${key}"`);
      }
    }
  });

  return $and;
}

const typesMap: { [K in AttributeType]: string } = {
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

function dynamoDataTypeToMongo(dynamoType: AttributeType) {
  const t = typesMap[dynamoType];
  if (!t) {
    throw new RuntimeError(`invalid type`, {
      dynamoType,
      validTypes: typesMap,
    });
  }
  return t;
}
