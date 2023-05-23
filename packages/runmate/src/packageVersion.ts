import nodePath from 'path';

import semver from 'semver/preload';

import { defaultPackagesGlobPattern } from './defaultPackagesGlobPattern';
import { readPackageJSON, writePackageJSON } from './handleJSON';
import { packageRunner, PackageRunnerUtils } from './packageRunner';

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

export const packageJSONDependencyKeys = [
  'optionalDependencies',
  'peerDependencies',
  'devDependencies',
  'dependencies',
] as const;

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

  const updates: {
    name: string;
    newVersion: string;
    utils: PackageRunnerUtils;
  }[] = [];

  await runner.run((utils) => {
    const {
      json: { name, version },
    } = utils;

    const newVersion = getNewVersion(version, releaseTypeOrVersion);

    if (!newVersion) {
      throw new Error(
        `Failed to update version "${releaseTypeOrVersion}" for ${name}@${version}`
      );
    }

    updates.push({ name, newVersion, utils });
  });

  await Promise.all(
    updates.map(({ utils: { json, saveJSON }, newVersion }) => {
      const deps = {
        ...json.optionalDependencies,
        ...json.peerDependencies,
        ...json.devDependencies,
        ...json.dependencies,
      };

      Object.entries(deps).forEach(([depName]) => {
        const localDep = updates.find((el) => el.name === depName);
        if (!localDep) return;

        packageJSONDependencyKeys.forEach((key) => {
          const entry = json[key];

          if (entry?.[depName]) {
            const isWorkspace = entry[depName].startsWith('workspace');
            if (isWorkspace) return;
            entry[depName] = localDep.newVersion;
          }
        });
      });

      json.version = newVersion;
      saveJSON();
    })
  );

  if (rootJSON) {
    const newVersion = getNewVersion(rootJSON.version, releaseTypeOrVersion);
    if (newVersion) {
      rootJSON.version = newVersion;
      writePackageJSON(rootJSONPath, rootJSON);
    }
  }

  return updates;
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
