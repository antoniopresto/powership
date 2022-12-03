import { getTypeName } from '@backland/utils';
import { inspectObject } from '@backland/utils';
import { uniq } from '@backland/utils';

import { CircularDeps } from '../CircularDeps';
import { Infer } from '../Infer';
import type { FieldDefinitionConfig } from '../TObjectConfig';

import { FieldType, FieldTypeParser, TAnyFieldType } from './FieldType';

export class UnionField<
  U extends FieldDefinitionConfig,
  T extends Readonly<[U, ...U[]]>
> extends FieldType<Infer<T[number]>, 'union', T> {
  //
  parse: FieldTypeParser<Infer<T[number]>>;

  utils = {
    fieldTypes: [] as TAnyFieldType[],
  };

  static is(item: any): item is UnionField<any, any> {
    return item?.typeName === 'union' && Array.isArray(item?.utils?.fieldTypes);
  }

  constructor(def: T) {
    super({ def: def, name: 'union' });

    const { parseObjectField } = CircularDeps;

    this.utils.fieldTypes = def.map((el, index) => {
      try {
        return parseObjectField(`UnionItem_${index}`, el, true);
      } catch (e: any) {
        let message = `Filed to parse type:`;
        message += `\n${inspectObject(el, { tabSize: 2 })}`;

        e.stack = message + '\n' + e.stack;
        throw e;
      }
    });

    const hasOptional = this.utils.fieldTypes.some((el) => el.optional);

    if (hasOptional) {
      this.toOptional()
    }

    this.parse = this.applyParser({
      parse: (input: any) => {
        if (input === undefined && this.optional) return input;

        const messages: string[] = [];
        const objectErrors: any[] = [];

        for (let parser of this.utils.fieldTypes) {
          try {
            return parser.parse(input);
          } catch (e: any) {
            messages.push(`As ${parser.typeName} throws: ${e.message}`);

            if (
              parser.typeName === 'object' &&
              getTypeName(input) === 'Object'
            ) {
              objectErrors.push(e);
            }
          }
        }

        if (objectErrors.length) {
          throw objectErrors[0];
        }

        const expected = uniq(
          this.utils.fieldTypes.map((el) => el.typeName)
        ).join(' or ');

        let errorMessage = `Expected value to match one of the following types: ${expected}.`;

        messages.forEach((err) => (errorMessage += `\n- ${err}`));
        throw new Error(errorMessage);
      },
    });
  }

  static create = <
    U extends FieldDefinitionConfig,
    T extends Readonly<[U, ...U[]]>
  >(
    def: T
  ): UnionField<U, T> => {
    return new UnionField(def) as any;
  };
}
