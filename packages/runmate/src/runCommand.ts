import { ChildProcess, exec, ExecOptions } from 'child_process';

import chalk from 'chalk';
import { Waterfall, waterfall } from 'plugin-hooks';

export interface RunCommandOptions {
  command: string;
  plugin?: (hooks: RunCommandHooks) => any;
}
export async function runCommand(
  options: RunCommandOptions | string,
  execOptions?: ExecOptions
): Promise<0> {
  let childRef: ChildProcess | null = null;

  const hooks: RunCommandHooks | undefined = {
    onStderrData: waterfall(),
    onStdoutData: waterfall(),
    started: waterfall(),
    willStart: waterfall(),
    onClose: waterfall(),
    onError: waterfall(),
  };

  try {
    options =
      typeof options === 'string'
        ? {
            command: options,
            plugin(hooks) {
              const c_command_medium = command.replace(/(.{20})(.+)/, `$1…`);

              hooks.willStart.register(function data(currentValue) {
                process.stdout.write(`\n➤ ${currentValue.command}\n`);
              });

              hooks.onStdoutData.register(function data(currentValue) {
                process.stdout.write(currentValue.data);
              });

              hooks.onStderrData.register(function data(currentValue) {
                process.stderr.write(
                  `➤ ${chalk.red(c_command_medium)} ` + currentValue.data + '\n'
                );
              });

              hooks.onClose.register(function data(currentValue) {
                const cmd = chalk.green(c_command_medium);

                process.stderr.write(
                  `\n➤ ${cmd} finished with code ${currentValue.code}\n\n`
                );
              });
            },
          }
        : options;

    let { command, plugin } = options;

    hooks && (await plugin?.(hooks));

    if (hooks) {
      command = (await hooks?.willStart.exec({ command })).command;
    }

    const child = (childRef = exec(command, { ...execOptions }));

    child.stdout?.on('data', async function (data) {
      await hooks?.onStdoutData.exec({ data }, child);
    });

    child.stderr?.on('data', async function (data) {
      await hooks?.onStderrData.exec({ data }, child);
    });

    return new Promise((resolve, reject) => {
      child.on('close', async (code) => {
        await hooks?.onClose.exec({ code }, child);

        if (code === 0) {
          return resolve(code);
        }

        reject(code);
      });
    });
  } catch (e: any) {
    await hooks.onError.exec({ error: e }, childRef);
    throw e;
  }
}

export interface RunCommandHooks {
  willStart: Waterfall<{ command: string }, undefined>;
  started: Waterfall<ChildProcess, { command: string }>;
  onStdoutData: Waterfall<{ data: string }, ChildProcess>;
  onStderrData: Waterfall<{ data: string }, ChildProcess>;
  onClose: Waterfall<{ code: number | null }, ChildProcess>;
  onError: Waterfall<{ error: Error }, ChildProcess | null>;
}
