import { getTypeName } from './getTypeName';

export const TEMPLATE_DELIMITERS = [
  ' ',
  '.',
  ',',
  ';',
  '!',
  '?',
  '"',
  '$',
  '\n',
  '\r',
  '\t',
] as const;

export type TemplateDelimiter = (typeof TEMPLATE_DELIMITERS)[number];

export function isTemplateDelimiter(input: any): input is TemplateDelimiter {
  return TEMPLATE_DELIMITERS.includes(input);
}

/**
 * Helper type that checks if a character is a delimiter (space or punctuation)
 * @internal
 */
export type IsDelimiter<T extends string> = T extends unknown
  ? T extends TemplateDelimiter
    ? true
    : false
  : false;

/**
 * Extracts a word until it finds a delimiter
 * Accumulates characters in a Word parameter to build the complete word
 *
 * @param S - The input string to process
 * @param Word - Accumulator for building the word (internal use)
 * @returns The extracted word as a string
 * @internal
 */
export type ExtractUntilDelimiter<
  S extends string,
  Word extends string = ''
> = S extends unknown
  ? Word extends unknown
    ? S extends `${infer First}${infer Rest}`
      ? [IsDelimiter<First>] extends [true]
        ? Word
        : ExtractUntilDelimiter<Rest, `${Word}${First}`>
      : `${Word}${S}`
    : never
  : never;

/**
 * Extracts all patterns starting with $ from a string
 * Returns an array of words that follow the $ symbol
 *
 * @example
 * ```typescript
 * type Result = TemplateParams<"Hello $world"> // ["world"]
 * ```
 *
 * @param S - The input string to process
 * @param Acc - Array accumulator for results (internal use)
 * @returns Array of extracted words
 */
export type TemplateParams<
  S extends string,
  Acc extends string[] = []
> = S extends `${infer Pre}$${'$'}${infer Rest}`
  ? TemplateParams<Rest, TemplateParams<Pre, Acc>>
  : S extends `${string}$${infer Rest}`
  ? Rest extends `${infer Word}$${infer Remaining}`
    ? TemplateParams<`$${Remaining}`, [...Acc, ExtractUntilDelimiter<Word>]>
    : TemplateParams<Rest, [...Acc, ExtractUntilDelimiter<Rest>]>
  : Acc extends []
  ? []
  : Acc;

export type Literal = string | number;

export type TemplateRecord<Wording extends string> = Wording extends unknown
  ? {
      [K in TemplateParams<Wording>[number]]: Literal;
    } & {}
  : never;

export let TEMPLATE_SPECIAL_REPLACEMENT = '⟩Ǽểǯ➔ℏ≧§‰';

export class Template<Wording extends string> {
  readonly template: Wording;
  readonly params: TemplateParams<Wording>;
  readonly translate: (params: TemplateRecord<Wording>) => string;

  constructor(template: Wording) {
    this.template = template;
    this.params = this.extractParams(template);
    this.translate = this.createTranslateFunction(template, this.params);
  }

  private isEscaped(template: string, position: number): boolean {
    let count = 0;
    let pos = position - 1;

    while (pos >= 0 && template[pos] === '$') {
      count++;
      pos--;
    }

    return count % 2 === 1;
  }

  private extractParams(template: string): TemplateParams<Wording> {
    template = template.replace(/\$\$/g, ' ');

    const params: string[] = [];
    let currentParam = '';
    let isCollecting = false;

    for (let i = 0; i < template.length; i++) {
      const char = template[i];

      if (this.isEscaped(template, i)) {
        if (isCollecting) {
          currentParam += char;
        }
        continue;
      }

      if (char === '$') {
        if (isCollecting && currentParam) {
          params.push(currentParam);
        }
        currentParam = '';
        isCollecting = true;
        continue;
      }

      if (isCollecting) {
        if (isTemplateDelimiter(char)) {
          if (currentParam) {
            params.push(currentParam);
          }
          currentParam = '';
          isCollecting = false;
        } else {
          currentParam += char;
        }
      }
    }

    if (isCollecting && currentParam) {
      params.push(currentParam);
    }

    return params as TemplateParams<Wording>;
  }

  private createTranslateFunction(
    template: string,
    params: string[]
  ): (params: TemplateRecord<Wording>) => string {
    template = template.replace(/\$\$/g, TEMPLATE_SPECIAL_REPLACEMENT);
    return (inputParams: TemplateRecord<Wording>): string => {
      const response = (() => {
        let result = '';
        let i = 0;

        while (i < template.length) {
          if (this.isEscaped(template, i)) {
            if (template[i] === '$') {
              result += '$';
            } else {
              result += template[i];
            }
            i++;
            continue;
          }

          if (template[i] === '$' && i + 1 < template.length) {
            let found = false;
            for (const param of params) {
              if (template.startsWith(param, i + 1)) {
                const value = inputParams[param];
                if (!isLiteral(value)) {
                  throw new Error(`Missing required parameter: ${param}`);
                }
                result += String(value);
                i += param.length;
                found = true;
                break;
              }
            }
            if (!found) {
              result += '$';
            }
          } else {
            result += template[i];
          }
          i++;
        }

        return result;
      })();
      return response.replaceAll(TEMPLATE_SPECIAL_REPLACEMENT, '$');
    };
  }
}

export function createTemplate<T extends string>(template: T): Template<T> {
  return new Template(template);
}

const valid = ['String', 'Number'];
function isLiteral(t: any): t is string | number {
  return valid.includes(getTypeName(t));
}
