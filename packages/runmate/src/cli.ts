#!/usr/bin/env node

import { hey } from '@powership/utils';
import { Command } from 'commander';

import { align } from './commands/align';
import { executeInPackages } from './commands/executeInPackages';
import { list } from './commands/list';
import { peers } from './commands/peers';
import { updateJsonValue } from './commands/update-json-value';
import { version } from './commands/version';
import { packageRunner, PackageRunnerUtils } from './packageRunner';
import { packageJSONDependencyKeys } from './packageVersion';
import { runInFiles } from './runInFiles';

const program = new Command();

executeInPackages(program);

program
  .command('clean')
  .alias('clear')
  .option(
    '-c, --chunk-size <chunk-size>',
    'Chunk size of parallel executions',
    '10'
  )
  .option('-d, --cwd <pattern>', 'Folder pattern')
  .action(async function run(options): Promise<any> {
    const { chunkSize, cwd: src } = options || {};

    try {
      const runner = await packageRunner(src);
      await runner.run(
        { command: 'rm -rf node_modules' },
        {
          chunkSize: +chunkSize,
          failFast: false,
        }
      );
    } catch (e: any) {
      hey.error(e);
    }
  });

program
  .command('each')
  .alias('packages')
  .argument('[command...]')
  .option('-d, --cwd <pattern>', 'Folder pattern')
  .option(
    '-c, --chunk-size <chunk-size>',
    'Chunk size of parallel executions',
    '1'
  )
  .alias('e')
  .action(async function run(commands: string[], options): Promise<any> {
    const { chunkSize, cwd: src } = options;
    const command = commands.join(' ');

    try {
      await runInFiles({
        chunkSize: +chunkSize,
        command: command,
        pattern: src,
      });
    } catch (e: any) {
      hey.error(e);
    }
  });

program
  .command('link')
  .description(
    'Executes `link` or any other command in every dependency/dependent package.'
  )
  .option('-d, --cwd <pattern>', 'Packages glob pattern.')
  .option('--clean', 'Clean node_modules before link.')
  .option('-c, --chunkSize <value>', 'Parallel executions size.', '10')
  .alias('l')
  .option(
    '--from <name>',
    'Run command only in specified package and after in the dependency tree.'
  )
  .action(async function run(options): Promise<any> {
    const { cwd: src, chunkSize = 10, clean, from } = options || {};

    const localPackages = new Map<string, PackageRunnerUtils>();

    try {
      const runner = await packageRunner({
        cwd: src,
        failFast: false,
      });

      if (clean) {
        await runner.run(
          { command: 'rm -rf node_modules' },
          {
            failFast: false,
            chunkSize,
            from,
          }
        );
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
            await run({
              command: `npm link ${toLink.join(' ')} --legacy-peer-deps`,
            });
          }
        },
        { chunkSize: +chunkSize, from }
      );
    } catch (e: any) {
      hey.error(e);
    }
  });

list(program);
version(program);
align(program);
updateJsonValue(program);
peers(program);

program.version('> Runmate ' + require('../package.json').version);

program.parse();
