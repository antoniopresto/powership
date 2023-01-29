import nodePath from 'path';
import process from 'process';

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
        `Failed to find files with the provided pattern: ${e.message}`
      );
    }
  })();

  const chunks = chunk(files, chunkSize);

  for (let chunkItem of chunks) {
    await Promise.all(
      chunkItem.map(async (file) => {
        const cwd = nodePath.dirname(file);

        const code = await runCommand(command, {
          cwd,
        });

        return {
          file,
          code,
        };
      })
    );
  }
}
