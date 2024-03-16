import fs from 'fs';

import { hey, jsonParse, setByPath } from '@powership/utils';
import { nodePath } from '@powership/utils/out/node';
import { Command } from 'commander';

import { writePackageJSON } from '../handleJSON';
import { packageRunner } from '../packageRunner';
import { packageVersion } from '../packageVersion';

export function updateJsonValue(program: Command) {}

function update(program: Command, op: 'get' | 'set') {
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

          if (op === 'get') {
            fs.writeSync(process.stdout.fd, value);
            return process.exit(0);
          }

          const jsonValue = jsonParse(value)[1] || value;
          // @ts-ignore
          setByPath(json, objectPath, jsonValue);

          // @ts-ignore
          writePackageJSON(jsonPath, json);
          return;
        });
      } catch (e: any) {
        hey.error(e);
        process.exit(1);
      }
    });
}
