import nodePath from 'path';

import { existsSync } from 'fs-extra';
import { glob } from 'glob';
import chunk from 'lodash/chunk';

import { DepTree, PackageItem } from './depTree';
import { readPackageJSON, writePackageJSON } from './handleJSON';
import { runCommand } from './runCommand';
import { runmateLogger } from './runmateLogger';

let packageRunnerCache = {};

export function clearPackageRunnerCache() {
  packageRunnerCache = {};
}

export function getPackageRunnerUtils(jsonPath: string) {
  const json = readPackageJSON(jsonPath);

  return {
    json,
    saveJSON() {
      writePackageJSON(jsonPath, json);
    },
    run(command: string) {
      if (json.scripts?.[command]) {
        command = `npm run ${command}`;
      }
      return runCommand(command, { cwd: nodePath.dirname(jsonPath) });
    },
  };
}

export type PackageRunnerUtils = ReturnType<typeof getPackageRunnerUtils>;

export interface PackageRunnerOptions {
  cwd?: string;
  cache?: boolean | Record<string, any>;
}

export interface PackageRunOptions {
  chunkSize?: number; // default 3
  failFast?: boolean; // default to true
}

export interface PackageRunnerResult {
  errors: { json: PackageItem; message: string }[];
}

export interface PackageRunner {
  run(
    callback: (utils: PackageRunnerUtils) => any,
    runOptions?: PackageRunOptions
  ): Promise<PackageRunnerResult>;
  utils: PackageRunnerUtils[];
}

export async function packageRunner(
  pattern: string,
  options: PackageRunnerOptions = {}
): Promise<PackageRunner> {
  //
  const { cwd = process.cwd(), cache: cacheOption = true } = options;

  const cache = (() => {
    if (!cacheOption) return undefined;
    if (cacheOption === true) return packageRunnerCache;
    if (typeof cacheOption === 'object') return cacheOption;
    return undefined;
  })();

  const files: string[] = [];

  try {
    glob
      .sync(pattern, {
        cwd,
        noext: true,
        absolute: true,
        cache,
      })
      .forEach((file) => {
        if (file.match(/node_modules/)) return;

        const ext = nodePath.extname(file);

        if (ext) return;

        const jsonPath = nodePath.join(file, 'package.json');

        if (existsSync(jsonPath)) {
          files.push(jsonPath);
        }
      });
  } catch (e: any) {
    throw new Error(`Failed to find packages: ${e.message}`);
  }

  const utils = files.map((file) => getPackageRunnerUtils(file));

  const depTree = new DepTree(utils.map((el) => el.json)).find();

  runmateLogger.info(
    'Found packages:\n',
    depTree
      .map((el) => {
        let txt = `${el.name}: `;
        if (!el.dependents.length) {
          txt += `0 dependents.`;
        } else {
          txt += `dependents: ${el.dependents.join(', ')}.`;
        }
        return ` ➜  ${txt}`;
      })
      .join('\n')
  );

  const run: PackageRunner['run'] = async function run(
    callback: (utils: PackageRunnerUtils) => any,
    runOptions: PackageRunOptions = {}
  ) {
    const { chunkSize = 3, failFast = true } = runOptions;

    const chunks = chunk(depTree, chunkSize);

    const method = Promise[
      failFast ? 'all' : 'allSettled'
    ] as typeof Promise.all;

    const result: PackageRunnerResult = {
      errors: [],
    };

    for (let chunkItems of chunks) {
      await method.call(
        Promise,
        chunkItems.map(async (item) => {
          const util = utils[item.index];
          try {
            await callback(util);
          } catch (e: any) {
            const message = `Failed to run command in package "${item.name}": ${e.message}`;
            result.errors.push({ json: item, message });
            if (failFast) {
              throw new Error(message);
            }
          }
        })
      );
    }

    return result;
  };

  return { run, utils };
}
