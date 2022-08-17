import { getTypeName } from '@darch/utils/lib/getTypeName';

import {
  FieldTypeParser,
  parseValidationError,
  ValidationCustomMessage,
  FieldParserOptions,
} from '../applyValidator';

import { FieldDefinitions, FieldTypeName } from './_fieldDefinitions';
import { AllFinalFieldDefinitions, FinalFieldDefinition } from './_parseFields';
export * from '../applyValidator';

export abstract class FieldType<
  Type,
  TypeName extends FieldTypeName,
  Def extends FieldDefinitions[TypeName]
> {
  readonly typeName: TypeName;
  type: TypeName;
  readonly __fieldTypeClassInfer!: Type;
  readonly def: Def;

  get definition() {
    return this.asFinalFieldDef;
  }

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

  is(input: any): input is Type {
    return this.validate(input);
  }

  optional = false;
  list = false;
  description?: string;
  defaultValue?: any;

  describe = (description: string): this => {
    this.description = description;
    return this as any;
  };

  toOptional(): this & { optional: true } {
    this.optional = true;
    return this as any;
  }

  toList(): this & { list: true } {
    this.list = true;
    return this as any;
  }

  setDefaultValue<T>(value: T): this & { defaultValue: T } {
    this.defaultValue = value;
    return this as any;
  }

  applyParser = <Type>(parser: {
    preParse?(input: any): Type;
    parse(input: any): Type;
  }): FieldTypeParser<Type> => {
    const self = this;
    return (
      input: any,
      _options?: ValidationCustomMessage | FieldParserOptions
    ) => {
      let options: FieldParserOptions = {};

      if (typeof _options === 'function') {
        options = { customErrorMessage: _options };
      }
      if (typeof _options === 'string') {
        options = { customErrorMessage: _options };
      }
      if (typeof _options === 'object') {
        options = _options;
      }

      const { customErrorMessage: customMessage, listExcludeInvalid } = options;

      if (parser.preParse) {
        input = parser.preParse(input);
      }

      if (
        (input === undefined || input === null) &&
        this.defaultValue !== undefined
      ) {
        input = this.defaultValue;
      }

      if (this.type === 'null' && input === undefined) {
        return null;
      }

      if (this.type !== 'null' && input === null && this.optional) {
        return undefined;
      }

      if (input === undefined && this.optional) {
        return undefined;
      }

      if (input === undefined && !this.optional) {
        throw new Error(`required field`);
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
            if (listExcludeInvalid) {
              return;
            }

            const error = parseValidationError(
              item,
              customMessage,
              originalError,
              self.asFinalFieldDef
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
        throw parseValidationError(
          input,
          customMessage,
          originalError,
          self.definition
        );
      }
    };
  };

  get asFinalFieldDef(): AllFinalFieldDefinitions[TypeName] {
    const res: FinalFieldDefinition = {
      type: this.type,
      def: this.def,
      list: this.list,
      optional: this.optional,
      description: this.description,
      defaultValue: this.defaultValue,
    };

    return res as any;
  }

  abstract parse: FieldTypeParser<Type>;

  readonly __isFieldType = true;

  static create(..._args: any[]): TAnyFieldType {
    throw new Error('not implemented in abstract class.');
  }
}

export function isFieldInstance(t: any): t is TAnyFieldType {
  return t?.__isFieldType === true;
}

export type AllFieldTypes = {
  [K in keyof FieldDefinitions]: FieldType<any, K, FieldDefinitions[K]>;
};

export type TAnyFieldType = AllFieldTypes[keyof AllFieldTypes];
