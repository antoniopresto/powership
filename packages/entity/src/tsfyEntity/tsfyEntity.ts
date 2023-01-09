import { GraphType, parseTSfyValue, tsfy, TSFYConfig } from '@backland/schema';

import { isEntity } from '../Entity';
import { AnyEntity } from '../EntityInterfaces';

export type TsfyEntityInit = { entities: AnyEntity[] } & Partial<TSFYConfig>;

export function tsfyEntity(init: TsfyEntityInit) {
  const { entities, ...config } = init;

  return tsfy(entities, {
    ...config,
    many: true,
    async customParser(ctx) {
      if (config?.customParser) {
        const res = await config.customParser(ctx);
        if (res !== undefined) return res;
      }

      if (!isEntity(ctx.value)) return;

      const value: AnyEntity = ctx.value;

      const originType: GraphType<any> = value.originType;
      const resultType: GraphType<any> = value.type;

      const documentBaseIdentifier = `${value.name}Entity_DocumentBase`;

      const [inputDef, indexesRef, outputDef, optionsDef, documentBase] =
        await Promise.all([
          parseTSfyValue(originType.definition.def, ctx.context),
          parseTSfyValue(value.indexes, ctx.context),
          parseTSfyValue(resultType.definition, ctx.context),
          parseTSfyValue(value.usedOptions, ctx.context),
          originType.typescriptPrint({ name: documentBaseIdentifier }),
        ]);

      inputDef.identifier = `${value.name}Entity_InputDefinition`;
      indexesRef.identifier = `${value.name}Entity_Indexes`;
      outputDef.identifier = `${value.name}Entity_OutputDefinition`;
      outputDef.identifier = `${value.name}Entity_Options`;

      //
      ctx.context.header[documentBaseIdentifier] = documentBase;

      const identifier = `${value.name}Entity_EntityTypesContext`;
      ctx.currentRef.identifier = identifier;

      ctx.currentRef.parts = [
        '{',
        'originDefinition:',
        inputDef,
        ',',

        'indexes:',
        indexesRef,
        ',',

        'outputDefinition:',
        outputDef,
        ',',

        'options:',
        optionsDef,
        ',',

        'documentBase:',
        documentBaseIdentifier,
        ',',

        `documentCreationInput: EntityDocumentInput<${documentBaseIdentifier}>,`,
        `document: EntityDocument<${documentBaseIdentifier}>`,
        '};',
      ];

      return ctx.currentRef;
    },
  });
}
