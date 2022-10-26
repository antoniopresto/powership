import { ULID_REGEX } from '@backland/schema';
import { AccountInput, AccountSchema } from '../types/AccountSchema';
import { AccessType } from '../types/AccessTypeSchema';

describe('AccountSchema', () => {
  // afterEach();

  test('works', async () => {
    const accessItem: AccessType = {
      kind: 'email',
      value: 'antonio@example.com',
    };

    const account: AccountInput = {
      username: 'antoniopresto',
      access: [accessItem],
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
    });
  });
});
