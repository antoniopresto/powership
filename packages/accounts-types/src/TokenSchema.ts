import { createSchema, Infer, tupleEnum } from 'backland';

export const tokenKindEnum = tupleEnum(
  'email_verification',
  'reset_password',
  'phone_verification'
);

export const tokenKind = Object.values(tokenKindEnum);

export const TokenSchema = createSchema({
  ownerId: 'ID',
  value: { string: { min: 3, max: 300 } },
  kind: { enum: tokenKind },
  contact: 'string?',
  reason: 'string?',
});

export type Token = Infer<typeof TokenSchema>;
