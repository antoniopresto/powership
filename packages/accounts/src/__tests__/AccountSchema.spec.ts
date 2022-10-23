import { AccountInput, AccountSchema } from '../AccountSchema';
import { AccessType } from '../AccessType';
import { Token } from '../TokenType';
import { ULID_REGEX } from '@backland/schema';

describe('AccountSchema', () => {
  // afterEach();

  test('works', async () => {
    const accessItem: AccessType = {
      kind: 'email',
      value: 'antonio@example.com',
    };

    const token: Token = {
      createdAt: new Date(),
      kind: 'password',
      value: '12345',
    };

    const account: AccountInput = {
      username: 'antoniopresto',
      access: [accessItem],
      tokens: [token],
      permissions: [],
      deactivated: false,
    };

    const sut = AccountSchema.parse(account);

    expect(sut).toEqual({
      username: 'antoniopresto',
      email: 'antonio@example.com',
      access: [
        {
          createdAt: expect.any(Date),
          kind: 'email',
          updatedAt: expect.any(Date),
          value: 'antonio@example.com',
        },
      ],
      accountId: expect.stringMatching(ULID_REGEX),
      deactivated: false,
      permissions: [],
      tokens: [
        {
          createdAt: expect.any(Date),
          kind: 'password',
          value: '12345',
        },
      ],
      tokenByKind: {
        password: {
          createdAt: expect.any(Date),
          kind: 'password',
          value: '12345',
        },
      },
    });
  });
});
