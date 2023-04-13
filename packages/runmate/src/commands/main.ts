import { inspect } from 'util';

import chalk from 'chalk';
import { Command } from 'commander';

import { defaultPackagesGlobPattern } from '../defaultPackagesGlobPattern';
import { packageRunner } from '../packageRunner';
import { runmateLogger } from '../runmateLogger';

export function main(program: Command) {
  program
    .command('packages', { isDefault: true })
    .argument('<command...>')
    .description(
      'Run command in each package in ./packages folder or in `--src` option folder'
    )
    .option(
      '-s, --src <src>',
      'Source directory or glob pattern',
      './packages/*/'
    )
    .option('-c, --chunk-size', 'Chunk size of parallel executions', '1')
    .option(
      '-no-ff, --no-fail-fast, --no-ff, --noff',
      'Disable exit on first error'
    )
    .option(
      '--npc, --no-package-name-command',
      'Disable execution in package if first argument is a package name.'
    )
    .option('--ignore <names>', 'Packages to skip execution.')
    .option('--packages <names>', 'Run command only in specified packages.')
    .option(
      '--from <name>',
      'Run command only in specified package and after in the dependency tree.'
    )
    .action(async function run(
      commands: string[],
      options?: {
        src?: string;
        chunkSize: string;
        failFast: boolean;
        ignore?: string;
        packages?: string;
        from?: string;
        packageNameCommand: boolean;
      }
    ): Promise<any> {
      const {
        //
        src,
        chunkSize = 1,
        failFast,
        ignore,
        packages,
        packageNameCommand,
        from,
      } = options || {};

      const ignoreList = ignore?.split(/, ?/);
      const packagesExclusiveList = packages?.split(/, ?/);

      await runmateLogger.lazyDebug(() => [
        'Received args: \n',
        inspect({
          commands,
          ignoreList,
          packagesExclusiveList,
          ...options,
        }),
      ]);

      try {
        const runner = await packageRunner(src || defaultPackagesGlobPattern, {
          failFast,
        });

        if (packageNameCommand !== false) {
          const firstCommand = commands[0].trim();

          const commandIsPackageName = runner.utils.find((el) => {
            return (
              el.name === firstCommand || el.name.split('/')[1] === firstCommand
            );
          });

          if (commandIsPackageName) {
            const restCommand = commands.slice(1).join(' ');
            if (restCommand) {
              return await commandIsPackageName.run(restCommand);
            }
          }
        }

        const res = await runner.run(
          `npm help | awk '/^    / { print $1 }' | tr -d ','`
        );

        const com = res.results[0]?.data.find(
          (command) => command === commands[0]
        );

        if (com) {
          return runner.run(`npm run ${commands.join(' ')}`);
        }

        await runner.run(
          async (utils) => {
            if (packagesExclusiveList?.length) {
              if (!packagesExclusiveList.includes(utils.name)) return;
            }

            if (ignoreList?.includes(utils.name)) return;

            await utils.run(commands.join(' '));
          },
          {
            chunkSize: +chunkSize,
            from,
          }
        );
      } catch (e: any) {
        console.error(chalk.red(e));
      }
    });
}
