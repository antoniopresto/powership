import { getTypeName } from './getTypeName';

describe('getTypeName', () => {
  it('works', async () => {
    expect(getTypeName(Infinity)).toBe('Infinity');
    expect(getTypeName(NaN)).toBe('NaN');
    expect(getTypeName(1)).toBe('Number');
    expect(getTypeName(-1)).toBe('Number');
    expect(getTypeName('')).toBe('String');
    expect(getTypeName(new Date())).toBe('Date');
    expect(getTypeName(true)).toBe('Boolean');
    expect(getTypeName(new (class Foo {})())).toBe('Foo');
  });
});
