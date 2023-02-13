import { ResolverContextBase } from '@backland/schema/lib/Resolver';
import { AppRequest } from './AppRequest';
import { createResolverFactory } from 'backland';

export interface ResolverContext extends ResolverContextBase, AppRequest {}

export const createResolver = createResolverFactory<ResolverContext>();
export const createAppResolver = createResolver;
