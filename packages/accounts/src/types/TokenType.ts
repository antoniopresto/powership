import { createType } from '@backland/schema';
import { tupleEnum } from '@backland/utils';
import { Infer } from 'backland';

export const tokenKindEnum = tupleEnum(
  'email_verification',
  'phone_verification',
  'password_recovery',
  'magick_link',
  '2fa',
  'password',
  'custom'
);

export const TokenType = createType('AccountsToken', {
  object: {
    accountId: 'ID',
    kind: {
      description: 'Examples: 2fa, password_recovery',
      enum: tokenKindEnum.list,
    },
    reason: 'string?',
    createdFor: {
      string: { min: 2 },
      description:
        'Indicates for what that token was created. ' +
        'Example: accountId, email, phone, 2fa service, etc',
    },
    value: { string: { max: 1000, min: 4 } },
    meta: 'record?',
    location: {
      optional: true,
      object: {
        ip: 'string?',
        device: 'string?',
        meta: 'record?',
      },
    },
  },
} as const);

export type Token = Infer<typeof TokenType>;
