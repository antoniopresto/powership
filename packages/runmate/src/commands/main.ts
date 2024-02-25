import chalk from 'chalk';
import { Command } from 'commander';

import { packageRunner } from '../packageRunner';

export function main(program: Command) {
  program
    .command('packages', { isDefault: true })
    .argument('<command...>')
    .description(
      'Run command in each package in ./packages folder or in `--cwd` option folder'
    )
    .option('-d, --cwd <pattern>', 'Source directory or glob pattern')
    .option(
      '-c, --chunk-size <number>',
      'Chunk size of parallel executions',
      '1'
    )
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
        cwd?: string;
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
        cwd: src,
        chunkSize = 1,
        failFast,
        ignore,
        packages,
        packageNameCommand,
        from,
      } = options || {};

      const ignoreList = ignore?.split(/, ?/);
      const packagesExclusiveList = packages?.split(/, ?/);

      try {
        const runner = await packageRunner({
          cwd: src,
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

// const npmCommands = [
//   'access',
//   'adduser',
//   'audit',
//   'bugs',
//   'cache',
//   'ci',
//   'completion',
//   'config',
//   'dedupe',
//   'deprecate',
//   'diff',
//   'dist-tag',
//   'docs',
//   'doctor',
//   'edit',
//   'exec',
//   'explain',
//   'explore',
//   'find-dupes',
//   'fund',
//   'get',
//   'help',
//   'help-search',
//   'hook',
//   'init',
//   'install',
//   'install-ci-test',
//   'install-test',
//   'link',
//   'll',
//   'login',
//   'logout',
//   'ls',
//   'org',
//   'outdated',
//   'owner',
//   'pack',
//   'ping',
//   'pkg',
//   'prefix',
//   'profile',
//   'prune',
//   'publish',
//   'query',
//   'rebuild',
//   'repo',
//   'restart',
//   'root',
//   'run-script',
//   'search',
//   'set',
//   'shrinkwrap',
//   'star',
//   'stars',
//   'start',
//   'stop',
//   'team',
//   'test',
//   'token',
//   'uninstall',
//   'unpublish',
//   'unstar',
//   'update',
//   'version',
//   'view',
//   'whoami',
// ];
