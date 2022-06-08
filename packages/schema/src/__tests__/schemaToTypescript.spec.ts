import { createObjectType } from '../ObjectType';
import { objectToTypescript } from '../objectToTypescript';

describe('objectToTypescript', () => {
  it('works', async () => {
    const object = createObjectType({
      name: 'string',
      date: 'date',
      pointers: '[cursor]',
      bool: 'boolean?',
      ulids: '[ulid]?',
      dates: '[date]',
      id: '[ID]?',
      sex: [{ enum: ['m', 'f', 'o'], optional: true }],
      addresses: [
        {
          object: {
            kind: { enum: ['home'] },
            street: 'string',
            number: ['string', 'float'],
          },
          optional: true,
          list: true,
          description: 'Home address',
        },
        {
          object: {
            kind: { enum: ['work'] },
            week_days: { enum: ['0', '1', '2', '3', '4', '5', '6'] },
            name: {
              object: {
                firstName: 'string',
                lastName: 'string',
              },
            },
          },
        },
      ],
    } as const)
      .describe('My Custom Object')
      .describe({ name: 'person name', pointers: 'some pointers' });

    const ts = await objectToTypescript('MyObject', object);

    expect(ts).toMatchSnapshot();
  });
});
