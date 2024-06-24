import { GraphQLSchema, printSchema } from 'graphql';
import { parseObjectField } from '../../internal';
import * as Internal from '../../internal';

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

  it('Should identify plain objects in union definition', () => {
    const object = createObjectType('User', {
      name: 'string',
      address: {
        object: {
          number: {
            $: { persist: true },
            union: [
              { object: { number: 'string' } },
              { object: { number: 'int' } },
            ],
          },
        },
      },
    });

    const sut = GraphQLParser.objectToGraphQL({
      object,
    });

    expect(sut.typeToString().split('\n')).toEqual([
      'type User {',
      '  name: String!',
      '  address: User_address!',
      '}',
      '',
      'type User_address {',
      '  number: User_address_number!',
      '}',
      '',
      'union User_address_number = User_address_number_0 | User_address_number_1',
      '',
      'type User_address_number_0 {',
      '  number: String!',
      '}',
      '',
      'type User_address_number_1 {',
      '  number: Int!',
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

    const object2 = object1.clone((el) =>
      el
        .extendObjectDefinition({
          persons: {
            type: object1,
            list: true,
          },
        })
        .objectType('otherPerson')
    );
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
      sex: {
        enum: ['m', 'n'],
        list: true,
      },
    });

    const object2 = createObjectType('persons', {
      sex: {
        enum: ['m', 'n'],
      },
      persons: object1,
    });

    const sut = GraphQLParser.objectToGraphQL({
      object: object2,
    });

    expect(sut.typeToString().split('\n')).toEqual([
      'type persons {',
      '  sex: persons_sex!',
      '  persons: person!',
      '}',
      '',
      'enum persons_sex {',
      '  m',
      '  n',
      '}',
      '',
      'type person {',
      '  sex: [person_sex]!',
      '}',
      '',
      'enum person_sex {',
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
      '  after: String',
      '  fields: [String]',
      '  limit: Int',
      '',
      '  """The prefix to search as "startsWith" in SK"""',
      '  prefix: String',
      '',
      '  """Composite key separator"""',
      '  sep: String',
      '',
      '  """The Cursor format version"""',
      '  version: String!',
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
      owner: {
        union: [robot, person],
      },
    });

    const sut = GraphQLParser.objectToGraphQL({
      object: Task,
    });

    expect(sut.typeToString().split('\n')).toEqual([
      'type Task {',
      '  owner: Task_owner!',
      '}',
      '',
      'union Task_owner = Robot | Person',
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
      owner: {
        union: [robot, person],
      },
    });

    const sut = GraphQLParser.objectToGraphQL({
      object: Task,
    });

    expect(sut.inputToString().split('\n')).toEqual([
      'input TaskInput {',
      '  owner: Task_owner!',
      '}',
      '',
      '"""Union of Robot | Person"""',
      'scalar Task_owner',
    ]);
  });

  it('Should use name', async () => {
    parseObjectField('un', {
      union: ['string', 'int'],
      name: 'HappyFamily',
    });

    const type1 = createObjectType('Type1', {
      owner: {
        union: ['string', 'int'],
        name: 'HappyFamily',
      },
    });

    expect(type1.graphqlPrint().split('\n')).toEqual([
      'type Type1 {',
      '  owner: HappyFamily!',
      '}',
      '',
      '"""Union of { type: string } | { type: int }"""',
      'scalar HappyFamily',
    ]);
  });

  it('Should reuse types', () => {
    const person = createObjectType('Person', {
      name: 'string',
      age: { type: 'int', defaultValue: 10 },
    });

    const robot = createObjectType('Robot', {
      name: 'string',
      age: 'int?',
      owner: person,
    });

    const type1 = createObjectType('Type1', {
      owner: {
        union: [robot, person],
        name: 'HappyFamily',
      },
    });

    const type2 = createObjectType('Type2', {
      owner: {
        union: [robot, person],
      },
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
      '  owner: HappyFamily!',
      '}',
      '',
      'union HappyFamily = Robot | Person',
      '',
      'type Robot {',
      '  name: String!',
      '  age: Int',
      '  owner: Person!',
      '}',
      '',
      'type Person {',
      '  name: String!',
      '  age: Int!',
      '}',
      '',
      'type Type2 {',
      '  owner: Type2_owner!',
      '}',
      '',
      'union Type2_owner = Robot | Person',
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
