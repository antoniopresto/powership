import { delay, ensureArray, objectDiffPaths } from '@backland/utils';

import { createEntityPlugin } from '../EntityPlugin';
import { aggioUpdate } from '../aggioUpdate';
import { isEntityContextOfLoader } from '../entityOperationContextTypes';

export const aliasesPlugin = createEntityPlugin('AliasesPlugin', (hooks) => {
  hooks.preParse.register(async function preParse(context, { entity }) {
    if (!context.isUpdate) return;
    if (!entity.aliasPaths.length) return;

    if (
      !isEntityContextOfLoader(context, 'updateOne') &&
      !isEntityContextOfLoader(context, 'updateMany')
    ) {
      return;
    }

    const { isUpdateOne, options: methodOptions } = context;

    const dbDocuments = await (async () => {
      if (isUpdateOne) {
        const res = await entity.findOne({
          condition: methodOptions.condition,
          context,
          filter: methodOptions.filter,
        });

        if (res.item) {
          return [res.item];
        }
        return [];
      } else {
        const res = await entity.findMany({
          condition: methodOptions.condition,
          context,
          filter: methodOptions.filter,
        });
        return res.items;
      }
    })();

    // @ts-ignore
    context.getDocumentResults = dbDocuments;

    const {
      options: { update, indexConfig, condition = {} },
    } = context;

    let documentsWithDiffCount = 0;

    await Promise.all(
      dbDocuments.map(async (dbDocument) => {
        condition._v = dbDocument._v;
        context.options.condition = condition;

        if (typeof context.options.context.__testDelay === 'number') {
          await delay(context.options.context.__testDelay);
        }

        const memoryUpdate = aggioUpdate(
          dbDocument,
          update,
          indexConfig,
          context.options
        );

        const parsedMemoryUpdate = entity.databaseType.parse({
          ...memoryUpdate,
          _id: dbDocument._id,
        });

        const diffs = objectDiffPaths(dbDocument, parsedMemoryUpdate);

        diffs.forEach((diff) => {
          const inAliases = entity.aliasPaths.some((alias) => {
            return diff.paths.includes(alias);
          });
          if (!inAliases) return;

          if (++documentsWithDiffCount > 1) {
            throw new Error(
              `Can't handle updateMany for multiple documents with aliases.`
            );
          }

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
      })
    );
  });
});
