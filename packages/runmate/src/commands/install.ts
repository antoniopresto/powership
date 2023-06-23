import chalk from 'chalk';
import { Command } from 'commander';

import { defaultPackagesGlobPattern } from '../defaultPackagesGlobPattern';
import { packageRunner } from '../packageRunner';
import { packageVersion } from '../packageVersion';
import { runmateLogger } from '../runmateLogger';

export function install(program: Command) {
  program
    .command('install')
    .option('-s, --src <packages>', 'Packages glob pattern.')
    .option('--no-scripts', 'Ignores the prepublish scripts.')
    .option('--dry-run', 'Ignores the publication.')
    .action(async function run(_version, options): Promise<any> {
      const { src, scripts, dryRun } = options || {};

      await runmateLogger.lazyDebug(() => [
        'Received args: \n',
        JSON.stringify(options, null, 2),
      ]);

      try {
        const runner = await packageRunner(src || defaultPackagesGlobPattern, {
          failFast: false,
        });

        if (scripts) {
          await runner.run('npm install --dry-run', {
            failFast: true,
            chunkSize: 1,
          });
        }

        if (!dryRun) {
          await runner.run('npm install');
        }
      } catch (e: any) {
        console.error(chalk.red(e));
      }
    });

  program
    .command(
      'version <releaseTypeOrVersion> [pattern]' //
    )
    .description(
      [
        'Update package versions.',
        'Examples: ',
        '➜  version 1.0.0',
        '➜  version minor',
        '➜  version major ./packages/utils',
      ].join('\n')
    )
    .alias('v')
    .action(async function run(releaseTypeOrVersion, pattern): Promise<any> {
      //
      await runmateLogger.lazyDebug(() => [
        'Received args: \n',
        JSON.stringify({ releaseTypeOrVersion }, null, 2),
      ]);

      try {
        await packageVersion(releaseTypeOrVersion, pattern);
      } catch (e: any) {
        console.error(chalk.red(e));
      }
    });
}
