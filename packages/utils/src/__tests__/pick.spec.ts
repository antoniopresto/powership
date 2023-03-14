import { pick } from '../pick';

describe('pick function', () => {
  it('should pick one object property by path (simple path)', () => {
    const obj = { a: { b: { c: 'foo' } } };
    expect(pick(obj, 'a.b.c')).toEqual('foo');
  });

  it('should pick one object property by path (path with array)', () => {
    const obj = { a: { b: [{ c: 'foo' }] } };
    expect(pick(obj, 'a.b[0].c')).toEqual('foo');
  });

  it('should return undefined for non-existent property', () => {
    const obj = { a: { b: { c: 'foo' } } };
    expect(pick(obj, 'a.b.d')).toBeUndefined();
  });

  it('should pick all values of a property that ends with array', () => {
    const obj = {
      a: {
        b: [{ c: 'foo' }, { c: 'bar' }],
      },
    };
    expect(pick(obj, 'a.b.$.c')).toEqual(['foo', 'bar']);
  });

  it('should return undefined correctly', () => {
    expect(pick(null, 'a.b.c')).toEqual(undefined);
    expect(pick(123, 'a.b.c')).toEqual(undefined);
  });

  it('should handle path starting with an array', () => {
    const obj = [{ a: { b: { c: 'foo' } } }];
    expect(pick(obj, '[0].a.b.c')).toEqual('foo');
  });

  it('should handle empty path', () => {
    const obj = { a: { b: { c: 'foo' } } };
    expect(pick(obj, '')).toEqual(obj);
  });

  it('should return undefined for empty array property', () => {
    const obj = { a: { b: [] } };
    expect(pick(obj, 'a.b[0]')).toBeUndefined();
  });

  it('should return undefined for out-of-bounds array index', () => {
    const obj = { a: { b: [{ c: 'foo' }] } };
    expect(pick(obj, 'a.b[1].c')).toBeUndefined();
  });

  it('should handle object property in path', () => {
    const obj = { a: { b: { c: { d: 'foo' } } } };
    expect(pick(obj, 'a.b.c.d')).toEqual('foo');
  });

  it('should handle property with name "$"', () => {
    const obj = { a: { b: { $: 'foo' } } };
    expect(pick(obj, 'a.b.$')).toEqual('foo');
  });

  it('should handle undefined property value', () => {
    const obj = { a: { b: undefined } };
    expect(pick(obj, 'a.b.c')).toBeUndefined();
  });

  it('should handle non-enumerable properties', () => {
    const obj = {};
    Object.defineProperty(obj, 'a', { value: 'foo', enumerable: false });
    expect(pick(obj, 'a')).toEqual('foo');
  });

  it('should handle null property value', () => {
    const obj = { a: { b: null } };
    expect(pick(obj, 'a.b')).toBeNull();
  });

  it('should handle NaN property value', () => {
    const obj = { a: { b: NaN } };
    expect(pick(obj, 'a.b')).toBeNaN();
  });

  it('should handle $ property value', () => {
    const obj = {
      a: [
        { b: NaN },
        { b: 1 },
        {},
        { b: 2 },
        {
          b: {
            c: [1, 2, 3],
          },
        },
      ],
    };

    expect(pick(obj, 'a.$.b.c')).toEqual([[1, 2, 3]]);

    expect(pick(obj, 'a.b.c')).toEqual(undefined);
    expect(pick(obj, 'a')).toEqual(obj.a);
    expect(pick(obj, 'a.$.b')).toEqual([
      NaN,
      1,
      2,
      {
        c: [1, 2, 3],
      },
    ]);
  });

  it('should handle property with very long name in path', () => {
    const obj = { a: { b: { c: 'foo' } } };
    const path = 'a.' + 'b.'.repeat(1000) + 'c';
    expect(pick(obj, path)).toEqual(undefined);
  });
});
