import nodePath from 'path';
import { inspect } from 'util';

import { chunk } from 'lodash';
import { logstorm } from 'logstorm';

import { DepTree, PackageItem } from './depTree';
import { findWorkspacePackages } from './findWorkspacePackages';
import { readPackageJSON, writePackageJSON } from './handleJSON';
import { runCommand, RunCommandResult } from './runCommand';

let packageRunnerCache = {};

export function clearPackageRunnerCache() {
  packageRunnerCache = {};
}

export function getPackageRunnerUtils(jsonPath: string) {
  const json = readPackageJSON(jsonPath);
  const cwd = nodePath.dirname(jsonPath);
  const basename = nodePath.basename(cwd);

  const data: string[] = [];

  return {
    ...json,
    data,
    json,
    cwd,
    basename,
    names: new Set([json.name, basename]),
    saveJSON() {
      writePackageJSON(jsonPath, json);
    },
    async run(command: string): Promise<RunCommandResult> {
      try {
        if (json.scripts?.[command]) {
          command = `npm run ${command}`;
        }

        command = command.replace(/__cwd/g, cwd);
        command = command.replace(/__basename/g, basename);
        command = command.replace(/__name/g, json.name);

        return await runCommand(command, { cwd });
      } catch (e: any) {
        const message = `Failed to run command in package "${json.name}":\n ${(
          e.message ||
          inspect(e) ||
          ''
        )
          .split('\n')
          .map((el) => `  ${el}`)
          .join('\n')}`;

        if (e?.stack && e.message) {
          e.message = message;
          throw e;
        }

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
  includeRoot?: boolean;
}

export interface PackageRunOptions {
  chunkSize?: number; // default 3
  failFast?: boolean; // default to true
  from?: string;
}

export interface PackageRunnerResult {
  errors: { json: PackageItem; message: string }[];
  results: RunCommandResult[];
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
  options: PackageRunnerOptions = {}
): Promise<PackageRunner> {
  //
  const {
    cwd = process.cwd(),
    cache: cacheOption = true,
    failFast: failFastRoot = true,
    includeRoot,
  } = options;

  const cache = (() => {
    if (!cacheOption) return undefined;
    if (cacheOption === true) return packageRunnerCache;
    if (typeof cacheOption === 'object') return cacheOption;
    return undefined;
  })();

  const files = findWorkspacePackages({ globCache: cache, cwd, includeRoot });

  (() => {
    // force log
    const level = logstorm.level;
    const prefix = logstorm.prefix;
    logstorm.level = 'info';
    logstorm.prefix = false;
    logstorm.info(
      `Running command in:\n${(() => {
        return files.map((el) => `  ‣ ${el.relative}`).join('\n');
      })()}`
    );
    logstorm.level = level;
    logstorm.prefix = prefix;
  })();

  const utils = files.map((file) => getPackageRunnerUtils(file.path));
  const packages = reduceObject(utils, (item) => ({ [item.name]: item }));

  const depTree = new DepTree(utils.map((el) => el.json)).find();

  const run: PackageRunner['run'] = async function run(command, runOptions) {
    let { chunkSize, failFast = failFastRoot, from } = runOptions || {};
    chunkSize = chunkSize || 1;

    const chunks = chunk(depTree, chunkSize);

    const method = Promise[
      failFast ? 'all' : 'allSettled'
    ] as typeof Promise.all;

    const result: PackageRunnerResult = {
      errors: [],
      results: [],
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
            const res = await (typeof command === 'function'
              ? command(util)
              : util.run(command));

            result.results.push(res);
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
