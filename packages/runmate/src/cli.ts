#!/usr/bin/env node

import chalk from 'chalk';
import { Command } from 'commander';

import { align } from './commands/align';
import { list } from './commands/list';
import { main } from './commands/main';
import { version } from './commands/version';
import { defaultPackagesGlobPattern } from './defaultPackagesGlobPattern';
import { packageRunner, PackageRunnerUtils } from './packageRunner';
import { packageJSONDependencyKeys } from './packageVersion';
import { runInFiles } from './runInFiles';
import { runmateLogger } from './runmateLogger';

const program = new Command();

main(program);

program
  .command('clean')
  .alias('clear')
  .option('-c, --chunk-size', 'Chunk size of parallel executions', '10')
  .option('-s, --src', 'Folder pattern', defaultPackagesGlobPattern)
  .action(async function run(options): Promise<any> {
    const { chunkSize, src } = options || {};

    await runmateLogger.lazyDebug(() => [
      'Received args: \n',
      JSON.stringify(options, null, 2),
    ]);

    try {
      const runner = await packageRunner(src);
      await runner.run('rm -rf node_modules', {
        chunkSize: +chunkSize,
        failFast: false,
      });
    } catch (e: any) {
      console.error(chalk.red(e));
    }
  });

program
  .command('each')
  .alias('packages')
  .argument('[command...]')
  .option('-s, --src', 'Folder pattern', defaultPackagesGlobPattern)
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
  .option('--clean', 'Clean node_modules before link.')
  .option('-c, --chunkSize <packages>', 'Parallel executions size.', '10')
  .alias('l')
  .option(
    '--from <name>',
    'Run command only in specified package and after in the dependency tree.'
  )
  .action(async function run(options): Promise<any> {
    const { src, chunkSize = 10, clean, from } = options || {};

    await runmateLogger.lazyDebug(() => [
      'Received args: \n',
      JSON.stringify(options, null, 2),
    ]);

    const localPackages = new Map<string, PackageRunnerUtils>();

    try {
      const runner = await packageRunner(src || defaultPackagesGlobPattern, {
        failFast: false,
      });

      if (clean) {
        await runner.run('rm -rf node_modules', {
          failFast: false,
          chunkSize,
          from,
        });
      }

      await runner.run(async (utils) => {
        localPackages.set(utils.name, utils);
      });

      await runner.run(
        async ({ json, run }) => {
          const deps: Record<string, string> = {};

          packageJSONDependencyKeys.forEach((name) => {
            const depDeps = json[name] || {};
            Object.assign(deps, depDeps);

            Object.keys(depDeps).forEach((subKey) => {
              const local = localPackages.get(subKey);
              if (!local) return;

              packageJSONDependencyKeys.forEach((subDepKey) => {
                Object.assign(deps, local[subDepKey]);
              });
            });
          });

          const toLink: string[] = [];

          for (const dependency of Object.keys(deps)) {
            if (localPackages.has(dependency)) {
              toLink.push(localPackages.get(dependency)!.cwd);
            }
          }

          if (toLink.length) {
            await run(`npm link ${toLink.join(' ')} --legacy-peer-deps`);
          }
        },
        { chunkSize: +chunkSize, from }
      );
    } catch (e: any) {
      console.error(chalk.red(e));
    }
  });

list(program);
version(program);
align(program);

program.version('> Runmate ' + require('../package.json').version);

program.parse();
