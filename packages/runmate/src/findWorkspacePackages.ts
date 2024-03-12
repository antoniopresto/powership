import nodePath from 'path';
import process from 'process';

import { hey } from '@powership/utils';
import fs from 'fs-extra';
import * as glob from 'glob';

import { PackageJson } from './ICommons';
import { readPackageJSON } from './handleJSON';

export type FindWorkspacePackagesInit = {
  cwd?: string;
  includeRoot?: boolean;
};

export type WorkspacePackagesFoundResult = ReturnType<
  typeof findWorkspacePackages
>;

export function findWorkspacePackages(init?: FindWorkspacePackagesInit) {
  const { cwd: rootDir = process.cwd(), includeRoot = true } = init || {};

  const pnpmWorkspaces = listPnpmWorkspaces(rootDir);
  const packageJsonWorkspaces = listPackageJSONWorkspaces(rootDir);

  let foundPatterns = pnpmWorkspaces?.length
    ? pnpmWorkspaces
    : packageJsonWorkspaces?.length
    ? packageJsonWorkspaces
    : null;

  if (!foundPatterns) {
    hey.warn(`⚠️ No workspaces config found in ${rootDir}`);
    foundPatterns = [];
  }

  if (includeRoot) {
    foundPatterns.unshift('./');
  }

  return foundPatterns.flatMap((pattern) => {
    return glob
      .sync(nodePath.join(pattern, 'package.json'), {
        cwd: rootDir,
        absolute: true,
        ignore: ['**/node_modules/**'],
      })
      .flatMap((path) => {
        return {
          pattern,
          path: path,
          json: readPackageJSON(path),
          relative: nodePath.relative(rootDir, nodePath.dirname(path)) || `./`,
        };
      });
  });
}

function listPnpmWorkspaces(rootDir: string) {
  const pnpmWorkspacePath = nodePath.join(rootDir, 'pnpm-workspace.yaml');

  if (fs.existsSync(pnpmWorkspacePath)) {
    const workspaceFileContent = fs.readFileSync(pnpmWorkspacePath, 'utf-8');

    if (!workspaceFileContent) {
      throw new Error(`empty file ${pnpmWorkspacePath}`);
    }

    let res = workspaceFileContent.replace(/packages:\n/, '').split('-');

    res = res.map((el) => {
      return el
        .trim() //
        .replace(/^['"]|['"]$/gm, '');
    });

    return res.filter(Boolean);
  }

  return null;
}

function listPackageJSONWorkspaces(rootDir: string) {
  const packageJsonPath = nodePath.join(rootDir, 'package.json');

  if (fs.existsSync(packageJsonPath)) {
    const packageJson = fs.readJSONSync(packageJsonPath) as PackageJson;
    const found = Array.isArray(packageJson?.workspaces)
      ? packageJson.workspaces
      : packageJson.workspaces?.packages || null;

    if (!Array.isArray(found)) return null;

    for (let p of found) {
      if (typeof p !== 'string') {
        throw new Error(`cant handle workspace ${p}`);
      }
    }

    return found;
  }

  return null;
}

export const listPackages = findWorkspacePackages;
export const findPackages = findWorkspacePackages;
