import { createType, GraphType, ObjectFieldInput } from '@darch/schema';
import { DarchJSON, getKeys } from '@darch/utils';

import { FieldTypes } from '../Transporter';

const PKSKValueType = createType('PKSKValue', {
  union: ['string', 'float'],
  optional: true,
});

const $eq = {
  union: ['string', 'float', 'boolean', 'null'],
  optional: true,
} as const;

const Def = {
  eq: $eq,
  ne: $eq,
  lte: PKSKValueType,
  gt: PKSKValueType,
  gte: PKSKValueType,
  between: { union: ['[string]', '[float]'], optional: true },
  exists: 'boolean?',
  type: { enum: FieldTypes, optional: true },
  startsWith: 'string?',
  contains: {
    union: ['string', 'float', 'boolean', 'null'],
    optional: true,
  },
  matchString: 'string?',
  in: '[any]?',
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
      type: EntityFilterConditionType,
      optional: true,
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

  return DarchJSON.parse(
    DarchJSON.stringify(filter, {
      quoteKeys(key) {
        if (keysSet.has(key)) {
          key = `$${key}`;
        }
        return JSON.stringify(key);
      },
    })
  );
}
