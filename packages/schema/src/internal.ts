// @only-server
import { _formatWithPrettier, parsePhoneNumber } from '@powership/utils';
// @only-server
import { graphql, GraphQLSchema, printSchema } from 'graphql';

// @only-server
export * from './Resolver';
// @only-server
export * from './GraphType/GraphQLParser';
// @only-server
export * from './writeTypes';
// @only-server
export async function formatWithPrettier(
  ...args: Parameters<typeof import('@powership/utils')['_formatWithPrettier']>
) {
  // too big
  return import('@powership/utils').then(({ _formatWithPrettier }): any => {
    return _formatWithPrettier(...args);
  });
}
// @only-server
export type { ObjectToTypescriptOptions } from './objectToTypescript';

// @only-server
export async function objectToTypescript(
  ...args: Parameters<
    typeof import('./objectToTypescript')['objectToTypescript']
  >
) {
  // too big
  return import('./objectToTypescript').then(({ objectToTypescript }): any => {
    return objectToTypescript(...args);
  });
}
// @only-server
export { parsePhoneNumber as parsePhoneNumberServerSide };
// @only-server
export { GraphQLSchema, printSchema, graphql };

export * from './implementObject';
export * from './ObjectType';
export * from './fieldInstanceFromDef';
export * from './GraphType/GraphType';
export * from './fields/MetaFieldField';
export * from './mockObject';
export * from './parseObjectDefinition';
export * from './fields/_parseFields';
export * from './objectInferenceUtils';
export * from './extendObjectDefinition';
export * from './getObjectHelpers';
export * from './applyValidator';
export * from './getObjectErrors';
export * from './fields/_fieldDefinitions';
export * from './fields/FieldType';
export * from './fields/Infer';
export * from './fields/IObjectLike';
export * from './isHiddenFieldName';
export * from './parseTypeName';
export * from './fields/ArrayFieldParse';
export * from './fields/FieldTypeErrors';
export * from './GraphType/initGraphType';
export * from './extendType';
export * from './TObjectConfig';
export * from './fields/fieldTypes';
export * from './CustomFieldConfig';
export type { Infer } from './Infer';
