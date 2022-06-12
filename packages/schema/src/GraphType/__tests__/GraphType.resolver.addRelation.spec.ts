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
  });
});
