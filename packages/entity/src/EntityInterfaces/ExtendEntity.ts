import {
  DescribeObjectDefinition,
  ExtendObjectDefinition,
  MakeFieldOptional,
  ObjectDefinitionInput,
} from '@backland/schema';

import { AnyEntityTypesContext } from './Context';
import { _ExcludeExtend } from './EntityFromContext';

export interface ExtendEntity<Parent, Context extends AnyEntityTypesContext> {
  /**
   * Extend current entity
   * @param transformer
   */
  <TransformerReturn>(
    transformer: (
      current: _ExcludeExtend<Parent>,
      utils: {
        extend: <V>(value: V) => ExtendObjectDefinition<V, V>;
      }
    ) => TransformerReturn
  ): Parent extends infer Origin
    ? {
        [K in
          | keyof TransformerReturn
          | keyof Origin]: K extends keyof TransformerReturn
          ? TransformerReturn[K]
          : K extends keyof Origin
          ? Origin[K]
          : never;
      }
    : never;

  input: ExtendObjectDefinition<
    Context['originDefinition'],
    Context['originDefinition']
  >;

  update: ExtendObjectDefinition<
    { object: _AllOptional<Context['originDefinition']> },
    { object: _AllOptional<Context['originDefinition']> }
  >;
}

export type _AllOptional<Input extends ObjectDefinitionInput> =
  MakeFieldOptional<DescribeObjectDefinition<Input>, keyof Input>;
