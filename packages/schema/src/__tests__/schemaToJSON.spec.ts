import { createObjectType } from '../ObjectType';
import { objectToJSON } from '../objectToJSON';

describe('objectToJSON', () => {
  it('works', async () => {
    const object = createObjectType({
      name: 'string',
      date: 'date',
      pointers: '[cursor]',
      bool: 'boolean?',
      ulids: '[ulid]?',
      dates: '[date]',
      sex: {
        enum: ['m', 'f', 'o'],
        $: {
          persist: {
            ttl: 100,
          },
        },
      },
      addresses: {
        type: 'union',
        def: [
          {
            object: {
              kind: { enum: ['home'] },
              street: 'string',
              number: {
                union: ['string', 'float'],
              },
            },
            optional: true,
            list: true,
            description: 'Home address',
          },
          {
            object: {
              kind: { enum: ['work'] },
              weekDays: {
                enum: ['0', '1', '2', '3', '4', '5', '6'],
              },
            },
          },
        ],
      },
    })
      .describe('My Custom Object')
      .describe({ name: 'person name', pointers: 'some pointers' });

    const sut = objectToJSON('MyTypeABX', object);

    expect(sut).toEqual({
      additionalProperties: false,
      description: 'My Custom Object',
      properties: {
        addresses: {
          anyOf: [
            {
              items: {
                additionalProperties: false,
                description: 'Home address',
                properties: {
                  kind: {
                    const: 'home',
                  },
                  number: {
                    anyOf: [
                      {
                        description: 'person name',
                        type: 'string',
                      },
                      {
                        type: 'number',
                      },
                    ],
                  },
                  street: {
                    description: 'person name',
                    type: 'string',
                  },
                },
                required: ['kind', 'street', 'number'],
                title: '',
                type: 'object',
              },
              type: 'array',
            },
            {
              additionalProperties: false,
              properties: {
                kind: {
                  const: 'work',
                },
                weekDays: {
                  enum: ['0', '1', '2', '3', '4', '5', '6'],
                  type: 'string',
                },
              },
              required: ['kind', 'weekDays'],
              title: '',
              type: 'object',
            },
          ],
        },
        bool: {
          type: 'boolean',
        },
        date: {
          format: 'date-time',
          tsType: 'Date',
          type: 'string',
        },
        dates: {
          items: {
            format: 'date-time',
            tsType: 'Date',
            type: 'string',
          },
          type: 'array',
        },
        name: {
          description: 'person name',
          type: 'string',
        },
        pointers: {
          items: {
            description: 'some pointers',
            tsType: 'Cursor',
            type: 'object',
          },
          type: 'array',
        },
        sex: {
          enum: ['m', 'f', 'o'],
          type: 'string',
        },
        ulids: {
          items: {
            tsType: 'Ulid',
            type: 'string',
          },
          type: 'array',
        },
      },
      required: ['name', 'date', 'pointers', 'dates', 'sex'],
      title: 'MyTypeABX',
      type: 'object',
    });
  });
});
