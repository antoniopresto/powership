import { createType } from '@swind/schema';
import { tupleEnum } from '@swind/utils';

import { reservedUsernames } from './reservedUsernames';

export const USERNAME_REGEX = /^[a-z0-9_]{3,16}$/;

export const usernameType = createType('username', {
  string: {
    max: 16,
    min: 3,
  },
});

export const USER_NAME_ERRORS = tupleEnum(
  'NOT_STRING',
  'MORE_THAN_16',
  'LESS_THAN_2',
  'INVALID_CHARS'
);

export function validateUsername(username: string): string {
  if (typeof username !== 'string') {
    throw new Error(USER_NAME_ERRORS.NOT_STRING);
  }

  if (username.length < 2) {
    throw new Error(USER_NAME_ERRORS.LESS_THAN_2);
  }

  if (username.length > 16) {
    throw new Error(USER_NAME_ERRORS.MORE_THAN_16);
  }

  const invalid =
    username.match(/[^a-z0-9_]/gi) || reservedUsernames.includes(username);

  if (invalid) {
    throw new Error(USER_NAME_ERRORS.INVALID_CHARS);
  }

  return username;
}
