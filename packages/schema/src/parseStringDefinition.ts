import './__globals__';

import './isHiddenFieldName';

import { memoize } from '@powership/utils';

import type { FieldTypeName } from './fields/_fieldDefinitions';
import type { FinalFieldDefinition } from './fields/_parseFields';

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
  return powership.isFieldTypeName(field);
}

const parseStringDefinition = memoize(_parseStringDefinition);
const typeNameFromTemplate = memoize(_typeNameFromTemplate);
const isStringFieldDefinition = memoize(_isStringFieldDefinition);
const isListTemplate = memoize(_isListTemplate);
const isOptionalTemplate = memoize(_isOptionalTemplate);

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

Object.assign(powership, {
  parseStringDefinition,
  typeNameFromTemplate,
  isStringFieldDefinition,
  isListTemplate,
  isOptionalTemplate,
});

declare global {
  interface powership {
    parseStringDefinition: typeof parseStringDefinition;
    typeNameFromTemplate: typeof typeNameFromTemplate;
    isStringFieldDefinition: typeof isStringFieldDefinition;
    isListTemplate: typeof isListTemplate;
    isOptionalTemplate: typeof isOptionalTemplate;
  }
}
