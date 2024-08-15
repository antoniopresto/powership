import fs from 'fs-extra';

import { PackageJson } from './ICommons';
import { nonNullValues } from '@powership/utils';

export function readPackageJSON(path: string): PackageJson {
  const packageJSON = fs.readJSONSync(path);
  try {
    nonNullValues(
      {
        name: packageJSON?.name,
        version: packageJSON.version,
      }, //
      `Invalid package found in "${path}"`
    );
  } catch (e: any) {
    console.error(e.message);
  }
  return packageJSON;
}

export function writePackageJSON(
  path: string,
  packageJSON: Record<string, any> | string
) {
  const json =
    typeof packageJSON === 'string'
      ? packageJSON.trim() + '\n'
      : JSON.stringify(packageJSON, null, 2) + '\n';

  fs.writeFileSync(path, json);
}

export const savePackageJSON = writePackageJSON;
