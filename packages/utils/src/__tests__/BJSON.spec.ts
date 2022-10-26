import { BJSON } from '../BJSON';

describe('simpleObjectClone', () => {
  it('stringify undefined null function', async () => {
    const value = [undefined, 1, null, () => 1];
    const str = BJSON.stringify(value);
    const parsed = BJSON.parse(str);
    expect(parsed).toEqual([undefined, 1, null, expect.any(Function)]);
  });
});
