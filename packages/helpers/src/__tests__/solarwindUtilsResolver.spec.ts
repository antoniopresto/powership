import { powershipUtilsResolver } from '../powershipUtilsResolver';

describe('powershipUtilsResolver', () => {
  // afterEach();

  test('works', async () => {
    const example = await powershipUtilsResolver({ json: { name: 1 } });
    expect(example).toMatchObject({ body: expect.any(String) });
  });
});
