import { assert, IsExact } from 'conditional-type-checks';

import { ObjectType } from '../../ObjectType';
import { createGraphQLSchema } from '../../createGraphQLSchema';
import { createType } from '../GraphType';

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
      'export type EmptyArgs = undefined;',
      '',
      'export type emailInput = undefined | EmptyArgs;',
      'export type emailPayload = {',
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
      '',
      'export type ownerInput = undefined | EmptyArgs;',
      'export type ownerPayload = {',
      '  /**',
      '   * the user name',
      '   */',
      '  name: string;',
      '  id: Ulid;',
      '};',
      '',
      'export type emailsInput = {',
      '  limit: number;',
      '};',
      'export type emailsPayload = {',
      '  id: ID;',
      '  subject: string;',
      '}[];',
      '',
      'export interface GraphQLTypes {',
      '  email: { input: emailInput; payload: emailPayload };',
      '  "Email.owner": { input: ownerInput; payload: ownerPayload };',
      '  "User.emails": { input: emailsInput; payload: emailsPayload };',
      '}',
      '',
      'export type Resolvers = {',
      '  email(args: emailInput): Promise<emailPayload>;',
      '  "Email.owner"(args: ownerInput): Promise<ownerPayload>;',
      '  "User.emails"(args: emailsInput): Promise<emailsPayload>;',
      '};',
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

    const schema = createGraphQLSchema();

    expect(schema.utils.print().split('\n')).toEqual([
      'type Query {',
      '  """UU.RR"""',
      '  users(limit: Int!): User!',
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
      'export type EmptyArgs = undefined;',
      '',
      'export type usersInput = {',
      '  limit: number;',
      '};',
      '/** UU.TT **/',
      'export type usersPayload = {',
      '  id: ID;',
      '  logins: Date[];',
      '};',
      '',
      'export type loginsInput = {',
      '  since?: Date;',
      '};',
      'export type loginsPayload = Date[];',
      '',
      'export interface GraphQLTypes {',
      '  /** UU.RR **/',
      '  users: { input: usersInput; payload: usersPayload };',
      '',
      '  /** UU.RR.LOGINS **/',
      '  "User.logins": { input: loginsInput; payload: loginsPayload };',
      '}',
      '',
      'export type Resolvers = {',
      '  /** UU.RR **/',
      '  users(args: usersInput): Promise<usersPayload>;',
      '',
      '  /** UU.RR.LOGINS **/',
      '  "User.logins"(args: loginsInput): Promise<loginsPayload>;',
      '};',
      '',
    ]);
  });
});
