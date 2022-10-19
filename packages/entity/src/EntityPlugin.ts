import { FinalFieldDefinition } from '@backland/schema';
import { DocumentBase, PaginationResult } from '@backland/transporter';
import { tuple } from '@backland/utils';
import { Parallel, Waterfall } from 'plugin-hooks';

import {
  AnyEntity,
  EntityDocument,
  EntityOperationInfoContext,
} from './EntityInterfaces';
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

export const EntityHooksCreateDefinitionKind = tuple(
  'inputDefinition',
  'outputDefinition',
  'databaseDefinition',
  'updateDefinition'
);

export type EntityHooksCreateDefinitionKind =
  typeof EntityHooksCreateDefinitionKind[number];

export type EntityParserHookContext<E extends AnyEntity> = { entity: E, getDocument(options?: {}): ReturnType<E['findOne']> };

export type EntityHooks<Doc extends DocumentBase = DocumentBase, E extends AnyEntity = AnyEntity> = {
  beforeQuery: Waterfall<EntityOperationInfoContext, {}>;

  createDefinition: Parallel<
    Record<string, FinalFieldDefinition>,
    {
      entityOptions: EntityOptions;
      fields: string[];
      kind: EntityHooksCreateDefinitionKind;
      resolvers: EntityFieldResolver<any, any, any, any>[];
    }
  >;

  filterResult: Waterfall<
    | {
        items: EntityDocument<Doc>[];
        kind: 'items';
      }
    | {
        kind: 'pagination';
        pagination: PaginationResult<EntityDocument<Doc>>;
      },
    {
      operation: EntityOperationInfoContext;
      resolvers: EntityFieldResolver<any, any, any, any>[];
    }
  >;

  postParse: Waterfall<EntityOperationInfoContext, EntityParserHookContext<E>>;

  preParse: Waterfall<EntityOperationInfoContext, EntityParserHookContext<E>>;
};
