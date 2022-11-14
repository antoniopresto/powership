import { areEqual, devAssert, Writeable } from '@backland/utils';

import { AnyEntity } from '../EntityInterfaces';
import { EntityOptions } from '../EntityOptions';

export type EntityIndexRelationConfig<Entity = AnyEntity> = {
  entity: Entity;
};

export type EntityIndexRelationsRecord<Entity = any> = Record<
  string,
  EntityIndexRelationConfig<Entity>
>;

export function _addEntityIndexRelations(
  mainEntityOptions: EntityOptions,
  relations: [string, EntityIndexRelationConfig][]
) {
  const mainEntityName = mainEntityOptions.name;
  const mainEntityIndexes = mainEntityOptions.indexes;

  relations.forEach(([relName, rel]) => {
    const childOptions = rel.entity.usedOptions;

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

      const relations = (mainEntityIndex.relations =
        mainEntityIndex.relations || []) as Writeable<
        typeof mainEntityIndex.relations
      >;

      if (relations.find((el) => el.name === relName)) {
        throw new Error(
          `Entity ${mainEntityName}: Relation with name "${relName}" already defined.`
        );
      }

      relations.push({
        entity: childOptions.name,
        name: relName,
      });
    });
  });
}
