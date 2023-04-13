import chalk from 'chalk';
import { Command } from 'commander';

import { defaultPackagesGlobPattern } from '../defaultPackagesGlobPattern';
import { packageRunner } from '../packageRunner';
import { packageVersion } from '../packageVersion';
import { runmateLogger } from '../runmateLogger';

export function version(program: Command) {
  program
    .command('publish [version]')
    .option('-s, --src <packages>', 'Packages glob pattern.')
    .option('--no-scripts', 'Ignores the prepublish scripts.')
    .option('--dry-run', 'Ignores the publication.')
    .action(async function run(version, options): Promise<any> {
      const { src, scripts, dryRun } = options || {};

      await runmateLogger.lazyDebug(() => [
        'Received args: \n',
        JSON.stringify(options, null, 2),
      ]);

      try {
        if (version) {
          await packageVersion(version, src);
        }

        const runner = await packageRunner(src || defaultPackagesGlobPattern, {
          failFast: false,
        });

        if (scripts) {
          await runner.run('npm publish --dry-run', {
            failFast: true,
            chunkSize: 1,
          });
        }

        if (!dryRun) {
          await runner.run('npm publish');
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
