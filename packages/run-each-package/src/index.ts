import spawn from 'child_process';
import path from 'path';
import * as process from 'process';

import chalk from 'chalk';
import fs from 'fs-extra';

export type _MaybePromise<T> = T | Promise<T>;

const CWD = process.cwd();

// const ConfigSchema = createType('RuneachConfig', {
//   object: {
//     packages: { array: { of: 'string', min: 1 } },
//   },
// } as const);

const config = (function getConfig() {
  const RUN_PACKAGES = process.env.packages;

  if (RUN_PACKAGES) {
    // return ConfigSchema.parse({
    return { packages: RUN_PACKAGES.split(',').map((el) => el.trim()) };
    // });
  }

  const rootJS = path.resolve(CWD, 'run-each.config.js');
  try {
    const config = require(rootJS);
    return config;
  } catch (e: any) {
    const error = Error(`Failed to load run-each-package config: ${e.message}`);
    throw error;
  }
})();

const { packages } = config;

function time() {
  const date = new Date();
  return date.toLocaleString();
}

function log(mode: 'info' | 'error', ...rest) {
  const text = rest.join(' ');

  if (mode === 'info') {
    process.stdout.write(`${chalk.bgWhite.black(time())} ${text}\n`);
  } else {
    process.stderr.write(`${chalk.bgRed.black(time())} ${text}\n`);
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

export function runeach() {
  const jsons: { path: string; json: any; dir: string }[] = [];

  packages.forEach((packageName) => {
    const dir =
      packageName === 'root'
        ? CWD //
        : path.resolve(CWD, 'packages', packageName);

    const jsonPath = path.resolve(dir, 'package.json');

    jsons.push({
      dir,
      path: jsonPath,
      json: (() => {
        try {
          return fs.readJSONSync(jsonPath, { encoding: 'utf8' });
        } catch (e) {
          info(CWD, 'Read root json', 'No root package found.');
          return {
            name: 'root',
          };
        }
      })(),
    });
  });

  const list = jsons.map(({ json, path, dir }) => {
    const { name: packageName } = json;
    return {
      json,
      saveJSON() {
        fs.writeFileSync(path, JSON.stringify(json, null, 2));
        return;
      },
      run(callback): any {
        if (typeof callback === 'string') {
          let command = callback;

          if (json.scripts?.[command]) {
            command = `npm run ${command}`;
          }

          const finalCMD = `(cd ${dir} && ${command})`;
          const data = spawn.execSync(finalCMD, { encoding: 'utf8' });
          info(packageName, callback, data);
          info(packageName, callback, 'FINISHED');
          return data;
        }

        return (async () => {
          const config = await callback(json);

          let { command, mode } = ((): { command: string; mode: string } => {
            if (typeof config === 'string') {
              return { command: config,
mode: 'async' };
            }

            return { mode: 'async',
...config };
          })();

          if (json.scripts?.[command]) {
            command = `npm run ${command}`;
          }

          const finalCMD = `(cd ${dir} && ${command})`;

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

  const [root, ...list_] = list;

  return {
    root: root.run,
    list: list_,
    map: Array.prototype.map.bind(list_),
  };
}

export default runeach;
