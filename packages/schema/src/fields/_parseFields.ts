import {
  GraphTypeInTypeFieldDefinition,
  GraphTypeLikeFieldDefinition,
} from './Infer';
import {
  ObjectInTypeFieldDefinition,
  ObjectTypeLikeFieldDefinition,
} from './Infer';
import {
  CommonFieldDefinition,
  CommonFieldOptions,
  FieldDefinitions,
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

export interface ObjectDefinitionInput {
  [K: string]: ObjectFieldInput;
}

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
  [K in FieldTypeName]: CommonFieldDefinition<K>;
}[FieldTypeName];

export type FlattenFieldDefinition = {
  [type in FieldTypeName]: {
    [K in type]: [FieldDefinitions[K]] extends [undefined]
      ? FieldDefinitions[K] | {}
      : FieldDefinitions[K];
  };
}[FieldTypeName] &
  CommonFieldOptions;

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
