import {
  createGraphQLSchema,
  createResolver,
  createType,
  createEntity,
  // Infer,
} from 'solarwind';
//

describe('examples', () => {
  // afterEach();

  test('works', async () => {
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

    const StoreType = UserType.clone((it) =>
      it
        .exclude(['addresses'])
        .extendObjectDefinition({ storeId: 'ID', ownerId: 'string' })
        .graphType('Store')
    );

    // type TStoreType = Infer<typeof StoreType>;

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
    }).resolver(async (_, { storeId }, requestContext) => {
      const filter = {
        storeId,
      };

      return StoreEntity.findOne({ filter, context: requestContext });
    });

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
      '  ulid: ULID!',
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
      'scalar ULID',
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
  });
});
