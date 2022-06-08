import { GraphQLSchema, printSchema } from 'graphql';

import { createObjectType, ObjectType } from '../../ObjectType';
import { GraphQLParser } from '../GraphQLParser';

describe('GraphQLParser', () => {
  afterEach(() => {
    ObjectType.reset();
  });

  it('Should convert field', () => {
    const object = createObjectType('Item', {
      name: 'string',
    });

    const sut = GraphQLParser.objectToGraphQL({
      object,
    });

    expect(sut.typeToString().split('\n')).toEqual([
      'type Item {',
      '  name: String!',
      '}',
    ]);
  });

  it('Should convert literal fields', () => {
    const object = createObjectType('person', {
      name: 'string',
      age: 'int?',
      booleans: '[boolean]',
      floats: { type: 'float', optional: true },
      integers: { type: 'int', list: true, optional: true },
    });

    const sut = GraphQLParser.objectToGraphQL({
      object,
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

  it('Should convert sub objects', () => {
    const object1 = createObjectType('person', {
      name: 'string',
      age: 'int?',
      booleans: '[boolean]',
      floats: { type: 'float', optional: true },
      integers: { type: 'int', list: true, optional: true },
    });

    const object2 = object1.clone((c) => {
      return {
        ...c,
        persons: {
          type: object1,
          list: true,
        },
      };
    }, 'otherPerson');

    const s1 = GraphQLParser.objectToGraphQL({
      object: object1,
    });

    const s2 = GraphQLParser.objectToGraphQL({
      object: object2,
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
    const object1 = createObjectType('person', {
      sex: { enum: ['m', 'n'], list: true },
    });

    const object2 = createObjectType('persons', {
      sex: { enum: ['m', 'n'] },
      persons: object1,
    });

    const sut = GraphQLParser.objectToGraphQL({
      object: object2,
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
    const object1 = createObjectType('person', {
      createdAt: { date: {} },
    });

    const object2 = createObjectType('persons', {
      createdAt: { date: {}, description: 'dates of ...' },
      persons: object1,
    });

    const sut = GraphQLParser.objectToGraphQL({
      object: object2,
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
    const object1 = createObjectType('paging', {
      id: 'cursor',
      maybeId: 'cursor?',
      ids: '[cursor]',
      maybeIds: '[cursor]?',
    });

    const sut = GraphQLParser.objectToGraphQL({
      object: object1,
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
      '  """Primary Key"""',
      '  PK: String!',
      '',
      '  """Secondary or Sort Key"""',
      '  SK: String',
      '',
      '  """The Cursor format version"""',
      '  version: String!',
      '',
      '  """The prefix to search as "startsWith" in SK"""',
      '  prefix: String',
      '',
      '  """Composite key separator"""',
      '  sep: String',
      '  limit: Int',
      '  after: String',
      '  fields: [String]',
      '}',
    ]);
  });

  it('Should convert union', () => {
    const person = createObjectType('Person', {
      name: 'string',
      age: 'int?',
    });

    const robot = createObjectType('Robot', {
      name: 'string',
      age: 'int?',
      owner: person,
    });

    const Task = createObjectType('Task', {
      owner: [robot, person],
    });

    const sut = GraphQLParser.objectToGraphQL({
      object: Task,
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
    const person = createObjectType('Person', {
      name: 'string',
      age: 'int?',
    });

    const robot = createObjectType('Robot', {
      name: 'string',
      age: 'int?',
      owner: person,
    });

    const Task = createObjectType('Task', {
      owner: [robot, person],
    });

    const sut = GraphQLParser.objectToGraphQL({
      object: Task,
    });

    expect(() => sut.inputToString()).toThrow(
      'GraphQL union items cannot be used as input'
    );
  });

  it('Should reuse types', () => {
    const person = createObjectType('Person', {
      name: 'string',
      age: 'int?',
    });

    const robot = createObjectType('Robot', {
      name: 'string',
      age: 'int?',
      owner: person,
    });

    const type1 = createObjectType('Type1', {
      owner: [robot, person],
    });

    const type2 = createObjectType('Type2', {
      owner: [robot, person],
    });

    const query = createObjectType('Query', {
      type1: { type: type1, list: true, optional: true },
      type2: type2,
      person: person,
      robot: robot,
    });

    const mutation = createObjectType('Mutation', {
      type1: type1,
      type2: type2,
      person: person,
      robot: robot,
    });

    const object = new GraphQLSchema({
      query: query.graphqlType(),
      mutation: mutation.graphqlType(),
    });

    expect(printSchema(object).split('\n')).toEqual([
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
