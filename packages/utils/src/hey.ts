// @only-server
import fs from 'fs';

import { tryCatch } from './tryCatch';

function _hey(strings: TemplateStringsArray | string, ...values: any[]) {
  const formatted = heyFormat(strings, ...values) + '\n';
  write(formatted);
  return formatted;
}

const red = '\x1b[31m';
const yellow = '\x1b[33m';

export const styles = {
  red: red,
  error: red,
  warn: yellow,
  green: '\x1b[32m',
  yellow: yellow,
  blue: '\x1b[34m',
  bold: '\x1b[1m',
  underline: '\x1b[4m',
  strike: '\x1b[9m', // ANSI escape code for strikethrough
  reset: '\x1b[0m',
};

_hey.styles = styles;

function heyFormat(input: string | TemplateStringsArray, ...values: any[]) {
  let text = (() => {
    if (typeof input === 'string') return input;
    let result = input[0];
    values.forEach((value, i) => {
      result += value + input[i + 1];
    });
    return result;
  })();

  const regex = new RegExp(
    // /<(red|green|yellow|blue|bold|underline|strike)>(.*?)<\/\1>/g,
    `<(${Object.keys(_hey.styles).join('|')})>(.*?)<\\/\\1>`,
    'g'
  );

  text = text.replace(regex, (_, style, el) => {
    return `${_hey.styles[style]}${heyFormat(el)}${_hey.styles.reset}`;
  });

  return trimTabs(text);
}

function write(input: string) {
  if (
    typeof process === 'undefined' ||
    typeof process?.stdout?.write !== 'function'
  ) {
    return console.info(input);
  }

  const [err] = tryCatch(() => fs.writeSync(process.stdout.fd, input));

  if (err) {
    console.info(input);
  }
}

export function trimTabs(
  input: string | TemplateStringsArray,
  ...values: any[]
): string {
  const string = templateStringToText(input, ...values);

  const [first, ...rest] = string.split('\n').filter(Boolean);
  if (!rest.length) return string.trim();
  let trimmed = first.trimStart();

  const count = first.length - trimmed.length;

  const regex = new RegExp(`^ {${count}}`);
  rest.forEach((line) => {
    trimmed += '\n' + line.replace(regex, '');
  });

  return trimmed.trimEnd();
}

export function templateStringToText<T = any>(
  input: string | TemplateStringsArray,
  ...values: T[]
) {
  if (typeof input === 'string') return input;
  if (Array.isArray(input)) {
    let result = input[0];
    values.forEach((value, i) => {
      result += value + input[i + 1];
    });
    return result;
  }
  return input?.toString?.();
}

export type Styles = typeof styles & {};

export type HeyParams = readonly [
  strings: TemplateStringsArray | string | { toString(): string },
  ...values: any[]
];

export type Hey = {
  (...args: HeyParams): string;
  format(...args: HeyParams): string;
} & {
  [K in keyof Styles]: (...args: HeyParams) => string;
} & {
  styles: Styles;
} & {};

Object.keys(styles).forEach((key) => {
  Object.defineProperty(_hey, key, {
    value: (...args: any[]) => {
      // @ts-ignore
      const string = `<${key}>${templateStringToText(...args)}</${key}>`;
      return _hey(string);
    },
  });
});

export const hey = _hey as unknown as Hey;
