import nodePath from 'path';
import nodeURL from 'url';

import chalk from 'chalk';
import * as commander from 'commander';
import fsExtra from 'fs-extra';
import * as glob from 'glob';
import * as semver from 'semver';
import urlPattern from 'url-pattern';

import { devAssert } from './devAssert';

export function CWD(): string {
  const errors: any[] = [];

  try {
    return process.cwd() || devAssert('process.cwd() is empty.');
  } catch (e) {
    errors.push(e);
  }

  try {
    return (
      require('process').cwd() ||
      devAssert("require('process').cwd() is empty.")
    );
  } catch (e) {
    errors.push(e);
  }

  throw errors;
}

export function resolveCWD(...parts: string[]) {
  return nodePath.resolve(CWD(), ...parts);
}

export const relativePath = resolveCWD;

export function __dirnameGet(meta: { url: string }) {
  if (typeof meta?.url !== 'string' || !meta.url) {
    throw new Error(
      `expected meta.url to be a valid string from import.meta.url`
    );
  }

  return nodePath.dirname(nodeURL.fileURLToPath(meta.url));
}

export * from 'bun-safe';

export {
  fsExtra,
  fsExtra as fs,
  nodePath,
  nodeURL,
  chalk,
  glob,
  semver,
  urlPattern,
  commander,
};
