import { RuntimeError } from '@swind/utils';
import { simpleObjectClone } from '@swind/utils';
import { Merge } from '@swind/utils';

import { ObjectLike } from '../fields/IObjectLike';
import { objectMetaFieldKey } from '../fields/MetaFieldField';
import { SchemaDefinition } from '../fields/_parseFields';

import { createObjectType, isObjectType, ObjectType } from './ObjectType';

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
              [K in keyof Merge<ItemDef, DestDef>]: Merge<ItemDef, DestDef>[K];
            }>,
            Rest
          >
        : never
      : never
    : never;

export function implementObject<
  Def extends SchemaDefinition,
  Parents extends ReadonlyArray<ObjectLike>
>(
  name: string,
  definition: Readonly<Def>,
  ...parents: Parents
): ImplementObject<ObjectType<Def>, Parents> {
  let def = simpleObjectClone(definition) as SchemaDefinition;
  delete def[objectMetaFieldKey];

  const tree: string[] = [];

  parents.forEach((parent) => {
    if (!isObjectType(parent)) {
      throw new RuntimeError(
        `Failed to extend interface. Expected parent to be an Object.`,
        {
          parent,
        }
      );
    }

    // @ts-ignore
    def = parent.clone((el) => el.extendObjectDefinition(def).def());

    tree.push(parent.nonNullId);
  });

  const object = createObjectType(name, def);
  object.__setMetaData('implements', tree);

  return object as unknown as ImplementObject<ObjectType<Def>, Parents>;
}
