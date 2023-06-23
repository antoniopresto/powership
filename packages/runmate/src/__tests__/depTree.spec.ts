import { DepTree } from '../depTree';
import { packageRunner } from '../packageRunner';
import nodePath from 'path';
import { PackageJson } from '../ICommons';
import { defaultPackagesGlobPattern } from '../defaultPackagesGlobPattern';

describe('depTree', () => {
  // afterEach();

  test('works', async () => {
    const packages: PackageJson[] = [];
    const cwd = nodePath.resolve(__dirname, '../../../../');

    const runner = await packageRunner(defaultPackagesGlobPattern, { cwd });

    await runner.run((utils) => {
      packages.push(utils.json);
    });

    const sut = new DepTree(packages)
      .find()
      .slice(0, 3)
      .map((el) => el.name);

    expect(sut).toEqual([
      '@powership/babel-plugins',
      '@powership/utils',
      '@powership/schema',
    ]);
  });
});
