import { createObjectType } from '@darch/schema';

import { Entity } from './Entity';

const userSchema = createObjectType({
  name: 'string',
  optional: 'string?',
  age: 'int',
  gender: {
    type: 'enum',
    def: { enum: ['male', 'female', 'other'] },
    optional: true,
  },

  category: { enum: ['general', 'closed'] },
  ab: { enum: ['a', 'b'] },

  enumArray: {
    type: 'enum',
    list: true,
    def: ['bb', 'cc'],
  },

  sub: createObjectType({
    name: 'string',
  }),
} as const);

describe('entityToGraphQL', () => {
  it('works', () => {
    const user = new Entity({
      name: 'User',
      type: userSchema,
    });

    const gql = user.toGraphQL().typeToString().split('\n');

    expect(gql).toEqual([
      'type User {',
      '  SK: String',
      '  name: String!',
      '  optional: String',
      '  age: Int!',
      '  gender: UserGenderEnum',
      '  category: UserCategoryEnum!',
      '  ab: UserAbEnum!',
      '  enumArray: [UserEnumArrayEnum]!',
      '  sub: UserSub!',
      '  PK: String!',
      '  ID: Ulid!',
      '}',
    ]);

    // TODO:
    // expect(
    //   user.schemaComposer.get('UserGenderEnum').toSDL().split('\n')
    // ).toEqual([
    //   'enum UserGenderEnum {',
    //   '  male',
    //   '  female',
    //   //
    //   '  other',
    //   '}',
    // ]);
    //
    // expect(
    //   user.schemaComposer.get('UserCategoryEnum').toSDL().split('\n')
    // ).toEqual([
    //   'enum UserCategoryEnum {',
    //   //
    //   '  general',
    //   '  closed',
    //   '}',
    // ]);
    //
    // expect(user.schemaComposer.get('UserAbEnum').toSDL().split('\n')).toEqual([
    //   'enum UserAbEnum {',
    //   '  a',
    //   '  b',
    //   '}',
    // ]);
    //
    // expect(
    //   user.schemaComposer.get('UserEnumArrayEnum').toSDL().split('\n')
    // ).toEqual([
    //   'enum UserEnumArrayEnum {',
    //   '  bb',
    //   //
    //   '  cc',
    //   '}',
    // ]);
  });
});
