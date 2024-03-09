import { RuntimeError } from '@powership/utils';
import { simpleObjectClone } from '@powership/utils';
import { Merge } from '@powership/utils';

import { ObjectLike } from './fields/IObjectLike';
import { objectMetaFieldKey } from './fields/MetaFieldField';
import { ObjectDefinitionInput } from './fields/_parseFields';
import * as Internal from './internal';

export type ImplementObject<Dest, Extends> =
  //
  //
  Extends extends []
    ? Dest
    : Extends extends [infer Item, ...infer Rest]
      ? Dest extends Internal.ObjectType<infer DestDef>
        ? Item extends Internal.ObjectType<infer ItemDef>
          ? ImplementObject<
              Internal.ObjectType<{
                [K in keyof Merge<ItemDef, DestDef>]: Merge<
                  ItemDef,
                  DestDef
                >[K];
              }>,
              Rest
            >
          : never
        : never
      : never;

export function implementObject<
  Def extends ObjectDefinitionInput,
  Parents extends ReadonlyArray<ObjectLike>,
>(
  name: string,
  definition: Readonly<Def>,
  ...parents: Parents
): ImplementObject<Internal.ObjectType<Def>, Parents> {
  let def = simpleObjectClone(definition) as ObjectDefinitionInput;
  delete def[objectMetaFieldKey];

  const tree: string[] = [];

  parents.forEach((parent) => {
    if (!Internal.isObjectType(parent)) {
      throw new RuntimeError(
        `Failed to extend interface. Expected parent to be an Object.`,
        {
          parent,
        },
      );
    }

    // @ts-ignore
    def = parent.clone((el) => el.extendObjectDefinition(def).def());

    tree.push(parent.nonNullId);
  });

  const object = Internal.createObjectType(name, def);
  object.__setMetaData('implements', tree);

  return object as unknown as ImplementObject<
    Internal.ObjectType<Def>,
    Parents
  >;
}
