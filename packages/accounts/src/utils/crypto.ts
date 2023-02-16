import { randomBytes } from 'crypto';

import { createType, Infer } from '@swind/schema';
import {
  base64ToText,
  BJSON,
  hashString,
  ParsedIndexCursor,
  parseFilterCursor,
  StringValue,
  textToBase64,
} from '@swind/utils';
import * as jwt from 'jsonwebtoken';

import { ConnectionInformation } from '../types/ConnectionInformation';

import { AccountError } from './AccountError';

/**
 * Generate a random token string
 */
export function createRandomToken(length = 43) {
  return randomBytes(length).toString('hex');
}

export function signAccountJWT(input: {
  secret: jwt.Secret;
  data: SessionJWTPayload['data'];
  config: jwt.SignOptions & { expiresIn: NonNullable<StringValue> };
}) {
  const { secret, data, config } = input;
  const parsed = SessionJWTPayloadType.parse({ data });
  return jwt.sign(parsed, secret, config);
}

export function verifySessionJWT(input: {
  secret: jwt.Secret;
  authToken: string;
  config?: jwt.VerifyOptions;
}): SessionJWTPayload {
  const { secret, authToken, config } = input;
  const payload = jwt.verify(authToken, secret, config);
  return SessionJWTPayloadType.parse(payload);
}

export function createRandomAuthTokenString(input: AccountTokenStringInput) {
  const random = createRandomToken().slice(0, 43);

  const inputJSON: AccountTokenStringData = {
    ...input,
    r: random,
    u: hashString(input.connectionInfo.userAgent),
    i: hashString(input.connectionInfo.ip),
  };

  const sessionData = AccountTokenStringData.parse(inputJSON);

  return textToBase64(BJSON.stringify(sessionData));
}

export function parseAuthTokenString(
  token: string,
  expectedKind: 'A'
): ParsedAuthToken {
  const tokenJSNON = base64ToText(token);

  const { s, a, k, i, u, r } = (() => {
    let object;
    try {
      object = BJSON.parse(tokenJSNON);
    } catch (e) {
      throw new AccountError('InvalidToken', {
        msg: `Invalid token JSON`,
        tokenJSNON,
        token,
      });
    }

    return AccountTokenStringData.parse(object);
  })();

  if (k !== expectedKind) {
    throw new AccountError(
      'InvalidToken',
      `Expected kind "${expectedKind}", found "${k}"`
    );
  }

  const sessionCursor = parseFilterCursor(s);
  const accountCursor = parseFilterCursor(a);

  if (!sessionCursor) throw new Error('UNEXPECTED_SESSION_GRAPH_ID');
  if (!accountCursor) throw new Error('UNEXPECTED_ACCOUNT_GRAPH_ID');

  return {
    sessionCursor,
    accountCursor,
    randomPart: r,
    dataIPHash: i,
    dataUAHash: u,
    originalString: token,
  };
}

export type ParsedAuthToken = {
  sessionCursor: ParsedIndexCursor; // the data in session id (entity, index field, etc)
  accountCursor: ParsedIndexCursor; // the data in account id (entity, index field, etc)
  dataUAHash: number; // user agent hash
  dataIPHash: number; // ip hash
  randomPart: string;
  originalString: string;
};

export const AccountTokenStringData = createType('AccountTokenStringInput', {
  object: {
    // see ParsedAuthToken
    s: 'string',
    a: 'string',
    r: 'string',
    i: 'int',
    u: 'int',
    k: { enum: ['A'] }, // A = authToken
  },
} as const);

export type AccountTokenStringData = Infer<typeof AccountTokenStringData>;

export type AccountTokenStringInput = Omit<
  AccountTokenStringData,
  'r' | 'i' | 'u'
> & {
  connectionInfo: ConnectionInformation;
};

export const SessionJWTPayloadType = createType('JWTPayloadType', {
  object: {
    iss: 'string?',
    sub: 'string?',
    aud: { union: ['string', '[string]'], optional: true },
    exp: 'float?',
    nbf: 'float?',
    iat: 'float?',
    jti: 'string?',
    data: 'string',
  },
} as const);

export type SessionJWTPayload = Infer<typeof SessionJWTPayloadType>;
