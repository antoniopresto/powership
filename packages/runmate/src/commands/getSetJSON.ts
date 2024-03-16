import { hey, jsonParse, pick, setByPath } from '@powership/utils';
import { CWD, nodePath } from '@powership/utils/out/node';
import { Command } from 'commander';

import {
  getPackageRunnerUtils,
  packageRunner,
  PackageRunnerUtils,
} from '../packageRunner';

export function getSetJSON(program: Command) {
  update('get', program.command('get <propertyPath> [file]'));

  update(
    'set',
    program
      .command('set <propertyPath> <value> [file]')
      .description('Set json value')
  );
}

function update(op: 'get' | 'set', program: Command) {
  program
    .option('-d, --cwd <pattern>', 'Packages root folder.')
    .option('--dry-run', 'Does not save the file.')
    .action(async function run(...args): Promise<any> {
      const parameters = (() => {
        if (op === 'get') {
          const options = args[1] || {};
          const { cwd = CWD() } = options;

          const file = args[1];
          const filePath = file ? nodePath.resolve(cwd, file) : undefined;

          return {
            propertyPath: args[0],
            file,
            filePath,
            propertySetValue: undefined,
            options,
            cwd,
          };
        }

        const options = args[3] || {};
        const { cwd = CWD() } = options;

        const file = args[2];
        const filePath = file ? nodePath.resolve(cwd, file) : undefined;

        return {
          filePath,
          propertyPath: args[0],
          propertySetValue: args[1],
          file,
          options,
          cwd,
        };
      })();

      const {
        //
        propertyPath,
        propertySetValue,
        options,
        file,
        filePath,
        cwd,
      } = parameters;

      let { dryRun } = options || {};

      const running_in_all_packages = !file;
      const append = running_in_all_packages ? '\n' : '';

      const runIt = async (util: PackageRunnerUtils) => {
        if (op === 'get') {
          let picked = pick(util.json, propertyPath);

          picked =
            typeof picked === 'string'
              ? picked
              : JSON.stringify(picked, null, 2);

          process.stdout.write(picked + append);
          return;
          //
        } else if (op === 'set') {
          const inputValue = jsonParse(propertySetValue)[1] || propertySetValue;

          setByPath(util.json, propertyPath, inputValue);

          if (dryRun) {
            hey`${JSON.stringify(parameters, null, 2)}`;
            hey`${JSON.stringify(util.json, null, 2)}`;
          } else {
            util.saveJSON();
          }
        } else {
          throw new Error(`unknown operation`);
        }
      };

      try {
        if (filePath) {
          const utils = getPackageRunnerUtils(filePath);
          return runIt(utils);
        }

        const runner = await packageRunner({
          cwd,
          failFast: false,
        });

        runner.utils.map(runIt);
      } catch (e: any) {
        hey.error(e);
        process.exit(1);
      }
    });
}
