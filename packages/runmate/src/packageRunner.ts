import nodePath from 'path';
import { inspect } from 'util';

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
  const cwd = nodePath.dirname(jsonPath);
  const basename = nodePath.basename(cwd);

  return {
    ...json,
    json,
    cwd,
    basename,
    names: new Set([json.name, basename]),
    saveJSON() {
      writePackageJSON(jsonPath, json);
    },
    async run(command: string) {
      try {
        if (json.scripts?.[command]) {
          command = `npm run ${command}`;
        }

        command = command.replace(/__cwd/g, cwd);
        command = command.replace(/__basename/g, basename);
        command = command.replace(/__name/g, json.name);

        return await runCommand(command, { cwd });
      } catch (e: any) {
        const message = `Failed to run command in package "${json.name}": ${
          e.message || inspect(e)
        }`;
        throw new Error(message);
      }
    },
  };
}

export type PackageRunnerUtils = ReturnType<typeof getPackageRunnerUtils>;

export interface PackageRunnerOptions {
  cwd?: string;
  cache?: boolean | Record<string, any>;
  failFast?: boolean;
}

export interface PackageRunOptions {
  chunkSize?: number; // default 3
  failFast?: boolean; // default to true
  from?: string;
}

export interface PackageRunnerResult {
  errors: { json: PackageItem; message: string }[];
}

export interface PackageRunner {
  run: PackageRunnerRun;
  utils: PackageRunnerUtils[];
  packages: Record<string, PackageRunnerUtils>;
}

export interface PackageRunnerRun {
  (
    callback: ((utils: PackageRunnerUtils) => any) | string,
    runOptions?: PackageRunOptions
  ): Promise<PackageRunnerResult>;
}

export async function packageRunner(
  pattern: string,
  options: PackageRunnerOptions = {}
): Promise<PackageRunner> {
  //
  const {
    cwd = process.cwd(),
    cache: cacheOption = true,
    failFast: failFastRoot = true,
  } = options;

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
  const packages = reduceObject(utils, (item) => ({ [item.name]: item }));

  const depTree = new DepTree(utils.map((el) => el.json)).find();

  runmateLogger.lazyDebug(() => {
    return [
      'Found packages:\n',
      depTree
        .map((el) => {
          let txt = `${el.name}: `;
          if (!el.dependents.length) {
            txt += `0 dependents.`;
          } else {
            txt += `dependents: ${el.dependents.join(', ')}.`;
          }
          return `➜  ${txt}`;
        })
        .join('\n'),
    ];
  });

  const run: PackageRunner['run'] = async function run(command, runOptions) {
    let { chunkSize, failFast = failFastRoot, from } = runOptions || {};
    chunkSize = chunkSize || 1;

    const chunks = chunk(depTree, chunkSize);

    const method = Promise[
      failFast ? 'all' : 'allSettled'
    ] as typeof Promise.all;

    const result: PackageRunnerResult = {
      errors: [],
    };

    let canRun = !from;

    for (let chunkItems of chunks) {
      await method.call(
        Promise,
        chunkItems.map(async (item) => {
          const { names } = packages[item.name];

          if (from) {
            canRun = canRun || names.has(from);
            if (!canRun) {
              console.info(`Skipped "${[...names.values()]}"`);
              return;
            }
          }

          const util = utils[item.index];

          try {
            await (typeof command === 'function'
              ? command(util)
              : util.run(command));
          } catch (e: any) {
            result.errors.push({
              json: item,
              message: e.message,
            });
            if (failFast) {
              throw e;
            }
          }
        })
      );
    }

    return result;
  };

  return { run, utils, packages };
}

export function reduceObject<Result, O extends object>(
  items: O[],
  reducer: (object: O) => Partial<Result>
): Result {
  return items.reduce(
    (acc, next) => ({ ...acc, ...reducer(next) }),
    {} as Result
  );
}
