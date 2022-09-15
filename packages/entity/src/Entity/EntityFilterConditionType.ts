import { createType, GraphType, ObjectFieldInput } from '@brabo/schema';
import { BJSON, getKeys } from '@brabo/utils';

import { DocumentBase, FieldTypes, FilterRecord } from '../Transporter';

const PKSKValueType = createType('PKSKValue', {
  optional: true,
  union: ['string', 'float', 'null'],
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

type _Def = typeof Def extends infer R
  ? {
      [K in keyof R]: K extends 'between'
        ? {
            optional: true;
            union: [
              { def: [number, number]; type: 'literal' },
              { def: [string, string]; type: 'literal' }
            ];
          }
        : R[K];
    }
  : never;

export const EntityFilterConditionType = createType('Filter', {
  alias: 'Filter',
  optional: true,
  union: [
    { object: Def as unknown as _Def },
    PKSKValueType, //
  ],
} as unknown as {
  literal: FilterRecord; // force infer
  optional: true;
});

export type EntityFilterConditionType = typeof Def extends infer R
  ? { [K in keyof R & string as `$${K}`]: R[K] } & {}
  : never;

export type EntityGraphQLConditionsType<T> = T extends {
  [K: string]: ObjectFieldInput;
}
  ? GraphType<{ object: EntityGraphQLFieldConditionsType<T> }>
  : never;

export type EntityGraphQLFieldConditionsType<T> = {
  [K in keyof T]: typeof EntityFilterConditionType;
};

export function objectToGraphQLConditionType<T extends DocumentBase>(
  name: string,
  objectDef: T
): EntityGraphQLConditionsType<T> {
  const graphqlDef = {} as any;

  Object.keys(objectDef).forEach((k) => {
    graphqlDef[k] = {
      alias: `QueryCondition`,
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

// appending '$' in filter keys
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
