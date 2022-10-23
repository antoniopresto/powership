import { resetTypesCache } from '@backland/schema';
import { AccessTypeSchema } from '../AccessType';

describe('AccessType', () => {
  beforeEach(resetTypesCache);

  it('works', async () => {
    const sut = AccessTypeSchema.parse({
      kind: 'phone',
      value: '+5511941999999',
      verified: true,
    });

    expect(sut).toEqual({
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
      kind: 'phone',
      value: '+5511941999999',
      verified: true,
    });
  });
});
