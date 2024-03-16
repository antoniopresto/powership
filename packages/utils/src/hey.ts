// @only-server
import fs from 'fs';

import { isPlainObject } from './isObject';
import { tryCatch } from './tryCatch';

function _hey(strings: TemplateStringsArray | string, ...values: any[]) {
  const formatted = heyFormat(strings, ...values) + '\n';
  writeToStdoutSync(formatted);
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

function heyFormat(
  input: string | TemplateStringsArray | string[],
  ...values: any[]
) {
  let text = (() => {
    if (typeof input === 'string') {
      input = [input];
    }

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

export function writeToStdoutSync(input: string) {
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

const IdentPrefixes = {
  ol: (text: string, index: number) => {
    return index > -1 ? `${index}) ${text}` : text;
  },
  arrow: (text: string, _index: number) => `➜ ${text}`,
  dot: (text: string, _index: number) => `• ${text}`,
  ul: (text: string, _index: number) => `• ${text}`,
  li: (text: string, _index: number) => `• ${text}`,
};

export type IdentStyle = keyof typeof IdentPrefixes;
export type IdentOptions = {
  index?: number;
  level?: number;
  parent?: Ident | null;
  style?: IdentStyle;
  text?: string;
  tabSize?: number;
  children?: Ident[];
};

export class Ident {
  state: IdentState;
  children = new Map<number, IdentState>();

  get head(): Ident {
    return this.state.parent?.head || this;
  }

  constructor(text?: string, options?: IdentOptions);
  constructor(options?: IdentOptions);
  constructor(...args: any) {
    this.state = new IdentState(...args);
  }

  toString = () => {
    return Ident.printElement(this.head);
  };

  get list() {
    return [...this.children];
  }
  get chain() {
    const list = this.list;
    return list.map.bind(list);
  }

  /**
   * @internal
   * @param root
   */
  static printElement = (root: Ident): string => {
    const children = root.state.children.map((item) => {
      const prefix = item.prefix;
      const txt = Ident.printElement(item);
      return prefix + txt;
    });

    return root.state.text + children.join('');
  };

  li = (text: string, style: IdentStyle = 'li') => {
    this.push(text, 1, style);
    return this;
  };

  ul = (text: string, style: IdentStyle = 'ul') => {
    return this.push(text, 2, style);
  };

  private push = (
    text: string,
    distanceFromParent: number,
    style: IdentStyle = 'arrow'
  ) => {
    const nextLevel = Math.max(distanceFromParent, 0) + this.state.level;

    const index = this.head.state.children.length;

    const child = new Ident(text, {
      level: nextLevel,
      style: style,
      text,
      tabSize: this.state.tabSize,
      children: [],
      parent: this,
      index,
    });

    this.state.children.push(child);

    return child;
  };

  back = (times = 1): Ident => {
    let current: Ident = this;

    while (times > 0) {
      --times;
      if (!current?.state.parent) {
        return this.head;
      }
      current = current.state.parent;
    }

    return current.state.parent || this.head;
  };

  private get prefix() {
    const tab_size = Math.max(this.head.state.tabSize, 2);
    const level = this.state.parent?.state.level || 1;
    const times = level * tab_size;

    let txt = this.state.parent ? '\n ' : ' ';
    txt += `-`.repeat(times);
    txt += '> ';
    return txt;
  }

  static DEFAULT_STYLE: IdentStyle = 'arrow';
  static DEFAULT_TAB_SIZE = 2;
}

export class IdentState {
  index: number;
  level: number;
  parent: Ident | null;
  style: IdentStyle;
  text: string;
  tabSize: number;
  children: Ident[];

  constructor(
    ...input:
      | [string | undefined, Partial<IdentOptions> | undefined]
      | [Partial<IdentOptions> | undefined]
  ) {
    let {
      level = 0,
      index = 0,
      parent = null,
      style = Ident.DEFAULT_STYLE,
      tabSize = Ident.DEFAULT_TAB_SIZE,
      text = '',
      children = [],
    } = (input.find((el) => isPlainObject(el)) || {}) as IdentOptions;

    if (typeof input[0] === 'string') {
      text = input[0];
    }

    this.text = text ?? `${text}`;
    this.index = index;
    this.parent = parent;
    this.style = style;
    this.level = level;
    this.children = children;
    this.tabSize = tabSize;
  }

  toString = () => {
    return this.print(new Map<number, string>());
  };

  private print(touched: Map<number, string>) {
    if (touched.has(this.index)) return touched.get(this.index)!;

    const {
      //
      parent,
      index,
      level,
      style,
      children,
      tabSize,
      text,
    } = this;

    let txt = [
      ['index', index],
      ['level', level],
      ['style', style],
      ['tabSize', tabSize],
      ['text', text],
      ['children', children.map((el) => el.state.index)],
      ['parent', parent?.state.index],
    ]
      .map(([key, value]) => `    "${key}": ${JSON.stringify(value)}`)
      .join(',\n');

    return touched.set(index, `{\n${txt}\n}`).get(index)!;
  }
}
