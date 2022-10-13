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
    enum: Object.values(tokenKindEnum),
  },
  reason: 'string?',
  value: { string: { max: 1000, min: 4 } },
} as const);

type _Token = Infer<typeof TokenSchema>;

export type Token = {
  [L in _Token['kind']]: Omit<_Token, 'kind'> & { kind: L } extends infer R
    ? {
        [K in keyof R]: R[K];
      }
    : any;
}[_Token['kind']];
