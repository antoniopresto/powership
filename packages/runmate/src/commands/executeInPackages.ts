import { AnyFunction, filterNull } from '@powership/utils';
import { chalk, CWD, glob, nodePath } from '@powership/utils/node';
import { Command } from 'commander';

import { packageRunner, PackageRunnerExecInput } from '../packageRunner';

// creates a command to "run in each package"
export function executeInPackages(program: Command) {
  _executeInPackages(
    'command',
    program
      .command('command', { isDefault: true })
      .argument('<command...>')
      .description('Run command in each package')
  );

  _executeInPackages(
    'script',
    program
      .command('script', {})
      .argument('<command...>')
      .description(
        'Runs `npm run <package-json-script>` in each package where that script is defined.'
      )
  );

  return program;
}

function _executeInPackages(
  kind: Readonly<keyof PackageRunnerExecInput> | 'runfile',
  program: Command
) {
  return program
    .option('-d, --cwd <pattern>', 'Source directory or glob pattern')
    .option(
      '--include-root <boolean>',
      'Include root project in execution',
      'true'
    )
    .option(
      '-c, --chunk-size <number>',
      'Chunk size of parallel executions',
      '1'
    )
    .option(
      '-no-ff, --no-fail-fast, --no-ff, --noff',
      'Disable exit on first error'
    )
    .option(
      '--npc, --no-package-name-command',
      'Disable execution in package if first argument is a package name.'
    )
    .option('--ignore <names>', 'Packages to skip execution.')
    .option('--packages <names>', 'Run command only in specified packages.')
    .option(
      '--from <name>',
      'Run command only in specified package and after in the dependency tree.'
    )
    .action(async function run(
      commands: string[],
      options?: {
        includeRoot?: unknown;
        cwd?: string;
        chunkSize: string;
        failFast: boolean;
        ignore?: string;
        packages?: string;
        from?: string;
        packageNameCommand: boolean;
      }
    ): Promise<any> {
      try {
        {
          let {
            //
            cwd = CWD(),
            chunkSize = 1,
            failFast,
            ignore,
            packages,
            packageNameCommand,
            from,
            includeRoot,
          } = options || {};

          if (commands?.[0]?.startsWith('./')) {
            kind = 'runfile';
          }

          const ignoreList = ignore?.split(/, ?/);
          const packagesExclusiveList = packages?.split(/, ?/);

          try {
            const runner = await packageRunner({
              cwd,
              failFast,
              includeRoot: (() => {
                if (typeof includeRoot === 'boolean') return includeRoot;

                if (typeof includeRoot !== 'string') {
                  throw new Error(
                    `includeRoot received invalid value: ${includeRoot} `
                  );
                }

                return includeRoot === 'true';
              })(),
            });

            if (kind === 'runfile') {
              const functions = (() => {
                const errors: string[] = [];

                const found = glob
                  .globSync(commands, { cwd })
                  .map((file): AnyFunction | null => {
                    const path = nodePath.resolve(cwd, file);

                    const fn = (() => {
                      try {
                        return require(path) || require(path).default;
                      } catch (e: any) {
                        errors.push(e.message);
                        return null;
                      }
                    })();

                    if (fn === null) return null;

                    if (typeof fn !== 'function') {
                      errors.push(
                        `Expected default exported function in ${file}.`
                      );
                    }

                    return fn;
                  });

                if (errors.length) {
                  throw new Error(errors.join('\n'));
                }

                return filterNull(found);
              })();

              if (!functions?.length) {
                console.error(
                  chalk.red(
                    `‼️ No files found with pattern: ${commands?.join(' ')}`
                  )
                );
                return;
              }

              for (let fn of functions) {
                await fn(runner);
              }

              return;
            }

            if (packageNameCommand !== false) {
              const firstCommand = commands[0].trim();

              const commandIsPackageName = runner.utils.find((el) => {
                return (
                  el.name === firstCommand ||
                  el.name.split('/')[1] === firstCommand
                );
              });

              if (commandIsPackageName) {
                const restCommand = commands.slice(1).join(' ');
                if (restCommand) {
                  return await commandIsPackageName.run(
                    kind === 'script'
                      ? {
                          script: restCommand,
                        }
                      : { command: restCommand }
                  );
                }
              }
            }

            await runner.run(
              async (utils) => {
                if (packagesExclusiveList?.length) {
                  if (!packagesExclusiveList.includes(utils.name)) return;
                }

                if (ignoreList?.includes(utils.name)) return;

                const value = commands?.join(' ');

                await utils.run(
                  kind === 'script'
                    ? {
                        script: value,
                      }
                    : { command: value }
                );
              },
              {
                chunkSize: +chunkSize,
                from,
              }
            );
          } catch (e: any) {
            throw e;
          }
        }
      } catch (e) {
        throw e;
      }
    });
}

export function eachScript(program: Command) {
  _executeInPackages(
    'script',
    program
      .command('each', { isDefault: true })
      .argument('<command...>')
      .description(
        'Runs `npm run <command>` in each package where that script is defined.'
      )
  );
}

// const npmCommands = [
//   'access',
//   'adduser',
//   'audit',
//   'bugs',
//   'cache',
//   'ci',
//   'completion',
//   'config',
//   'dedupe',
//   'deprecate',
//   'diff',
//   'dist-tag',
//   'docs',
//   'doctor',
//   'edit',
//   'exec',
//   'explain',
//   'explore',
//   'find-dupes',
//   'fund',
//   'get',
//   'help',
//   'help-search',
//   'hook',
//   'init',
//   'install',
//   'install-ci-test',
//   'install-test',
//   'link',
//   'll',
//   'login',
//   'logout',
//   'ls',
//   'org',
//   'outdated',
//   'owner',
//   'pack',
//   'ping',
//   'pkg',
//   'prefix',
//   'profile',
//   'prune',
//   'publish',
//   'query',
//   'rebuild',
//   'repo',
//   'restart',
//   'root',
//   'run-script',
//   'search',
//   'set',
//   'shrinkwrap',
//   'star',
//   'stars',
//   'start',
//   'stop',
//   'team',
//   'test',
//   'token',
//   'uninstall',
//   'unpublish',
//   'unstar',
//   'update',
//   'version',
//   'view',
//   'whoami',
// ];
