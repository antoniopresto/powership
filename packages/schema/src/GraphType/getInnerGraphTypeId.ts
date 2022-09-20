import { getByPath } from '@darch/utils/lib/getByPath';

import { objectMetaFieldKey } from '../fields/MetaFieldField';

export function getInnerGraphTypeId(input: any): string | undefined {
  if (!(input && typeof input === 'object')) {
    return undefined;
  }

  let id: string | undefined;

  let iterating = input;
  while ('definition' in iterating) {
    id = getInnerGraphTypeId(iterating.definition) || id;
    iterating = iterating.definition;
  }
  if (id) return id;

  const inputId = getByPath(input, 'id');
  const inputTypeId = getByPath(input, 'type.id');
  const inputMetaDefId = getByPath(input, `def.${objectMetaFieldKey}.def.id`);

  id = inputMetaDefId || inputTypeId || inputId;

  return id || undefined;
}

export const GraphTypeNameRegex = /^[_a-zA-Z][_a-zA-Z0-9]$/;
