import chalk from 'chalk';
import { Command } from 'commander';

import { packageRunner } from '../packageRunner';
import { packageJSONDependencyKeys } from '../packageVersion';

export function peers(program: Command) {
  program
    .command('peers')
    .description('Include the dependency dependencies as peer deps.')

    .action(async function run(): Promise<any> {
      try {
        const runner = await packageRunner({
          failFast: false,
        });

        runner.utils.forEach((utils) => {
          packageJSONDependencyKeys.forEach((entry) => {
            if (entry === 'devDependencies') return;

            Object.entries(utils[entry] || {}).forEach(([name, version]) => {
              utils.json.peerDependencies = Object.entries({
                ...runner.packages[name]?.dependencies,
                ...runner.packages[name]?.peerDependencies,
                ...runner.packages[name]?.optionalDependencies,
                [name]: version,
                ...utils.json.peerDependencies,
              }).reduce((acc, [k]) => {
                return { ...acc, [k]: '*' };
              }, {});
            });
          });
          utils.saveJSON();
        });
      } catch (e: any) {
        console.error(chalk.red(e));
      }
    });
}
