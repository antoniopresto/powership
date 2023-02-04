#!/usr/bin/env node

import { inspect } from 'util';

import { mapper } from '@backland/utils';
import chalk from 'chalk';
import { Command } from 'commander';

import { defaultPackagesGlobPattern } from './defaultPackagesGlobPattern';
import { packageRunner } from './packageRunner';
import { packageJSONDependencyKeys, packageVersion } from './packageVersion';
import { runInFiles } from './runInFiles';
import { runmateLogger } from './runmateLogger';

let lifeline = setInterval(() => {}, 1000);

const program = new Command();

program
  .argument('<command...>')
  .description(
    'Run command in each package in ./packages folder or in `--src` option folder'
  )
  .option('-s, --src <src>', 'Source directory or glob pattern')
  .option('-c, --chunk-size [chunkSize]', 'Chunk size of parallel executions')
  .option(
    '-no-ff, --no-fail-fast, --no-ff, --noff',
    'Disable exit on first error'
  )
  .action(async function run(commands: string[], options): Promise<any> {
    const { src, chunkSize, failFast } = options;
    //
    await runmateLogger.lazyDebug(() => [
      'Received args: \n',
      inspect({ commands, ...options }),
    ]);

    try {
      const runner = await packageRunner(src || defaultPackagesGlobPattern, {
        failFast,
      });

      await runner.run(
        async (utils) => {
          await utils.run(commands.join(' '));
        },
        {
          chunkSize: +chunkSize,
        }
      );
    } catch (e: any) {
      console.error(chalk.red(e.message));
    } finally {
      clearInterval(lifeline);
    }
  });

program
  .command('each')
  .argument('src', 'Folder pattern')
  .argument('command')
  .option('-c, --chunk-size [chunkSize]', 'Chunk size of parallel executions')
  .alias('e')
  .action(async function run(src, command, { chunkSize }): Promise<any> {
    //
    await runmateLogger.lazyDebug(() => [
      'Received args: \n',
      JSON.stringify({ src, command, chunkSize }, null, 2),
    ]);

    try {
      await runInFiles({
        chunkSize: +chunkSize,
        command: command,
        pattern: src,
      });
    } catch (e: any) {
      console.error(chalk.red(e.message));
    } finally {
      clearInterval(lifeline);
    }
  });

program
  .command(
    'link' //
  )
  .description('Link packages')
  .option('--manager <manager>')
  .option('-s, --src <packages>', 'Packages glob pattern.')
  .alias('l')
  .action(async function run({ manager, pattern }): Promise<any> {
    //
    await runmateLogger.lazyDebug(() => [
      'Received args: \n',
      JSON.stringify({ manager, pattern }, null, 2),
    ]);

    manager = manager || 'yarn';

    const localPackageNames = new Set<string>();
    try {
      const runner = await packageRunner(pattern || defaultPackagesGlobPattern);

      await runner.run(async ({ json, run }) => {
        localPackageNames.add(json.name);
        await run(`${manager} link`);
      });

      await runner.run(({ json, run }) => {
        const deps = mapper(
          packageJSONDependencyKeys.map((name) => json[name])
        ).combine();

        Object.keys(deps).forEach((dep) => {
          if (!localPackageNames.has(dep)) return;
          run(`${manager} link ${dep}`);
        });
      });
    } catch (e: any) {
      console.error(chalk.red(e.message));
    } finally {
      clearInterval(lifeline);
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
      console.error(chalk.red(e.message));
    } finally {
      clearInterval(lifeline);
    }
  });

program.parse();
