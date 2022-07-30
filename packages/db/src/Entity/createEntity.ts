import { EntityStore } from '@core/Entity/EntityStore';
import { assertSame } from '@darch/utils/lib/assertSame';
import { isDev } from '@utils/isDev';

import { Entity } from './Entity';
import { EntityOptions, SchemaDefinitionInput } from './EntityInterfaces';


export function createEntity<
  DefinitionInput extends SchemaDefinitionInput,
  Options extends Readonly<EntityOptions<DefinitionInput>>
>(
  options: EntityOptions<DefinitionInput> | (() => EntityOptions<DefinitionInput>)
): Entity<DefinitionInput, Options> {
  const getConfig = typeof options === 'function' ? options : () => options;
  const config = getConfig();

  if (EntityStore.has(config.name)) {
    const existing = EntityStore.get(config.name);

    if (isDev()) {
      assertSame(
        `Entity ${config.name} already defined with another config`,
        config.type,
        existing.type
      );
    }
    return existing as any;
  }

  // @ts-ignore
  return new Entity(config) as any;
}
