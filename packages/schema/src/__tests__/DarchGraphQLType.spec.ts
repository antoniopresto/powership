import { assert, IsExact } from 'conditional-type-checks';
import { GraphQLObjectType, GraphQLSchema, printSchema } from 'graphql';

import { DarchGraphQLType } from '../DarchGraphQLType';
import { createSchema, Schema } from '../Schema';

describe('DarchGraphQLType', () => {
  beforeEach(Schema.reset);

  it('works', async () => {
    const sut = new DarchGraphQLType('user', {
      schema: {
        name: 'string',
        age: 'int?',
      },
    });

    expect(sut.definition.type).toEqual('schema');

    type Return = ReturnType<typeof sut.parse>;

    assert<IsExact<Return, { name: string; age?: number | undefined }>>(true);

    expect(() => sut.parse({ name: 1 })).toThrow('field "name":');
  });

  it('should identify when input is schema', async () => {
    const name = `_${Math.random() * 1000}_`;

    const sut = new DarchGraphQLType(name, {
      schema: {
        name: 'string',
        age: 'int?',
      },
    } as const);

    expect(sut.definition.type).toEqual('schema');

    expect(Schema.register.get(name)).toBeTruthy();
  });

  it('should reuse schema', async () => {
    const name = `_${Math.random() * 1000}_`;

    const schema = createSchema(name, {
      foo: 'int',
    });

    const sut = new DarchGraphQLType(name, {
      type: schema,
    } as const);

    expect(sut.definition.type).toEqual('schema');

    expect(Schema.register.get(name)).toEqual(schema);
    expect((sut.__field as any).schema).toEqual(schema);
  });

  it('should create a new Schema when a different id is provided', async () => {
    const schema = createSchema('Original', {
      foo: 'int',
    });

    const sut = new DarchGraphQLType('AClone', schema);

    expect(Schema.register.get('Original')).toEqual(schema);

    expect((sut.__field as any).schema).not.toEqual(schema);
    expect((sut.__field as any).schema.id).toEqual('AClone');
  });

  it('should print graphql types', async () => {
    const schema = createSchema('Original', {
      foo: 'int',
    });

    const sut = new DarchGraphQLType('AClone', {
      type: schema,
    } as const);

    expect(sut.print()).toEqual([
      'type Original {',
      '  foo: Int!',
      '}',
      '',
      'input OriginalInput {',
      '  foo: Int!',
      '}',
    ]);
  });

  it('Should accept plain schema as definition', async () => {
    const schema = createSchema('Foo', {
      foo: 'int',
    });

    const sut = new DarchGraphQLType(schema);

    type Return = ReturnType<typeof sut.parse>;

    assert<IsExact<Return, { foo: number }>>(true);

    expect(() => sut.parse({ name: 1 })).toThrow('field "foo":');

    expect(sut.print()).toEqual([
      'type Foo {',
      '  foo: Int!',
      '}',
      '',
      'input FooInput {',
      '  foo: Int!',
      '}',
    ]);
  });

  it('Should accept list definition', async () => {
    const schema = createSchema('Foo', {
      foo: 'int',
    });

    const sut = new DarchGraphQLType({ schema, list: true });

    type Return = ReturnType<typeof sut.parse>;

    assert<IsExact<Return, { foo: number }[]>>(true);

    expect(() => sut.parse([{ name: 1 }])).toThrow('at position 0');

    expect(sut.graphQLType().toString()).toEqual('[Foo]!');
    expect(sut.graphQLInputType().toString()).toEqual('[FooInput]!');

    expect(sut.print()).toEqual([
      'type Foo {',
      '  foo: Int!',
      '}',
      '',
      'input FooInput {',
      '  foo: Int!',
      '}',
    ]);
  });

  it('Should accept optional option', async () => {
    const schema = createSchema('Foo', {
      foo: 'int',
    });

    const sut = new DarchGraphQLType({ schema, optional: true });

    type Return = ReturnType<typeof sut.parse>;

    assert<IsExact<Return, { foo: number } | undefined>>(true);

    expect(() => sut.parse({ name: 1 })).toThrow('field "foo"');

    expect(sut.graphQLType().toString()).toEqual('Foo');
    expect(sut.graphQLInputType().toString()).toEqual('FooInput');
  });

  it('Should accept optional and list option', async () => {
    const schema = createSchema('Foo', {
      foo: 'int',
    });

    const sut = new DarchGraphQLType({ schema, optional: true, list: true });

    type Return = ReturnType<typeof sut.parse>;

    assert<IsExact<Return, { foo: number }[] | undefined>>(true);

    expect(() => sut.parse([{ name: 1 }])).toThrow('field "foo"');

    expect(sut.graphQLType().toString()).toEqual('[Foo]');
    expect(sut.graphQLInputType().toString()).toEqual('[FooInput]');
  });

  it('should create graphQLInterface', () => {
    const schema = createSchema('Node', {
      id: 'ID',
    });

    const ship = createSchema('Ship', {
      name: 'string',
    });

    const nodeInterface = new DarchGraphQLType(schema);

    expect(nodeInterface.graphQLInterface().toString()).toEqual(
      'NodeInterface'
    );

    const shipNode = new DarchGraphQLType(ship).graphQLType({
      interfaces: [nodeInterface.graphQLInterface()],
    });

    const graphQLSchema = new GraphQLSchema({
      query: new GraphQLObjectType<any, any>({
        name: 'Query',
        fields: {
          shipNode: {
            type: shipNode as any,
          },
        },
      }),
    });

    expect(printSchema(graphQLSchema).split('\n')).toEqual([
      'type Query {',
      '  shipNode: Ship!',
      '}',
      '',
      'type Ship implements NodeInterface {',
      '  name: String!',
      '}',
      '',
      'interface NodeInterface {',
      '  id: ID!',
      '}',
    ]);
  });

  it('should print typescript', async () => {
    const ts = await Schema.createType('IntHem', 'int?').typescriptPrint();

    expect(ts.split('\n')).toEqual([
      '/* tslint:disable */',
      '/**',
      ' * This file was automatically generated.',
      ' * DO NOT MODIFY IT BY HAND.',
      ' */',
      '',
      'export interface IntHem {',
      '  IntHem?: number;',
      '}',
      '',
    ]);

    const tsSchema = await Schema.createType('Person', {
      schema: { name: 'string' },
    }).typescriptPrint();

    expect(tsSchema.split('\n')).toEqual([
      '/* tslint:disable */',
      '/**',
      ' * This file was automatically generated.',
      ' * DO NOT MODIFY IT BY HAND.',
      ' */',
      '',
      'export interface Person {',
      '  name: string;',
      '}',
      '',
    ]);
  });
});
