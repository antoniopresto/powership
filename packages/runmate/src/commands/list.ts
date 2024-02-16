import chalk from 'chalk';
import { Command } from 'commander';

import { packageRunner } from '../packageRunner';
import { printWithScroll } from '../printWithScroll';

export function list(program: Command) {
  program
    .command('list [cwd]')
    .option(
      '--delay <delay>',
      'Delay between printing lines. Used during development.',
      '5'
    )
    .action(async function run(cwd, options): Promise<any> {
      const { delay } = options || {};

      process.env.LOG_LEVEL = 'silent';

      const timeout = +delay || 25;

      try {
        const runner = await packageRunner({ cwd });

        await printWithScroll(
          runner.utils.flatMap(({ version, name, cwd: folder }) => {
            return `${name}@${version} ${chalk.bgBlack.grey(folder)}`;
          }),
          timeout
        );
      } catch (e: any) {
        console.error(chalk.red(e));
      }
    });
}
