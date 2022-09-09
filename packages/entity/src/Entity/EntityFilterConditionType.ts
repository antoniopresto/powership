import { createType, GraphType, ObjectFieldInput } from '@brabo/schema';
import { BJSON, getKeys } from '@brabo/utils';

import { FieldTypes } from '../Transporter';

const PKSKValueType = createType('PKSKValue', {
  optional: true,
  union: ['string', 'float'],
});

const $eq = {
  optional: true,
  union: ['string', 'float', 'boolean', 'null'],
} as const;

const Def = {
  between: { optional: true, union: ['[string]', '[float]'] },
  contains: {
    optional: true,
    union: ['string', 'float', 'boolean', 'null'],
  },
  eq: $eq,
  exists: 'boolean?',
  gt: PKSKValueType,
  gte: PKSKValueType,
  in: '[any]?',
  lte: PKSKValueType,
  matchString: 'string?',
  ne: $eq,
  startsWith: 'string?',
  type: { enum: FieldTypes, optional: true },
} as const;

export const EntityFilterConditionType = createType('Filter', {
  object: Def,
});

export type EntityGraphQLConditionsType<T> = T extends {
  [K: string]: ObjectFieldInput;
}
  ? GraphType<{ object: EntityGraphQLConditionsDef<T> }>
  : never;

export type EntityGraphQLConditionsDef<T> = {
  [K in keyof T]: typeof EntityFilterConditionType;
};

export function objectToGraphQLConditionType<T>(
  name: string,
  objectDef: T
): EntityGraphQLConditionsType<T> {
  const graphqlDef = {} as any;

  Object.keys(objectDef).forEach((k) => {
    graphqlDef[k] = {
      optional: true,
      type: EntityFilterConditionType,
    };
  });

  return createType(name, { object: graphqlDef }) as any;
}

const keys = getKeys(Def);
const keysSet = new Set<string>(keys);
type Operators = typeof keys[number];

export type GraphQLFilterToTransporterFilter<T> = T extends {
  [K: string]: unknown;
}
  ? {
      [K in keyof T as K extends Operators ? `$${K}` : K]: T[K] extends {
        [K: string]: unknown;
      }
        ? GraphQLFilterToTransporterFilter<T[K]>
        : T[K];
    }
  : T;

export function graphQLFilterToTransporterFilter<T>(
  filter: T
): GraphQLFilterToTransporterFilter<T> {
  if (!filter || typeof filter !== 'object') return filter as any;

  return BJSON.parse(
    BJSON.stringify(filter, {
      quoteKeys(key) {
        if (keysSet.has(key)) {
          key = `$${key}`;
        }
        return JSON.stringify(key);
      },
    })
  );
}
