import { Collection } from 'mongodb';

import { UpdateExpression } from '../../Transporter/Transporter';
import { parseUpdateExpression } from '../../Transporter/parseUpdateExpression';
import { parseMongoUpdateExpression as _parseMongoUpdateExpression } from '../parseMongoUpdateExpression';
import { AnyCollectionIndexConfig } from '../../Transporter/CollectionIndex';
import { AppMock, createAppMock } from './createAppMock';

const mockUser = () => ({
  _id: 1 as any,
  name: 'fulano',
  age: 20,
  list: ['a'],
});

function parseMongoUpdateExpression(
  updateExpression: UpdateExpression<any>,
  config: AnyCollectionIndexConfig = {
    entity: 'foo',
    indexes: [{ name: 'any', PK: ['#foo'], SK: undefined, field: '_id' }],
  }
) {
  return _parseMongoUpdateExpression(
    parseUpdateExpression(updateExpression, config)
  );
}

describe('parseMongoUpdateExpression', () => {
  let mockApp: AppMock;
  let collection: Collection;

  async function create() {
    await collection.insertOne(mockUser());
  }

  async function update(exp: UpdateExpression<any>) {
    const parsed = parseMongoUpdateExpression(exp);
    const updated = await collection.findOneAndUpdate({ _id: 1 }, parsed, {
      returnDocument: 'after',
    });
    return updated.value;
  }

  afterEach(async () => {
    await collection.deleteOne({});
  });

  beforeAll(async () => {
    mockApp = createAppMock();
    await mockApp.start();
    collection = mockApp.db.collection('users');
  });

  afterAll(async () => {
    await mockApp.reset();
  });

  test('$set', async () => {
    await create();

    const sut = await update({ $set: { a: 1, c: 2 } });

    expect(sut).toEqual({
      ...mockUser(),
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
      notExists: 'nowExists',
    });
  });

  test('$setOnInsert', async () => {
    const parsedCreate = parseMongoUpdateExpression({
      $set: { name: 'antonioOnInsert' },
      $setOnInsert: { createdAt: 123 },
    });

    const created = await collection.findOneAndUpdate(
      { _id: 1 },
      parsedCreate,
      {
        returnDocument: 'after',
        upsert: true,
      }
    );

    expect(created.value).toEqual({
      _id: 1,
      name: 'antonioOnInsert',
      createdAt: 123,
    });

    const parsedUpdate = parseMongoUpdateExpression({
      $set: { name: 'updated' },
      $setOnInsert: { createdAt: 'shouldIgnoreMe' },
    });

    const updated = await collection.findOneAndUpdate(
      { _id: 1 },
      parsedUpdate,
      {
        returnDocument: 'after',
        upsert: true,
      }
    );

    expect(updated.value).toEqual({
      _id: 1,
      name: 'updated',
      createdAt: 123,
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
      age: 22,
      otherField: 5,
    });
  });

  test('$append', async () => {
    await create();

    const sut = await update({
      $append: {
        list: ['newItem'],
      },
    });

    const user = mockUser();
    user.list.push('newItem');

    expect(sut).toEqual(user);
  });

  test('$prepend', async () => {
    await create();

    await update({
      $prepend: { list: ['x'] },
    });

    const sut = await update({
      $prepend: {
        list: [1, 2, 3, 4],
      },
    });

    expect(sut).toHaveProperty('list', [1, 2, 3, 4, 'x', 'a']);
  });

  test('$remove array by index', async () => {
    await create();

    await update({ $set: { list: ['a', 'b', 'c', 'd', 'e', 'f'] } });

    const sut = (n: number) =>
      update({
        $remove: ['name', 'age', `list[${n}]`],
      });

    expect(await sut(0)).toEqual({ _id: 1, list: ['b', 'c', 'd', 'e', 'f'] });
    expect(await sut(9)).toEqual({ _id: 1, list: ['b', 'c', 'd', 'e', 'f'] });
    expect(await sut(4)).toEqual({ _id: 1, list: ['b', 'c', 'd', 'e'] });
    expect(await sut(4)).toEqual({ _id: 1, list: ['b', 'c', 'd', 'e'] });
    expect(await sut(1)).toEqual({ _id: 1, list: ['b', 'd', 'e'] });
    expect(await sut(1)).toEqual({ _id: 1, list: ['b', 'e'] });
    expect(await sut(1)).toEqual({ _id: 1, list: ['b'] });
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

    expect(await update({ $pull: { list: ['a', 2] } })).toHaveProperty('list', [
      'b',
      'c',
      1,
    ]);
  });

  test('$addToSet array item', async () => {
    await create();

    await update({ $set: { list: ['a', 'b', 'a'] } });

    expect(await update({ $addToSet: { list: ['a', 2] } })).toHaveProperty(
      'list',
      ['b', 'a', 2]
    );
  });

  describe('deepObjects', () => {
    test('$set', async () => {
      await create();

      const sut = await update({
        $set: { 'x.y.z.1.2.3': 'a' },
      });

      expect(sut).toEqual({
        ...mockUser(),
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

      expect(() =>
        parseMongoUpdateExpression({ $set: { 'arr[0].[0].f': 1 } })
      ).toThrow("Can't deep update with array index.");
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
        notExists: {
          a: {
            b: {
              c: 'nowExists',
            },
          },
        },
      });

      expect(() =>
        parseMongoUpdateExpression({ $setIfNull: { 'arr[0].[0].f': 1 } })
      ).toThrow("Can't deep update with array index.");
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
        age: 22,
        otherField: {
          n: {
            e: 5,
          },
        },
      });

      expect(() =>
        parseMongoUpdateExpression({ $setIfNull: { 'arr[0].[0].f': 1 } })
      ).toThrow("Can't deep update with array index.");
    });

    test('$append', async () => {
      await create();

      const sut = await update({
        $append: {
          'foo.bar.cux': ['newItem'],
        },
      });

      expect(sut).toHaveProperty('foo', { bar: { cux: ['newItem'] } });

      expect(() =>
        parseMongoUpdateExpression({ $append: { 'arr[0].[0].f': ['1'] } })
      ).toThrow("Can't deep update with array index.");
    });

    test('$prepend', async () => {
      await create();

      await update({
        $prepend: { 'foo.bar.cux': ['x'] },
      });

      const sut = await update({
        $prepend: {
          'foo.bar.cux': [1, 2, 3, 4],
        },
      });

      expect(sut).toHaveProperty('foo', { bar: { cux: [1, 2, 3, 4, 'x'] } });

      expect(() =>
        parseMongoUpdateExpression({ $prepend: { 'arr[0].[0].f': ['1'] } })
      ).toThrow("Can't deep update with array index.");
    });

    test('$remove array by index', async () => {
      await create();

      await update({ $set: { 'foo.bar.cux': ['a', 'b', 'c', 'd', 'e', 'f'] } });

      const sut = (n: number) =>
        update({
          $remove: ['name', 'age', `foo.bar.cux[${n}]`],
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

      expect(() =>
        parseMongoUpdateExpression({ $remove: ['arr[0].[0].f'] })
      ).toThrow("Can't deep update with array index.");
      expect(() =>
        parseMongoUpdateExpression({ $remove: ['arr[0].f'] })
      ).toThrow("Can't deep update with array index.");
    });

    test('$remove object property', async () => {
      await create();

      await update({ $set: { obj: { a: { b: 1, c: 2, d: 3 } } } });

      expect(await update({ $remove: ['obj.a.b'] })).toHaveProperty('obj.a', {
        c: 2,
        d: 3,
      });

      expect(() =>
        parseMongoUpdateExpression({ $remove: ['arr[0].f'] })
      ).toThrow("Can't deep update with array index.");
    });

    test('$pull array item', async () => {
      await create();

      await update({
        $set: {
          'foo.bar.cux': ['a', 'b', 'c', 1, 2],
        },
      });

      expect(
        await update({ $pull: { 'foo.bar.cux': ['a', 2] } })
      ).toHaveProperty('foo.bar', {
        cux: ['b', 'c', 1],
      });

      expect(() =>
        parseMongoUpdateExpression({ $pull: { 'foo[0].cux': ['a', 2] } })
      ).toThrow("Can't deep update with array index.");
    });

    test('$addToSet array item', async () => {
      await create();

      await update({ $set: { 'foo.bar.cux': ['a', 'b', 'a'] } });

      expect(
        await update({ $addToSet: { 'foo.bar.cux': ['a', 2] } })
      ).toHaveProperty('foo.bar.cux', ['b', 'a', 2]);

      expect(() =>
        parseMongoUpdateExpression({ $addToSet: { 'foo[999].cux': ['a', 2] } })
      ).toThrow("Can't deep update with array index.");
    });
  });
});
