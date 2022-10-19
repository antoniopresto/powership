import { areEqual, ensureArray } from '@backland/utils';

import { isEntityContextOfLoader } from '../EntityInterfaces';
import { createEntityPlugin } from '../EntityPlugin';
import { aggioUpdate } from '../aggioUpdate';

export const aliasesPlugin = createEntityPlugin('AliasesPlugin', {
  async preParse(context, { entity, getDocument }) {
    if (!context.isUpdate) return;
    if (!entity.aliasPaths.length) return;

    const { item: dbDocument } = await getDocument();

    if (!dbDocument) {
      throw new Error(`AliasesPlugin: Can't find document to apply aliases.`);
    }

    if (!isEntityContextOfLoader(context, 'updateOne')) return;

    const {
      options: { update, indexConfig },
    } = context;

    const memoryUpdate = aggioUpdate(dbDocument, update, indexConfig);
    const parsedMemoryUpdate = entity.databaseType.parse(memoryUpdate);

    const diffsToSet = _getDiff(
      dbDocument,
      parsedMemoryUpdate,
      '',
      entity.aliasPaths
    );

    const diffsToUnset = _getDiff(
      parsedMemoryUpdate,
      dbDocument,
      '',
      entity.aliasPaths
    );

    if (diffsToSet.hasDiff) {
      context.options.update.$set = context.options.update.$set || {};
      Object.assign(context.options.update.$set, diffsToSet.$set);
    }

    if (diffsToUnset.hasDiff) {
      context.options.update.$remove = ensureArray(
        context.options.update.$remove || []
      );
      context.options.update.$remove.push(...diffsToUnset.$fields);
    }
  },
});

function _getDiff(
  dbDocument: any,
  parsedMemoryUpdate: any,
  fieldPath: string,
  aliases: string[]
) {
  const $set: Record<string, any> = {};
  const $fields: string[] = [];

  const payload = { $fields, $set, hasDiff: false };

  const shouldContinue =
    fieldPath === '' || // is the root object
    aliases.includes(fieldPath);

  if (!shouldContinue) return payload;
  payload.hasDiff = !areEqual(dbDocument, parsedMemoryUpdate);
  if (!payload.hasDiff) return payload;

  function _handleDiff(el: any, index: string | number) {
    const newParentField = joinPaths(fieldPath, index);
    const diffs = _getDiff(dbDocument[index], el, newParentField, aliases);
    if (!diffs.hasDiff) return;

    delete $set[fieldPath];
    delete $fields[fieldPath];

    Object.assign($set, diffs.$set);
    $fields.push(newParentField);
  }

  if (Array.isArray(parsedMemoryUpdate)) {
    parsedMemoryUpdate.forEach((el, index) => {
      _handleDiff(el, index);
    });
  } else if (parsedMemoryUpdate && typeof parsedMemoryUpdate === 'object') {
    Object.entries(parsedMemoryUpdate).forEach(([index, el]) => {
      _handleDiff(el, index);
    });
  } else if (fieldPath) {
    $set[fieldPath] = parsedMemoryUpdate;
  }

  return payload;
}

function joinPaths(...args: (string | number)[]) {
  return args.filter((el) => el !== '').join('.');
}
