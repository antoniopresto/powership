import { GraphQLSchema, printSchema } from 'graphql';

import { createSchema, Schema } from '../../Schema';
import { GraphQLParser } from '../GraphQLParser';

describe('GraphQLParser', () => {
  afterEach(() => {
    Schema.reset();
  });

  it('Should convert field', () => {
    const schema = createSchema('Item', {
      name: 'string',
    });

    const sut = GraphQLParser.schemaToGraphQL({
      schema,
    });

    expect(sut.typeToString().split('\n')).toEqual([
      'type Item {',
      '  name: String!',
      '}',
    ]);
  });

  it('Should convert literal fields', () => {
    const schema = createSchema('person', {
      name: 'string',
      age: 'int?',
      booleans: '[boolean]',
      floats: { type: 'float', optional: true },
      integers: { type: 'int', list: true, optional: true },
    });

    const sut = GraphQLParser.schemaToGraphQL({
      schema,
    });

    expect(sut.typeToString().split('\n')).toEqual([
      'type person {',
      '  name: String!',
      '  age: Int',
      '  booleans: [Boolean]!',
      '  floats: Float',
      '  integers: [Int]',
      '}',
    ]);
  });

  it('Should convert sub schemas', () => {
    const schema1 = createSchema('person', {
      name: 'string',
      age: 'int?',
      booleans: '[boolean]',
      floats: { type: 'float', optional: true },
      integers: { type: 'int', list: true, optional: true },
    });

    const schema2 = schema1.clone((c) => {
      return {
        ...c,
        persons: {
          type: schema1,
          list: true,
        },
      };
    }, 'otherPerson');

    const s1 = GraphQLParser.schemaToGraphQL({
      schema: schema1,
    });

    const s2 = GraphQLParser.schemaToGraphQL({
      schema: schema2,
    });

    expect(s1.typeToString().split('\n')).toEqual([
      'type person {',
      '  name: String!',
      '  age: Int',
      '  booleans: [Boolean]!',
      '  floats: Float',
      '  integers: [Int]',
      '}',
    ]);

    expect(s2.typeToString().split('\n')).toEqual([
      'type otherPerson {',
      '  name: String!',
      '  age: Int',
      '  booleans: [Boolean]!',
      '  floats: Float',
      '  integers: [Int]',
      '  persons: [person]!',
      '}',
      '',
      'type person {',
      '  name: String!',
      '  age: Int',
      '  booleans: [Boolean]!',
      '  floats: Float',
      '  integers: [Int]',
      '}',
    ]);
  });

  it('Should convert enums', () => {
    const schema1 = createSchema('person', {
      sex: { enum: ['m', 'n'], list: true },
    });

    const schema2 = createSchema('persons', {
      sex: { enum: ['m', 'n'] },
      persons: schema1,
    });

    const sut = GraphQLParser.schemaToGraphQL({
      schema: schema2,
    });

    expect(sut.typeToString().split('\n')).toEqual([
      'type persons {',
      '  sex: persons_sexEnum!',
      '  persons: person!',
      '}',
      '',
      'enum persons_sexEnum {',
      '  m',
      '  n',
      '}',
      '',
      'type person {',
      '  sex: [person_sexEnum]!',
      '}',
      '',
      'enum person_sexEnum {',
      '  m',
      '  n',
      '}',
    ]);
  });

  it('Should convert dates', () => {
    const schema1 = createSchema('person', {
      createdAt: { date: {} },
    });

    const schema2 = createSchema('persons', {
      createdAt: { date: {}, description: 'dates of ...' },
      persons: schema1,
    });

    const sut = GraphQLParser.schemaToGraphQL({
      schema: schema2,
    });

    expect(sut.typeToString().split('\n')).toEqual([
      'type persons {',
      '  """dates of ..."""',
      '  createdAt: Date!',
      '  persons: person!',
      '}',
      '',
      'scalar Date',
      '',
      'type person {',
      '  createdAt: Date!',
      '}',
    ]);
  });

  it('Should convert cursor', () => {
    const schema1 = createSchema('paging', {
      id: 'cursor',
      maybeId: 'cursor?',
      ids: '[cursor]',
      maybeIds: '[cursor]?',
    });

    const sut = GraphQLParser.schemaToGraphQL({
      schema: schema1,
    });

    expect(sut.typeToString().split('\n')).toEqual([
      'type paging {',
      '  id: Cursor!',
      '  maybeId: Cursor',
      '  ids: [Cursor]!',
      '  maybeIds: [Cursor]',
      '}',
      '',
      'type Cursor {',
      '  pk: String!',
      '  prefix: String',
      '  delimiter: String',
      '  limit: Int',
      '  after: String',
      '  fields: [String]',
      '}',
    ]);
  });

  it('Should convert union', () => {
    const person = createSchema('Person', {
      name: 'string',
      age: 'int?',
    });

    const robot = createSchema('Robot', {
      name: 'string',
      age: 'int?',
      owner: person,
    });

    const Task = createSchema('Task', {
      owner: [robot, person],
    });

    const sut = GraphQLParser.schemaToGraphQL({
      schema: Task,
    });

    expect(sut.typeToString().split('\n')).toEqual([
      'type Task {',
      '  owner: Task_ownerUnion!',
      '}',
      '',
      'union Task_ownerUnion = Robot | Person',
      '',
      'type Robot {',
      '  name: String!',
      '  age: Int',
      '  owner: Person!',
      '}',
      '',
      'type Person {',
      '  name: String!',
      '  age: Int',
      '}',
    ]);
  });

  it('Should throw on unions as input', () => {
    const person = createSchema('Person', {
      name: 'string',
      age: 'int?',
    });

    const robot = createSchema('Robot', {
      name: 'string',
      age: 'int?',
      owner: person,
    });

    const Task = createSchema('Task', {
      owner: [robot, person],
    });

    const sut = GraphQLParser.schemaToGraphQL({
      schema: Task,
    });

    expect(() => sut.inputToString()).toThrow(
      'GraphQL union items cannot be used as input'
    );
  });

  it('Should reuse types', () => {
    const person = createSchema('Person', {
      name: 'string',
      age: 'int?',
    });

    const robot = createSchema('Robot', {
      name: 'string',
      age: 'int?',
      owner: person,
    });

    const type1 = createSchema('Type1', {
      owner: [robot, person],
    });

    const type2 = createSchema('Type2', {
      owner: [robot, person],
    });

    const query = createSchema('Query', {
      type1: { type: type1, list: true, optional: true },
      type2: type2,
      person: person,
      robot: robot,
    });

    const mutation = createSchema('Mutation', {
      type1: type1,
      type2: type2,
      person: person,
      robot: robot,
    });

    const schema = new GraphQLSchema({
      query: query.graphqlType(),
      mutation: mutation.graphqlType(),
    });

    expect(printSchema(schema).split('\n')).toEqual([
      'type Query {',
      '  type1: [Type1]',
      '  type2: Type2!',
      '  person: Person!',
      '  robot: Robot!',
      '}',
      '',
      'type Type1 {',
      '  owner: Type1_ownerUnion!',
      '}',
      '',
      'union Type1_ownerUnion = Robot | Person',
      '',
      'type Robot {',
      '  name: String!',
      '  age: Int',
      '  owner: Person!',
      '}',
      '',
      'type Person {',
      '  name: String!',
      '  age: Int',
      '}',
      '',
      'type Type2 {',
      '  owner: Type2_ownerUnion!',
      '}',
      '',
      'union Type2_ownerUnion = Robot | Person',
      '',
      'type Mutation {',
      '  type1: Type1!',
      '  type2: Type2!',
      '  person: Person!',
      '  robot: Robot!',
      '}',
    ]);
  });
});
