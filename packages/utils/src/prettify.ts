import { format, Options } from 'prettier';

export type PrettifyOptions = Options & {
  code: string;
};

export function prettify(args: PrettifyOptions): string {
  const { code, ...rest } = args;
  return format(code, rest);
}
