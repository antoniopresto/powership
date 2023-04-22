import {
  applyChanges,
  ChangeList,
  objectDiffPaths,
  revertChanges,
} from '../objectDiff';
import { simpleObjectClone } from '../simpleObjectClone';

describe('objectDiffPaths', () => {
  test('should return an empty array when given identical objects', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = objectDiffPaths(obj, { ...obj });
    expect(result).toEqual([]);
  });

  test('should return an empty array when given two empty objects', () => {
    const obj = {};
    const result = objectDiffPaths(obj, {});
    expect(result).toEqual([]);
  });

  it('should return the differences between two nested objects', () => {
    const obj1 = {
      a: { b: 1, c: 2 },
      d: [3, 4, { e: 5 }],
    };
    const obj2 = {
      a: { b: 1, c: 3 },
      d: [3, 4, { e: 6 }],
    };
    const diff = objectDiffPaths(obj1, obj2);
    expect(diff).toEqual([
      {
        kind: 'update',
        newValue: 3,
        oldValue: 2,
        path: 'a.c',

        paths: ['a', 'a.c'],
      },
      {
        kind: 'update',
        newValue: 6,
        oldValue: 5,
        path: 'd.2.e',
        paths: ['d', 'd.2', 'd.2.e'],
      },
    ]);
  });

  it('should return the differences between two objects with different types', () => {
    const obj1 = { a: 1, b: 'hello', c: true };
    const obj2 = {
      a: 2,
      b: 'world',
      d: [1, 2, 3],
    };
    const diff = objectDiffPaths(obj1, obj2);
    expect(diff).toEqual([
      {
        kind: 'update',
        newValue: 2,
        oldValue: 1,
        path: 'a',
        paths: ['a'],
      },
      {
        kind: 'update',
        newValue: 'world',
        oldValue: 'hello',
        path: 'b',
        paths: ['b'],
      },
      {
        kind: 'remove',
        newValue: undefined,
        oldValue: true,
        path: 'c',
        paths: ['c'],
      },
      {
        kind: 'add',
        newValue: [1, 2, 3],
        oldValue: undefined,
        path: 'd',
        paths: ['d'],
      },
    ]);
  });

  test('should return the correct differences when given objects with different data types', () => {
    const obj1 = { a: 'hello', b: 123 };
    const obj2 = { a: 'world', b: '456' };
    const result = objectDiffPaths(obj1, obj2);
    expect(result).toEqual([
      {
        kind: 'update',
        newValue: 'world',
        oldValue: 'hello',
        path: 'a',
        paths: ['a'],
      },
      {
        kind: 'update',
        newValue: '456',
        oldValue: 123,
        path: 'b',
        paths: ['b'],
      },
    ]);
  });

  test('should return the correct differences when given objects with different depths', () => {
    const obj1 = { a: 1, b: { c: 2, x: { c: 1 } } };
    const obj2 = { a: 1, b: { c: 3, d: 4, x: { c: new Date() } } };

    const result = objectDiffPaths(obj1, obj2);

    expect(result).toEqual([
      {
        kind: 'update',
        newValue: 3,
        oldValue: 2,
        path: 'b.c',
        paths: ['b', 'b.c'],
      },
      {
        kind: 'update',
        newValue: expect.any(Date),
        oldValue: 1,
        path: 'b.x.c',
        paths: ['b', 'b.x', 'b.x.c'],
      },
      {
        kind: 'add',
        newValue: 4,
        path: 'b.d',
        paths: ['b', 'b.d'],
      },
    ]);
  });

  test('should return the correct differences when given objects with nested values', () => {
    const obj1 = { a: { b: 1 } };
    const obj2 = { a: { b: 2, c: 3 } };

    const result = objectDiffPaths(obj1, obj2);

    expect(result).toEqual([
      {
        kind: 'update',
        newValue: 2,
        oldValue: 1,
        path: 'a.b',
        paths: ['a', 'a.b'],
      },
      {
        kind: 'add',
        newValue: 3,
        oldValue: undefined,
        path: 'a.c',
        paths: ['a', 'a.c'],
      },
    ]);
  });

  test('should return the correct differences when given objects with null properties', () => {
    const obj1 = { a: 1, b: null };
    const obj2 = { a: 2, b: 3 };

    const result = objectDiffPaths(obj1, obj2);

    expect(result).toEqual([
      {
        kind: 'update',
        newValue: 2,
        oldValue: 1,
        path: 'a',
        paths: ['a'],
      },
      {
        kind: 'update',
        newValue: 3,
        oldValue: null,
        path: 'b',
        paths: ['b'],
      },
    ]);
  });

  test('should return the correct differences when given objects with undefined properties', () => {
    const obj1 = { a: 1, b: undefined };
    const obj2 = { a: 2, b: 3 };

    const result = objectDiffPaths(obj1, obj2);

    expect(result).toEqual([
      {
        kind: 'update',
        newValue: 2,
        oldValue: 1,
        path: 'a',
        paths: ['a'],
      },
      {
        kind: 'update',
        newValue: 3,
        oldValue: undefined,
        path: 'b',
        paths: ['b'],
      },
    ]);
  });

  test('should return the correct differences when given objects with properties in different order', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, a: 2 };

    const result = objectDiffPaths(obj1, obj2);

    expect(result).toEqual([
      {
        kind: 'update',
        newValue: 2,
        oldValue: 1,
        path: 'a',
        paths: ['a'],
      },
      {
        kind: 'update',
        newValue: 3,
        oldValue: 2,
        path: 'b',
        paths: ['b'],
      },
    ]);
  });

  test('should return the correct differences when given objects with properties of different types', () => {
    const obj1 = { a: { b: 'hello' }, c: 123 };
    const obj2 = { a: { b: 'world' }, c: '456' };
    const result = objectDiffPaths(obj1, obj2);
    expect(result).toEqual([
      {
        kind: 'update',
        newValue: 'world',
        oldValue: 'hello',
        path: 'a.b',
        paths: ['a', 'a.b'],
      },
      {
        kind: 'update',
        newValue: '456',
        oldValue: 123,
        path: 'c',
        paths: ['c'],
      },
    ]);
  });

  test('should return the correct differences when given objects with null or undefined property values', () => {
    const obj1 = { a: 1, b: null };
    const obj2 = { a: 2, b: undefined };
    const result = objectDiffPaths(obj1, obj2);
    expect(result).toEqual([
      {
        kind: 'update',
        newValue: 2,
        oldValue: 1,
        path: 'a',
        paths: ['a'],
      },
      {
        kind: 'update',
        newValue: undefined,
        oldValue: null,
        path: 'b',
        paths: ['b'],
      },
    ]);
  });

  test('should return the correct differences when given objects with falsey property values', () => {
    const obj1 = { a: false, b: 0, c: '' };
    const obj2 = { a: true, b: 1, c: 'hello' };
    const result = objectDiffPaths(obj1, obj2);
    expect(result).toEqual([
      {
        kind: 'update',
        newValue: true,
        oldValue: false,
        path: 'a',
        paths: ['a'],
      },
      {
        kind: 'update',
        newValue: 1,
        oldValue: 0,
        path: 'b',
        paths: ['b'],
      },
      {
        kind: 'update',
        newValue: 'hello',
        oldValue: '',
        path: 'c',
        paths: ['c'],
      },
    ]);
  });

  test('should return the correct differences when given objects with properties of different object types', () => {
    const obj1 = { a: { b: 1 } };
    const obj2 = {
      a: [1, 2, 3],
    };
    const result = objectDiffPaths(obj1, obj2);
    expect(result).toEqual([
      {
        kind: 'update',
        newValue: [1, 2, 3],
        oldValue: { b: 1 },
        path: 'a',
        paths: ['a'],
      },
    ]);
  });

  test('should return the correct differences when given objects with function properties', () => {
    const obj1 = { a: { b: () => {} } };
    const obj2 = { a: { b: () => {}, c: 1 } };

    const result = objectDiffPaths(obj1, obj2);

    expect(result).toEqual([
      {
        kind: 'update',
        oldValue: expect.any(Function),
        newValue: expect.any(Function),
        path: 'a.b',
        paths: ['a', 'a.b'],
      },
      {
        kind: 'add',
        newValue: 1,
        path: 'a.c',
        paths: ['a', 'a.c'],
      },
    ]);
  });

  test('should return the correct differences when given objects with Date properties', () => {
    const date1 = new Date('2022-01-01');
    const date2 = new Date('2022-02-01');
    const obj1 = { a: { b: date1 } };
    const obj2 = { a: { b: date2 } };
    const result = objectDiffPaths(obj1, obj2);

    expect(result).toEqual([
      {
        kind: 'update',
        newValue: date2,
        oldValue: date1,
        path: 'a.b',
        paths: ['a', 'a.b'],
      },
    ]);
  });

  test('should handle circular references correctly', () => {
    const obj1: any = {
      a: 'obj1.a',
      b: { c: 'b' },
    };

    const obj2 = {
      ...obj1,
    };

    obj2.e = obj2;

    const result = objectDiffPaths(obj1, obj2);

    expect(result).toEqual([
      {
        kind: 'add',
        newValue: {
          a: 'obj1.a',
          b: {
            c: 'b',
          },
          e: obj2,
        },
        path: 'e',
        paths: ['e'],
      },
    ]);
  });

  test('should handle objects with Symbol properties correctly', () => {
    const symbol1 = Symbol('test');
    const symbol2 = Symbol('test');
    const obj1 = { a: symbol1 };
    const obj2 = { a: symbol2 };
    const result = objectDiffPaths(obj1, obj2);
    expect(result).toEqual([
      {
        kind: 'update',
        newValue: symbol2,
        oldValue: symbol1,
        path: 'a',
        paths: ['a'],
      },
    ]);
  });

  test('should handle NaN values correctly', () => {
    const obj1 = { a: 1, b: NaN };
    const obj2 = { a: 2, b: NaN };
    const result = objectDiffPaths(obj1, obj2);
    expect(result).toEqual([
      {
        kind: 'update',
        newValue: 2,
        oldValue: 1,
        path: 'a',
        paths: ['a'],
      },
    ]);
  });

  test('should handle Infinity values correctly', () => {
    const obj1 = { a: 1, b: Infinity };
    const obj2 = { a: 2, b: Infinity };
    const result = objectDiffPaths(obj1, obj2);
    expect(result).toEqual([
      {
        kind: 'update',
        newValue: 2,
        oldValue: 1,
        path: 'a',
        paths: ['a'],
      },
    ]);
  });

  test('should handle native object properties correctly', () => {
    const obj1 = {
      a: {
        b: ['x', 'yyy'],
      },
      c: 1,
      tr: 1,
    };
    const obj2 = {
      a: {
        b: ['x', 'y', 'z'],
      },
      c: 2,
    };
    const result = new ChangeList(obj1, obj2);

    expect(result.toJSON()).toEqual([
      {
        kind: 'add',
        newValue: 'z',
        path: 'a.b.2',
        paths: ['a', 'a.b', 'a.b.2'],
      },
      {
        kind: 'update',
        newValue: 'y',
        oldValue: 'yyy',
        path: 'a.b.1',
        paths: ['a', 'a.b', 'a.b.1'],
      },
      {
        kind: 'update',
        newValue: 2,
        oldValue: 1,
        path: 'c',
        paths: ['c'],
      },
      {
        kind: 'remove',
        oldValue: 1,
        path: 'tr',
        paths: ['tr'],
      },
    ]);

    const clone = simpleObjectClone(obj1);
    applyChanges(clone, result);
    expect(clone).toEqual(obj2);

    revertChanges(clone, result);
    expect(clone).toEqual(obj1);
  });

  xtest('toString/hydrate', () => {
    const obj1 = {
      a: {
        b: ['x', 'yyy'],
      },
      c: 1,
      tr: 1,
    };
    const obj2 = {
      a: {
        b: ['x', 'y', 'z'],
      },
      c: 2,
    };
    const changeList = new ChangeList(obj1, obj2);
    const history = changeList.stringify(2);

    expect(history.split('\n')).toEqual([
      '[',
      '  {',
      '    "newValue": "z",',
      '    "kind": "add",',
      '    "path": "a.b.2"',
      '  },',
      '  {',
      '    "newValue": "y",',
      '    "oldValue": "yyy",',
      '    "kind": "update",',
      '    "path": "a.b.1"',
      '  },',
      '  {',
      '    "newValue": 2,',
      '    "oldValue": 1,',
      '    "kind": "update",',
      '    "path": "c"',
      '  },',
      '  {',
      '    "oldValue": 1,',
      '    "kind": "remove",',
      '    "path": "tr"',
      '  }',
      ']',
    ]);

    const changeListClone = ChangeList.hydrate(history);

    const clone = simpleObjectClone(obj1);
    applyChanges(clone, changeListClone);
    expect(clone).toEqual(obj2);

    revertChanges(clone, changeListClone);
    expect(clone).toEqual(obj1);
  });
});
