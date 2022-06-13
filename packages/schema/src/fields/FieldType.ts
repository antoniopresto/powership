import { getTypeName } from '@darch/utils/lib/getTypeName';

import {
  FieldTypeParser,
  parseValidationError,
  ValidationCustomMessage,
} from '../applyValidator';

import type { FieldTypeName } from './_fieldDefinitions';
export * from '../applyValidator';

export type TAnyFieldType = FieldType<any, FieldTypeName, any>;

export abstract class FieldType<Type, TypeName extends string, Def> {
  readonly typeName: TypeName;
  type: TypeName;
  readonly __fieldTypeClassInfer!: Type;
  readonly def: Def;

  id?: string;

  protected constructor(typeName: TypeName, def: Def, id?: string) {
    this.id = id;
    this.typeName = typeName;
    this.type = typeName;

    const defKeys = def ? Object.keys(def) : undefined;

    if (defKeys?.length) {
      this.def = def;
    }
  }

  validate(input: any): input is Type {
    try {
      this.parse(input);
      return true;
    } catch (e: any) {
      return false;
    }
  }

  optional = false;
  list = false;
  description?: string;

  describe = (description: string): this => {
    this.description = description;
    return this;
  };

  toOptional(): this & { optional: true } {
    this.optional = true;
    return this as any;
  }

  toList(): this & { list: true } {
    this.list = true;
    return this as any;
  }

  applyParser = <Type>(parser: {
    preParse?(input: any): Type;
    parse(input: any): Type;
  }): FieldTypeParser<Type> => {
    return (input: any, customMessage?: ValidationCustomMessage) => {
      if (parser.preParse) {
        input = parser.preParse(input);
      }

      if (input === undefined && !this.optional) {
        throw new Error(`Required field`);
      }

      if (this.list) {
        if (!Array.isArray(input)) {
          throw new Error(`expected Array, found ${getTypeName(input)}`);
        }
        const values: any = [];
        input.forEach(function (item, key) {
          try {
            const parsed = parser.parse(item);
            values.push(parsed);
          } catch (originalError: any) {
            const error = parseValidationError(
              item,
              customMessage,
              originalError
            );
            error.message = `${error.message} at position ${key}`;
            throw error;
          }
        });
        return values;
      }

      try {
        return parser.parse(input);
      } catch (originalError: any) {
        throw parseValidationError(input, customMessage, originalError);
      }
    };
  };

  toObjectFieldType = () => {
    return {
      type: this.type,
      def: this.def,
      list: this.list,
      optional: this.optional,
      description: this.description,
    };
  };

  abstract parse: FieldTypeParser<Type>;

  readonly __isFieldType = true;

  static create(..._args: any[]): TAnyFieldType {
    throw new Error('not implemented in abstract class.');
  }
}

export function isFieldInstance(t: any): t is TAnyFieldType {
  return t?.__isFieldType === true;
}
