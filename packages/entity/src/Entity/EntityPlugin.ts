import { FinalFieldDefinition } from '@backland/schema';
import { Parallel, Waterfall } from 'plugin-hooks';

import { DocumentBase } from '../Transporter';

import { EntityDocument, EntityOperationInfoContext } from './EntityInterfaces';
import { EntityFieldResolver, EntityOptions } from './EntityOptions';

export function createEntityPlugin<
  Document extends DocumentBase = DocumentBase
>(
  name: string,
  handlers: HooksRemap<EntityHooks<Document>>
): EntityPlugin<Document> {
  const entries = Object.entries(handlers);

  function plugin(hooks) {
    entries.forEach(([hookName, resolver]) => {
      function handler(...args) {
        // @ts-ignore
        return resolver(...args);
      }

      Object.defineProperties(plugin, {
        name: { value: `${name}_${hookName}` },
      });

      hooks[hookName].register(handler);
    });
  }

  Object.defineProperties(plugin, {
    name: { value: name },
  });

  return plugin;
}

export type EntityHookOptions<Document extends DocumentBase = DocumentBase> =
  HooksRemap<EntityHooks<Document>>;

export type HooksRemap<Hooks> = Hooks extends unknown
  ? {
      [K in keyof Hooks]?: Hooks[K] extends { register: infer Register }
        ? Register extends (fn: infer FN) => any
          ? FN
          : never
        : never;
    }
  : never;

export interface EntityPlugin<Document extends DocumentBase = DocumentBase> {
  (hooks: EntityHooks<Document>): unknown;
}

export type EntityHooks<Document extends DocumentBase = DocumentBase> = {
  beforeQuery: Waterfall<EntityOperationInfoContext, {}>;

  createDefinition: Parallel<
    Record<string, FinalFieldDefinition>,
    {
      fields: string[];
      kind:
        | 'inputDefinition'
        | 'outputDefinition'
        | 'databaseDefinition'
        | 'updateDefinition';
      options: EntityOptions;
      resolvers: EntityFieldResolver<any, any, any, any>[];
    }
  >;

  filterResult: Waterfall<
    EntityDocument<Document>[],
    {
      context: EntityOperationInfoContext;
      resolvers: EntityFieldResolver<any, any, any, any>[];
    }
  >;

  postParse: Waterfall<EntityOperationInfoContext, {}>;

  preParse: Waterfall<EntityOperationInfoContext, {}>;
};
