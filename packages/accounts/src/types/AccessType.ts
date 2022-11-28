import { createType, Infer } from '@backland/schema';
import { tupleEnum } from '@backland/utils';

export const accessTypesEnum = tupleEnum('phone', 'email', 'oauth', 'custom');
export const accessTypesList = Object.values(accessTypesEnum);
export type AccessTypeKind = typeof accessTypesList[number];

export const AccessTypeUnion = createType('AccessTypeUnion', {
  union: [
    {
      object: {
        kind: { literal: accessTypesEnum.email },
        value: 'email',
      },
    },

    {
      object: {
        kind: { literal: accessTypesEnum.phone },
        value: accessTypesEnum.phone,
      },
    },

    {
      object: {
        kind: { literal: accessTypesEnum.oauth },
        provider: { description: 'Provider name', string: {} },
        authToken: 'string',
        value: { alias: 'provider' },
      },
    },

    {
      object: {
        kind: { literal: accessTypesEnum.custom },
        meta: 'record',
        value: 'string',
      },
    },
  ],
} as const);

export type AccessTypeUnion = Infer<typeof AccessTypeUnion>;

export const AccessType = createType('AccessType', {
  object: {
    accountId: 'ID',
    meta: 'record?',
    verified: 'boolean?',

    data: AccessTypeUnion,
  },
} as const);

export type AccessType = Infer<typeof AccessType>;
