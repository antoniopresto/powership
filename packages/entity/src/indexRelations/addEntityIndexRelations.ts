import { areEqual, devAssert, Writeable } from '@powership/utils';

import { AnyEntity } from '../EntityInterfaces';
import { EntityOptions } from '../EntityOptions';

export type EntityIndexRelationInput = AnyEntity;

export type EntityIndexRelationConfig = {
  name: string;
  entity: AnyEntity;
};

export function _addEntityIndexRelations(
  mainEntityOptions: EntityOptions,
  relations: [string, EntityIndexRelationConfig][]
): any {
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
        (el) => el.name === relIndex.name
      );

      if (!mainEntityIndex) {
        throw new Error(
          `Failed to add relation to Entity "${mainEntityName}": there is no index` +
            ` "${relIndex.name}" related with ${childOptions.name}`
        );
      }

      if (!areEqual(mainEntityIndex.PK, relIndex.PK)) {
        devAssert(
          `Found different index configuration in relation "${relName}".` +
            ` The index "${relIndex.name}" is different between the entities` +
            ` "${mainEntityName}" and "${childOptions.name}"`,
          {
            [`${mainEntityName}`]: mainEntityIndex.PK,
            [childOptions.name]: relIndex.PK,
          }
        );
      }

      if (!mainEntityIndex.relations) {
        mainEntityIndex.relations = [];
      }

      const _relations = mainEntityIndex.relations as Writeable<
        typeof mainEntityIndex.relations
      >;

      if (_relations.find((el) => el.name === relName)) {
        throw new Error(
          `Entity ${mainEntityName}: Relation with name "${relName}" already defined.`
        );
      }

      _relations.push({
        entity: childOptions.name,
        name: relName,
      });
    });
  });
}
