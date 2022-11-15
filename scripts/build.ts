import spawn from 'child_process';
import path from 'path';

import fs from 'fs-extra';
import type { PackageJson } from 'nx/src/utils/package-json';

const CWD = process.cwd();
const ENV = ['TEST_TIMEOUT=90000'].join(' ');

const ordered = [
  //
  'babel-plugins',
  'utils',
  'schema',
  'transporter',
  'mongo',
  'entity',
  'accounts',
  'backland',
];

const all = ordered.map((el) => path.resolve(CWD, 'packages', el));
const root = [CWD];

type CommandString = `${'n' | 'ex'}${'s' | 'a'}:${string}`;

const commands: [string[], CommandString[]][] = [
  [root, ['exs:lerna link --force-local', 'exs:lerna bootstrap']],
  [all, ['na:clear']],
  [all, ['ns:declarations']],
  [all, ['na:fix']],
  [all, ['ns:build-targets']],
  [all, ['na:test']],
];

function time() {
  const date = new Date();
  return date.toLocaleTimeString().split(' ')[0];
}

function info(_path: string, cmd: string, data: string, mode: 'info' | 'error' = 'info') {
  process.stdout.write(`${colours.fg.magenta} ${time()} ${_path.split('/').slice(-1)} ${cmd} ${data}`);
  process.stdout.write(colours.reset);
}

function errr(path: string, cmd: string, data: string) {
  info(path, cmd, data, 'error');
}

const jsons: Record<string, PackageJson> = {};

const logs: string[] = [];
function lsave(_path: string, cmd: string, msg: string) {
  logs.push(`${time()} ${_path.split('/').slice(-1)} ${cmd} ${msg}`);
}

function runCommand(packagePath: string, command: ParsedCommand) {
  const { mode, cmd, _cmd, isNPM } = command;

  if (isNPM && !jsons[packagePath].scripts?.[_cmd]) {
    lsave(packagePath, cmd, 'skipped');
    return;
  }

  const finalCMD = `(cd ${packagePath} && ${ENV} ${cmd})`;

  if (mode === 'execSync') {
    const data = spawn.execSync(finalCMD, { encoding: 'utf8' });
    lsave(packagePath, cmd, data);
    info(packagePath, cmd, data);
    return data;
  }

  return new Promise((resolve) => {
    lsave(packagePath, cmd, 'started');

    const child = spawn.exec(finalCMD);

    if (!child?.stdout || !child?.stderr) {
      info(packagePath, cmd, 'child null');
      lsave(packagePath, cmd, 'child null');
      throw new Error(typeof child.stderr + typeof child.stdout);
    }

    child.stdout.on('data', (data) => {
      lsave(packagePath, cmd, data);
      info(packagePath, cmd, data);
    });

    child.stderr.on('data', (data) => {
      lsave(packagePath, cmd, `==== ERROR ====\n${data}`);
      info(packagePath, cmd, data, 'error');
      process.exit(1);
    });

    child.on('exit', function (code) {
      lsave(packagePath, cmd, `exited with ${code}`);
      resolve(code);
    });

    child.on('error', function (code) {
      console.log(require('util').inspect(code, { depth: 10 }));
      process.exit(1);
    });
  });
}

async function main() {
  await Promise.all(
    all.map(async (_path) => {
      jsons[_path] = await fs.readJSON(path.join(_path, 'package.json'), 'utf8');
    })
  );

  for (let entry of commands) {
    const [packages, cmds] = entry;

    for (let cmd of cmds) {
      const info = parseCommand(cmd);

      if (info.mode === 'exec') {
        await Promise.all(
          packages.map((packagePath) => {
            return runCommand(packagePath, info);
          })
        );
      } else {
        for (let packagePath of packages) {
          await runCommand(packagePath, info);
        }
      }
    }
  }
}

if (!module.parent) {
  main()
    .catch((err) => {
      errr('', '', 'ERROR:' + err.message);
      console.info(logs.join('\n'));
      process.exit(1);
    })
    .then(() => {
      process.exit(0);
      console.info(logs.join('\n'));
    });
}

type ParsedCommand = Exclude<ReturnType<typeof parseCommand>, undefined>;

function parseCommand(command: CommandString) {
  const [description, ...rest] = command.split(':');
  const mode = description.slice(-1) === 'a' ? ('exec' as const) : ('execSync' as const);

  const _cmd = rest.join(':');
  const isNPM = description.startsWith('n');
  const cmd = `${isNPM ? 'npm run ' : ''}${rest.join(':')}`;

  return {
    _cmd,
    isNPM,
    cmd,
    mode,
  } as const;
}
const colours = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  underscore: '\x1b[4m',
  blink: '\x1b[5m',
  reverse: '\x1b[7m',
  hidden: '\x1b[8m',

  fg: {
    black: '\x1b[30m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
    crimson: '\x1b[38m', // Scarlet
  },
  bg: {
    black: '\x1b[40m',
    red: '\x1b[41m',
    green: '\x1b[42m',
    yellow: '\x1b[43m',
    blue: '\x1b[44m',
    magenta: '\x1b[45m',
    cyan: '\x1b[46m',
    white: '\x1b[47m',
    crimson: '\x1b[48m',
  },
};

function delay(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
