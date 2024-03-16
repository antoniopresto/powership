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
}
