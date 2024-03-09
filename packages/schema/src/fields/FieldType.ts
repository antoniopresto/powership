import { inspectObject, simpleObjectClone } from '@powership/utils';

import * as Internal from '../internal';

import type {
  FieldDefinitions,
  FieldTypeName,
  ListDefinitionObject,
  ListDefinitionTruthy,
} from './_fieldDefinitions';
import type {
  AllFinalFieldDefinitions,
  FinalFieldDefinition,
  FinalFieldDefinitionStrict,
} from './_parseFields';

export type FieldTypeOptions = ListDefinitionObject & { [K: string]: unknown };

// used by alias fieldType and possibly others
export type FieldComposer<Schema = Record<string, any>, T = any> = {
  compose: (schema: Schema) => T;
  def: FinalFieldDefinitionStrict;
  validate(input: any, parent: Schema): T;
};

export const FieldsTypeCache = new Map<
  string,
  {
    fieldType: TAnyFieldType;
    defKeys: string[] | undefined;
  }
>();

export abstract class FieldType<
  Type,
  TypeName extends FieldTypeName,
  Def extends FieldDefinitions[TypeName],
  List extends 1 | 0 = 0,
  Optional extends 1 | 0 = 0,
  DefaultValue extends unknown | undefined = undefined,
  Options extends FieldTypeOptions = {},
> {
  readonly typeName: TypeName;
  type: TypeName;

  readonly def: Def;

  [Internal.$inferableKey]: ([List] extends [1] ? Type[] : Type) extends infer R
    ? [Optional] extends [1]
      ? R | undefined
      : R
    : never;

  composer: FieldComposer<Record<string, any>, Type> | undefined;

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

    const defKeys = def ? Object.keys(def).sort() : undefined;

    if (defKeys?.length) {
      this.def = def;
    }

    if (id) {
      const existing = FieldsTypeCache.get(id);

      if (existing) {
        const existingKeys = existing.defKeys?.join(', ');

        if (existing.fieldType.typeName !== this.typeName) {
          throw new Error(
            `Field with id "${id}" already registered with different type:\n "${inspectObject(
              {
                old: existing.fieldType.asFinalFieldDef,
                current: this.asFinalFieldDef,
              },
              { depth: 2 },
            )}"`,
          );
        }

        if (defKeys?.join(', ') !== existingKeys) {
          throw new Error(
            `Field with id "${id}" already registered with different fields:\n "${existingKeys}"`,
          );
        }
      }

      FieldsTypeCache.set(id, { fieldType: this as any, defKeys });
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

  optional: [Optional] extends [1] ? true : false;
  list: [List] extends [1] ? true : false;
  defaultValue: DefaultValue;
  description?: string;
  hidden?: boolean;
  $?: Internal.CustomFieldConfig;

  describe = (description: string): this => {
    this.description = description;
    return this as any;
  };

  describeField = (): {
    def: Def;
    defaultValue: DefaultValue;
    description: string | undefined;
    hidden: boolean;
    list: [List] extends [1] ? true : false;
    optional: [Optional] extends [1] ? true : false;
    type: Type;
    $?: Internal.CustomFieldConfig;
  } => {
    return this.asFinalFieldDef as any;
  };

  toOptional(): FieldType<Type, TypeName, Def, List, 1, DefaultValue, Options> {
    // @ts-ignore
    this.optional = true;
    return this as any;
  }

  toRequired(): FieldType<Type, TypeName, Def, List, 0, DefaultValue, Options> {
    // @ts-ignore
    this.optional = false;
    return this as any;
  }

  toList(
    options?: ListDefinitionTruthy,
  ): FieldType<Type, TypeName, Def, 1, Optional, DefaultValue, Options> {
    // @ts-ignore
    this.list = true;
    if (options && typeof options === 'object') {
      this.options = { ...this.options, ...options };
    }
    return this as any;
  }

  setDefaultValue<T extends any>(
    value: T,
  ): FieldType<Type, TypeName, Def, List, Optional, T, Options> {
    // @ts-ignore
    this.defaultValue = value;
    return this as any;
  }

  applyParser = <Type>(parser: {
    parse(input: any, _options: Internal.FieldParserOptionsObject): Type;
    preParse?(input: any): Type;
  }): Internal.FieldTypeParser<Type> => {
    return (
      input: any,
      _options?:
        | Internal.ValidationCustomMessage
        | Internal.FieldParserOptionsObject,
    ) => {
      let options: Internal.FieldParserOptionsObject = {};

      if (typeof _options === 'function') {
        options = { customErrorMessage: _options };
      }
      if (typeof _options === 'string') {
        options = { customErrorMessage: _options };
      }
      if (typeof _options === 'object') {
        options = _options;
      }

      const { customErrorMessage: customMessage, includeHidden = true } =
        options;

      // keep it secret
      if (this.hidden && !includeHidden) return undefined;

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
        throw new Internal.FieldTypeError('requiredField');
      }

      if (this.asFinalFieldDef.list) {
        return Internal.arrayFieldParse({
          arrayOptions: {}, // since is the shot definition (list:true) there is no options
          input,
          parser: (input) => parser.parse(input, options),
          parserOptions: options,
        });
      }

      try {
        return parser.parse(input, options) as any;
      } catch (originalError: any) {
        if (!customMessage && Internal.isFieldError(originalError)) {
          throw originalError;
        }

        throw Internal.parseValidationError(
          input,
          customMessage,
          originalError,
        );
      }
    };
  };

  get asFinalFieldDef(): AllFinalFieldDefinitions[TypeName] {
    const res: FinalFieldDefinition = {
      def: this.def,
      defaultValue: this.defaultValue,
      description: this.description,
      hidden: this.hidden,
      list: this.list,
      optional: this.optional,
      type: this.type,
      $: this.$,
    };

    Object.entries(res).forEach(([k, v]) => {
      if (v === undefined || v === false) {
        delete res[k];
      }
    });

    return res as any;
  }

  abstract parse: Internal.FieldTypeParser<Type>;

  readonly __isFieldType = true;

  static create(..._args: any[]): TAnyFieldType {
    throw new Error('not implemented in abstract class.');
  }

  clone = (): FieldType<
    Type,
    TypeName,
    Def,
    List,
    Optional,
    DefaultValue,
    Options
  > => {
    const { def, defaultValue, ...rest } = this.asFinalFieldDef;

    let field: FinalFieldDefinition;

    if (rest.type === 'literal') {
      field = {
        ...(simpleObjectClone(rest) as any),
        def,
        defaultValue,
      };
    } else {
      field = simpleObjectClone(rest) as any;

      if (def !== undefined) {
        field.def = simpleObjectClone(def);
      }

      if (defaultValue !== undefined) {
        field.defaultValue = simpleObjectClone(def);
      }
    }

    return Internal.fieldInstanceFromDef(field) as any;
  };
}

export function isFieldInstance(t: any): t is TAnyFieldType {
  return t?.__isFieldType === true;
}

export type AllFieldTypes = {
  [K in keyof FieldDefinitions]: FieldType<
    unknown,
    K,
    FieldDefinitions[K],
    0,
    0
  >;
};

export type TAnyFieldType = AllFieldTypes[keyof AllFieldTypes];
