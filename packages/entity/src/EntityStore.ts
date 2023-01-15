import { createStore } from '@backland/utils';

import { AnyEntity } from './EntityInterfaces';

export const EntityStore = createStore<{ [K: string]: AnyEntity }>();

export function registerEntity(entity: AnyEntity) {
  EntityStore.set(entity.name, entity);
}
