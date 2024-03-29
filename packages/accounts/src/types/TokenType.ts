import { createType, Infer } from '@powership/schema';
import { tupleEnum } from '@powership/utils';

export const tokenKindEnum = tupleEnum(
  'email_verification',
  'phone_verification',
  'password_recovery',
  'magick_link',
  'twoFactorAuth',
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
    used: { boolean: {}, defaultValue: false, optional: true },
    usageLocations: {
      object: {
        ip: 'string?',
        device: 'string?',
        meta: 'record?',
      },
      list: true,
      optional: true,
    },
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
