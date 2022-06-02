import { RuntimeError } from '@darch/utils/lib/RuntimeError';
import { simpleObjectClone } from '@darch/utils/lib/simpleObjectClone';
import { Merge } from '@darch/utils/lib/typeUtils';

import { createSchema, isSchema, Schema } from './Schema';
import { SchemaLike } from './fields/ISchemaLike';
import { schemaMetaFieldKey } from './fields/MetaFieldField';
import { SchemaDefinitionInput } from './fields/_parseFields';

export type ImplementSchema<Dest, Extends> =
  //
  //
  Extends extends []
    ? Dest
    : Extends extends [infer Item, ...infer Rest]
    ? Dest extends Schema<infer DestDef>
      ? Item extends Schema<infer ItemDef>
        ? ImplementSchema<
            Schema<{
              [K in keyof Merge<DestDef, ItemDef>]: Merge<DestDef, ItemDef>[K];
            }>,
            Rest
          >
        : never
      : never
    : never;

export function implementSchema<
  Def extends SchemaDefinitionInput,
  Parents extends ReadonlyArray<SchemaLike>
>(
  name: string,
  definition: Readonly<Def>,
  ...parents: Parents
): ImplementSchema<Schema<Def>, Parents> {
  let def: SchemaDefinitionInput = simpleObjectClone(definition);
  delete def[schemaMetaFieldKey];

  const tree: string[] = [];

  parents.forEach((parent) => {
    if (!isSchema(parent)) {
      throw new RuntimeError(
        `Failed to extend interface. Expected parent to be a Schema.`,
        {
          parent,
        }
      );
    }

    def = parent.clone(def).definition;

    tree.push(parent.nonNullId);
  });

  const schema = createSchema(name, def);
  schema.__setMetaData('implements', tree);

  return schema as ImplementSchema<Schema<Def>, Parents>;
}
