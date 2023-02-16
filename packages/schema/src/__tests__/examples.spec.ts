import { createObjectType } from '../ObjectType';
import { _assertFields } from '../fields/__tests__/__assert';
import { objectToJSON } from '../objectToJSON';
import { objectToTypescript } from '../objectToTypescript';

test('examples', async () => {
  const addressObject = createObjectType({
    street: 'string',
    number: {
      union: ['string', 'int?'],
    },
  });

  const userObject = createObjectType(
    {
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
      optionalAddress: {
        type: addressObject,
        optional: true,
      },

      // another way to define object fields
      deliveryAddress: {
        object: {
          street: 'string',
          number: 'int?',
        },
      },
    } as const // "as const" is needed to TS to infer types correctly
  );

  expect(() => userObject.parse({ name: 'Antonio', letter: 'x' })).toThrow(
    `field "letter": accepted: 'a' or 'b' or 'c', found x.`
  );

  expect(() =>
    userObject.parse({ name: 'antonio', letter: 'a', deliveryAddress: {} })
  ).toThrow('➤ field "deliveryAddress": ➤ field "street": RequiredField');

  const parsed = userObject.parse({
    name: 'antonio',
    letter: 'a',
    deliveryAddress: { street: 'alameda' },
  });

  type InferType = typeof parsed;

  _assertFields<
    InferType,
    {
      age?: number | undefined;
      deliveryAddress: {
        number?: number | undefined;
        street: string;
      };
      email?: string | undefined;
      letter: 'a' | 'b' | 'c';
      letterOptionalList?: ('x' | 'y' | 'z')[] | undefined;
      name: string;
      notes?: number[] | undefined;
      optionalAddress?:
        | {
            number?: string | number | undefined;
            street: string;
          }
        | undefined;

      unionField?: string | number[] | undefined;
    }
  >(true);

  const interfaceTxt = await objectToTypescript('User', userObject);
  expect(interfaceTxt).toBe(
    `export interface User {
  name: string;
  email?: Email;
  age?: number;
  notes?: number[];
  unionField?: string | number[];
  letter: "a" | "b" | "c";
  letterOptionalList?: ("x" | "y" | "z")[];
  optionalAddress?: {
    street: string;
    number?: string | number;
  };
  deliveryAddress: {
    street: string;
    number?: number;
  };
}
`
  );

  const jSONSchema = objectToJSON('User', userObject);

  expect(jSONSchema).toEqual({
    additionalProperties: false,
    properties: {
      age: {
        type: 'integer',
      },
      deliveryAddress: {
        additionalProperties: false,
        properties: {
          number: {
            type: 'integer',
          },
          street: {
            type: 'string',
          },
        },
        required: ['street'],
        title: '',
        type: 'object',
      },
      email: {
        tsType: 'Email',
        type: 'string',
      },
      letter: {
        enum: ['a', 'b', 'c'],
        type: 'string',
      },
      letterOptionalList: {
        items: {
          enum: ['x', 'y', 'z'],
          type: 'string',
        },
        type: 'array',
      },
      name: {
        type: 'string',
      },
      notes: {
        items: {
          type: 'integer',
        },
        type: 'array',
      },
      optionalAddress: {
        additionalProperties: false,
        properties: {
          number: {
            anyOf: [
              {
                type: 'string',
              },
              {
                type: 'integer',
              },
            ],
          },
          street: {
            type: 'string',
          },
        },
        required: ['street'],
        title: '',
        type: 'object',
      },
      unionField: {
        anyOf: [
          {
            type: 'string',
          },
          {
            items: {
              type: 'integer',
            },
            type: 'array',
          },
        ],
      },
    },
    required: ['name', 'letter', 'deliveryAddress'],
    title: 'User',
    type: 'object',
  });
});
