import { createResolverFactory } from '@swind/schema';
import { ResolverContextBase } from '@swind/schema/lib/Resolver';

import { AppRequest } from './AppRequest';

export interface ResolverContext extends ResolverContextBase, AppRequest {}

export const createResolver = createResolverFactory<ResolverContext>();
export const createAppResolver = createResolver;
