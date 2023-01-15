import { GraphType, TSFyHandlerUtils, TSFYRef } from '@backland/schema';
import { parseTSFyValue } from '@backland/schema/lib/tsfy/parseTSFyValue';

import { isEntity } from '../Entity';
import { AnyEntity } from '../EntityInterfaces';

export async function tsFyEntityParser(
  ctx: TSFyHandlerUtils
): Promise<TSFYRef | undefined> {
  if (!isEntity(ctx.value)) return;

  const value: AnyEntity = ctx.value;

  const originType: GraphType<any> = value.originType;
  const resultType: GraphType<any> = value.type;

  const documentBaseIdentifier = `${value.name}Entity_DocumentBase`;

  const [inputDef, indexesRef, outputDef, optionsDef, documentBase] =
    await Promise.all([
      parseTSFyValue(originType.definition.def, ctx.context),
      parseTSFyValue(value.indexes, ctx.context),
      parseTSFyValue(resultType.definition, ctx.context),
      parseTSFyValue(value.usedOptions, ctx.context),
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

  const id = value.name;
  ctx.context.header[
    `hash_declare_entity_${id}`
  ] = `declare function createEntity(config: { name: "${id}", [K: string]: unknown}): T${id}Entity;\n`;

  ctx.context.header[
    `hash_export_entity_${id}`
  ] = `export type T${id}Entity = EntityFromContext<${identifier}>;\n`;

  return ctx.currentRef;
}
