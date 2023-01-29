import { packageRunner, PackageRunnerUtils } from '../packageRunner';
import nodePath from 'path';

const cwd = nodePath.resolve(__dirname, '../../../../');

describe('runInPackages', () => {
  // afterEach();

  test('works', async () => {
    const runner = await packageRunner('./packages/**/*', {
      cwd,
    });

    const utils: PackageRunnerUtils[] = [];

    await runner.run((_utils) => {
      utils.push(_utils);
    });

    expect(utils.slice(0, 3).map((el) => el.json.name)).toEqual([
      '@backland/babel-plugins',
      '@backland/utils',
      '@backland/schema',
    ]);
  });
});
