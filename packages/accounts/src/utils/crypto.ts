import { randomBytes } from 'crypto';

import { createType, Infer } from '@backland/schema';
import { GraphIDJSON, parseGraphID } from '@backland/transporter';
import {
  base64ToText,
  BJSON,
  hashString,
  StringValue,
  textToBase64,
} from '@backland/utils';
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
  sessionToken: string;
  config?: jwt.VerifyOptions;
}): SessionJWTPayload {
  const { secret, sessionToken, config } = input;
  const payload = jwt.verify(sessionToken, secret, config);
  return SessionJWTPayloadType.parse(payload);
}

export function createSessionTokenString(input: AccountTokenStringInput) {
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

export function parseSessionTokenString(
  token: string,
  expectedKind: 'R' | 'S' // S = session, R = refreshToken (also used as authToken)
): ParsedSessionToken {
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

  const dataSID = parseGraphID(s);
  const dataAID = parseGraphID(a);

  if (!dataSID) throw new Error('UNEXPECTED_SESSION_GRAPH_ID');
  if (!dataAID) throw new Error('UNEXPECTED_ACCOUNT_GRAPH_ID');

  return {
    dataSID,
    dataAID,
    randomPart: r,
    dataIPHash: i,
    dataUAHash: u,
  };
}

export type ParsedSessionToken = {
  dataSID: GraphIDJSON;
  dataAID: GraphIDJSON;
  dataUAHash: number;
  dataIPHash: number;
  randomPart: string;
};

export const AccountTokenStringData = createType('AccountTokenStringInput', {
  object: {
    s: 'string',
    a: 'string',
    r: 'string',
    i: 'int',
    u: 'int',
    k: { enum: ['S', 'R'] }, // S = session, R = refreshToken (also used as authToken)
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
