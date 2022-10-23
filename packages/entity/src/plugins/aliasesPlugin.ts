import { delay, ensureArray, objectDiffPaths } from '@backland/utils';

import { isEntityContextOfLoader } from '../EntityInterfaces';
import { createEntityPlugin } from '../EntityPlugin';
import { aggioUpdate } from '../aggioUpdate';

export const aliasesPlugin = createEntityPlugin('AliasesPlugin', {
  async preParse(context, { entity, getDocument }) {
    if (!context.isUpdate) return;
    if (!entity.aliasPaths.length) return;
    const { item: dbDocument } = await getDocument();
    if (!dbDocument) return;

    if (!isEntityContextOfLoader(context, 'updateOne')) return;

    const {
      options: { update, indexConfig, condition = {} },
    } = context;

    condition._v = dbDocument._v;
    context.options.condition = condition;

    if (typeof context.options.context.__testDelay === 'number') {
      await delay(context.options.context.__testDelay);
    }

    const memoryUpdate = aggioUpdate(dbDocument, update, indexConfig, context.options);
    const parsedMemoryUpdate = entity.databaseType.parse(memoryUpdate);

    const diffs = objectDiffPaths(dbDocument, parsedMemoryUpdate);

    diffs.forEach((diff) => {
      const inAliases = entity.aliasPaths.some((alias) => {
        return diff.paths.includes(alias);
      });
      if (!inAliases) return;

      if (diff.kind === 'remove') {
        context.options.update.$remove = ensureArray(
          context.options.update.$remove || []
        );
        //
        context.options.update.$remove.push(diff.path);
      } else {
        context.options.update.$set = context.options.update.$set || {};
        //
        Object.assign(context.options.update.$set, {
          [diff.path]: diff.newValue,
        });
      }
    });
  },
});
