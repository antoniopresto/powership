import { parseFieldDefinitionConfig } from '@backland/schema';
import { createProxy, notNull } from '@backland/utils';
import { NodeLogger } from '@backland/utils/lib/nodeLogger';

import { createEntityPlugin } from '../EntityPlugin';

export const applyFieldResolvers = createEntityPlugin('applyFieldResolvers', {
  createDefinition(definition, context) {
    if (context.kind !== 'outputDefinition') return;
    const { resolvers } = context;

    resolvers.forEach((resolver) => {
      definition[resolver.name] = parseFieldDefinitionConfig(resolver.type);
    });
  },
  //
  async filterResult(payload, context) {
    const hasItemsOrPagination = 'items' in payload || 'pagination' in payload;
    if (!hasItemsOrPagination) return;

    const {
      resolvers,
      operation: {
        entityOptions: { name: entityName },
      },
    } = context;

    if (resolvers.length) {
      const isPagination = payload.kind === 'pagination';

      let items =
        payload.kind === 'pagination'
          ? payload.pagination.edges
          : payload.items;

      items = await Promise.all(
        items.map(async (originalDocument) => {
          if (!originalDocument || typeof originalDocument !== 'object') {
            return originalDocument;
          }

          const node = isPagination ? originalDocument.node : originalDocument;

          await Promise.allSettled(
            resolvers.map(async ({ resolve, name }) => {
              const field = notNull(name);

              let val: any = null;
              try {
                val = await resolve(
                  node,
                  {}, // TODO
                  context.operation.options.context,
                  createProxy(() => {
                    console.error(
                      'GraphQLResolveInfo not available in field resolvers.'
                    );
                    return {} as any;
                  })
                );
              } catch (e) {
                NodeLogger.logError(
                  `Failed to resolve "${name}" for entity ${entityName}`,
                  e
                );
              }
              node[field] = val;
            })
          );

          return isPagination
            ? { ...originalDocument, node }
            : originalDocument;
        })
      );
    }
  },
});
