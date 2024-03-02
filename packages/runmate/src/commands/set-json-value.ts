import { jsonParse, setByPath } from '@powership/utils';
import { chalk, nodePath } from '@powership/utils/out/node-utils';
import { Command } from 'commander';

import { writePackageJSON } from '../handleJSON';
import { packageRunner } from '../packageRunner';
import { packageVersion } from '../packageVersion';

export function setJsonValue(program: Command) {
  program
    .command('set')
    .description('Set json value')
    .argument('path', 'The object path - example "devDependencies.lodash"')
    .argument('value', 'The value to set - example "^1.0.0"')
    .option(
      '-f, --file <pattern>',
      'Path of the file to change',
      './package.json'
    )
    .option('-d, --cwd <pattern>', 'Packages root folder.')
    .option('--dry-run', 'Does not save the file.')
    .action(async function run(objectPath, value, options): Promise<any> {
      const { file = 'package.json', cwd, dryRun } = options || {};

      try {
        const runner = await packageRunner({
          cwd,
          failFast: false,
        });

        runner.utils.map(async (util) => {
          const jsonPath = nodePath.resolve(util.cwd, file);
          const runCommandResult = await util.run({
            command: `cat ${jsonPath}`,
          });

          const content = runCommandResult.data
            .map((el) => el.toString('utf-8'))
            .join('');

          const [error, json] = jsonParse(content);

          if (error) {
            throw error;
          }

          const jsonValue = jsonParse(value)[1] || value;
          setByPath(json, objectPath, jsonValue);

          if (dryRun) {
            console.info(nodePath.relative(util.cwd, jsonPath), '\n', json);
          } else {
            writePackageJSON(jsonPath, json);
          }
        });
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
