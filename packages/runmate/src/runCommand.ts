import { ChildProcess, ExecOptions, spawn } from 'child_process';
import nodePath from 'path';
import process from 'process';

import { AsyncPlugin, createAsyncPlugin } from 'plugin-hooks';

import { delayPromise } from './printWithScroll';

export interface RunCommandOptions {
  silent?: boolean;
  command: string;
  plugin?: (hooks: RunCommandHooks) => any;
}

export interface RunCommandResult {
  data: Buffer[];
  code: 0 | -1;
}

export async function runCommand(
  input: RunCommandOptions | string,
  execOptions?: ExecOptions
): Promise<RunCommandResult> {
  let childRef: ChildProcess | null = null;

  const data: Buffer[] = [];

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

  const options: RunCommandOptions =
    typeof input === 'string'
      ? {
          command: input,
        }
      : input;

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
      stdio: 'pipe',
      shell: true,
    }));

    if (!options?.silent && child.stdout && child.stderr) {
      child.stdout.on('data', (data) => process.stdout.write(data));
      child.stderr.on('data', (data) => process.stderr.write(data));
    }

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

        const error: any = new Error(data.map((d) => d.toString()).join(''));
        error.code = code;
        reject(error);
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
  onStdoutData: AsyncPlugin<{ data: Buffer }, ChildProcess>;
  onStderrData: AsyncPlugin<{ data: Buffer }, ChildProcess>;
  onClose: AsyncPlugin<{ code: number | null }, ChildProcess>;
  onError: AsyncPlugin<{ error: Error }, ChildProcess | null>;
}
