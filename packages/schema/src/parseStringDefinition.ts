import { memoize } from '@powership/utils';

import { FieldTypeName } from './fields/_fieldDefinitions';
import { FinalFieldDefinition } from './fields/_parseFields';
import { isFieldTypeName } from './fields/fieldTypes';

function _parseStringDefinition<T extends AnyStringFieldDefinition>(
  typeName: T
): FinalFieldDefinition {
  const t = typeNameFromTemplate(typeName);
  const isOptional = isOptionalTemplate(typeName);
  const isList = isListTemplate(typeName);

  const obj: FinalFieldDefinition = {
    type: t,
  };

  if (isList) {
    obj.list = true;
  }

  if (isOptional) {
    obj.optional = true;
  }

  return obj;
}

function _isOptionalTemplate<T extends string>(
  type: T
): T extends `${string}?` ? true : false {
  return !!type.match(/\?$/) as any;
}

function _isListTemplate<T extends string>(
  type: T
): T extends `[${string}]` | `[${string}]?` ? true : false {
  return !!type.match(/]\??$/) as any;
}

function _typeNameFromTemplate<T extends FieldTypeName>(
  enhanced: AnyStringFieldDefinition
): T {
  return enhanced.replace(/[\[\]?, ]/g, '') as any;
}

function _isStringFieldDefinition(t: any): t is AnyStringFieldDefinition {
  if (typeof t !== 'string') return false;
  const field = typeNameFromTemplate(t as any);
  return isFieldTypeName(field);
}

export const parseStringDefinition = memoize(_parseStringDefinition);
export const typeNameFromTemplate = memoize(_typeNameFromTemplate);
export const isStringFieldDefinition = memoize(_isStringFieldDefinition);
export const isListTemplate = memoize(_isListTemplate);
export const isOptionalTemplate = memoize(_isOptionalTemplate);

export type AnyStringFieldDefinition =
  | FieldTypeName
  | `${FieldTypeName}?`
  | `[${FieldTypeName}]`
  | `[${FieldTypeName}]?`;

export type ExtractStringFieldDefType<T extends AnyStringFieldDefinition> =
  //
  T extends FieldTypeName
    ? T
    : T extends `[${infer U}]?`
    ? U
    : T extends `${infer U}?`
    ? U
    : T extends `[${infer U}]`
    ? U
    : never;

export type ParseStringDefinition<S> =
  //
  S extends FieldTypeName
    ? {
        def: undefined;
        description?: string;
        list: false;
        optional: false;
        type: S;
      }
    : //
    //
    S extends `${FieldTypeName}?`
    ? //
      {
        def: undefined;
        description?: string;
        list: false;
        optional: true;
        type: ExtractStringFieldDefType<S>;
      }
    : //
    S extends `[${FieldTypeName}]`
    ? //
      {
        def: undefined;
        description?: string;
        list: true;
        optional: false;
        type: ExtractStringFieldDefType<S>;
      }
    : //
    S extends `[${FieldTypeName}]?`
    ? //
      {
        def: undefined;
        description?: string;
        list: true;
        optional: true;
        type: ExtractStringFieldDefType<S>;
      }
    : never;
