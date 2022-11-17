import spawn from 'child_process';
import path from 'path';

import chalk from 'chalk';
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

const LOGS_FILE = path.resolve(CWD, `logs/build-${Date.now()}-${time().replace(/\D/g, '-')}.log`);
fs.ensureFileSync(LOGS_FILE);
const logStream = fs.createWriteStream(LOGS_FILE);

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

const jsons: Record<string, PackageJson> = {};

const logs: string[] = [];

function runCommand(packagePath: string, command: ParsedCommand) {
  const { mode, cmd, _cmd, isNPM } = command;

  if (isNPM && !jsons[packagePath].scripts?.[_cmd]) {
    info(packagePath, cmd, 'skipped');
    return;
  }

  const finalCMD = `(cd ${packagePath} && ${ENV} ${cmd})`;

  if (mode === 'execSync') {
    const data = spawn.execSync(finalCMD, { encoding: 'utf8' });
    info(packagePath, cmd, data);
    info(packagePath, cmd, 'FINISHED');
    return data;
  }

  return new Promise((resolve) => {
    info(packagePath, cmd, 'started');
    const child = spawn.exec(finalCMD);

    if (!child?.stdout || !child?.stderr) {
      info(packagePath, cmd, 'child null');
      throw new Error(typeof child.stderr + typeof child.stdout);
    }

    child.stdout.on('data', (data) => {
      info(packagePath, cmd, data);
    });

    child.stderr.on('data', (data) => {
      if (command._cmd.match(/jest|test/)) {
        // jest uses stderr to print logs 🤔 https://github.com/facebook/jest/pull/6583
        info(packagePath, cmd, data);
      } else {
        errr(packagePath, cmd, data);
      }
    });

    child.on('exit', function (code) {
      info(packagePath, cmd, `exited with ${code}`);
      info(packagePath, cmd, 'FINISHED');
      resolve(code);
    });

    child.on('error', function (err) {
      process.stderr.write(require('util').inspect(err, { depth: 10 }));
      process.exit(2);
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
    })
    .finally(() => {
      logStream.close();
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

function delay(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
