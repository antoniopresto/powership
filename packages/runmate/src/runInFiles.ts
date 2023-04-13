import nodePath from 'path';
import process from 'process';
import { inspect } from 'util';

import { glob } from 'glob';
import chunk from 'lodash/chunk';

import { runCommand } from './runCommand';

export interface RunInFilesOptions {
  command: string;
  pattern: string;
  chunkSize?: number; // default to 3
}

export async function runInFiles(options: RunInFilesOptions) {
  const { command, pattern, chunkSize = 3 } = options;

  if (!pattern || !command.length) {
    throw new Error(`pattern and command are required parameters.`);
  }

  const files = (() => {
    try {
      return glob.sync(pattern, {
        absolute: true,
        cwd: process.cwd(),
      });
    } catch (e: any) {
      throw new Error(
        `Failed to find files with the provided pattern: ${inspect(e)}`
      );
    }
  })();

  const chunks = chunk(files, chunkSize);

  for (let chunkItem of chunks) {
    await Promise.all(
      chunkItem.map(async (file) => {
        const cwd = nodePath.extname(file) ? nodePath.dirname(file) : file;

        const result = await runCommand(command, {
          cwd,
        });

        return {
          file,
          ...result,
        };
      })
    );
  }
}
