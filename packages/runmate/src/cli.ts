#!/usr/bin/env node

import { inspect } from 'util';

import chalk from 'chalk';
import { Command } from 'commander';

import { defaultPackagesGlobPattern } from './defaultPackagesGlobPattern';
import { packageRunner } from './packageRunner';
import { packageJSONDependencyKeys, packageVersion } from './packageVersion';
import { runInFiles } from './runInFiles';
import { runmateLogger } from './runmateLogger';

const program = new Command();

program
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
  .action(async function run(
    commands: string[],
    options?: {
      src?: string;
      chunkSize: string;
      failFast: boolean;
      ignore?: string;
      packages?: string;
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
        }
      );
    } catch (e: any) {
      console.error(chalk.red(e));
    }
  });

program
  .command('each')
  .alias('packages')
  .argument('[command...]')
  .option('-s, --src', 'Folder pattern', './packages/*/')
  .option('-c, --chunk-size', 'Chunk size of parallel executions', '1')
  .alias('e')
  .action(async function run(commands: string[], options): Promise<any> {
    const { chunkSize, src } = options;
    const command = commands.join(' ');

    //
    await runmateLogger.lazyDebug(() => [
      'Received args: \n',
      JSON.stringify({ src, command, chunkSize, options }, null, 2),
    ]);

    try {
      await runInFiles({
        chunkSize: +chunkSize,
        command: command,
        pattern: src,
      });
    } catch (e: any) {
      console.error(chalk.red(e));
    }
  });

program
  .command('link')
  .description(
    'Executes `link` or any other command in every dependency/dependent package.'
  )
  .option('-s, --src <packages>', 'Packages glob pattern.')
  .alias('l')
  .action(async function run(options): Promise<any> {
    const { src } = options || {};

    await runmateLogger.lazyDebug(() => [
      'Received args: \n',
      JSON.stringify(options, null, 2),
    ]);

    const localPackages = new Map<string, string>();
    try {
      const runner = await packageRunner(src || defaultPackagesGlobPattern);

      await runner.run(async (utils) => {
        localPackages.set(utils.name, utils.cwd);
      });

      await runner.run(async ({ json, cwd, run }) => {
        const deps: Record<string, string> = {};

        packageJSONDependencyKeys.map((name) => {
          Object.assign(deps, json[name]);
        });

        const toLink: string[] = [];

        for (const dependency of Object.keys(deps)) {
          if (localPackages.has(dependency)) {
            toLink.push(localPackages.get(dependency)!);
          }
        }

        if (toLink.length) {
          await run(`npm link ${toLink.join(' ')} --legacy-peer-deps`);
        }
      });
    } catch (e: any) {
      console.error(chalk.red(e));
    }
  });

program
  .command(
    'version <releaseTypeOrVersion> [pattern]' //
  )
  .description(
    [
      'Update package versions.',
      'Examples: ',
      '➜  version 1.0.0',
      '➜  version minor',
      '➜  version major ./packages/utils',
    ].join('\n')
  )
  .alias('v')
  .action(async function run(releaseTypeOrVersion, pattern): Promise<any> {
    //
    await runmateLogger.lazyDebug(() => [
      'Received args: \n',
      JSON.stringify({ releaseTypeOrVersion }, null, 2),
    ]);

    try {
      await packageVersion(releaseTypeOrVersion, pattern);
    } catch (e: any) {
      console.error(chalk.red(e));
    }
  });

program.parse();
