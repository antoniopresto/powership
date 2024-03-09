import * as process from 'process';

export async function hey(
  strings: TemplateStringsArray | string,
  ...values: any[]
) {
  const formatted = heyFormat(strings, ...values) + '\n';
  await safeWrite(formatted);
  return formatted;
}

hey.styles = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  bold: '\x1b[1m',
  underline: '\x1b[4m',
  strike: '\x1b[9m', // ANSI escape code for strikethrough
  reset: '\x1b[0m',
};

export function heyFormat(
  input: string | TemplateStringsArray,
  ...values: any[]
) {
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
    `<(${Object.keys(hey.styles).join('|')})>(.*?)<\\/\\1>`,
    'g'
  );

  text = text.replace(regex, (_, style, el) => {
    return `${hey.styles[style]}${heyFormat(el)}${hey.styles.reset}`;
  });

  return trimTemplateString(text);
}

async function safeWrite(input: string) {
  if (
    typeof process === 'undefined' ||
    typeof process?.stdout?.write !== 'function'
  ) {
    return console.info(input);
  }

  if (!process.stdout.writableEnded) {
    return new Promise((resolve, reject) => {
      process.stdout.write(input, (err) => {
        if (err) return reject(err);
        resolve(input);
      });
    });
  }
}

export function trimTemplateString(
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
  let result = input[0];
  values.forEach((value, i) => {
    result += value + input[i + 1];
  });
  return result;
}
