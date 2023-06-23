Powership / [Modules](./docs/modules.md)

# Powership

> All-in-one full-stack package for managing complex web applications.

Powership is the full-stack package of choice for creating, managing, and scaling complex web applications with support
for single-table design.

Using Powership you can quickly create types that can be easily extended, transformed into GraphQL, TypeScript, and used in both **frontend and backend** applications.

## Table of Contents

1. [Typescript Infer](#creating-and-extending-types)
2. [Extending Types](#extending-types)
3. [Static typescript Infer](#static-typescript-infer)
4. [Printing Types as Typescript](#printing-types-as-typescript)
5. [Validation](#validation)
6. [Entity & CRUD](#entity-and-crud)
7. [GraphQL](#graphql)

## Creating and extending types

```ts
import { createGraphQLSchema, createResolver, createType, createEntity, Infer } from 'powership';

const AddressType = createType('Address', {
  object: {
    street: 'string',
    number: {
      union: ['string', 'int?'],
    },
  },
});

const UserType = createType(
  {
    object: {
      name: 'string', // any string
      email: 'email?', // email type - will validate against email regex
      age: 'int?', // optional integer
      notes: '[int]?',

      // declaring a union field - will infer as `string | undefined | number[]`
      unionField: {
        union: ['string?', '[int]?'],
      },

      // represents an enum
      letter: {
        enum: ['a', 'b', 'c'],
      },

      // more detailed way to define enums
      letterOptionalList: {
        enum: ['x', 'y', 'z'],
        optional: true,
        list: true,
      },

      // using a previous object as field type
      addresses: {
        type: AddressType,
        list: true,
      },

      // another way to define object fields
      deliveryAddress: {
        object: {
          street: 'string',
          number: 'int?',
        },
      },
    },
  } as const // "as const" is needed to TS to infer types correctly
);
```

## Extending types

```ts
const StoreType = UserType.clone((it) =>
  it.exclude(['addresses']).extendObjectDefinition({ storeId: 'ID', ownerId: 'string' }).graphType('Store')
);
```

## Static typescript infer

<img src="https://user-images.githubusercontent.com/6221799/218349972-5a0dfb07-9540-4d4f-aa5f-6f12ed63cee8.png" width="400px">

```ts
type TStoreType = Infer<typeof StoreType>;
```

## Printing types as Typescript

```ts
const storeTS = await StoreType.typescriptPrint();

expect(storeTS.split('\n')).toEqual([
  'export interface Store {',
  '  name: string;',
  '  email?: Email;',
  '  age?: number;',
  '  notes?: number[];',
  '  unionField?: string | number[];',
  '  letter: "a" | "b" | "c";',
  '  letterOptionalList?: ("x" | "y" | "z")[];',
  '  deliveryAddress: {',
  '    street: string;',
  '    number?: number;',
  '  };',
  '  storeId: ID;',
  '  ownerId: string;',
  '}',
  '',
]);
```

## Validation

<img src="https://user-images.githubusercontent.com/6221799/218349665-b6eaf359-37db-4fa2-846a-be85d92bd22c.png" width="400px">

```ts
try {
  const validStoreData = StoreType.parse({});
  console.log(validStoreData);
} catch (e) {
  /*
   *  Error: Store: ➤ field "ownerId": RequiredField.
   *           ➤ field "storeId": RequiredField.
   *           ➤ field "deliveryAddress": RequiredField.
   *           ➤ field "letter": RequiredField.
   *           ➤ field "name": RequiredField.
   */
}
```

## Entity and CRUD

```ts
const StoreEntity = createEntity({
  name: 'Store',
  type: StoreType,
  indexes: [
    {
      name: 'id1', // index in database to be used
      PK: ['.storeId'],
    },
    {
      name: 'id2',
      PK: ['.ownerId', '.storeId'],
    },
  ],
});

const findStoreResolver = createResolver({
  name: 'findStore',
  type: StoreEntity.edgeType,
  args: {
    storeId: 'string',
  },
}).resolver(async (_, { storeId /* ✨ automaticly typed as string */ }, requestContext) => {
  const filter = {
    storeId,
  };

  return StoreEntity.findOne({ filter, context: requestContext });
});
```

## GraphQL

```ts
const graphqlSchema = createGraphQLSchema([findStoreResolver]);

const schemaTXT = graphqlSchema.utils.print();

expect(schemaTXT.split('\n')).toEqual([
  'type Query {',
  '  findStore(storeId: String!): Store_Edge!',
  '}',
  '',
  'type Store_Edge {',
  '  cursor: String!',
  '  node: StoreEntity!',
  '}',
  '',
  'type StoreEntity {',
  '  createdAt: Date!',
  '  createdBy: String',
  '  id: String!',
  '  ulid: Ulid!',
  '  updatedAt: Date!',
  '  updatedBy: String',
  '',
  '  """',
  '  The full string value of the first index following the RegExp format "^store⋮id1⋮.*"',
  '  """',
  '  _id: String!',
  '',
  '  """',
  '  The id1PK field in the RegExp format "^store⋮id1⋮.*"',
  '  """',
  '  id1PK: String!',
  '',
  '  """',
  '  The id2PK field in the RegExp format "^store⋮id2⋮.*"',
  '  """',
  '  id2PK: String!',
  '  name: String!',
  '  email: String',
  '  age: Int',
  '  notes: [Int]',
  '  unionField: StoreEntity_unionField',
  '  letter: StoreEntity_letter!',
  '  letterOptionalList: [StoreEntity_letterOptionalList]',
  '  deliveryAddress: StoreEntity_deliveryAddress!',
  '  storeId: ID!',
  '  ownerId: String!',
  '}',
  '',
  'scalar Date',
  '',
  'scalar Ulid',
  '',
  '"""',
  'Union of { optional:true, type: string } | { list:true, optional:true, type: int }',
  '"""',
  'scalar StoreEntity_unionField',
  '',
  'enum StoreEntity_letter {',
  '  a',
  '  b',
  '  c',
  '}',
  '',
  'enum StoreEntity_letterOptionalList {',
  '  x',
  '  y',
  '  z',
  '}',
  '',
  'type StoreEntity_deliveryAddress {',
  '  street: String!',
  '  number: Int',
  '}',
]);
```
