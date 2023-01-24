import { assert, IsExact } from 'conditional-type-checks';
import { GraphQLObjectType, GraphQLSchema, printSchema } from 'graphql';

import { CircularDeps } from '../../CircularDeps';
import { Infer } from '../../Infer';
import { createObjectType, ObjectType } from '../../ObjectType';
import { createType, GraphType } from '../GraphType';
import { createGraphQLSchema } from '../../createGraphQLSchema';
import { createResolver } from '../../Resolver';

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

    new GraphType(name, {
      object: {
        name: 'string',
        age: 'int?',
      },
    } as const).touch();

    // expect(sut.definition.type).toEqual('object');

    expect(ObjectType.register.get(name)).toBeTruthy();
  });

  test('clone', async () => {
    const sut = new GraphType('User', {
      object: {
        name: 'string',
        age: 'int?',
      },
    } as const);

    const Urso = sut.clone((t) => t.graphType('Urso'));

    // expect({ ...Urso.definition.def, [objectMetaFieldKey]: 1 }).toEqual({
    //   ...sut.definition.def,
    //   [objectMetaFieldKey]: 1,
    // });

    const monkey = Urso.clone((t) =>
      t
        .extendObjectDefinition({
          jumps: 'boolean',
        })
        .graphType('monkey')
    );

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
    expect((sut.__lazyGetter.field as any).utils.object).toEqual(object);
  });

  it('should create a new Object when a different id is provided', async () => {
    const object = createObjectType('Original', {
      foo: 'int',
    });

    const sut = new GraphType('AClone', object);

    expect(ObjectType.register.get('Original')).toEqual(object);

    expect((sut.__lazyGetter.field as any).utils.object).not.toEqual(object);
    expect((sut.__lazyGetter.field as any).utils.object.id).toEqual('AClone');
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

    const sut = new GraphType({ type: object, list: true });

    type Expected = { foo: number }[];
    type Return = ReturnType<typeof sut.parse>;

    type Inferred = Infer<typeof sut>;

    assert<IsExact<Inferred, Expected>>(true);
    assert<IsExact<Return, Expected>>(true);

    assert<IsExact<Return, { foo: number }[]>>(true);

    expect(() => sut.parse([{ name: 1 }])).toThrow(
      'Expected object, found Array'
    );

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

    const sut = new GraphType({ type: object, optional: true });

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

    const sut = new GraphType({ type: object, optional: true, list: true });

    type Return = ReturnType<typeof sut.parse>;

    assert<IsExact<Return, { foo: number }[] | undefined>>(true);

    expect(() => sut.parse([{ name: 1 }])).toThrow(
      'Expected object, found Array'
    );

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

  xit('Should validate against overriding register', () => {
    createType('t1', { object: { name: 'string' } }).touch();
    expect(() => createType('t1', { object: { name: 'int' } }).touch()).toThrow(
      'An Object with name "t1" is already registered with another definition.'
    );
    createType('t1', { object: { name: 'string' } }).touch();

    createType('t2', 'int?').touch();
    expect(() => createType('t2', 'int').touch()).toThrow(
      'Different type already registered with name "t2"'
    );
    createType('t2', 'int?').touch();
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

  test('asserts same definition', () => {
    createType('BreadCrumb', {
      object: {
        id: 'ID',
        active: 'boolean?',
        name: 'string',
        parentId: 'ID?',
      },
    });

    createType('BreadCrumb', {
      object: {
        id: 'ID',
        active: 'boolean?',
        name: 'string',
        parentId: 'ID?',
      },
    });
  });

  test('mutateFields', async () => {
    createType('Xirifompila', {
      object: {
        id: 'ID',
        active: 'boolean?',
      },
    }).touch();

    const origin = createType('Xirifompila', {
      object: {
        id: 'ID',
        active: 'boolean?',
        name: 'string',
        parentId: 'ID?',
      },
    });

    expect(origin.touched).toBeFalsy();

    const result = origin.mutateFields((it) => {
      return {
        ...it.def(),
        id: 'int',
      } as const;
    });

    const ts = await result.typescriptPrint();

    expect(ts.split('\n')).toEqual([
      'export interface Xirifompila {',
      '  Xirifompila: {',
      '    id: number;',
      '    active?: boolean;',
      '    name: string;',
      '    parentId?: ID;',
      '  };',
      '}',
      '',
    ]);
  });

  test('parse with exclude', async () => {
    const type = createType('Xirifompila', {
      object: {
        id: 'ID',
        active: 'boolean?',
      },
    });

    const parsed = type.parse({ active: true }, { exclude: ['id'] });

    expect(parsed).toEqual({ active: true });

    expect(() => {
      return type.parse({ active: true });
    }).toThrow('➤ field "id": RequiredField.');
  });

  test('to optional', async () => {
    const type = createType('User', {
      object: {
        id: 'ID',
        active: 'boolean?',
      },
    });

    const schem = createType('schem', {
      object: {
        user: type.override((el) => el.optional().graphType('UserInput')),
      },
    });

    const ts = await schem.typescriptPrint();

    const gql = schem
      .override((it) => it.optional().graphType('SchemInput'))
      .graphQLInputType();

    expect(ts.split('\n')).toEqual([
      'export interface Schem {',
      '  user?: {',
      '    id: ID;',
      '    active?: boolean;',
      '  };',
      '}',
      '',
    ]);

    expect(gql.toString()).toEqual('schemInput');
  });

  test('.listType()', () => {
    const sut = createType('User', {
      object: {
        name: 'string',
        age: 'int',
      },
    });

    const listType = sut.listType();

    expect(listType.parse([])).toEqual([]);
  });

  test('.optionalType()', () => {
    const sut = createType('User', {
      object: {
        name: 'string',
        age: 'int',
      },
    });

    const optionalType = sut.optionalType();

    expect(optionalType.parse({ name: 'aa', age: 1 })).toEqual({
      name: 'aa',
      age: 1,
    });

    expect(optionalType.parse(undefined)).toEqual(undefined);
  });

  test('.optionalType().listType() GraphQL', () => {
    const graphType = createType('User', {
      object: {
        name: 'string',
        age: 'int',
      },
    });

    const listOptionalListResolver = createResolver({
      name: 'list_optional_list',
      type: graphType.listType().optionalType('list_optional').listType(),
      args: {},
    }).resolver(() => {
      return {};
    });

    const graphTypeResolver = createResolver({
      name: 'graphType',
      type: graphType,
      args: {},
    }).resolver(() => {
      return {};
    });

    const usersOptionalResolver = createResolver({
      name: 'usersOptional',
      type: graphType.optionalType(),
      args: {},
    }).resolver(() => {
      return {};
    });

    const usersListResolver = createResolver({
      name: 'usersList',
      type: graphType.listType(),
      args: {},
    }).resolver(() => {
      return {};
    });

    const schemaString = printSchema(
      createGraphQLSchema([
        listOptionalListResolver,
        graphTypeResolver,
        usersOptionalResolver,
        usersListResolver,
      ])
    );

    expect(schemaString.split('\n')).toEqual([
      'type Query {',
      '  list_optional_list: [[User!]]!',
      '  graphType: User!',
      '  usersOptional: User',
      '  usersList: [User!]!',
      '}',
      '',
      'type User {',
      '  name: String!',
      '  age: Int!',
      '}',
    ]);
  });
});
