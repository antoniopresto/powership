import { GraphType } from '@backland/schema';
import { areEqual, devAssert } from '@backland/utils';

import { AnyEntity, Entity } from '../EntityInterfaces';
import { EntityOptions } from '../EntityOptions';

export type EntityIndexRelationConfig<Entity = AnyEntity> = {
  entity: Entity;
};

export type EntityIndexRelationsRecord<Entity = any> = Record<
  string,
  EntityIndexRelationConfig<Entity>
>;

export type AddIndexRelationsFn<Options extends EntityOptions = EntityOptions> =
  <Rels extends EntityIndexRelationsRecord>(
    relations: Rels
  ) => Entity<
    {
      [K in keyof MergeTypeIndexRelations<
        Options,
        Rels
      >]: MergeTypeIndexRelations<Options, Rels>[K];
    } & {}
  >;

type _defFromOptions<T> = T extends { type: infer Type }
  ? Type extends { definition: { def: infer Def } }
    ? { [K in keyof Def]: Def[K] extends unknown ? Def[K] : never } & {}
    : {}
  : {};

type _defFromRel<Rel> = Rel extends {
  entity: { usedOptions: { type: infer Type } };
}
  ? {
      list: true;
      optional: true;
      type: Type;
      // optionalInput: true // TODO
    }
  : never;

type _createType<Options, Rels> = GraphType<{
  object: _defFromOptions<Options> extends infer O
    ? { [K in keyof O as K extends keyof Rels ? never : K]: O[K] } & ({
        [K in keyof Rels]: _defFromRel<Rels[K]>;
      } & {})
    : never;
}>;

export type MergeTypeIndexRelations<
  Options extends EntityOptions,
  Rels extends EntityIndexRelationsRecord
> = {
  [K in keyof Options]: K extends 'type'
    ? _createType<Options, Rels>
    : Options[K];
};

export function _addEntityIndexRelations(
  mainEntityOptions: EntityOptions,
  relations: [string, EntityIndexRelationConfig][]
) {
  const mainEntityName = mainEntityOptions.name;
  const mainEntityIndexes = mainEntityOptions.indexes;

  relations.forEach(([relName, rel]) => {
    const childOptions: EntityOptions = rel.entity.usedOptions;

    const relatedIndex = childOptions.indexes.filter((relIndex) => {
      return relIndex.relatedTo?.toLowerCase() === mainEntityName.toLowerCase();
    });

    if (!relatedIndex.length) {
      devAssert(
        `No index with relatedTo: "${mainEntityName}" | "${mainEntityName.toLowerCase()}" found in entity ${
          childOptions.name
        }.`
      );
    }

    relatedIndex.forEach((relIndex) => {
      const mainEntityIndex = mainEntityIndexes.find(
        (el) => el.field === relIndex.field
      );

      if (!mainEntityIndex) {
        throw new Error(
          `Failed to add relation to Entity "${mainEntityName}": there is no index` +
            ` "${relIndex.field}" related with ${childOptions.name}`
        );
      }

      if (!areEqual(mainEntityIndex.PK, relIndex.PK)) {
        devAssert(
          `Found different index configuration in relation "${relName}".` +
            ` The index "${relIndex.field}" is different between the entities` +
            ` "${mainEntityName}" and "${childOptions.name}"`,
          {
            [`${mainEntityName}`]: mainEntityIndex.PK,
            [childOptions.name]: relIndex.PK,
          }
        );
      }

      // @ts-ignore
      mainEntityIndex.relations = mainEntityIndex.relations || [];

      if (mainEntityIndex.relations.find((el) => el.name === relName)) {
        throw new Error(
          `Entity ${mainEntityName}: Relation with name "${relName}" already defined.`
        );
      }

      mainEntityIndex.relations.push({
        entity: childOptions.name,
        name: relName,
      });
    });
  });
}
