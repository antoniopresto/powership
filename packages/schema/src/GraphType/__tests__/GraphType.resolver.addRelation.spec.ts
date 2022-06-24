import { assert, IsExact } from 'conditional-type-checks';

import { ObjectType } from '../../ObjectType';
import { createGraphQLSchema } from '../../createGraphQLSchema';
import { createType } from '../GraphType';
import { createResolver } from '../createResolver';

describe('GraphType', () => {
  beforeEach(ObjectType.reset);

  it('add relation to a GraphType', async () => {
    type TEmail = {
      id: string;
      subject: string;
    };

    type TUser = {
      id: string;
      name: string;
    };

    const UserType = createType('User', {
      object: {
        name: { string: {}, description: 'the user name' },
        id: 'ulid',
      },
    });

    const Email = createType('Email', {
      object: {
        id: 'ID',
        subject: 'string',
      },
    });

    Email.addRelation({
      name: 'owner',

      type: { type: UserType },

      async resolve(root) {
        assert<IsExact<typeof root, TEmail>>(true);

        return {
          id: '123',
          name: 'fulano',
        };
      },
    });

    UserType.addRelation({
      type: { type: Email, list: true },
      name: 'emails',
      args: {
        limit: 'int',
      },

      async resolve(parent) {
        assert<IsExact<typeof parent, TUser>>(true);

        return [];
      },
    });

    Email.createResolver({
      name: 'email',
      async resolve() {
        return {} as TEmail;
      },
    });

    const schema = createGraphQLSchema();

    expect(schema.utils.print().split('\n')).toEqual([
      'type Query {',
      '  email: Email!',
      '}',
      '',
      'type Email {',
      '  id: ID!',
      '  subject: String!',
      '  owner: User!',
      '}',
      '',
      'type User {',
      '  """the user name"""',
      '  name: String!',
      '  id: Ulid!',
      '  emails(limit: Int!): [Email]!',
      '}',
      '',
      'scalar Ulid',
    ]);

    const ts = await schema.utils.typescript();

    expect(ts.split('\n')).toEqual([
      'export type emailInput = {',
      '  [k: string]: unknown | undefined;',
      '};',
      'export type Email = {',
      '  id: ID;',
      '  subject: string;',
      '  owner: {',
      '    /**',
      '     * the user name',
      '     */',
      '    name: string;',
      '    id: Ulid;',
      '  };',
      '};',
      'export interface GraphQLTypes {',
      '  email: { input: emailInput; payload: Email };',
      '}',
      'export type QueryResolvers = { email(args: emailInput): Promise<Email> };',
      'export type MutationResolvers = {};',
      'export type SubscriptionResolvers = {};',
      '',
    ]);
  });

  it('should print relations in typescript', async () => {
    const LoginType = createType('Logins', '[date]');

    const UserType = createType('User', {
      description: 'UU.TT',
      object: {
        id: 'ID',
      },
    });

    UserType.addRelation({
      name: 'logins',
      description: 'UU.RR.LOGINS',
      args: {
        since: 'date?',
      },
      type: { type: LoginType, list: true },
      async resolve(): Promise<any> {},
    });

    UserType.createResolver({
      name: 'users',
      description: 'UU.RR',
      args: { limit: 'int' },
      async resolve(): Promise<any> {
        return {};
      },
    });

    createResolver({
      type: {
        type: UserType,
        list: true,
        optional: true,
      },
      name: 'usersList',
      description: 'List of users ;)',
      args: { cursor: 'string' },
      async resolve(): Promise<any> {
        return {};
      },
    });

    const schema = createGraphQLSchema();

    expect(schema.utils.print().split('\n')).toEqual([
      'type Query {',
      '  """UU.RR"""',
      '  users(limit: Int!): User!',
      '',
      '  """List of users ;)"""',
      '  usersList(cursor: String!): [User]',
      '}',
      '',
      'type User {',
      '  id: ID!',
      '',
      '  """UU.RR.LOGINS"""',
      '  logins(since: Date): [Date]!',
      '}',
      '',
      'scalar Date',
    ]);

    const ts = await schema.utils.typescript();

    expect(ts.split('\n')).toEqual([
      'export type usersInput = {',
      '  limit: number;',
      '};',
      '/** UU.TT **/',
      'export type User = {',
      '  id: ID;',
      '  logins: Date[];',
      '};',
      'export type usersListInput = {',
      '  cursor: string;',
      '};',
      '/** UU.TT **/',
      'export type usersListPayload =',
      '  | {',
      '      id: ID;',
      '    }[]',
      '  | undefined;',
      'export interface GraphQLTypes {',
      '  /** UU.RR **/',
      '  users: { input: usersInput; payload: User };',
      '  /** List of users ;) **/',
      '  usersList: { input: usersListInput; payload: usersListPayload };',
      '}',
      'export type QueryResolvers = {',
      '  /** UU.RR **/',
      '  users(args: usersInput): Promise<User>;',
      '  /** List of users ;) **/',
      '  usersList(args: usersListInput): Promise<usersListPayload>;',
      '};',
      'export type MutationResolvers = {};',
      'export type SubscriptionResolvers = {};',
      '',
    ]);
  });
});
