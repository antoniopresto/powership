#!/usr/bin/env node

import nodePath from 'path';
import process from 'process';

import chalk from 'chalk';
import { glob } from 'glob';
import Vorpal, { CommandInstance } from 'vorpal';

import { runCommand } from './runCommand';

const self = new Vorpal();

self
  .delimiter(chalk.cyan('runmate'))
  .command(
    'foreach <pattern> [command...]', //
    ''
  )
  .option('-p', 'Run commands in parallel')
  .action(async function run(this: CommandInstance, args): Promise<any> {
    console.log(require('util').inspect(args, { depth: 10 }));

    const { command, pattern } = args as unknown as {
      command: string[];
      pattern: string;
      options: Record<string, any>;
    };

    if (!pattern || !command.length) {
      throw new Error(`pattern and command are required parameters.`);
    }

    const files = glob.sync(pattern, {
      absolute: true,
      cwd: process.cwd(),
    });

    for (let file of files) {
      const cwd = nodePath.dirname(file);
      await runCommand(command.join(' '), {
        cwd,
      });
    }

    // files.map();

    // const commandInstance = this;

    // const promise = this.prompt(
    //   [
    //     {
    //       type: 'input',
    //       name: 'username',
    //       message: 'Username: ',
    //     },
    //     {
    //       type: 'password',
    //       name: 'password',
    //       message: 'Password: ',
    //     },
    //   ]
    //   // function (answers) {
    //   //   // You can use callbacks...
    //   // }
    // );
    //
    // promise.then(function (answers) {
    //   if (answers.username === 'root' && answers.password === 'vorpal') {
    //     commandInstance.log('Successful login.');
    //   } else {
    //     commandInstance.log(
    //       'Login failed! Try username "root" and password "vorpal"!'
    //     );
    //   }
    // });
    //
    // return promise;
  });

self.show().parse(process.argv);
