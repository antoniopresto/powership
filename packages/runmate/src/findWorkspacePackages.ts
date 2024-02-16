import nodePath from 'path';
import * as path from 'path';
import process from 'process';

import fs from 'fs-extra';
import * as glob from 'glob';

import { PackageJson } from './ICommons';

export type FindWorkspacePackagesInit = {
  cwd?: string;
  globCache?: any;
};

export type WorkspacePackagesFoundResult = ReturnType<
  typeof findWorkspacePackages
>;

export function findWorkspacePackages(init?: FindWorkspacePackagesInit) {
  const { cwd: rootDir = process.cwd(), globCache } = init || {};

  const pnpmWorkspaces = listPnpmWorkspaces(rootDir);
  const packageJsonWorkspaces = listPackageJSONWorkspaces(rootDir);

  const foundPatterns = pnpmWorkspaces?.length
    ? pnpmWorkspaces
    : packageJsonWorkspaces?.length
    ? packageJsonWorkspaces
    : null;

  if (!foundPatterns) {
    throw new Error('No workspaces config found.');
  }

  return foundPatterns.flatMap((pattern) => {
    const found = glob.sync(nodePath.join(pattern, 'package.json'), {
      cwd: rootDir,
      absolute: true,
      cache: globCache,
      ignore: ['**/node_modules/**'],
    });

    return {
      found,
      pattern,
    };
  });
}

function listPnpmWorkspaces(rootDir: string) {
  const pnpmWorkspacePath = path.join(rootDir, 'pnpm-workspace.yaml');

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
  const packageJsonPath = path.join(rootDir, 'package.json');

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
