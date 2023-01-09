import { parseTSfyValue, tsfy } from '@backland/schema';

import { isEntity } from '../Entity';
import { AnyEntity } from '../EntityInterfaces';

export function tsfyEntity(init: { entities: AnyEntity[] }) {
  const { entities } = init;

  // TODO create EntityTypesContext from real values;
  
  const parsed = tsfy(entities, {
    many: true,
    customParser(ctx) {
      if (!isEntity(ctx.value)) return;
      const value: AnyEntity = ctx.value;

      const inputDef = parseTSfyValue(value.originType.definition, ctx.context);
      inputDef.identifier = `${value.name}Entity_InputDefinition`;
      //
      const indexesRef = parseTSfyValue(value.indexes, ctx.context);
      indexesRef.identifier = `${value.name}Entity_Indexes`;

      ctx.currentRef.identifier = `${value.name}Entity_EntityTypesContext`;

      ctx.currentRef.parts = [
        'EntityTypesContext<',
        inputDef,
        ',',
        indexesRef,
        '>',
      ];

      return ctx.currentRef;
    },
  });

  return parsed.toString({ prettier: true });
}
