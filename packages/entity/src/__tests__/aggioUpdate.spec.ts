import { aggioUpdate } from '../aggioUpdate';

describe('aggioUpdate', () => {
  const _doc = () => ({
    age: 123,
    nullish: undefined as any,
    name: 'Antonio',
    listing: [1, 2, 3, { name: 'sub' }],
  });

  test('$inc', async () => {
    const sut = aggioUpdate(_doc(), {
      $set: { name: 'updated' },
      $inc: { age: -1, 'listing.3.age': 1 },
    });

    expect(sut).toEqual({
      ..._doc(),
      age: 122,
      name: 'updated',
      listing: [
        1,
        2,
        3,
        {
          age: 1,
          name: 'sub',
        },
      ],
    });
  });

  test('$setIfNull', async () => {
    const sut = aggioUpdate(_doc(), {
      $setIfNull: { nullish: 'added' },
    });

    expect(sut).toEqual({
      ..._doc(),
      nullish: 'added',
    });
  });

  test('$remove', async () => {
    const sut = aggioUpdate(_doc(), {
      $remove: 'name',
    });

    expect(sut).toEqual({
      ..._doc(),
    });
  });

  test('$pull', async () => {
    const sut = aggioUpdate(_doc(), {
      $pull: { listing: 1 },
    });

    expect(sut).toEqual({
      ..._doc(),
      listing: [
        2,
        3,
        {
          name: 'sub',
        },
      ],
    });
  });

  test('$prepend', async () => {
    const sut = aggioUpdate(_doc(), {
      $prepend: { listing: { $each: [777] } },
    });

    expect(sut).toEqual({
      ..._doc(),
      listing: [
        777,
        1,
        2,
        3,
        {
          name: 'sub',
        },
      ],
    });
  });

  test('$append', async () => {
    const sut = aggioUpdate(_doc(), {
      $append: { listing: { $each: [777] } },
    });

    expect(sut).toEqual({
      ..._doc(),
      listing: [
        1,
        2,
        3,
        {
          name: 'sub',
        },
        777,
      ],
    });
  });

  test('$addToSet', async () => {
    const sut = aggioUpdate(_doc(), {
      $addToSet: { listing: { $each: [1, 7778] } },
    });

    expect(sut).toEqual({
      ..._doc(),
      listing: [
        1,
        2,
        3,
        {
          name: 'sub',
        },
        7778,
      ],
    });
  });
});
