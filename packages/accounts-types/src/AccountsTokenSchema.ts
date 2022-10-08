import { createSchema, Infer, tupleEnum } from 'backland';

export const tokenKindEnum = tupleEnum(
  'email_verification',
  'reset_password',
  'phone_verification'
);

export const tokenKind = Object.values(tokenKindEnum);

export const AccountsTokenSchema = createSchema({
  accountId: 'ID',
  address: { union: ['phone', 'email'] },
  addressType: { enum: ['phone', 'email', 'other'] },
  reason: 'string?',
  tokenType: {
    union: [{ enum: tokenKind }, { object: { customValue: 'string' } }],
  },
  tokenValue: { string: { max: 300, min: 3 } },
} as const);

export type AccountsToken = Infer<typeof AccountsTokenSchema>;
