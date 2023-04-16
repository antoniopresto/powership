import { parseFieldDefinitionConfig } from '@swind/schema';
import { createProxy, notNull } from '@swind/utils';
import { NodeLogger } from '@swind/utils';

import { createEntityPlugin } from '../EntityPlugin';

export const applyFieldResolvers = createEntityPlugin(
  'applyFieldResolvers',
  (hooks) => {
    //
    hooks.createDefinition.pushMiddleware(function createDefinition(
      definition,
      context
    ) {
      if (context.kind !== 'outputDefinition') return;
      const { resolvers } = context;

      resolvers.forEach((resolver) => {
        definition[resolver.name] = parseFieldDefinitionConfig(resolver.type);
      });
    });

    //
    hooks.filterResult.pushMiddleware(async function filterResult(
      payload,
      context
    ) {
      const hasItemsOrPagination =
        'items' in payload || 'pagination' in payload;
      if (!hasItemsOrPagination) return;

      const {
        resolvers,
        operation: {
          entityOptions: { name: entityName },
        },
      } = context;

      if (!resolvers.length) return;
      const isPagination = payload.kind === 'pagination';

      const items =
        payload.kind === 'pagination'
          ? payload.pagination.edges
          : payload.items;

      await Promise.all(
        items.map(async (originalDocument) => {
          if (!originalDocument || typeof originalDocument !== 'object') {
            return originalDocument;
          }

          const node = isPagination ? originalDocument.node : originalDocument;

          await Promise.allSettled(
            resolvers.map(async ({ resolve, name, args }) => {
              const field = notNull(name);

              let val: any = null;
              try {
                val = await resolve(
                  node,
                  args,
                  context.operation.options.context,
                  _fakeGraphQLResolveInfo
                );
              } catch (e) {
                NodeLogger.error(
                  `Failed to resolve "${name}" for entity ${entityName}`,
                  e
                );
              }

              if (node != null) {
                node[field] = val; // ⬅️ mutating the original doc
              }
            })
          );
        })
      );
    });
  }
);

const _fakeGraphQLResolveInfo = createProxy(() => {
  throw new Error('GraphQLResolveInfo not available in field resolvers.');
});
