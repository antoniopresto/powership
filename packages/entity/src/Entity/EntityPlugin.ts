import { FinalFieldDefinition } from '@darch/schema';
import { Parallel, Waterfall } from '@darch/utils/lib/hooks';

import {
  AnyCollectionIndexConfig,
  DocumentBase,
  LoaderContext,
} from '../Transporter';

import { EntityDocument, EntityOperationInfoContext } from './EntityInterfaces';
import { EntityFieldResolver, EntityOptions } from './EntityOptions';

export function createEntityPlugin<
  Document extends DocumentBase = DocumentBase,
  Indexes extends AnyCollectionIndexConfig['indexes'] = AnyCollectionIndexConfig['indexes'],
  Context extends LoaderContext = LoaderContext
>(
  name: string,
  handlers: HooksRemap<EntityHooks<Document, Indexes, Context>>
): EntityPlugin<Document, Indexes, Context> {
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

export type EntityHookOptions<
  Document extends DocumentBase = DocumentBase,
  Indexes extends AnyCollectionIndexConfig['indexes'] = AnyCollectionIndexConfig['indexes'],
  Context extends LoaderContext = LoaderContext
> = HooksRemap<EntityHooks<Document, Indexes, Context>>;

export type HooksRemap<Hooks> = Hooks extends unknown
  ? {
      [K in keyof Hooks]?: Hooks[K] extends { register: infer Register }
        ? Register extends (fn: infer FN) => any
          ? FN
          : never
        : never;
    }
  : never;

export interface EntityPlugin<
  Document extends DocumentBase = DocumentBase,
  Indexes extends AnyCollectionIndexConfig['indexes'] = AnyCollectionIndexConfig['indexes'],
  Context extends LoaderContext = LoaderContext
> {
  (hooks: EntityHooks<Document, Indexes, Context>): unknown;
}

export type EntityHooks<
  Document extends DocumentBase = DocumentBase,
  Indexes extends AnyCollectionIndexConfig['indexes'] = AnyCollectionIndexConfig['indexes'],
  Context extends LoaderContext = LoaderContext
> = {
  beforeQuery: Waterfall<
    EntityOperationInfoContext<EntityDocument<Document>, Indexes, Context>,
    {}
  >;

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
      context: EntityOperationInfoContext<
        EntityDocument<Document>,
        Indexes,
        Context
      >;
      resolvers: EntityFieldResolver<any, any, any, any>[];
    }
  >;

  postParse: Waterfall<
    EntityOperationInfoContext<EntityDocument<Document>, Indexes, Context>,
    {}
  >;

  preParse: Waterfall<
    EntityOperationInfoContext<Record<string, any>, Indexes, Context>,
    {}
  >;
};
