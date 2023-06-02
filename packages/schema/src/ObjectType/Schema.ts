import { SchemaDefinition } from '../fields/_parseFields';

import { ObjectType } from './ObjectType';

export const Schema = ObjectType;
export type Schema<Input extends SchemaDefinition> = ObjectType<Input>;
