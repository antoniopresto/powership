import { getTypeName, memoize } from '@powership/utils';
import { inspectObject } from '@powership/utils';
import { uniq } from '@powership/utils';

import { Infer } from '../Infer';
import type { FieldDefinitionConfig } from '../TObjectConfig';
import { } from '../internal';

import { FieldType, TAnyFieldType } from './FieldType';

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

    const getFieldTypes = memoize(() => {
      return def.map((el, index) => {
        try {
          return parseObjectField(`UnionItem_${index}`, el, {
            returnInstance: true,
          });
        } catch (e: any) {
          let message = `Filed to parse type:`;
          message += `\n${inspectObject(el, { tabSize: 2 })}`;

          e.stack = message + '\n' + e.stack;
          throw e;
        }
      });
    });

    Object.defineProperty(this.utils, 'fieldTypes', {
      get() {
        return getFieldTypes();
      },
    });

    let optional: boolean | null = null;

    Object.defineProperty(this, 'optional', {
      get() {
        if (optional !== null) return optional;
        return (optional = getFieldTypes().some((el) => el.optional));
      },
      set(value) {
        optional = value;
      },
    });

    this.parse = this.applyParser({
      parse: (input: any) => {
        if (input === undefined && this.optional) return input;

        const messages: string[] = [];
        const objectErrors: any[] = [];

        for (let parser of getFieldTypes()) {
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
