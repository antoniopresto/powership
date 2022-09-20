import { RuntimeError } from '@darch/utils/lib/RuntimeError';
import { simpleObjectClone } from '@darch/utils/lib/simpleObjectClone';
import { Merge } from '@darch/utils/lib/typeUtils';

import { createObjectType, isObject, ObjectType } from './ObjectType';
import { ObjectLike } from './fields/IObjectLike';
import { objectMetaFieldKey } from './fields/MetaFieldField';
import { ObjectDefinitionInput } from './fields/_parseFields';

export type ImplementObject<Dest, Extends> =
  //
  //
  Extends extends []
    ? Dest
    : Extends extends [infer Item, ...infer Rest]
    ? Dest extends ObjectType<infer DestDef>
      ? Item extends ObjectType<infer ItemDef>
        ? ImplementObject<
            ObjectType<{
              [K in keyof Merge<DestDef, ItemDef>]: Merge<DestDef, ItemDef>[K];
            }>,
            Rest
          >
        : never
      : never
    : never;

export function implementObject<
  Def extends ObjectDefinitionInput,
  Parents extends ReadonlyArray<ObjectLike>
>(
  name: string,
  definition: Readonly<Def>,
  ...parents: Parents
): ImplementObject<ObjectType<Def>, Parents> {
  let def = simpleObjectClone(definition) as ObjectDefinitionInput;
  delete def[objectMetaFieldKey];

  const tree: string[] = [];

  parents.forEach((parent) => {
    if (!isObject(parent)) {
      throw new RuntimeError(
        `Failed to extend interface. Expected parent to be an Object.`,
        {
          parent,
        }
      );
    }

    // @ts-ignore
    def = parent.clone().extendDefinition(def).def();

    tree.push(parent.nonNullId);
  });

  const object = createObjectType(name, def);
  object.__setMetaData('implements', tree);

  return object as unknown as ImplementObject<ObjectType<Def>, Parents>;
}
