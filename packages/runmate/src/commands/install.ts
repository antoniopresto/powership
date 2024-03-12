import { hey } from '@powership/utils';
import { Command } from 'commander';

import { packageRunner } from '../packageRunner';
import { packageVersion } from '../packageVersion';

export function install(program: Command) {
  program
    .command('install [cwd]')
    .option('--no-scripts', 'Ignores the prepublish scripts.')
    .option('--dry-run', 'Ignores the publication.')
    .action(async function run(cwd, options): Promise<any> {
      const { scripts, dryRun } = options || {};

      try {
        const runner = await packageRunner({
          cwd,
          failFast: false,
        });

        if (scripts) {
          await runner.run(
            { command: 'npm install --dry-run' },
            {
              failFast: true,
              chunkSize: 1,
            }
          );
        }

        if (!dryRun) {
          await runner.run({ command: 'npm install' });
        }
      } catch (e: any) {
        hey.error(e);
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
        hey.error(e);
      }
    });
}
