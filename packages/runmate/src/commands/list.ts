import chalk from 'chalk';
import { Command } from 'commander';

import { defaultPackagesGlobPattern } from '../defaultPackagesGlobPattern';
import { packageRunner } from '../packageRunner';
import { printWithScroll } from '../printWithScroll';
import { runmateLogger } from '../runmateLogger';

export function list(program: Command) {
  program
    .command('list')
    .option('-s, --src', 'Folder pattern', defaultPackagesGlobPattern)
    .option(
      '--delay <delay>',
      'Delay between printing lines. Used during development.',
      '5'
    )
    .action(async function run(options): Promise<any> {
      //
      await runmateLogger.lazyDebug(() => [
        'Received args: \n',
        JSON.stringify(options, null, 2),
      ]);

      const { src, delay } = options || {};

      runmateLogger.level = 'silent';
      process.env.LOG_LEVEL = 'silent';

      const timeout = +delay || 25;

      try {
        const runner = await packageRunner(src);

        await printWithScroll(
          JSON.stringify(
            runner.utils.map((el) => el.name),
            null,
            2
          )
            .split('\n')
            .concat('\n'),
          timeout
        );

        await printWithScroll(
          JSON.stringify(
            runner.utils.map((el) => el.basename),
            null,
            2
          )
            .split('\n')
            .concat('\n'),
          timeout
        );

        await printWithScroll(
          JSON.stringify(
            runner.utils.map((el) => `packages/${el.basename}`),
            null,
            2
          )
            .split('\n')
            .concat('\n'),
          timeout
        );
      } catch (e: any) {
        console.error(chalk.red(e));
      }
    });
}
