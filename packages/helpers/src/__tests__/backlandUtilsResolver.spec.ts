import { backlandUtilsResolver } from '../backlandUtilsResolver';

describe('backlandUtilsResolver', () => {
  // afterEach();

  test('works', async () => {
    const example = await backlandUtilsResolver({ json: { name: 1 } });
    expect(example).toMatchObject({ body: expect.any(String) });
  });
});
