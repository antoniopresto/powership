import { getTypeName } from '@darch/utils/lib/getTypeName';
import { inspectObject } from '@darch/utils/lib/inspectObject';
import { uniq } from '@darch/utils/lib/uniq';

import { FieldType, FieldTypeParser, TAnyFieldType } from '../FieldType';
import { Infer } from '../Infer';
import type { FieldDefinitionConfig } from '../TSchemaConfig';

export class UnionField<
  U extends FieldDefinitionConfig,
  T extends Readonly<[U, ...U[]]>
> extends FieldType<Infer<T[number]>, 'union', T> {
  //
  parse: FieldTypeParser<Infer<T[number]>>;
  fieldTypes: TAnyFieldType[] = [];

  static is(item: any): item is UnionField<any, any> {
    return item?.typeName === 'union' && Array.isArray(item.fieldTypes);
  }

  constructor(def: T) {
    super('union', def);

    const { parseSchemaField } = require('../parseSchemaDefinition');

    this.fieldTypes = def.map((el, index) => {
      try {
        return parseSchemaField(`UnionItem_${index}`, el, true);
      } catch (e: any) {
        let message = `Filed to parse type:`;
        message += `\n${inspectObject(el, { tabSize: 2 })}`;

        e.stack = message + '\n' + e.stack;
        throw e;
      }
    });

    const hasOptional = this.fieldTypes.some((el) => el.optional);

    if (hasOptional) {
      this.optional = true;
    }

    this.parse = this.applyParser({
      parse: (input: any) => {
        if (input === undefined && this.optional) return input;

        const messages: string[] = [];
        const schemaErrors: any[] = [];

        for (let parser of this.fieldTypes) {
          try {
            return parser.parse(input);
          } catch (e: any) {
            messages.push(`As ${parser.typeName} throws: ${e.message}`);

            if (
              parser.typeName === 'schema' &&
              getTypeName(input) === 'Object'
            ) {
              schemaErrors.push(e);
            }
          }
        }

        if (schemaErrors.length) {
          throw schemaErrors[0];
        }

        const expected = uniq(this.fieldTypes.map((el) => el.typeName)).join(
          ' or '
        );

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
  ): FieldType<Infer<T[number]>, 'union', T> => {
    return new UnionField(def);
  };

  graphql = () => ({
    name: 'FIXMEUnionFIXME',
    sdl: 'scalar FIXMEUnionFIXME', // TODO
  });
}
