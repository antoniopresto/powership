import { printType } from 'graphql/utilities';

import { createObjectType, resetTypesCache } from '../../ObjectType';
import { createType } from '../GraphType';

describe('GraphQLParse.hiddenFields', () => {
  const person = createObjectType('Person', {
    name: 'string',
    age: 'int?',
    addresses: { record: { type: 'string', keyType: 'int' } },
    password: {
      hidden: true,
      string: {},
    },
  });

  afterAll(resetTypesCache);

  it('Should hide "hidden: true" fields', async () => {
    const gql = person.graphqlPrint();

    expect(gql.split('\n')).toEqual([
      'type Person {',
      '  name: String!',
      '  age: Int',
      '  addresses: Person_addresses!',
      '}',
      '',
      'scalar Person_addresses',
    ]);

    const ts = await person.typescriptPrint();

    expect(ts.split('\n')).toEqual([
      'export interface Person {',
      '  name: string;',
      '  age?: number;',
      '  addresses: {',
      '    [k: string]: unknown | undefined;',
      '  };',
      '}',
      '',
    ]);
  });

  it('Should hide "hidden: true" from optionalType', async () => {
    const personType = createType(person).optionalType('PersonInput');

    const gql = printType(personType.graphQLInputType()).split('\n');

    expect(gql).toEqual([
      'input PersonInput {',
      '  name: String!',
      '  age: Int',
      '  addresses: Person_addresses!',
      '}',
    ]);

    const ts = await personType.typescriptPrint();

    expect(ts.split('\n')).toEqual([
      'export interface PersonInputOptional {',
      '  name: string;',
      '  age?: number;',
      '  addresses: {',
      '    [k: string]: unknown | undefined;',
      '  };',
      '}',
      '',
    ]);
  });

  it('Should require type in parse', async () => {
    expect(() => {
      person.parse({ name: 'antonio', addresses: {}, password: undefined });
    }).toThrow('field "password": RequiredField.');

    const res = person.parse({ name: 'antonio', addresses: {}, password: '1' });

    expect(res).toEqual({
      addresses: {},
      name: 'antonio',
      password: '1',
    });
  });
});
