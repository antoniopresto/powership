import { createSchema, createType, Infer } from '@backland/schema';
import { tupleEnum } from '@backland/utils';

export const accessTypesEnum = tupleEnum('phone', 'email', 'oauth', 'custom');
export const accessTypesList = Object.values(accessTypesEnum);
export type AccessTypeKind = typeof accessTypesList[number];

export const AccessTypeBase = createSchema({
  createdAt: { date: { autoCreate: true }, optional: true },
  meta: 'record?',
  verified: 'boolean?',
  updatedAt: { date: { autoCreate: true }, optional: true },
} as const);

export const AccessTypeSchema = createType({
  union: [
    {
      object: {
        ...AccessTypeBase.definition,
        kind: { literal: accessTypesEnum.email },
        value: 'email',
      },
    },

    {
      object: {
        ...AccessTypeBase.definition,
        kind: { literal: accessTypesEnum.phone },
        value: 'phone',
      },
    },

    {
      object: {
        ...AccessTypeBase.definition,
        accessToken: 'string',
        kind: { literal: accessTypesEnum.oauth },
        provider: { description: 'Provider name', string: {} },
        refreshToken: 'string',
        value: { alias: 'provider' },
      },
    },

    {
      object: {
        ...AccessTypeBase.definition,
        kind: { literal: accessTypesEnum.custom },
        meta: 'record',
        value: 'string',
      },
    },
  ],
} as const);

export type AccessType = Infer<typeof AccessTypeSchema>;
