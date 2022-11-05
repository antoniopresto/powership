import type * as Module from '../entity/TokenEntity';
import { AppMock, createAppMock } from '@backland/mongo/lib/test-utils';
import { Token } from '../types/TokenType';
import { ms } from '@backland/utils';

function _require() {
  return require('../entity/TokenEntity') as typeof Module;
}

describe('AccountToken', () => {
  let mock: AppMock;

  beforeEach(async () => {
    mock = createAppMock();
    await mock.start();
    jest.resetModules();
  });

  afterEach(async () => {
    await mock.reset();
  });

  test('Should lazy create entity and types', async () => {
    const { GraphType } =
      require('@backland/schema') as typeof import('@backland/schema');

    const { TokenEntity, TokenName } = _require();

    const get = () =>
      [...GraphType.register.values()].find(
        (el) => el.optionalId === TokenName
      );

    expect(get()).toBe(undefined);
    expect(TokenEntity).toBeDefined();
    expect(get()).toBe(undefined);

    // only create entity when any proxy property is accessed
    TokenEntity.type.touch();
    expect(get()).toBeDefined();
  });

  test('Should create token', async () => {
    const { TokenEntity } = _require();
    TokenEntity.setOption('transporter', mock.transporter);

    let token: Token = {
      accountId: '123',
      kind: 'password',
      createdFor: '123',
      value: 'pass12345',
    };

    const { item: created } = await TokenEntity.createOne({
      context: {},
      item: token,
    });

    expect(created).toEqual({
      _id: 'accountstoken:_id#123↠password#123',
      _idPK: '123',
      _idSK: 'password#123',
      _v: expect.any(String),
      accountId: '123',
      createdAt: expect.any(Date),
      createdFor: '123',
      id: expect.any(String),
      kind: 'password',
      ulid: expect.any(String),
      updatedAt: expect.any(Date),
      value: 'pass12345',
    });
  });

  test('findValidToken', async () => {
    const { TokenEntity } = _require();
    TokenEntity.setOption('transporter', mock.transporter);

    let token: Token = {
      accountId: '123',
      kind: 'password',
      createdFor: '123',
      value: 'pass12345',
    };

    await TokenEntity.createOne({
      context: {},
      item: token,
    });

    const valid = await TokenEntity.getValidToken({
      accountId: '123',
      kind: 'password',
      maxAge: '1 day',
    });

    expect(valid).toHaveProperty('value', 'pass12345');

    await TokenEntity.updateOne({
      filter: { id: valid.id },
      update: { $set: { createdAt: new Date(Date.now() - ms('1.1 days')) } },
      context: {},
    });

    await expect(
      TokenEntity.getValidToken({
        accountId: '123',
        kind: 'password',
        maxAge: '1 day', // 1.1 days ago is the defined createdAt
      })
    ).rejects.toThrow('MISSING_TOKEN');

    await expect(
      TokenEntity.getValidToken({
        accountId: '123',
        kind: 'password',
        maxAge: '1.2 days', // 1.1 days ago is the defined createdAt
      })
    ).resolves.toHaveProperty('id', valid.id);
  });
});
