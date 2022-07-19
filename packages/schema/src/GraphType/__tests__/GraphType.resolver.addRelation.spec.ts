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
        // unknown for TS relief
        assert<IsExact<typeof root, unknown>>(true);

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
        // unknown for TS relief
        assert<IsExact<typeof parent, unknown>>(true);

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
    const UserType = createType('User', {
      description: 'user entity',
      object: {
        id: 'ID',
      },
    });

    const LoginType = createType('LoginRegister', {
      object: {
        time: 'int',
        device: 'string',
      },
    });

    UserType.addRelation({
      name: 'logins',
      description: 'user logins',
      args: {
        since: 'date?',
      },
      type: { type: LoginType, list: true },
      async resolve(): Promise<any> {},
    });

    createResolver({
      type: [UserType] as const,
      name: 'findUsers',
      description: 'find users resolver',
      args: { limit: 'int' },
      async resolve(): Promise<any> {
        return {};
      },
    });

    const schema = createGraphQLSchema();

    const ts = await schema.utils.typescript();

    expect(ts.split('\n')).toEqual([
      'export type findUsersInput = {',
      '  limit: number;',
      '};',
      '/** user entity **/',
      'export type findUsersPayload = {',
      '  id: ID;',
      '  logins: {',
      '    time: number;',
      '    device: string;',
      '  }[];',
      '}[];',
      'export interface GraphQLTypes {',
      '  /** find users resolver **/',
      '  findUsers: { input: findUsersInput; payload: findUsersPayload };',
      '}',
      'export type QueryResolvers = {',
      '  /** find users resolver **/',
      '  findUsers(args: findUsersInput): Promise<findUsersPayload>;',
      '};',
      'export type MutationResolvers = {};',
      'export type SubscriptionResolvers = {};',
      '',
    ]);
  });
});
