import { pick } from '@swind/utils';

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

  const inputId = pick(input, 'id');
  const inputTypeId = pick(input, 'type.id');
  const inputMetaDefId = pick(input, `def.${objectMetaFieldKey}.def.id`);

  id = inputMetaDefId || inputTypeId || inputId;

  return id || undefined;
}

export const GraphTypeNameRegex = /^[_a-zA-Z][_a-zA-Z0-9]$/;
