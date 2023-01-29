import nodePath from 'path';

import fs from 'fs-extra';
import { glob } from 'glob';
import chunk from 'lodash/chunk';

import { runCommand } from './runCommand';

export function getRunInPackageUtils(jsonPath: string) {
  const json = fs.readJSONSync(jsonPath, { encoding: 'utf8' });

  return {
    json,
    saveJSON() {
      fs.writeFileSync(jsonPath, JSON.stringify(json, null, 2));
    },
    run(command: string) {
      if (json.scripts?.[command]) {
        command = `npm run ${command}`;
      }
      return runCommand(command, { cwd: nodePath.dirname(jsonPath) });
    },
  };
}

export type RunInPackageUtils = ReturnType<typeof getRunInPackageUtils>;

export interface RunInPackagesOptions {
  chunkSize?: number; // default 3
  cwd?: string;
}

export async function runInPackages(
  pattern: string,
  callback: (utils: RunInPackageUtils) => any,
  options?: RunInPackagesOptions
) {
  //
  const { chunkSize = 3, cwd = process.cwd() } = options || {};

  let files: string[][];

  try {
    const matched: string[] = [];

    glob.sync(pattern, { cwd, noext: true, absolute: true }).forEach((file) => {
      if (file.match(/node_modules/)) return;

      const ext = nodePath.extname(file);

      if (ext) return;

      const jsonPath = nodePath.join(file, 'package.json');

      if (fs.existsSync(jsonPath)) {
        matched.push(jsonPath);
      }
    });
    files = chunk(matched, chunkSize);
  } catch (e: any) {
    throw new Error(`Failed to find packages: ${e.message}`);
  }

  for (let chunkItems of files) {
    await Promise.all(
      chunkItems.map(async (file) => {
        const utils = getRunInPackageUtils(file);

        await callback(utils);
      })
    );
  }
}
