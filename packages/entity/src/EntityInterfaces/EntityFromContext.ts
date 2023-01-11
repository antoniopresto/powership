import {
  DescribeObjectDefinition,
  ExtendObjectDefinition,
  GraphType,
  MakeFieldOptional,
  ObjectDefinitionInput,
} from '@backland/schema';
import {
  CommonIndexFields,
  ParsedDocumentIndexes,
  Transporter,
} from '@backland/transporter';
import { GetFieldByDotNotation } from '@backland/utils';

import { EntityFilterConditionsDefinition } from '../EntityFilterConditionType';
import { EntityHooks } from '../EntityPlugin';
import { EntityDocumentBaseDef } from '../defaultFields';
import { EntityIndexRelationConfig } from '../indexRelations/addEntityIndexRelations';
import { EdgeType, PaginationType } from '../paginationUtils';

import { EntityAddRelation } from './AddRelation';
import { AnyEntityTypesContext, EntityTypesContext } from './Context';
import { EntityLoaderMethods } from './EntityLoaderMethods';
import { ExtendEntity } from './ExtendEntity';

export interface EntityFromContext<Context extends AnyEntityTypesContext>
  extends EntityLoaderMethods<Context> {
  name: string;

  originType: GraphType<{ object: Context['originDefinition'] }>;

  inputType: GraphType<{
    object: Omit<
      EntityDocumentBaseDef<true>,
      keyof Context['originDefinition']
    > &
      Context['originDefinition'];
  }>;

  usedOptions: Context['options'];

  indexes: Context['indexes'];

  type: GraphType<{
    object: Context['outputDefinition'];
  }>;

  extendInput: ExtendObjectDefinition<
    Context['originDefinition'],
    Context['originDefinition']
  >;
  
  extendUpdate: ExtendObjectDefinition<
    { object: _AllOptional<Context['originDefinition']> },
    { object: _AllOptional<Context['originDefinition']> }
  >;

  addIndexRelation: <E extends unknown, Name extends string>(
    name: Name,
    entity: E
  ) => EntityFromContext<
    EntityTypesContext<
      Omit<Context['originDefinition'], Name> & {
        [L in Name]: { array: { of: GetFieldByDotNotation<E, 'inputType'> } };
      },
      Context['indexes']
    >
  >;

  aliasPaths: string[];

  conditionsDefinition: EntityFilterConditionsDefinition<
    Context['originDefinition']
  >;

  databaseType: this['type'];

  edgeType: EdgeType<this['type']>;

  getDocumentId(doc: Record<string, any>): string;

  getIndexFields(doc: Record<string, any>): CommonIndexFields;

  addRelation: EntityAddRelation<this, Context>;

  readonly hasAliases: boolean;

  indexGraphTypes: {
    [K: string]: GraphType<{
      object: ObjectDefinitionInput;
    }>;
  };

  // paths of found aliases in entity schemas or sub schemas
  indexRelations: EntityIndexRelations;

  paginationType: PaginationType<this['type']>;

  parse: (...args: Parameters<this['type']['parse']>) => Context['document'];

  parseDocumentIndexes(doc: Record<string, any>): ParsedDocumentIndexes;

  setOption: <Key extends keyof this['usedOptions'], V>(
    optionName: Key,
    value: V
  ) => this;

  transporter: Transporter | undefined;

  addHooks: (options: (hooks: EntityHooks) => any) => this;

  extend: ExtendEntity<this>;

  hooks: EntityHooks;

  __isEntity: true;
  __context: Context;
}

export interface EntityIndexRelations {
  [K: string]: EntityIndexRelationConfig;
}

export type _ExtendMethodKeys = 'addHooks' | 'addRelation' | 'extend';

export type _ExcludeExtend<E> = {
  [K in keyof E as K extends _ExtendMethodKeys ? never : K]: E[K];
} & {};

export type _AllOptional<Input extends ObjectDefinitionInput> =
  MakeFieldOptional<DescribeObjectDefinition<Input>, keyof Input>;

// extendType: <T extends _EntityGraphType>(
//   handler: (
//     helper: ExtendObjectDefinition<this['inputType'], this['inputType']>,
//     originalOptions: this['usedOptions']
//   ) => T
// ) => Entity<
//   T['definition']['def'] extends ObjectDefinitionInput
//     ? T['definition']['def']
//     : {},
//   Indexes
// >;
