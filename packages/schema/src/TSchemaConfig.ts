import { FieldType } from './FieldType';
import { AnyParsedFieldDefinition, ParsedSchemaDefinition } from './TSchemaParser';
import { FieldTypeName, FieldTypes } from './fields/fieldTypes';
import { AnyStringFieldDefinition } from './parseStringDefinition';

export type SchemaDefinitionInput = Record<string, FieldDefinitionConfig>;
export type DarchSchemaDefinition = SchemaDefinitionInput;

export type CommonFieldConfig = { list?: boolean; optional?: boolean; description?: string; type?: never };

export type FieldNameAsSingleKey = (
  | {
      // using Exclude because `Type of property 'schema' circularly references...`
      [FieldNames in Exclude<keyof FieldTypes, 'schema' | 'union'>]: {
        [K in FieldNames]: FieldTypes[K] extends { def: infer Def } ? Def | Readonly<Def> : undefined;
      };
    }[Exclude<keyof FieldTypes, 'schema' | 'union'>]
  | { schema: SchemaDefinitionInput }
  | { union: BaseDefinition[] | Readonly<BaseDefinition[]> }
) &
  CommonFieldConfig;

type BaseDefinition =
  | AnySchema
  | FieldType<any, FieldTypeName, any>
  | AnyStringFieldDefinition
  | readonly [string, ...string[]]
  | readonly [readonly [...FieldDefinitionConfig[]]]
  | AnyParsedFieldDefinition
  | { type: AnySchema; list?: boolean; optional?: boolean; description?: string }
  | { schema: SchemaDefinitionInput; list?: boolean; optional?: boolean; description?: string; type?: never };

export type FieldDefinitionConfig = BaseDefinition | FieldNameAsSingleKey;

export type AnySchema = { definition: ParsedSchemaDefinition<any> };
