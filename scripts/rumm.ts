import spawn from 'child_process';
import path from 'path';

import chalk from 'chalk';
import fs from 'fs-extra';
import * as process from 'process';
import { MaybePromise, PackageJson } from '@backland/utils';

const CWD = process.cwd();
const ENV = ['TEST_TIMEOUT=90000'].join(' ');

const packages = ['root', ...fs.readdirSync(path.resolve(CWD, 'packages')).filter((el) => el.indexOf('.') === -1)];

const LOGS_FILE = path.resolve(CWD, `logs/build-${Date.now()}-${time().replace(/\D/g, '-')}.log`);
fs.ensureFileSync(LOGS_FILE);
const logStream = fs.createWriteStream(LOGS_FILE);

function time() {
  const date = new Date();
  return date.toLocaleString();
}

function log(mode: 'info' | 'error', ...rest) {
  const text = rest.join(' ');

  if (mode === 'info') {
    process.stdout.write(`${chalk.bgWhite.black(time())} ${text}\n`);
    logStream.write(`${time()} ${text}\n`);
  } else {
    process.stderr.write(`${chalk.bgRed.black(time())} ${text}\n`);
    logStream.write(`====\n**ERROR**====\n${time()} ${text}\n`);
    logStream.close(() => {
      process.exit(2);
    });
  }
}

function info(_path: string, cmd: string, data: string) {
  const text = `${_path.split('/').slice(-1)} ${cmd} ${data}`;
  log('info', text);
}

function errr(_path: string, cmd: string, data: string) {
  const text = `${_path.split('/').slice(-1)} ${cmd} ${data}`;
  log('error', text);
}

export type Rumm = <
  Mode extends 'sync' | 'async',
  P extends ((json: PackageJson) => MaybePromise<string | { command: string; mode?: Mode }>) | string
>(
  run: P
) => P extends string ? string : Mode extends 'sync' ? Promise<string> : Promise<number | null>;

export function rumm(): { json: PackageJson; run: Rumm; saveJSON(): void }[] {
  const jsons: { path: string; json: PackageJson; dir: string }[] = [];

  packages.forEach((packageName) => {
    const path_ =
      packageName === 'root'
        ? path.resolve(CWD, 'package.json')
        : path.resolve(CWD, 'packages', packageName, 'package.json');

    jsons.push({
      dir: path.resolve(CWD, 'packages', packageName),
      path: path_,
      json: fs.readJSONSync(path_, { encoding: 'utf8' }),
    });
  });

  return jsons.map(({ json, path, dir }) => {
    const { name: packageName } = json;
    return {
      json,
      saveJSON() {
        fs.writeJSONSync(path, json);
        return;
      },
      run(callback): any {
        if (typeof callback === 'string') {
          const finalCMD = `(cd ${dir} && ${ENV} ${callback})`;
          const data = spawn.execSync(finalCMD, { encoding: 'utf8' });
          info(packageName, callback, data);
          info(packageName, callback, 'FINISHED');
          return data;
        }

        return (async () => {
          const config = await callback(json);

          let { command, mode } = ((): { command: string; mode: string } => {
            if (typeof config === 'string') {
              return { command: config, mode: 'async' };
            }

            return { mode: 'async', ...config };
          })();

          if (json.scripts?.[command]) {
            command = `npm run ${command}`;
          }

          const finalCMD = `(cd ${dir} && ${ENV} ${command})`;

          if (mode === 'sync') {
            const data = spawn.execSync(finalCMD, { encoding: 'utf8' });
            info(packageName, command, data);
            info(packageName, command, 'FINISHED');
            return data;
          }

          return new Promise((resolve) => {
            info(packageName, command, 'started');
            const child = spawn.exec(finalCMD);

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
        })();
      },
    };
  });
}
