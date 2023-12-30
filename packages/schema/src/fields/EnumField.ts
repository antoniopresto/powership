import type { FieldTypeParser } from '../applyValidator';

import { FieldType } from './FieldType';

export class EnumField<
  U extends string,
  T extends Readonly<[U, ...U[]]>
> extends FieldType<T[number], 'enum', T> {
  //
  parse: FieldTypeParser<T[number]>;

  get value(): T {
    return this.def;
  }

  constructor(def: T) {
    super({ def: def, name: 'enum' });

    this.parse = this.applyParser({
      parse: (input: any) => {
        if (!this.def.includes(input)) {
          throw new Error(
            `accepted: ${this.def
              .map((e) => `'${e}'`)
              .join(' or ')}, found ${input}.`
          );
        }

        return input;
      },
    });
  }

  static create = <U extends string, T extends Readonly<[U, ...U[]]>>(
    def: T
  ): FieldType<T[number], 'enum', T> => {
    return new EnumField(def);
  };
}
