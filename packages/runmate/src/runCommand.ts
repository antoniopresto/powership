import { ChildProcess, ExecOptions, spawn } from 'child_process';
import nodePath from 'path';

import chalk from 'chalk';
import { AsyncPlugin, createAsyncPlugin } from 'plugin-hooks';

import { delayPromise } from './printWithScroll';
import { runmateLogger } from './runmateLogger';

export interface RunCommandOptions {
  command: string;
  plugin?: (hooks: RunCommandHooks) => any;
}

export interface RunCommandResult {
  data: string[];
  code: 0;
}

export async function runCommand(
  options: RunCommandOptions | string,
  execOptions?: ExecOptions
): Promise<RunCommandResult> {
  let childRef: ChildProcess | null = null;

  let started = Date.now();
  const data: string[] = [];

  const hooks: RunCommandHooks | undefined = {
    onStderrData: createAsyncPlugin(),
    onStdoutData: createAsyncPlugin(),
    started: createAsyncPlugin(),
    willStart: createAsyncPlugin(),
    onClose: createAsyncPlugin(),
    onError: createAsyncPlugin(),
  };

  hooks.onStdoutData.pushMiddleware((p) => {
    data.push(p.data);
  });

  options =
    typeof options === 'string'
      ? {
          command: options,
          plugin(hooks) {
            const c_command_medium = command.replace(/(.{20})(.+)/, `$1…`);
            const description =
              typeof execOptions?.cwd === 'string'
                ? `${c_command_medium} in ./${nodePath.relative(
                    process.cwd(),
                    execOptions.cwd
                  )}`
                : c_command_medium;

            hooks.willStart.pushMiddleware(function data() {
              runmateLogger.log(`\n\nrun ${chalk.cyan(description)} started\n`);
            });

            hooks.onStdoutData.pushMiddleware(function data(currentValue) {
              runmateLogger.log(currentValue.data);
            });

            hooks.onStderrData.pushMiddleware(function data(currentValue) {
              runmateLogger.error(chalk.red(currentValue.data));
            });

            hooks.onClose.pushMiddleware(function data() {
              runmateLogger.log(
                chalk.green(
                  `finished in ${Date.now() - started}ms (${description})\n`
                )
              );
            });
          },
        }
      : options;

  let { command, plugin } = options;

  const configFile = await getConfigFile(
    execOptions?.cwd?.toString() || process.cwd()
  );

  const configCommand = configFile?.commands?.[command];

  if (typeof configCommand === 'string') {
    command = configCommand;
  }

  try {
    hooks && (await plugin?.(hooks));

    if (hooks) {
      command = (await hooks?.willStart.dispatch({ command })).command;
    }

    const child = (childRef = spawn(command, {
      ...execOptions,
      stdio: 'inherit',
      shell: true,
    }));

    child.stdout?.on('data', async function (data) {
      await hooks?.onStdoutData.dispatch({ data }, child);
    });

    child.stderr?.on('data', async function (data) {
      await hooks?.onStderrData.dispatch({ data }, child);
    });

    return new Promise((resolve, reject) => {
      child.on('close', async (code) => {
        await delayPromise(10);

        await hooks?.onClose.dispatch({ code }, child);

        if (code === 0) {
          return resolve({ code, data });
        }

        reject({ code, data });
      });
    });
  } catch (e: any) {
    childRef?.kill(1);
    await hooks.onError.dispatch({ error: e }, childRef);
    throw new Error(`Failed to execute command ${command}`);
  }
}

async function getConfigFile(
  cwd: string
): Promise<{ commands?: Record<string, string> }> {
  try {
    return require(nodePath.resolve(cwd, '.runmaterc.js'));
  } catch (e) {
    return {};
  }
}

export interface RunCommandHooks {
  willStart: AsyncPlugin<{ command: string }, undefined>;
  started: AsyncPlugin<ChildProcess, { command: string }>;
  onStdoutData: AsyncPlugin<{ data: string }, ChildProcess>;
  onStderrData: AsyncPlugin<{ data: string }, ChildProcess>;
  onClose: AsyncPlugin<{ code: number | null }, ChildProcess>;
  onError: AsyncPlugin<{ error: Error }, ChildProcess | null>;
}
