import { createType, Infer } from '@backland/schema';
import { tupleEnum } from '@backland/utils';

export const accessTypesEnum = tupleEnum('phone', 'email', 'oauth', 'custom');
export const accessTypesList = Object.values(accessTypesEnum);
export type AccessTypeKind = typeof accessTypesList[number];

export const AccessTypeSchema = createType('AccessType', {
  object: {
    accountId: 'ID',
    meta: 'record?',
    verified: 'boolean?',

    data: {
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
            accessToken: 'string',
            kind: { literal: accessTypesEnum.oauth },
            provider: { description: 'Provider name', string: {} },
            refreshToken: 'string',
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
    },
  },
} as const);

export type AccessType = Infer<typeof AccessTypeSchema>;
