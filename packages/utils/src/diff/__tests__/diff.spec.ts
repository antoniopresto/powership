import { diff } from '../diff';

describe('diff', () => {
  test("should detect addition of an object's properties", () => {
    const objA = { a: 1 };
    const objB = { a: 1, b: 2 };
    expect(diff(objA, objB)).toEqual([
      { action: 'add', pathParts: ['b'], newValue: 2 },
    ]);
  });

  test('add object from undefined', () => {
    const objB = { a: { b: 1 } };
    const sut = diff(undefined, objB);
    expect(sut).toEqual([
      {
        action: 'add',
        newValue: {
          a: {
            b: 1,
          },
        },
        pathParts: [],
      },
    ]);
  });

  test('add object property from undefined', () => {
    const sut = diff(
      { a: { b: 1, c: undefined } }, //
      { a: { b: 1, c: 2 } }
    );

    expect(sut).toEqual([
      {
        action: 'update',
        newValue: 2,
        pathParts: ['a', 'c'],
      },
    ]);
  });

  test('detect on specific path', () => {
    const sut = diff(
      { a: { b: 1, c: { x: 1 } } }, //
      { a: { b: 1, c: { x: 2, z: 3 } } },
      'a.c'
    );

    expect(sut).toEqual([
      {
        action: 'update',
        newValue: 2,
        oldValue: 1,
        pathParts: ['a', 'c', 'x'],
      },
      {
        action: 'add',
        newValue: 3,
        pathParts: ['a', 'c', 'z'],
      },
    ]);
  });

  test('should accept not object types', () => {
    const was = { a: 1 };
    const is = 1;

    expect(diff(was, is)).toEqual([
      {
        action: 'update',
        oldValue: was,
        newValue: is,
        pathParts: [],
      },
    ]);
  });

  test("should detect deletion of an object's properties", () => {
    const objA = { a: 1, b: 2 };
    const objB = { a: 1 };
    expect(diff(objA, objB)).toEqual([
      { action: 'delete', pathParts: ['b'], oldValue: 2 },
    ]);
  });

  test("should detect updating of an object's properties", () => {
    const objA = { a: 1, b: 2 };
    const objB = { a: 2, b: 2 };
    expect(diff(objA, objB)).toEqual([
      { action: 'update', pathParts: ['a'], newValue: 2, oldValue: 1 },
    ]);
  });

  test('should detect differences in nested objects', () => {
    const objA = { a: { b: 2 } };
    const objB = { a: { b: 3 } };
    expect(diff(objA, objB)).toEqual([
      { action: 'update', pathParts: ['a', 'b'], newValue: 3, oldValue: 2 },
    ]);
  });

  test('should detect differences in arrays', () => {
    const arrA = [1, { a: { b: 2, c: 2 } }, 3];
    const arrB = [1, { a: { b: 2, c: 3 } }, 3];

    expect(diff(arrA, arrB)).toEqual([
      { action: 'update', pathParts: [1, 'a', 'c'], newValue: 3, oldValue: 2 },
    ]);
  });

  test('different types', () => {
    const arrA = { 1: 0 };
    const arrB = [0];

    expect(diff(arrA, arrB)).toEqual([
      {
        action: 'update',
        newValue: [0],
        oldValue: { '1': 0 },
        pathParts: [],
      },
    ]);
  });

  test('should detect additions and deletions in arrays', () => {
    const arrA = [1, 2, 3];
    const arrB = [1, 2, 3, 4];
    expect(diff(arrA, arrB)).toEqual([
      { action: 'add', pathParts: [3], newValue: 4 },
    ]);
  });

  test('should not detect differences in NaN values', () => {
    const objA = { a: NaN };
    const objB = { a: NaN };
    expect(diff(objA, objB)).toEqual([]);
  });

  test('should work with rich types like Date and RegExp', () => {
    const objA = { a: new Date(2021, 1, 1), b: /abc/i };
    const objB = { a: new Date(2022, 1, 1), b: /xyz/i };
    expect(diff(objA, objB)).toEqual([
      {
        action: 'update',
        pathParts: ['a'],
        newValue: objB.a,
        oldValue: objA.a,
      },
      {
        action: 'update',
        pathParts: ['b'],
        newValue: objB.b,
        oldValue: objA.b,
      },
    ]);
  });

  test('should avoid infinite loops with circular references', () => {
    const objA = { a: {} };
    objA.a = objA;
    const objB = { a: {} };
    objB.a = objB;
    expect(diff(objA, objB)).toEqual([]);
  });
});
