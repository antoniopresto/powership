#!/usr/bin/env node

import chalk from 'chalk';
import Vorpal, { CommandInstance } from 'vorpal';

import { defaultPackagesGlobPattern } from './defaultPackagesGlobPattern';
import { packageRunner } from './packageRunner';
import { packageVersion } from './packageVersion';
import { runInFiles } from './runInFiles';
import { runmateLogger } from './runmateLogger';

const self = new Vorpal();

self
  .command(
    'foreach <pattern> <command> [chunkSize]', //
    'run foreach ./packages/*/ "ls" 3 - Will run command ls in each folder inside packages, 3 is the number of parallel executions'
  )
  .action(async function run(this: CommandInstance, args): Promise<any> {
    //
    await runmateLogger.lazyDebug(() => [
      'Received args: \n',
      JSON.stringify(args, null, 2),
    ]);

    const {
      command,
      pattern,
      chunkSize = 1,
    } = args as unknown as {
      command: string;
      pattern: string;
      chunkSize?: number;
    };

    if (!pattern || !command.length) {
      throw new Error(`pattern and command are required parameters.`);
    }

    try {
      await runInFiles({
        chunkSize: +chunkSize,
        command: command,
        pattern,
      });
    } catch (e: any) {
      console.error(chalk.red(e.message));
    }
  });

self
  .command(
    'packages <command> [chunkSize]', //
    'Example:\nrun packages "npm install" 3 // where 3 is a optional number of parallel executions size'
  )
  .action(async function run(this: CommandInstance, args): Promise<any> {
    //
    await runmateLogger.lazyDebug(() => [
      'Received args: \n',
      JSON.stringify(args, null, 2),
    ]);

    const { command, chunkSize = 1 } = args as unknown as {
      command: string;
      chunkSize?: number;
    };

    if (!command.length) {
      throw new Error(`pattern and command are required parameters.`);
    }

    try {
      const runner = await packageRunner(defaultPackagesGlobPattern);

      await runner.run(
        async (utils) => {
          await utils.run(command);
        },
        {
          chunkSize: +chunkSize,
        }
      );
    } catch (e: any) {
      console.error(chalk.red(e.message));
    }
  });

self
  .command(
    'link [packageManager]', //
    'Link packages'
  )
  .action(async function run(this: CommandInstance, args): Promise<any> {
    //
    await runmateLogger.lazyDebug(() => [
      'Received args: \n',
      JSON.stringify(args, null, 2),
    ]);

    const { packageManager = 'yarn' } = args;

    const localPackageNames = new Set<string>();

    const runner = await packageRunner(defaultPackagesGlobPattern);

    await runner.run(async ({ json, run }) => {
      localPackageNames.add(json.name);
      await run(`${packageManager} link`);
    });

    await runner.run(({ json, run }) => {
      const deps = {
        ...json.dependencies,
        ...json.devDependencies,
        ...json.peerDependencies,
        ...json.optionalDependencies,
      };

      Object.keys(deps).forEach((dep) => {
        if (!localPackageNames.has(dep)) return;
        run(`${packageManager} link ${dep}`);
      });
    });
  });

self
  .command(
    'version <releaseTypeOrVersion> [pattern]', //
    [
      'Update package versions.',
      'Examples: ',
      '➜  version 1.0.0',
      '➜  version minor',
      '➜  version major ./packages/utils',
    ].join('\n')
  )
  .action(async function run(this: CommandInstance, args): Promise<any> {
    //
    await runmateLogger.lazyDebug(() => [
      'Received args: \n',
      JSON.stringify(args, null, 2),
    ]);

    const { releaseTypeOrVersion, pattern } = args;

    try {
      await packageVersion(releaseTypeOrVersion, pattern);
    } catch (e: any) {
      console.error(chalk.red(e.message));
    }
  });

self.show().parse(process.argv);
