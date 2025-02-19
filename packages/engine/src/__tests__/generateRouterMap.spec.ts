import { generateRouterMap } from '../generate-router-map';
import * as path from 'node:path';
import * as process from 'node:process';

describe('generateRouterMap', () => {
  // afterEach();

  test('basic test', async () => {
    const sut = await generateRouterMap(
      path.resolve(process.cwd(), 'src/__tests__/app0/src')
    );

    expect(sut).toMatchSnapshot();
  });
});
