import { createSchema } from '@backland/schema';
import { tupleEnum } from '@backland/utils';
import { Infer } from 'backland';

export const tokenKindEnum = tupleEnum(
  'email_verification',
  'phone_verification',
  'password_recovery',
  'session',
  'magick_link',
  '2fa',
  'password',
  'custom'
);

export const TokenSchema = createSchema({
  createdAt: { date: { autoCreate: true } },
  endTime: 'date?',
  kind: {
    description: 'Examples: 2fa, password_recovery',
    enum: tokenKindEnum.list,
  },
  reason: 'string?',
  value: { string: { max: 1000, min: 4 } },
} as const);

export type Token = Infer<typeof TokenSchema>;

