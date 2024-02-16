import { inspect } from 'util';

import chalk from 'chalk';
import { Command } from 'commander';
import semver from 'semver/preload';

import { packageRunner } from '../packageRunner';
import { packageJSONDependencyKeys } from '../packageVersion';

export function align(program: Command) {
  program
    .command('align [cwd]')
    .description(
      'Align dependency versions between all packages in the monorepo.'
    )
    .action(async function run(cwd): Promise<any> {
      try {
        const runner = await packageRunner({
          failFast: false,
          cwd,
        });

        const commons: { [K: string]: string[] } = {};

        runner.utils.forEach((pkg) => {
          packageJSONDependencyKeys.forEach((key) => {
            const deps = pkg[key];
            if (!deps) return;
            Object.entries(deps).forEach(([packageName, _version]) => {
              if (_version.startsWith('workspace:*')) return;
              commons[packageName] = commons[packageName] || [];
              commons[packageName].push(_version);
            });
          });
        });

        const finalVersions: { [K: string]: string } = {};
        Object.entries(commons).forEach(([k, v]) => {
          v = v.map((el) => semver.clean(el)).filter(Boolean) as string[];
          const bigger = semver.rsort(v)[0];
          if (!bigger) return;
          finalVersions[k] = bigger;
        });

        runner.utils.forEach((pkg) => {
          packageJSONDependencyKeys.forEach((key) => {
            const deps = pkg[key];
            if (!deps) return;
            Object.entries(deps).forEach(([packageName, _version]) => {
              if (!finalVersions[packageName]) return;
              deps[packageName] = finalVersions[packageName];
            });
          });
          pkg.saveJSON();
        });

        console.log(chalk.cyan(inspect({ finalVersions }, { depth: 10 })));
      } catch (e: any) {
        console.error(chalk.red(e));
      }
    });
}
