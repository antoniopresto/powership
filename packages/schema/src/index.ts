import './__globals__';
import {
  __getCachedFieldInstance,
  CACHED_FIELD_INSTANCE_KEY,
  isObjectAsTypeDefinition,
  parseField,
  parseFieldDefinitionConfig,
  parseFlattenFieldDefinition,
  parseObjectDefinition,
  parseObjectField,
} from './parseObjectDefinition';
import { createType, getType, GraphType } from './GraphType/GraphType';
import {
  createObjectType,
  ObjectType,
  PowershipObject,
  resetTypesCache,
} from './ObjectType';

import type {
  GraphTypeArgs,
  LazyParseGraphTypePayload,
} from './GraphType/GraphType';

import type { ObjectTypeFromInput } from './ObjectType';
import type { ParseFieldOptions } from './parseObjectDefinition';

export * from './Infer';

export * from './fields/Infer';
export * from './Durable/IDurable';
export * from './CustomFieldConfig';
export * from './assertType';

export * from './fields/IObjectLike';
export * from './applyValidator';
export * from './mockObject';
export * from './fields/FieldType';
export * from './fields/fieldTypes';
export * from './fields/FieldTypeErrors';
export * from './extendObjectDefinition';
export * from './extendType';
export * from './isHiddenFieldName';
export * from './createSimpleRouter';

export * from './fields/_parseFields';

// @only-server
export * from './Resolver';

// @only-server
export * from './createGraphQLSchema';

import type { ResolverKind } from './createGraphQLSchema';

export {
  createObjectType,
  ObjectType,
  PowershipObject,
  resetTypesCache,
  parseObjectDefinition,
  CACHED_FIELD_INSTANCE_KEY,
  __getCachedFieldInstance,
  isObjectAsTypeDefinition,
  parseField,
  parseFieldDefinitionConfig,
  parseFlattenFieldDefinition,
  parseObjectField,
  createType,
  getType,
  GraphType,
};

export type {
  ParseFieldOptions,
  ObjectTypeFromInput,
  GraphTypeArgs,
  LazyParseGraphTypePayload,
  ResolverKind,
};
