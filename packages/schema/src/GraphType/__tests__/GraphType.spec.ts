import { assert, IsExact } from 'conditional-type-checks';
import { GraphQLObjectType, GraphQLSchema, printSchema } from 'graphql';

import { CircularDeps } from '../../CircularDeps';
import { Infer } from '../../Infer';
import { createObjectType, ObjectType } from '../../ObjectType';
import { objectMetaFieldKey } from '../../fields/MetaFieldField';
import { createType, GraphType } from '../GraphType';

describe('createType', () => {
  beforeEach(ObjectType.reset);

  it('works', async () => {
    const sut = new GraphType('user', {
      object: {
        name: 'string',
        age: 'int?',
        ee: { enum: ['open', 'closed'] },
      },
    } as const);

    expect(sut.definition.type).toEqual('object');

    type Expected = {
      age?: number | undefined;
      ee: 'open' | 'closed';
      name: string;
    };
    type Inferred = Infer<typeof sut>;
    type Return = ReturnType<typeof sut.parse>;

    assert<IsExact<Inferred, Expected>>(true);
    assert<IsExact<Return, Expected>>(true);

    expect(() => sut.parse({ name: 1 })).toThrow('field "name":');
  });

  it('should identify when input is object', async () => {
    const name = `_${Math.random() * 1000}_`;

    const sut = new GraphType(name, {
      object: {
        name: 'string',
        age: 'int?',
      },
    } as const);

    expect(sut.definition.type).toEqual('object');

    expect(ObjectType.register.get(name)).toBeTruthy();
  });

  test('clone', async () => {
    const sut = new GraphType('User', {
      object: {
        name: 'string',
        age: 'int?',
      },
    } as const);

    const Urso = sut.clone().graphType('Urso');

    expect({ ...Urso.definition.def, [objectMetaFieldKey]: 1 }).toEqual({
      ...sut.definition.def,
      [objectMetaFieldKey]: 1,
    });

    const monkey = Urso.clone()
      .extendDefinition({
        jumps: 'boolean',
      })
      .graphType('monkey');

    expect(monkey.definition).toEqual({
      def: {
        __dschm__: {
          def: {
            id: 'monkey',
          },

          type: 'meta',
        },
        age: {
          optional: true,
          type: 'int',
        },
        jumps: {
          type: 'boolean',
        },
        name: {
          type: 'string',
        },
      },

      type: 'object',
    });
  });

  it('should reuse object', async () => {
    const name = `_${Math.random() * 1000}_`;

    const object = createObjectType(name, {
      foo: 'int',
    });

    const sut = new GraphType(name, {
      type: object,
    } as const);

    expect(sut.definition.type).toEqual('object');

    expect(ObjectType.register.get(name)).toEqual(object);
    expect((sut.__field as any).utils.object).toEqual(object);
  });

  it('should create a new Object when a different id is provided', async () => {
    const object = createObjectType('Original', {
      foo: 'int',
    });

    const sut = new GraphType('AClone', object);

    expect(ObjectType.register.get('Original')).toEqual(object);

    expect((sut.__field as any).utils.object).not.toEqual(object);
    expect((sut.__field as any).utils.object.id).toEqual('AClone');
  });

  it('should print graphql types', async () => {
    const object = createObjectType('Original', {
      foo: 'int',
    });

    const sut = new GraphType('AClone', {
      type: object,
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

  it('Should accept plain object as definition', async () => {
    const object = createObjectType('Foo', {
      foo: 'int',
    });

    const sut = new GraphType(object);

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
    const object = createObjectType('Foo', {
      foo: 'int',
    });

    const sut = new GraphType({ object, list: true });

    type Expected = { foo: number }[];
    type Return = ReturnType<typeof sut.parse>;

    type Inferred = Infer<typeof sut>;

    assert<IsExact<Inferred, Expected>>(true);
    assert<IsExact<Return, Expected>>(true);

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
    const object = createObjectType('Foo', {
      foo: 'int',
    });

    const sut = new GraphType({ object, optional: true });

    type Return = ReturnType<typeof sut.parse>;

    assert<IsExact<Return, { foo: number } | undefined>>(true);

    expect(() => sut.parse({ name: 1 })).toThrow('field "foo"');

    expect(sut.graphQLType().toString()).toEqual('Foo');
    expect(sut.graphQLInputType().toString()).toEqual('FooInput');
  });

  it('Should accept optional and list option', async () => {
    const object = createObjectType('Foo', {
      foo: 'int',
    });

    const sut = new GraphType({ object, optional: true, list: true });

    type Return = ReturnType<typeof sut.parse>;

    assert<IsExact<Return, { foo: number }[] | undefined>>(true);

    expect(() => sut.parse([{ name: 1 }])).toThrow('field "foo"');

    expect(sut.graphQLType().toString()).toEqual('[Foo]');
    expect(sut.graphQLInputType().toString()).toEqual('[FooInput]');
  });

  it('should create graphQLInterface', () => {
    const object = createObjectType('Node', {
      id: 'ID',
    });

    const ship = createObjectType('Ship', {
      name: 'string',
    });

    const nodeInterface = new GraphType(object);

    expect(nodeInterface.graphQLInterface().toString()).toEqual(
      'NodeInterface'
    );

    const shipNode = new GraphType(ship).graphQLType({
      interfaces: [nodeInterface.graphQLInterface()],
    });

    const graphQLObject = new GraphQLSchema({
      query: new GraphQLObjectType<any, any>({
        name: 'Query',
        fields: {
          shipNode: {
            type: shipNode as any,
          },
        },
      }),
    });

    expect(printSchema(graphQLObject).split('\n')).toEqual([
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
    const ts = await CircularDeps.createType(
      'IntHem',
      'int?'
    ).typescriptPrint();

    expect(ts.split('\n')).toEqual([
      'export interface IntHem {',
      '  IntHem?: number;',
      '}',
      '',
    ]);

    const tsObject = await CircularDeps.createType('Person', {
      object: { name: 'string' },
    }).typescriptPrint();

    expect(tsObject.split('\n')).toEqual([
      'export interface Person {',
      '  name: string;',
      '}',
      '',
    ]);
  });

  it('Should validate against overriding register', () => {
    createType('t1', { object: { name: 'string' } });
    expect(() => createType('t1', { object: { name: 'int' } })).toThrow(
      'An Object with name "t1" is already registered with another definition.'
    );
    createType('t1', { object: { name: 'string' } });

    createType('t2', 'int?');
    expect(() => createType('t2', 'int')).toThrow(
      'Different type already registered with name "t2"'
    );
    createType('t2', 'int?');
  });

  it('handles enums', async () => {
    const sut = createType('FooBar', {
      object: {
        foo: {
          enum: ['open', 'closed'],
        },
      },
    } as const);

    assert<IsExact<Infer<typeof sut>, { foo: 'open' | 'closed' }>>(true);

    const ts = await sut.typescriptPrint();

    expect(ts.split('\n')).toEqual([
      'export interface FooBar {',
      '  foo: "open" | "closed";',
      '}',
      '',
    ]);
  });
});
