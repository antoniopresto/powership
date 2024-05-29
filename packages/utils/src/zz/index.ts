/// <reference types="@types/bun" />

/**
 * Executes typescript or js files using bun.js
 */

import * as child_process from 'child_process';
import path from 'node:path';
import * as process from 'process';

import { DIRNAME, parseArgv } from '../server-utils';

export function isBunJsAvailable() {
  try {
    child_process.execSync('bun --version', { stdio: 'ignore' });
    return true;
  } catch (e) {
    return false;
  }
}

export function installBunIfNeeded() {
  if (isBunJsAvailable()) return;

  try {
    const script = child_process.execSync('curl https://bun.sh/install', {
      encoding: 'utf8',
    });

    child_process.execSync(script, {
      stdio: 'inherit',
    });
  } catch (e: any) {
    console.error(`\n> failed to install bun.js:\n${e.toString()}`);
    process.exit(1);
  }
}

export type ZZOptions = {
  encoding?: 'utf8' | 'buffer';
  stdio?: 'overlapped' | 'pipe' | 'ignore' | 'inherit';
};

export function bun<Options extends ZZOptions>(
  args?: string[] | string,
  options?: Options
) {
  installBunIfNeeded();

  const input = parseArgv(args);

  const script = (() => {
    if (!input) return '';

    if (input.input === '-') {
      return `bun ${input.params}`;
    }

    const { body, header, append } = (() => {
      if (input.scriptRelative) {
        return {
          header: `import '${input.scriptRelative}';`,
          body: '',
          append: input.params,
        };
      }

      return {
        header: '',
        body: [input.input, input.params].join(' '),
        append: '',
      };
    })();

    const content = [
      `import { assignGlobalUtils } from '${path.resolve(
        '../',
        DIRNAME.toString(),
        '../server-utils'
      )}';`,
      'assignGlobalUtils();',
      header,
      '',
      body
        ? `process.stdout.write(pretty(\n\n\n/* ▼ YOUR CODE ▼ */\n${body}\n\n)+'\\n');`
        : '',
      '',
    ]
      .filter(Boolean)
      .join('\n')
      .replace(/"/g, (part) => `\\${part}`);

    return ['bun --eval', `"${content}"`, append].join(' ');
  })();

  const result = child_process.execSync(`${script}`, options);

  return {
    buffer() {
      if (typeof result === 'string') {
        return Buffer.from(result);
      }
      return result;
    },
  };
}

export function awaitUntil() {
  const exit = (() => {
    let FINISHED = false;
    function wait() {
      if (!FINISHED) setTimeout(wait);
    }
    wait();
    return (code: 1 | 0) => {
      FINISHED = true;
      process.exit(code);
    };
  })();

  return { exit };
}

const hasArguments = process.argv[2];
if (hasArguments) {
  const { exit } = awaitUntil();

  try {
    bun();
    exit(0);
  } catch (e) {
    exit(1);
  }
}
