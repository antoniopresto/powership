import { solarwindUtilsResolver } from '../solarwindUtilsResolver';

describe('solarwindUtilsResolver', () => {
  // afterEach();

  test('works', async () => {
    const example = await solarwindUtilsResolver({ json: { name: 1 } });
    expect(example).toMatchObject({ body: expect.any(String) });
  });
});
