import path from 'node:path';
import nodePath from 'path';
import process, { cwd } from 'process';
import nodeURL from 'url';

import { bunSafe } from 'bun-safe';
import * as commander from 'commander';
import fsExtra from 'fs-extra';
import { glob, Glob, globIterate, globIterateSync, globSync } from 'glob';
import { match, minimatch, MinimatchOptions } from 'minimatch';
import prettyFormat from 'pretty-format';
import * as semver from 'semver';
import urlPattern from 'url-pattern';

import { devAssert } from '../devAssert';
import { hey } from '../hey';

function CWD(): string {
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

function resolveCWD(...parts: string[]) {
  return nodePath.resolve(CWD(), ...parts);
}

const FILENAME = overrideToString(function FILENAME(meta?: _META_) {
  if (!meta && process.argv[1]) return process.argv[1];
  const url = meta ? meta.url! : devAssert('import.meta is required');
  return nodeURL.fileURLToPath(url);
});

const DIRNAME = overrideToString(function DIRNAME(meta?: _META_) {
  return nodePath.dirname(FILENAME(meta));
});

const BASENAME = function BASENAME(meta?: _META_) {
  return nodePath.basename(FILENAME(meta));
};

function format(values: unknown[]) {
  return values.map((v) => pretty(v)).join(' ');
}

const log = Object.assign(
  function log(args: unknown[]) {
    return hey`${format(args)}`;
  },
  {
    error: (...args: unknown[]) => hey.red`${format(args)}`,
    warn: (...args: unknown[]) => hey.yellow`${format(args)}`,
    info: (...args: unknown[]) => hey.blue`${format(args)}`,
  }
);

function parseArgv(argv?: string | string[]) {
  const [input, ...params] = (() => {
    if (typeof argv === 'string') {
      return [argv];
    }
    return argv || process.argv.slice(2);
  })();

  if (!input) return null;

  const JS_TS_REGEX = /\.[mc]?[jt]sx?$/;

  if (JS_TS_REGEX.test(input)) {
    const scriptRelative = path.resolve(cwd(), input);

    return {
      input,
      params: params.join(' '),
      script: input,
      scriptRelative,
    } as const;
  }

  return {
    input,
    params: params.join(' '),
    script: null,
    scriptRelative: null,
  } as const;
}

function pretty(value: unknown) {
  if (typeof value === 'string') return value;
  return prettyFormat(value);
}

const UTILS = {
  parseArgv,
  match,
  minimatch,
  fsExtra,
  nodePath,
  nodeURL,
  semver,
  commander,
  glob,
  globIterate,
  globIterateSync,
  pretty,
  FILENAME,
  DIRNAME,
  BASENAME,
  resolveCWD,
  globSync,
  bunSafe,
  CWD,
  log,
};

export {
  parseArgv,
  UTILS,
  match,
  minimatch,
  fsExtra,
  nodePath,
  nodeURL,
  semver,
  urlPattern,
  commander,
  glob,
  Glob,
  globIterate,
  globIterateSync,
  pretty,
  FILENAME,
  DIRNAME,
  BASENAME,
  resolveCWD,
  globSync,
  bunSafe,
  CWD,
  log,
};

export type { MinimatchOptions };
export type ServerUtils = typeof UTILS;

declare global {
  const serverUtils: ServerUtils;
  interface Window extends ServerUtils {}
}

export function assignGlobalUtils() {
  const source = { ...UTILS, UTILS: UTILS };
  Object.assign(globalThis, source);
}

function overrideToString(fn: (meta?: _META_) => string) {
  if ('__OTS_PATCHED__' in fn) return fn;

  const original = fn.toString;

  return Object.assign(fn, {
    __OTS_PATCHED__: true,
    toString: function toString(): string {
      try {
        return fn();
      } catch (e) {
        return original();
      }
    },
  });
}

export type _META_ = {
  url?: string;
};
