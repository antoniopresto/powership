import type * as Module from '../entity/TokenEntity';
import { AppMock, createAppMock } from '@backland/mongo/lib/test-utils';
import { Token } from '../types/TokenType';

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
      _id: expect.stringMatching(
        /^account:_id#123≻accountstoken↠password#123#/
      ),
      _idPK: '123',
      _idSK: expect.stringMatching(/^password#123/),
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
});
