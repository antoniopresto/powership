/**
 * @description Refresh a user token.
 * @param {string} input.sessionToken - User access token.
 * @param {string} input.refreshToken - User refresh token.
 * @param {ConnectionInformation} input.connectionInfo - User connection informations.
 * @returns {Promise<Object>} - LoginResult.
 * @throws {@link RefreshTokensErrors}
 */
import { LoaderContext } from '@backland/transporter';

import { AccountEntity } from '../entity/AccountEntity';
import { LoginResult } from '../interfaces';
import { ConnectionInformation } from '../types/ConnectionInformation';

import { AccountError } from './AccountError';
import { verifySessionJWT } from './crypto';


