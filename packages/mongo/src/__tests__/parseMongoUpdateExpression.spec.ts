import { UpdateExpression } from '@backland/transporter';

import { MongoTransporter } from '../MongoTransporter';
import { AppMock, createAppMock } from '../test-utils';

const mockUser = () => ({
  _c: 'user⋮_id⋮1⋮⋮',
  name: 'fulano',
  age: 20,
  list: ['a'],
});

describe('parseMongoUpdateExpression', () => {
  let mockApp: AppMock;
  let transporter: MongoTransporter;

  const indexConfig = {
    entity: 'user',
    indexes: [{ name: '_id', PK: ['#1'] }],
  } as const;

  const commonFields = {
    _id: 'user⋮_id⋮1⋮⋮',
    _idPK: 'user⋮_id⋮1⋮',
    _idSK: '',
    _c: '~!dXNlcuKLrl9pZOKLrjHii67ii64=',
    _e: 'user',
  };

  async function create() {
    const { item } = await mockApp.transporter.createOne({
      item: { ...mockUser(), _id: '1' },
      context: {},
      indexConfig,
    });

    return item;
  }

  async function update(
    exp: UpdateExpression<{ list: any[]; [K: string]: any }>
  ) {
    const res = await mockApp.transporter.updateOne({
      filter: { _id: 'user⋮_id⋮1⋮' },
      update: exp as any,
      indexConfig,
      context: {},
    });
    if (res.error) {
      throw new Error(res.error);
    }
    return res.item;
  }

  afterEach(async () => {
    await mockApp.db.collection('users').deleteMany({});
  });

  beforeAll(async () => {
    mockApp = createAppMock();
    await mockApp.start();
    transporter = mockApp.transporter;
  });

  afterAll(async () => {
    await mockApp.reset();
  });

  test('$set', async () => {
    await create();

    const sut = await update({ $set: { a: 1, c: 2 } });

    expect(sut).toEqual({
      ...mockUser(),
      ...commonFields,
      a: 1,
      c: 2,
    });
  });

  test('$setIfNull', async () => {
    await create();

    const sut = await update({
      $setIfNull: {
        name: 'cant update',
        notExists: 'nowExists',
      },
    });

    expect(sut).toEqual({
      ...mockUser(),
      ...commonFields,

      notExists: 'nowExists',
    });
  });

  test('$setOnInsert', async () => {
    const res = await transporter.updateOne({
      filter: { a: '1' },
      upsert: true, // ⚠️
      update: {
        $set: {
          name: 'antonioOnInsert',
        },
        $setOnInsert: {
          createdAt: 123,
          'address.street.numbers': [{ val: 1 }, { val: 2 }],
        },
      },
      context: {},
      indexConfig,
    });

    expect(res).toEqual({
      created: true,
      updated: false,
      item: {
        _id: 'user⋮_id⋮1⋮⋮',
        address: {
          street: {
            numbers: [{ val: 1 }, { val: 2 }],
          },
        },
        name: 'antonioOnInsert',
        createdAt: 123,
      },
    });

    const updated = await transporter.updateOne({
      filter: { a: '1' },
      condition: { 'address.street.numbers.val': 2 },
      update: {
        $set: { name: 'updated', 'address.street.numbers.$.val': 3 },
      },
      context: {},
      indexConfig,
    });

    expect(updated).toEqual({
      created: false,
      item: {
        _id: 'user⋮_id⋮1⋮⋮',
        address: {
          street: {
            numbers: [
              {
                val: 1,
              },
              {
                val: 3,
              },
            ],
          },
        },
        createdAt: 123,
        name: 'updated',
      },
      updated: true,
    });
  });

  test('$inc', async () => {
    await create();

    const sut = await update({
      $inc: {
        age: 2,
        otherField: 5,
      },
    });

    expect(sut).toEqual({
      ...mockUser(),
      ...commonFields,

      age: 22,
      otherField: 5,
    });
  });

  test('$append', async () => {
    await create();

    const sut = await update({
      $append: {
        list: { $each: ['newItem'] },
      },
    });

    const user = mockUser();
    user.list.push('newItem');

    expect(sut).toEqual({ ...user, ...commonFields });
  });

  test('$prepend', async () => {
    await create();

    await update({
      $prepend: { list: 'x' },
    });

    const sut = await update({
      $prepend: {
        list: { $each: [1, 2, 3, 4] },
      },
    });

    expect(sut).toHaveProperty('list', [1, 2, 3, 4, 'x', 'a']);
  });

  test('$remove array by index', async () => {
    await create();

    await update({ $set: { list: ['a', 'b', 'c', 'd', 'e', 'f'] } });

    const sut = (n: number) =>
      update({
        $remove: ['name', 'age', `list.${n}`],
      });

    expect(await sut(0)).toEqual({
      ...commonFields,
      list: ['b', 'c', 'd', 'e', 'f'],
    });
    expect(await sut(9)).toEqual({
      ...commonFields,
      list: ['b', 'c', 'd', 'e', 'f'],
    });
    expect(await sut(4)).toEqual({
      ...commonFields,
      list: ['b', 'c', 'd', 'e'],
    });
    expect(await sut(4)).toEqual({
      ...commonFields,
      list: ['b', 'c', 'd', 'e'],
    });
    expect(await sut(1)).toEqual({ ...commonFields, list: ['b', 'd', 'e'] });
    expect(await sut(1)).toEqual({ ...commonFields, list: ['b', 'e'] });
    expect(await sut(1)).toEqual({ ...commonFields, list: ['b'] });
  });

  test('$remove object property', async () => {
    await create();

    await update({ $set: { obj: { a: { b: 1, c: 2, d: 3 } } } });

    expect(await update({ $remove: ['obj.a.b'] })).toHaveProperty('obj.a', {
      c: 2,
      d: 3,
    });
  });

  test('$pull array item', async () => {
    await create();

    await update({
      $set: {
        list: ['a', 'b', 'c', 1, 2],
      },
    });

    expect(await update({ $pull: { list: { $in: ['a', 2] } } })).toHaveProperty(
      'list',
      ['b', 'c', 1]
    );
  });

  test('$addToSet array item', async () => {
    await create();

    await update({ $set: { list: ['a', 'b', 'a'] } });

    expect(
      await update({ $addToSet: { list: { $each: ['a', 2] } } })
    ).toHaveProperty('list', ['a', 'b', 'a', 2]);
  });

  describe('deepObjects', () => {
    test('$set', async () => {
      await create();

      const sut = await update({
        $set: { 'x.y.z.1.2.3': 'a' },
      });

      expect(sut).toEqual({
        ...mockUser(),
        ...commonFields,
        x: {
          y: {
            z: {
              '1': {
                '2': {
                  '3': 'a',
                },
              },
            },
          },
        },
      });
    });

    test('$setIfNull', async () => {
      await create();

      const sut = await update({
        $setIfNull: {
          name: 'cant update',
          'notExists.a.b.c': 'nowExists',
        },
      });

      expect(sut).toEqual({
        ...mockUser(),
        ...commonFields,
        notExists: {
          a: {
            b: {
              c: 'nowExists',
            },
          },
        },
      });
    });

    test('$inc', async () => {
      await create();

      const sut = await update({
        $inc: {
          age: 2,
          'otherField.n.e': 5,
        },
      });

      expect(sut).toEqual({
        ...mockUser(),
        ...commonFields,
        age: 22,
        otherField: {
          n: {
            e: 5,
          },
        },
      });
    });

    test('$append', async () => {
      await create();

      const sut = await update({
        $append: {
          'foo.bar.cux': { $each: ['newItem'] },
        },
      });

      expect(sut).toHaveProperty('foo', { bar: { cux: ['newItem'] } });
    });

    test('$prepend', async () => {
      await create();

      await update({
        $prepend: { 'foo.bar.cux': 'x' },
      });

      const sut = await update({
        $prepend: {
          'foo.bar.cux': { $each: [1, 2, 3, 4] },
        },
      });

      expect(sut).toHaveProperty('foo', { bar: { cux: [1, 2, 3, 4, 'x'] } });
    });

    test('$remove array by index', async () => {
      await create();

      await update({ $set: { 'foo.bar.cux': ['a', 'b', 'c', 'd', 'e', 'f'] } });

      const sut = (n: number) =>
        update({
          $remove: ['name', 'age', `foo.bar.cux.${n}`],
        });

      expect(await sut(0)).toHaveProperty('foo.bar', {
        cux: ['b', 'c', 'd', 'e', 'f'],
      });
      expect(await sut(9)).toHaveProperty('foo.bar', {
        cux: ['b', 'c', 'd', 'e', 'f'],
      });
      expect(await sut(4)).toHaveProperty('foo.bar', {
        cux: ['b', 'c', 'd', 'e'],
      });
      expect(await sut(4)).toHaveProperty('foo.bar', {
        cux: ['b', 'c', 'd', 'e'],
      });
      expect(await sut(1)).toHaveProperty('foo.bar', { cux: ['b', 'd', 'e'] });
      expect(await sut(1)).toHaveProperty('foo.bar', { cux: ['b', 'e'] });
      expect(await sut(1)).toHaveProperty('foo.bar', { cux: ['b'] });
    });

    test('$remove object property', async () => {
      await create();

      await update({ $set: { obj: { a: { b: 1, c: 2, d: 3 } } } });

      expect(await update({ $remove: ['obj.a.b'] })).toHaveProperty('obj.a', {
        c: 2,
        d: 3,
      });
    });

    test('$pull array item', async () => {
      await create();

      await update({
        $set: {
          'foo.bar.cux': ['a', 'b', 'c', 1, 2],
        },
      });

      expect(
        await update({ $pull: { 'foo.bar.cux': { $in: ['a', 2] } } })
      ).toHaveProperty('foo.bar', {
        cux: ['b', 'c', 1],
      });
    });

    test('$addToSet array item', async () => {
      await create();

      await update({ $set: { 'foo.bar.cux': ['a', 'b', 'a'] } });

      expect(
        await update({ $addToSet: { 'foo.bar.cux': { $each: ['a', 2] } } })
      ).toHaveProperty('foo.bar.cux', ['a', 'b', 'a', 2]);

      expect(
        await update({
          $addToSet: { 'foo.2.cux': { $each: ['a', 2] } },
        })
      ).toHaveProperty('foo', {
        '2': { cux: ['a', 2] },
        bar: { cux: ['a', 'b', 'a', 2] },
      });
    });
  });
});
