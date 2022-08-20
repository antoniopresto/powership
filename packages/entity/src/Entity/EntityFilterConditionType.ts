import { createType, GraphType, ObjectFieldInput } from '@darch/schema';
import { FieldTypes } from '../Transporter';

const PKSKValueType = { union: ['string', 'float'], optional: true } as const;

const $eq = {
  union: ['string', 'float', 'boolean', 'null'],
  optional: true,
} as const;

export const EntityFilterConditionType = createType('EntityFilterCondition', {
  object: {
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
  },
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
