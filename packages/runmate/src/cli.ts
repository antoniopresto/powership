#!/usr/bin/env node

import chalk from 'chalk';
import { logstorm } from 'logstorm';
import Vorpal, { CommandInstance } from 'vorpal';

import { runInFiles } from './runInFiles';
import { runInPackages } from './runInPackages';

const self = new Vorpal().delimiter(chalk.cyan('runmate'));

self
  .command(
    'foreach <pattern> <command> [chunkSize]', //
    'run foreach ./packages/*/ "ls" 3 - Will run command ls in each folder inside packages, 3 is the number of parallel executions'
  )
  .action(async function run(this: CommandInstance, args): Promise<any> {
    //
    await logstorm.lazyDebug(() => [
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
    await logstorm.lazyDebug(() => [
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
      await runInPackages(
        `./packages/*/`,
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
    await logstorm.lazyDebug(() => [
      'Received args: \n',
      JSON.stringify(args, null, 2),
    ]);

    const { packageManager = 'yarn' } = args;

    const packages = new Set<string>();

    await runInPackages(
      './packages/*/',
      async ({ json, run }) => {
        packages.add(json.name);
        await run(`${packageManager} link`);
      },
      {}
    );

    await runInPackages(
      './packages/*/',
      async ({ json, run }) => {
        const deps = {
          ...json.dependencies,
          ...json.devDependencies,
          ...json.peerDependencies,
        };

        Object.keys(deps).forEach((dep) => {
          if (!packages.has(dep)) return;
          run(`${packageManager} link ${dep}`);
        });
      },
      {}
    );
  });

self.show().parse(process.argv);
