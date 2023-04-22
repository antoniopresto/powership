import { FieldInput, ObjectDefinitionInput } from '@swind/schema';
import {
  INDEX_PART_SEP,
  parseIndexFieldName,
  RELATION_PRECEDES,
} from '@swind/utils';

import { AnyCollectionIndexConfig, CommonIndexFields } from './CollectionIndex';

export function parseEntityIndexFields(indexConfig: AnyCollectionIndexConfig) {
  const { indexes } = indexConfig;
  const entity = indexConfig.entity.toLowerCase();

  return indexes.reduce((acc: any, index) => {
    const PKRegex = (() => {
      if (index.relatedTo) {
        const relName = index.relatedTo.toLowerCase();
        return `^${relName}${INDEX_PART_SEP}${index.name}${INDEX_PART_SEP}[^${RELATION_PRECEDES}]*${RELATION_PRECEDES}${entity}${INDEX_PART_SEP}.*`;
      }

      return `^${entity}${INDEX_PART_SEP}${index.name}${INDEX_PART_SEP}.*`;
    })();

    const PKName = parseIndexFieldName(index.name, 'PK');

    const fields: { [K in keyof CommonIndexFields]: FieldInput } = {
      _c: {
        hidden: true,
        name: `EntityHashedCursor`,
        string: { min: 5, regex: ['^~!.*'] },
        description: `The full hashed value of the first index.`,
      },
      _e: {
        hidden: true,
        name: `${indexConfig.entity}NameLiteral`,
        literal: entity,
        description: `The lowercase entity name to be recorded in each document.`,
      },
      _id: acc._id || {
        name: `Entity${indexConfig.entity}_id`,
        string: { regex: [PKRegex] },
        description: `The full string value of the first index following the RegExp format "${PKRegex}"`,
      },
      [PKName]: {
        name: `Entity${indexConfig.entity}${
          PKName === '_id' ? '_id_' : PKName // to not repeat name
        }`,
        string: { regex: [PKRegex] },
        description: `The ${PKName} field in the RegExp format "${PKRegex}"`,
      },
    } as const;

    if (index.SK?.length) {
      const SKName = parseIndexFieldName(index.name, 'SK');
      fields[SKName] = {
        name: `Entity${indexConfig.entity}${SKName}`,
        string: {},
        description: `The ${SKName} field.`,
      };
    }

    if (index.relatedTo) {
      fields._rpk = {
        name: 'EntityParentRelationsPrefix',
        array: { of: 'string' },
        description: `The parent relations index prefixes.`,
      };
    }

    return { ...acc, ...fields };
  }, {} as ObjectDefinitionInput);
}
