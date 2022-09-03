import { parseFieldDefinitionConfig } from '@darch/schema';
import { createProxy, notNull } from '@darch/utils';
import { NodeLogger } from '@darch/utils/lib/nodeLogger';

import { createEntityPlugin } from '../EntityPlugin';

export const applyFieldResolvers = createEntityPlugin('applyFieldResolvers', {
  createDefinition(definition, context) {
    if (context.kind !== 'entityDefinition') return;
    const { resolvers } = context;

    resolvers.forEach((resolver) => {
      definition[resolver.name] = parseFieldDefinitionConfig(resolver.type);
    });
  },
  //
  async filterResult(docs, context) {
    if (!context.context.isFind) return;

    const {
      resolvers,
      context: {
        entityOptions: { name: entityName },
      },
    } = context;

    if (resolvers.length) {
      return await Promise.all(
        docs.map(async (doc) => {
          if (!doc || typeof doc !== 'object') return doc;

          await Promise.allSettled(
            resolvers.map(async ({ resolve, name }) => {
              const field = notNull(name);

              let val: any = null;
              try {
                val = await resolve(
                  doc,
                  {}, // TODO
                  context.context,
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
              doc[field] = val;
            })
          );

          return doc;
        })
      );
    }
  },
});
