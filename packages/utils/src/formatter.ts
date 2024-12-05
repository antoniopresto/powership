// @only-server
import kleur from 'kleur';

import { IS_BROWSER } from './isBrowser';

export type FormatterMessageType =
  | 'error'
  | 'warning'
  | 'info'
  | 'success'
  | 'debug';

export interface FormatOptions {
  indent?: number;
  timestamp?: boolean;
  prefix?: string;
}

export interface BoxOptions {
  padding?: number;
  margin?: number;
  borderStyle?: 'single' | 'double' | 'round' | 'bold' | 'none';
}

export const FORMATTER_ICONS = {
  error: '🔴',
  warning: '🟡',
  info: '🔵',
  success: '🟢',
  debug: '●',
};

export interface IFormatter {
  formatMessage(
    message: string,
    type: FormatterMessageType,
    options?: FormatOptions
  ): string;
  formatTable(data: Record<string, any>[]): string;
  formatList(items: string[], bullet?: string): string;
  createBox(text: string, options?: BoxOptions): string;
  getConsoleStyles?(type: FormatterMessageType): string[];
}

export abstract class BaseFormatter implements IFormatter {
  constructor() {}

  protected getTimestamp(): string {
    return new Date().toISOString();
  }

  public formatMessage(
    message: string,
    type: FormatterMessageType,
    options: FormatOptions = {}
  ): string {
    const { indent = 0, timestamp = false, prefix = '' } = options;

    let formattedMessage = message;

    if (prefix) {
      formattedMessage = `${prefix} ${formattedMessage}`;
    }

    if (timestamp) {
      formattedMessage = `[${this.getTimestamp()}] ${formattedMessage}`;
    }

    const icon = this.getIcon(type);

    if (indent > 0) {
      const iconLength = icon?.length;
      const indentation = ' '.repeat(indent);
      const plusIconIndentation = iconLength ? ' '.repeat(iconLength) : '';

      formattedMessage = formattedMessage
        .split('\n')
        .map((line, idx) => {
          if (idx === 0) {
            return indentation + icon + line;
          }
          return indentation + plusIconIndentation + line;
        })
        .join('\n');
    } else {
      formattedMessage = icon + formattedMessage;
    }

    return this.getColor(formattedMessage, type);
  }

  public formatTable(data: Record<string, any>[]): string {
    if (!data.length) return '';

    const keys = Object.keys(data[0]);
    const columnWidths = keys.map((key) =>
      Math.max(key.length, ...data.map((row) => String(row[key]).length))
    );

    const header = keys
      .map((key, i) => key.padEnd(columnWidths[i]))
      .join(' | ');

    const separator = columnWidths
      .map((width) => '-'.repeat(width))
      .join('-+-');

    const rows = data.map((row) =>
      keys.map((key, i) => String(row[key]).padEnd(columnWidths[i])).join(' | ')
    );

    return [header, separator, ...rows].join('\n');
  }

  public formatList(items: string[], bullet: string = '•'): string {
    return items.map((item) => `${bullet} ${item}`).join('\n');
  }

  public abstract createBox(text: string, options?: BoxOptions): string;
  protected abstract getIcon(type: FormatterMessageType): string;
  protected abstract getColor(text: string, type: FormatterMessageType): string;
}

// @only-server
export class _NodeFormatter extends BaseFormatter {
  protected getIcon(type: FormatterMessageType): string {
    return FORMATTER_ICONS[type] + ' ';
  }

  protected getColor(message: string, type: FormatterMessageType): string {
    const colors = {
      error: (text: string) => kleur.red().bold().italic(text),
      warning: (text: string) => kleur.yellow().italic(text),
      info: (text: string) => kleur.blue(text),
      success: (text: string) => kleur.green().bold(text),
      debug: (text: string) => kleur.gray(text),
    };

    return colors[type](message);
  }

  private getBorderChars(style: BoxOptions['borderStyle'] = 'single') {
    const borders = {
      single: {
        topLeft: '┌',
        topRight: '┐',
        bottomLeft: '└',
        bottomRight: '┘',
        horizontal: '─',
        vertical: '│',
      },
      double: {
        topLeft: '╔',
        topRight: '╗',
        bottomLeft: '╚',
        bottomRight: '╝',
        horizontal: '═',
        vertical: '║',
      },
      round: {
        topLeft: '╭',
        topRight: '╮',
        bottomLeft: '╰',
        bottomRight: '╯',
        horizontal: '─',
        vertical: '│',
      },
      bold: {
        topLeft: '┏',
        topRight: '┓',
        bottomLeft: '┗',
        bottomRight: '┛',
        horizontal: '━',
        vertical: '┃',
      },
      none: {
        topLeft: '',
        topRight: '',
        bottomLeft: '',
        bottomRight: '',
        horizontal: '',
        vertical: '',
      },
    };

    return borders[style] || borders.single;
  }

  public createBox(text: string, options: BoxOptions = {}): string {
    const { padding = 1, margin = 0, borderStyle = 'single' } = options;

    const border = this.getBorderChars(borderStyle);

    if (borderStyle === 'none') {
      const paddedText = text
        .split('\n')
        .map((line) => ' '.repeat(padding) + line + ' '.repeat(padding))
        .join('\n');
      return '\n'.repeat(margin) + paddedText + '\n'.repeat(margin);
    }

    const lines = text.split('\n');
    const contentWidth = Math.max(...lines.map((line) => line.length));
    const horizontalPadding = ' '.repeat(padding);

    const horizontalBorder = border.horizontal.repeat(
      contentWidth + padding * 2
    );
    const emptyLine = `${border.vertical}${' '.repeat(
      contentWidth + padding * 2
    )}${border.vertical}`;

    const top = `${border.topLeft}${horizontalBorder}${border.topRight}`;
    const bottom = `${border.bottomLeft}${horizontalBorder}${border.bottomRight}`;

    const paddedContent = lines.map((line) => {
      const spacesRight = ' '.repeat(contentWidth - line.length);
      return `${border.vertical}${horizontalPadding}${line}${spacesRight}${horizontalPadding}${border.vertical}`;
    });

    const box = [
      top,
      ...(padding > 0 ? [emptyLine] : []),
      ...paddedContent,
      ...(padding > 0 ? [emptyLine] : []),
      bottom,
    ];

    const marginVertical = '\n'.repeat(margin);
    const marginHorizontal = ' '.repeat(margin);

    return (
      marginVertical +
      box.map((line) => marginHorizontal + line).join('\n') +
      marginVertical
    );
  }
}

// @only-browser
export class _BrowserFormatter extends BaseFormatter {
  private readonly CSS_COLORS = {
    error: '#ff0000',
    warning: '#ffa500',
    info: '#0000ff',
    success: '#008000',
    debug: '#808080',
  };

  protected getIcon(type: FormatterMessageType): string {
    return FORMATTER_ICONS[type] + ' ';
  }

  protected getColor(text: string, _type: FormatterMessageType): string {
    return `%c${text}`;
  }

  public createBox(text: string, options: BoxOptions = {}): string {
    const padding = options.padding ?? 1;
    const horizontalLine = '─'.repeat(text.length + padding * 2);
    const emptyLine = '│' + ' '.repeat(text.length + padding * 2) + '│';

    return [
      '┌' + horizontalLine + '┐',
      emptyLine,
      '│' + ' '.repeat(padding) + text + ' '.repeat(padding) + '│',
      emptyLine,
      '└' + horizontalLine + '┘',
    ].join('\n');
  }

  public getConsoleStyles(type: FormatterMessageType): string[] {
    return [`color: ${this.CSS_COLORS[type]}`];
  }
}

export class Formatter implements IFormatter {
  private readonly formatter: BaseFormatter;

  constructor() {
    this.formatter = (() => {
      if (IS_BROWSER) {
        // @only-browser
        return new _BrowserFormatter();
      }

      // @only-server
      return new _NodeFormatter();
    })();
  }

  public formatMessage(
    message: string,
    type: FormatterMessageType,
    options?: FormatOptions
  ): string {
    return this.formatter.formatMessage(message, type, options);
  }

  public formatTable(data: Record<string, any>[]): string {
    return this.formatter.formatTable(data);
  }

  public formatList(items: string[], bullet?: string): string {
    return this.formatter.formatList(items, bullet);
  }

  public createBox(text: string, options?: BoxOptions): string {
    return this.formatter.createBox(text, options);
  }

  public getConsoleStyles(type: FormatterMessageType): string[] {
    if (this.formatter instanceof _BrowserFormatter) {
      return this.formatter.getConsoleStyles(type);
    }
    return [];
  }
}

export const formatter = new Formatter();
