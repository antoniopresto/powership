import fs from 'fs-extra';

import { PackageJson } from './ICommons';

export function readPackageJSON(path: string): PackageJson {
  const packageJSON = fs.readJSONSync(path);
  if (!packageJSON?.name || !packageJSON?.version) {
    throw new Error(`Invalid package found in "${path}"`);
  }
  return packageJSON;
}

export function writePackageJSON(
  path: string,
  packageJSON: PackageJson | string
) {
  const json =
    typeof packageJSON === 'string'
      ? packageJSON.trim() + '\n'
      : JSON.stringify(packageJSON, null, 2) + '\n';

  fs.writeFileSync(path, json);
}
