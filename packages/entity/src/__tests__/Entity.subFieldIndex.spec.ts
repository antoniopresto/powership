import { createEntity } from '../Entity';
import {
  createType,
  GraphType,
  ObjectType,
  resetTypesCache,
} from '@backland/schema';
import { AppMock, createAppMock } from '@backland/mongo/lib/test-utils';
import { MongoTransporter } from '@backland/mongo';

describe('Entity.subFieldIndex.spec.ts', () => {
  let mockApp: AppMock;
  let transporter!: MongoTransporter;

  beforeEach(async function () {
    await ObjectType.reset();
    mockApp = createAppMock();
    await mockApp.start();
    transporter = new MongoTransporter({
      client: mockApp.client!,
      collection: 'temp1',
    });
  });

  afterEach(async function () {
    await mockApp.reset();
    await resetTypesCache();
  });

  function getMock() {
    const AccessTypeSchema = createType({
      union: [
        {
          object: {
            kind: { literal: 'email' },
            value: 'email',
          },
        },

        {
          object: {
            kind: { literal: 'phone' },
            value: 'phone',
          },
        },
      ],
    } as const);

    const AccountType = createType('Account', {
      object: {
        name: 'string',
        access: {
          array: {
            of: AccessTypeSchema,
            min: 1,
          },
        },
      },
    });

    const AccountEntity = createEntity({
      indexes: [
        {
          PK: ['.access.value'],
          name: 'subsub',
          field: '_id',
        },
      ],
      name: 'SubSub',
      type: AccountType,
    });

    AccessTypeSchema.touch();
    AccountType.touch();

    return {
      AccountEntity,
      AccountType,
      AccessTypeSchema,
    };
  }
  test('create index types', async function () {
    const { AccountEntity } = getMock();
    const { findMany } = AccountEntity;

    expect(findMany.queryArgs.filter).toEqual({
      def: {
        'access_value': {
          def: {
            min: 1,
            of: expect.any(GraphType),
          },
          optional: true,
          type: 'array',
        },
        id: {
          optional: true,
          type: 'ID',
        },
      },
      type: 'object',
    });
  });
});
