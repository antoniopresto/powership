import { Entity } from '@core/Entity/Entity';
import { createEntity } from '@core/Entity/createEntity';
import { Transporter } from '@core/Transporter/Transporter';

describe('createEntity', () => {
  afterEach(Entity.reset);

  function User() {
    return createEntity({
      name: 'user',
      schema: {
        PK: 'string',
        name: 'string',
        gender: { enum: ['female', 'male', 'other'] },
        age: 'int',
      },
    });
  }

  it('parse entityName', () => {
    const sut = User();
    expect(sut.entityName).toBe('User');
  });

  it('return same entity instance', () => {
    expect(User()).toEqual(User());
  });

  it('creates PK and SK fields', () => {
    const entity = User();
    const schema: any = entity.type;

    expect(schema.definition.PK).toEqual({
      list: false,
      optional: false,
      type: 'string',
    });

    expect(schema.definition.SK).toEqual({
      def: [
        {
          list: false,
          optional: false,
          type: 'string',
        },
        {
          list: false,
          optional: false,
          type: 'int',
        },
      ],
      list: false,
      optional: true,
      type: 'union',
    });
  });

  // it('loadOne', async () => {
  //   const transporter = () => ({ query: ({ PK }) => ({ PK }) } as any);
  //   const el = await User().loadOne({ PK: 'OOOO', transporter: transporter() });
  //   expect(el?.PK).toBe('OOOO');
  // });

  // it('loadMany', async () => {
  //   const transporter = () => ({ query: ({ PK }) => [{ PK }] } as any);
  //   const el = await User().loadMany({
  //     PK: 'MMMM',
  //     transporter: transporter(),
  //   });
  //   expect(el[0].PK).toBe('MMMM');
  // });

  it('updateOne', async () => {
    const transporter = (): Transporter => ({ updateItem: ({ PK }) => PK } as any);

    const user = User();
    const el = await user.updateOne({
      transporter: transporter(),
      item: {
        PK: 'MMMM',
      },
      update: {
        $set: { age: 1 },
      },
    });

    expect(el).toBe('MMMM');
  });

  it('create', async () => {
    const transporter: Transporter = { createOne: (...args: any) => args } as any;
    const spy = jest.spyOn(transporter, 'createOne');

    const entity = createEntity({
      name: 'user',
      schema: {
        name: 'string',
        gender: { enum: ['female', 'male', 'other'] },
        age: 'int',
      },
      PK: ['#user', '.ulid'],
      transporter,
    });

    const res = await entity.createOne({
      item: {
        name: 'Antonio',
        gender: 'male',
        age: 1,
      },
    });

    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith({
      //   item: T;
      //   SKType: KeyTypeName;
      //   condition?: UpdateConditions;
      //   replace?: boolean;
      item: {
        ID: expect.stringMatching(/01/),
        PK: expect.stringMatching('user#'),
        SK: undefined,
        age: 1,
        gender: 'male',
        name: 'Antonio',
      },
      SKType: 'string',
      condition: undefined,
    });
  });
});
