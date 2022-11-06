import { randomBytes } from 'crypto';

import * as jwt from 'jsonwebtoken';

/**
 * Generate a random token string
 */
export function generateRandomToken(length = 43) {
  return randomBytes(length).toString('hex');
}

export function signJWT(input: {
  secret: jwt.Secret;
  payload?: any;
  config: jwt.SignOptions;
}) {
  // TODO check config, expiration, etc
  const { secret, payload = {}, config } = input;
  return jwt.sign(payload, secret, config);
}

export interface AccountJwtData {
  token: string;
  isImpersonated: boolean;
  accountId: string;
}
