import { AppMock, createAppMock } from '@backland/mongo/lib/test-utils';

import { Token } from '../types/TokenType';

function _require() {
  return require('../index') as typeof import('../index');
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
      accountId: '444',
      kind: 'password',
      createdFor: 'CREATED_FOR_VALUE',
      value: 'pass12345',
    };

    const { item: created } = await TokenEntity.createOne({
      context: {},
      item: token,
    });

    expect(created).toEqual({
      _c: expect.any(String),
      _e: 'accountstoken',
      _id2: 'accountstoken⋮_id2⋮pass12345⋮password∙444⋮',
      _id2PK: 'accountstoken⋮_id2⋮pass12345⋮',
      _id2SK: 'password∙444',
      _id: expect.stringMatching(
        /^account⋮_id⋮444⊰accountstoken⋮password∙CREATED_FOR_VALUE∙01/
      ),
      _idPK: 'account⋮_id⋮444⊰accountstoken⋮',
      _idSK: expect.stringMatching(/^password∙CREATED_FOR_VALUE∙01[A-Z0-9]*$/),
      _rpk: ['account⋮_id⋮444⊰'],
      _v: expect.any(String),
      accountId: '444',
      createdAt: expect.any(Date),
      createdFor: 'CREATED_FOR_VALUE',
      id: expect.any(String),
      kind: 'password',
      ulid: expect.any(String),
      updatedAt: expect.any(Date),
      value: 'pass12345',
    });
  });
});
