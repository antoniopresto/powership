import chalk from 'chalk';
import { Command } from 'commander';

import { packageRunner } from '../packageRunner';
import { packageVersion } from '../packageVersion';

export function version(program: Command) {
  program
    .command('publish [version]')
    .option('-d, --cwd <pattern>', 'Packages root folder.')
    .option('--no-scripts', 'Ignores the prepublish scripts.')
    .option('--dry-run', 'Ignores the publication.')
    .action(async function run(version, options): Promise<any> {
      const { cwd: src, scripts, dryRun } = options || {};

      try {
        if (version) {
          await packageVersion(version, src);
        }

        const runner = await packageRunner({
          cwd: src,
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
      try {
        await packageVersion(releaseTypeOrVersion, pattern);
      } catch (e: any) {
        console.error(chalk.red(e));
      }
    });
}
