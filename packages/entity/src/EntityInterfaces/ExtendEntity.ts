import { ExtendObjectDefinition } from '@swind/schema';

import { _ExcludeExtend } from './EntityFromContext';

export interface ExtendEntity<Parent> {
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
}
