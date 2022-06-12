import { PromiseType } from '@darch/utils/lib/typeUtils';
import { assert, IsExact } from 'conditional-type-checks';

import { createDarchObject, ObjectType } from '../../ObjectType';
import { createGraphQLSchema } from '../../createGraphQLSchema';
import { createType, GraphType } from '../GraphType';

describe('GraphType', () => {
  beforeEach(ObjectType.reset);

  it('works', async () => {
    type TUser = { name: string; id: string };
    type TEmail = { id: string; subject: string };

    const UserType = createDarchObject('User', {
      name: { string: {}, description: 'the user name' },
      id: 'ulid',
    });

    const Email = createType('email', {
      object: {
        id: 'ID',
        subject: 'string',
      },
    });

    const resolver = new GraphType(UserType).createResolver({
      name: 'User',
      args: { id: 'ulid' },
      description: 'User resolver',
      async resolve(_, { id }) {
        return {
          name: id,
          id: id,
        } as any;
      },
    });

    const relation1 = resolver.addRelation(Email, {
      name: 'emails',
      async resolve(parent) {
        assert<IsExact<typeof parent, TUser>>(true);

        return {
          subject: '',
          id: '',
        };
      },
    });

    type Return = PromiseType<ReturnType<typeof relation1.resolve>>;
    type Args = Parameters<typeof relation1.resolve>[1];

    assert<IsExact<Return, TEmail>>(true);
    assert<IsExact<Args, {}>>(true);

    const relation2 = relation1.addRelation(
      { type: Email, list: true },
      {
        name: 'emailsPagination',
        args: {
          page: 'int?',
          status: { enum: ['open', 'closed'] as const },
        },
        async resolve(parent) {
          assert<IsExact<typeof parent, TEmail>>(true);

          return [
            {
              subject: '',
              id: '',
            },
          ];
        },
      }
    );

    type Return2 = PromiseType<ReturnType<typeof relation2.resolve>>;
    type Args2 = Parameters<typeof relation2.resolve>[1];

    assert<IsExact<Return2, TEmail[]>>(true);
    assert<
      IsExact<Args2, { page?: number | undefined; status: 'open' | 'closed' }>
    >(true);
  });

  it('resolving', async () => {
    const UserType = createDarchObject('User', {
      name: { string: {}, description: 'the user name' },
      id: 'ulid',
    });

    const Email = createType('email', {
      object: {
        id: 'ID',
        subject: 'string',
      },
    });

    const resolver = new GraphType(UserType).createResolver({
      name: 'User',
      args: { id: 'ulid' },
      description: 'User resolver',
      async resolve(_, { id }) {
        return {
          name: id,
          id: id,
        } as any;
      },
    });

    const relation1 = resolver.addRelation(Email, {
      name: 'emails',
      async resolve() {
        return {
          subject: '',
          id: '',
        };
      },
    });

    const relation2 = relation1.addRelation(
      { type: Email, list: true },
      {
        name: 'emailsPagination',
        args: {
          page: 'int?',
          status: { enum: ['open', 'closed'] as const },
        },
        async resolve(parent) {
          return [parent, parent];
        },
      }
    );

    const result = await relation2.resolve(
      { id: '123', subject: 'vacancy' },
      { page: 578, status: 'open' },
      {},
      {} as any
    );

    expect(result).toEqual([
      { id: '123', subject: 'vacancy' },
      { id: '123', subject: 'vacancy' },
    ]);
  });

  it('add relation to parent graphql type', async () => {
    const UserType = createDarchObject('User', {
      name: { string: {}, description: 'the user name' },
      id: 'ulid',
    });

    const Email = createType('email', {
      object: {
        id: 'ID',
        subject: 'string',
      },
    });

    const resolver = new GraphType(UserType).createResolver({
      name: 'user',
      args: { id: 'ulid' },
      async resolve(_, { id }) {
        return {
          name: id,
          id: id,
        } as any;
      },
    });

    resolver.addRelation(Email, {
      name: 'userEmails',
      args: {
        limit: 'int?',
      },
      async resolve() {
        return {
          id: 'mm',
          subject: 'how',
        };
      },
    });

    resolver.addRelation('[string]', {
      name: 'stringList',
      args: {
        size: 'int',
      },
      async resolve() {
        return ['hy'];
      },
    });

    const schema = createGraphQLSchema();

    expect(schema.utils.print().split('\n')).toEqual([
      'type Query {',
      '  user(id: Ulid!): userPayload',
      '}',
      '',
      'type userPayload {',
      '  """the user name"""',
      '  name: String!',
      '  id: Ulid!',
      '  userEmails(limit: Int): userEmailsPayload',
      '  stringList(size: Int!): [String]!',
      '}',
      '',
      'scalar Ulid',
      '',
      'type userEmailsPayload {',
      '  id: ID!',
      '  subject: String!',
      '}',
    ]);
  });
});
