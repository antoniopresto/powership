import { StrictMap } from '@darch/utils/lib/StrictMap';

import type { Entity } from './Entity';

export const EntityStore = new StrictMap<string, Entity<any, any>>();
