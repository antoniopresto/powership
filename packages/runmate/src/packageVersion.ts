import nodePath from 'path';

import fs from 'fs-extra';
import semver from 'semver/preload';

import { PackageJson } from './ICommons';
import { defaultPackagesGlobPattern } from './defaultPackagesGlobPattern';
import { readPackageJSON, writePackageJSON } from './handleJSON';
import { packageRunner } from './packageRunner';

export const ReleaseTypes = [
  'major',
  'premajor',
  'minor',
  'preminor',
  'patch',
  'prepatch',
  'prerelease',
] as const;

export type ReleaseType = typeof ReleaseTypes[number];

export const ReleaseTypeset = new Set(ReleaseTypes);

export async function packageVersion(
  releaseTypeOrVersion: ReleaseType | string,
  patternInput?: string
) {
  const pattern = patternInput || defaultPackagesGlobPattern;
  const runner = await packageRunner(pattern);

  const rootJSONPath = nodePath.resolve(process.cwd(), 'package.json');

  const rootJSON = (() => {
    if (patternInput) return;
    try {
      return readPackageJSON(rootJSONPath);
    } catch (e) {
      return undefined;
    }
  })();

  const updated = await runner.run((utils) => {
    const originalVersion = utils.json.version;
    const newVersion = getNewVersion(utils.json.version, releaseTypeOrVersion);

    if (!newVersion) {
      throw new Error(
        `Failed to update version "${releaseTypeOrVersion}" for ${utils.json.name}@${utils.json.version}`
      );
    }

    utils.json.version = newVersion;
    utils.saveJSON();

    console.info(
      `Updated ${utils.json.name} from version ${originalVersion} to ${newVersion}`
    );
  });

  if (rootJSON) {
    const newVersion = getNewVersion(rootJSON.version, releaseTypeOrVersion);
    if (newVersion) {
      rootJSON.version = newVersion;
      writePackageJSON(rootJSONPath, rootJSON);
    }
  }

  return updated;
}

export function getNewVersion(
  currentVersion: string,
  releaseTypeOrVersion: ReleaseType | string
) {
  const newVersion = ReleaseTypeset.has(releaseTypeOrVersion as ReleaseType)
    ? semver.inc(currentVersion, releaseTypeOrVersion as ReleaseType)
    : releaseTypeOrVersion;

  if (!newVersion || !semver.valid(newVersion)) {
    return null;
  }

  return newVersion;
}
