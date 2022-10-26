import { BJSON } from '../BJSON';

describe('simpleObjectClone', () => {
  it('stringify undefined', async () => {
    const value = undefined;
    const str = BJSON.stringify(value);
    const parsed = BJSON.parse(str);
    expect(parsed).toEqual(undefined);
  });

  it('stringify null, function list', async () => {
    const value = [undefined, 1, null, () => 1];
    const str = BJSON.stringify(value);
    expect(str).toEqual(`["ːundefː",1,null,"ːfuncː"]`);
    const parsed = BJSON.parse(str);
    expect(parsed).toEqual([undefined, 1, null, expect.any(Function)]);
  });
});
