import { CustomFieldConfig } from '../CustomFieldConfig';

import {
  GraphTypeInTypeFieldDefinition,
  GraphTypeLikeFieldDefinition,
} from './Infer';
import {
  ObjectInTypeFieldDefinition,
  ObjectTypeLikeFieldDefinition,
} from './Infer';
import {
  CommonFieldDefinitionProps,
  FieldDefinitions,
  FieldDefinitionWithType,
  FieldTypeName,
} from './_fieldDefinitions';

export * from './Infer/InferField';

export type ObjectFieldInput = _ObjectFieldInputBase | FlattenFieldDefinition;

export type _ObjectFieldInputBase =
  | GraphTypeLikeFieldDefinition
  | ObjectTypeLikeFieldDefinition
  | ObjectInTypeFieldDefinition
  | GraphTypeInTypeFieldDefinition
  | FinalFieldDefinition
  | FieldAsString;

export type FieldInput = ObjectFieldInput;
export type FieldDefinition = ObjectFieldInput;

export type ObjectDefinitionInput = {
  [K: string]: ObjectFieldInput;
} & {
  $?: CustomFieldConfig;
};

export type Shape = ObjectDefinitionInput;

export type FinalObjectDefinition = { [K: string]: FinalFieldDefinition };

export type AllFinalFieldDefinitions = {
  [Type in FieldTypeName]: {
    def: FieldDefinitions[Type];
    defaultValue?: any;
    description?: string | undefined;
    hidden?: boolean;
    list?: boolean;
    name?: string;
    optional?: boolean;
    type: Type;
  };
};

export type FinalFieldDefinitionStrict =
  AllFinalFieldDefinitions[keyof AllFinalFieldDefinitions];

export type FinalFieldDefinition = {
  // less restrictive type, avoid over processing
  [K in FieldTypeName]: FieldDefinitionWithType<K>;
}[FieldTypeName];

export type FlattenFieldDefinition = {
  [type in FieldTypeName]: {
    [K in type]: [FieldDefinitions[K]] extends [undefined]
      ? FieldDefinitions[K] | {}
      : FieldDefinitions[K];
  };
}[FieldTypeName] &
  CommonFieldDefinitionProps;

export type FieldAsString =
  | FieldTypeName
  | `${FieldTypeName}?`
  | `[${FieldTypeName}]`
  | `[${FieldTypeName}]?`;

export type _ShortenFinalFieldDefinitionFieldAsString<T extends FieldTypeName> =
  T | `${T}?` | `[${T}]` | `[${T}]?`;

export type ShortenFinalFieldDefinition = {
  [Type in FieldTypeName]: {
    [K in _ShortenFinalFieldDefinitionFieldAsString<Type>]:
      | K
      | { [L in K]: FieldDefinitions[Type] | {} };
  }[_ShortenFinalFieldDefinitionFieldAsString<Type>];
}[FieldTypeName];
