import child_process from 'child_process';
import path from 'path';

import chalk from 'chalk';
import fs from 'fs-extra';
import * as process from 'process';
import { assertEqual, MaybePromise, PackageJson } from '@backland/utils';

const CWD = process.cwd();
const ENV = {
  TEST_TIMEOUT: 90000,
};

const packages = ['root', ...fs.readdirSync(path.resolve(CWD, 'packages')).filter((el) => el.indexOf('.') === -1)];

const LOGS_FILE = path.resolve(CWD, `logs/build-${Date.now()}-${time().replace(/\D/g, '-')}.log`);
fs.ensureFileSync(LOGS_FILE);
// const logStream = fs.createWriteStream(LOGS_FILE);

function time() {
  const date = new Date();
  return date.toLocaleString();
}

function log(mode: 'info' | 'error', ...rest) {
  const text = rest.join(' ');

  if (mode === 'info') {
    process.stdout.write(`${chalk.bgWhite.black(time())} ${text}\n`);
    // logStream.write(`${time()} ${text}\n`);
  } else {
    process.stderr.write(`${chalk.bgRed.black(time())} ${text}\n`);
    // logStream.write(`====\n**ERROR**====\n${time()} ${text}\n`);
    // logStream.close(() => {
    //   process.exit(2);
    // });
  }
}

function info(_path: string, cmd: string, data: string) {
  data = data.toString();
  const text = `${_path.split('/').slice(-1)} ${cmd} ${data}`;
  log('info', text);
}

function errr(_path: string, cmd: string, data: string) {
  const text = `${_path.split('/').slice(-1)} ${cmd} ${data}`;
  log('error', text);
}

export type RummMode = 'sync' | 'async';

export type RummCallback = (json: PackageJson) => MaybePromise<string | { command: string; mode?: RummMode }>;

export type Rumm = <Mode extends RummMode, P extends string>(
  run: P,
  mode?: Mode
) => Mode extends 'sync' ? Promise<string> : Promise<number | null>;

export type RunmUtils = { json: PackageJson; run: Rumm; saveJSON(): void };

export interface RummInstance {
  list: [];
  map<U>(callback: (value: RunmUtils, index: number, array: RunmUtils[]) => U, thisArg?: any): U[];
  root: Rumm;
}

export function rumm(): RummInstance {
  const jsons: { path: string; json: PackageJson; dir: string }[] = [];

  packages.forEach((packageName) => {
    const dir = packageName === 'root' ? CWD : path.resolve(CWD, 'packages', packageName);
    const jsonPath = path.resolve(dir, 'package.json');

    jsons.push({
      dir,
      path: jsonPath,
      json: fs.readJSONSync(jsonPath, { encoding: 'utf8' }),
    });
  });

  const list = jsons.map(({ json, path, dir }) => {
    const { name: packageName } = json;
    return {
      json,
      saveJSON() {
        fs.writeJSONSync(path, json);
        return;
      },
      run(callback, runMode?: RummMode): any {
        //
        async function runWithCallback(callback: RummCallback) {
          const config = await callback(json);

          let { command, mode } = ((): { command: string; mode: string } => {
            if (typeof config === 'string') {
              return { command: config, mode: runMode || 'sync' };
            }

            return { mode: runMode || 'sync', ...config };
          })();

          if (json.scripts?.[command]) {
            command = `npm run ${command}`;
          }

          if (mode === 'sync') {
            return runSync(command);
          }

          return new Promise((resolve) => {
            info(packageName, command, 'started');
            const child = child_process.spawn(scapeCommand(command), { cwd: dir, shell: true, stdio: 'pipe' });

            if (!child?.stdout || !child?.stderr) {
              info(packageName, command, 'child null');
              throw new Error(typeof child.stderr + typeof child.stdout);
            }

            child.stdout.on('data', (data) => {
              info(packageName, command, data);
            });

            child.stderr.on('data', (data) => {
              if (command.match(/jest|test/)) {
                // jest uses stderr to print logs 🤔 https://github.com/facebook/jest/pull/6583
                info(packageName, command, data);
              } else {
                errr(packageName, command, data);
              }
            });

            child.on('exit', function (code) {
              info(packageName, command, `exited with ${code}`);
              info(packageName, command, 'FINISHED');
              resolve(code);
            });

            child.on('error', function (err) {
              process.stderr.write(require('util').inspect(err, { depth: 10 }));
              process.exit(2);
            });
          });
        }

        function runSync(command: string) {
          const finalCMD = `(cd ${dir} && ${ENV} ${command})`;
          const data = child_process.spawnSync(scapeCommand(finalCMD), { encoding: 'utf8', cwd: dir, shell: true });

          if (data.error?.message) {
            throw data.error;
          }

          info(packageName, callback, data.output?.join('\n') || 'finished');
          info(packageName, callback, 'FINISHED');
          return data;
        }

        if (typeof callback === 'string') {
          let command = callback;

          if (json.scripts?.[command]) {
            command = `npm run ${command}`;
          }

          const mode = runMode || 'sync';

          return mode === 'sync'
            ? runSync(command)
            : runWithCallback(() => {
                return { mode, command };
              });
        }

        return;
      },
    };
  });

  const [root, ...list_] = list;

  assertEqual(root.json.name, 'root');

  return {
    root: root.run,
    list: list_ as any,
    map: Array.prototype.map.bind(list_) as any,
  };
}

function scapeCommand(cmd: string) {
  return cmd; //.replace(/(["'$`\\])/g, '\\$1') + '"';
}
