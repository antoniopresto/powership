import { FinalFieldDefinition } from '@backland/schema';
import {
  DocumentBase,
  PaginationResult,
  TransporterLoaderName,
} from '@backland/transporter';
import { tuple } from '@backland/utils';
import { Parallel, Waterfall } from 'plugin-hooks';

import { AnyEntity } from './EntityInterfaces';
import { EntityDocument } from './EntityInterfaces';
import { EntityFieldResolver, EntityOptions } from './EntityOptions';
import { EntityOperationInfoContext } from './entityOperationContextTypes';

export function createEntityPlugin(
  name: string,
  handler: EntityPlugin
): EntityPlugin {
  function plugin(hooks) {
    return handler(hooks);
  }

  Object.defineProperties(plugin, {
    name: { value: name },
  });

  return plugin;
}

export interface EntityPlugin {
  (hooks: EntityHooks): unknown;
}

export const EntityHooksCreateDefinitionKind = tuple(
  'inputDefinition',
  'outputDefinition',
  'databaseDefinition',
  'updateDefinition'
);

export type EntityHooksCreateDefinitionKind =
  typeof EntityHooksCreateDefinitionKind[number];

export type EntityParserHookContext<E extends AnyEntity> = {
  checkForVersion?: boolean;
  entity: E;
};

export type _EntityLoaders<E extends Record<string, any>> = {
  [M in TransporterLoaderName]: E[M];
};

export type EntityHooks<
  Doc extends DocumentBase = EntityDocument<{ [K: string]: unknown }>,
  E extends AnyEntity = AnyEntity
> = {
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

  initCreation: Parallel<EntityOptions, E>;

  postParse: Waterfall<EntityOperationInfoContext, EntityParserHookContext<E>>;

  preParse: Waterfall<EntityOperationInfoContext, EntityParserHookContext<E>>;

  willResolve: Waterfall<_EntityLoaders<E>, EntityOperationInfoContext>;
};
