import { randomBytes } from 'crypto';

import { createType, Infer } from '@backland/schema';
import { StringValue } from '@backland/utils';
import * as jwt from 'jsonwebtoken';

/**
 * Generate a random token string
 */
export function generateRandomToken(length = 43) {
  return randomBytes(length).toString('hex');
}

export function signSessionJWT(input: {
  secret: jwt.Secret;
  data: JWTPayload['data'];
  config: jwt.SignOptions & { expiresIn: NonNullable<StringValue> };
}) {
  const { secret, data, config } = input;
  const parsed = SessionJWTPayloadType.parse({ data });
  return jwt.sign(parsed, secret, config);
}

export function verifySessionJWT(input: {
  secret: jwt.Secret;
  sessionToken: string;
  config?: jwt.VerifyOptions;
}): JWTPayload {
  const { secret, sessionToken, config } = input;
  const payload = jwt.verify(sessionToken, secret, config);
  return SessionJWTPayloadType.parse(payload);
}

export const SessionJWTPayloadType = createType('JWTPayloadType', {
  object: {
    iss: 'string?',
    sub: 'string?',
    aud: { union: ['string', '[string]', 'undefined'] },
    exp: 'float?',
    nbf: 'float?',
    iat: 'float?',
    jti: 'string?',
    data: {
      object: {
        sessionId: 'ID',
        token: 'string',
        accountId: 'string',
        k: { enum: ['s', 'r'] },
        $string: 'unknown',
      },
    },
  },
} as const);

export type JWTPayload = Infer<typeof SessionJWTPayloadType>;
