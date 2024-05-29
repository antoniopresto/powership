// @only-server
import fs from 'fs';

export const ansi_reset = '\x1b[0m';

export const ansi_styles = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  bold: '\x1b[1m',
  underline: '\x1b[4m',
};

export function ansi(text: string, style: keyof typeof ansi_styles) {
  return `${ansi_styles[style]}${text
    .split('')
    .filter((el) => (el === ansi_reset ? '' : el))
    .join('')}${ansi_reset}`;
}

export const red = (text: string) => ansi(text, 'red');
export const green = (text: string) => ansi(text, 'green');
export const yellow = (text: string) => ansi(text, 'yellow');
export const blue = (text: string) => ansi(text, 'blue');
export const bold = (text: string) => ansi(text, 'bold');
export const underline = (text: string) => ansi(text, 'underline');

export function until<T, I extends string | number>(
  iterable: I,
  run: (current: I) => [T, I]
) {
  let [value, next] = run(iterable);
  while (next) {
    const [a, b] = run(next);
  }
}

export function tabs(
  text: { toString(): string },
  prefix: string | number = '  '
) {
  if (typeof prefix === 'number' && prefix > 0) {
    let pre = '';
    do {
      pre += ' ';
    } while (--prefix > 0);
    prefix = pre;
  }

  return text
    .toString()
    .split('\n')
    .map((line) => (line === '\n' || line.trim() ? `${prefix}${line}` : line))
    .join('\n');
}

export function stdoutSync(input: { toString(): string }) {
  // @only-browser
  console.log(input.toString());
  // @only-server
  fs.writeSync(process.stdout.fd, input.toString());
}

export function stderrSync(input: { toString(): string }) {
  // @only-browser
  console.error(input.toString());
  // @only-server
  fs.writeSync(process.stderr.fd, input.toString());
}
