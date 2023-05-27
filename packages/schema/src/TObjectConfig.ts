import { FieldDefinition, SchemaDefinition } from './fields/_parseFields';

// for back compatibility
export type { SchemaDefinition };

/**
 * @deprecated use ObjectDefinitionInput
 */
export type SolarwindObjectDefinition = SchemaDefinition;

/**
 * @deprecated use ObjectFieldInput
 */
export type FieldDefinitionConfig = FieldDefinition;
