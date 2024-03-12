import nodePath from 'path';

import { hey } from '@powership/utils';
import { chunk } from 'lodash';

import { DepTree, PackageItem } from './depTree';
import { findWorkspacePackages } from './findWorkspacePackages';
import { readPackageJSON, writePackageJSON } from './handleJSON';
import { runCommand, RunCommandResult } from './runCommand';

export type PackageRunnerExecInput =
  | { command: string; script?: undefined }
  | { command?: undefined; script: string };

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
    async run(init: PackageRunnerExecInput): Promise<RunCommandResult> {
      try {
        let command = (() => {
          // running packageJson script
          if (init.script) {
            if (json.scripts?.[init.script]) {
              return `npm run ${init.script}`;
            } else {
              hey.warn(`${json.name} skipped "${init.script}" - not defined.`);
              return null;
            }
          }

          // run any script
          return init.command;
        })();

        if (!command) {
          return { data: [], code: -1 };
        }

        command = command.replace(/__cwd/g, cwd);
        command = command.replace(/__basename/g, basename);
        command = command.replace(/__name/g, json.name);

        return await runCommand(command, { cwd });
      } catch (e: any) {
        await hey`Failed to run command in package "${json.name}.\n   <red>${e.message}</red>`;
        process.exit(1);
      }
    },
  };
}

export type PackageRunnerUtils = ReturnType<typeof getPackageRunnerUtils>;

export interface PackageRunnerOptions {
  cwd?: string;
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
    callback: ((utils: PackageRunnerUtils) => any) | PackageRunnerExecInput,
    runOptions?: PackageRunOptions
  ): Promise<PackageRunnerResult>;
}

export async function packageRunner(
  options: PackageRunnerOptions = {}
): Promise<PackageRunner> {
  //
  const {
    cwd = process.cwd(),
    failFast: failFastRoot = true,
    includeRoot,
  } = options;

  const files = findWorkspacePackages({ cwd, includeRoot });

  if (files.length) {
    hey.blue(
      `Running command in:\n${(() => {
        return files.map((el) => `  ‣ ${el.relative}`).join('\n');
      })()}`
    );
  }

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
              hey.warn(`Skipped "${[...names.values()]}"`);
              return;
            }
          }

          const runnerUtils = utils[item.index];

          try {
            const res = await (typeof command === 'function'
              ? command(runnerUtils)
              : runnerUtils.run(command));

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
