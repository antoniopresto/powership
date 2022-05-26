import { createSchema } from '../Schema';
import { schemaComposer } from 'graphql-compose';
import { graphql, printSchema } from 'graphql';

describe('DarchGraphQLParse.record', () => {
  const person = createSchema('Person', {
    name: 'string',
    age: 'int?',
    addresses: { record: { type: 'string', keyType: 'int' } },
  });

  schemaComposer.Query.addFields({
    person: {
      type: person.graphqlType(),
      args: {
        rec: createSchema('rec1', {
          addresses: { record: { type: '[string]', keyType: 'int' } },
        }).graphqlInputType(),
      },
    },
  });

  const schema = schemaComposer.buildSchema();

  it('Should convert record', async () => {
    expect(printSchema(schema).split('\n')).toEqual([
      'type Query {',
      '  person(rec: rec1Input): Person',
      '}',
      '',
      'type Person {',
      '  name: String!',
      '  age: Int',
      '  addresses: Person_addresses_Record!',
      '}',
      '',
      'scalar Person_addresses_Record',
      '',
      'input rec1Input {',
      '  addresses: rec1_addresses_Record!',
      '}',
      '',
      'scalar rec1_addresses_Record',
    ]);

    await expect(
      graphql({
        schema,
        contextValue: {},
        source: '{ person { addresses } }',
        rootValue: {
          person: {
            addresses: [],
          },
        },
      })
    ).resolves.toMatchObject({
      errors: [
        {
          message:
            'Expected value to be of type "object", found array instead.',
        },
      ],
    });

    await expect(
      graphql({
        schema,
        contextValue: {},
        source: '{ person { addresses } }',
        rootValue: {
          person: {
            addresses: {
              abc: 1,
            },
          },
        },
      })
    ).resolves.toMatchObject({
      errors: [
        {
          message:
            'Unexpected record key `abc`. Expected value to be of type "number", found string instead.',
        },
      ],
    });
  });

  it('Should serialize output', async () => {
    await expect(
      graphql({
        schema,
        contextValue: {},
        source: '{ person(rec: {addresses: "__INVALID123__"}) { addresses } }',
        rootValue: {
          person: {
            addresses: {},
          },
        },
      })
    ).resolves.toMatchObject({
      errors: [
        {
          message: expect.stringMatching(
            'Expected value to be of type "object", found string instead.'
          ),
        },
      ],
    });
  });
});
