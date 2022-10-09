import {
  FieldParserOptionsObject,
  FieldTypeParser,
  parseValidationError,
  ValidationCustomMessage,
} from '../applyValidator';

import { arrayFieldParse } from './ArrayFieldParse';
import { isFieldError } from './FieldTypeErrors';
import {
  FieldDefinitions,
  FieldTypeName,
  ListDefinitionObject,
  ListDefinitionTruthy,
} from './_fieldDefinitions';
import { AllFinalFieldDefinitions, FinalFieldDefinition } from './_parseFields';
export * from '../applyValidator';

export type FieldTypeOptions = ListDefinitionObject & { [K: string]: unknown };

export type FieldComposer<Schema = Record<string, any>, T = any> = (
  schema: Schema
) => T; // used by alias fieldType and possibly others

export abstract class FieldType<
  Type,
  TypeName extends FieldTypeName,
  Def extends FieldDefinitions[TypeName],
  Options extends FieldTypeOptions = {}
> {
  readonly typeName: TypeName;
  type: TypeName;

  readonly def: Def;

  compose: FieldComposer<Record<string, any>, Type> | undefined;

  get definition() {
    return this.asFinalFieldDef;
  }

  id?: string;
  name?: string;
  options: Options;

  protected constructor(config: {
    def: Def;
    id?: string;
    name: TypeName;
    options?: Options;
  }) {
    const { name, id, def, options = {} } = config;
    this.id = id;
    this.typeName = name;
    this.type = name;
    this.options = options as Options;

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
  hiddenField?: boolean;

  describe = (description: string): this => {
    this.description = description;
    return this as any;
  };

  toOptional(): this & { optional: true } {
    this.optional = true;
    return this as any;
  }

  toList(options?: ListDefinitionTruthy): this & { list: true } {
    this.list = true;
    if (options && typeof options === 'object') {
      this.options = { ...this.options, ...options };
    }
    return this as any;
  }

  setDefaultValue<T>(value: T): this & { defaultValue: T } {
    this.defaultValue = value;
    return this as any;
  }

  applyParser = <Type>(parser: {
    parse(input: any, _options: FieldParserOptionsObject): Type;
    preParse?(input: any): Type;
  }): FieldTypeParser<Type> => {
    return (
      input: any,
      _options?: ValidationCustomMessage | FieldParserOptionsObject
    ) => {
      let options: FieldParserOptionsObject = {};

      if (typeof _options === 'function') {
        options = { customErrorMessage: _options };
      }
      if (typeof _options === 'string') {
        options = { customErrorMessage: _options };
      }
      if (typeof _options === 'object') {
        options = _options;
      }

      const { customErrorMessage: customMessage, includeHidden } = options;

      // keep it secret
      if (this.hiddenField && !includeHidden) return undefined;

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

      if (this.asFinalFieldDef.list) {
        return arrayFieldParse({
          arrayOptions: {}, // since is the shot definition (list:true) there is no options
          input,
          parser: (input) => parser.parse(input, options),
          parserOptions: options,
        });
      }

      try {
        return parser.parse(input, options) as any;
      } catch (originalError: any) {
        if (isFieldError(originalError)) {
          throw originalError;
        }

        throw parseValidationError(input, customMessage, originalError);
      }
    };
  };

  get asFinalFieldDef(): AllFinalFieldDefinitions[TypeName] {
    const res: FinalFieldDefinition = {
      def: this.def,
      defaultValue: this.defaultValue,
      description: this.description,
      hiddenField: this.hiddenField,
      list: this.list,
      optional: this.optional,
      type: this.type,
    };

    Object.entries(res).forEach(([k, v]) => {
      if (v === undefined || v === false) {
        delete res[k];
      }
    });

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
  [K in keyof FieldDefinitions]: FieldType<unknown, K, FieldDefinitions[K]>;
};

export type TAnyFieldType = AllFieldTypes[keyof AllFieldTypes];
