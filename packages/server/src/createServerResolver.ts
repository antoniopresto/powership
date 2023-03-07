import { createResolverFactory } from '@swind/schema';
import { ResolverContextBase } from '@swind/schema/lib/Resolver';

import { ServerRequest } from './ServerRequest';

export interface ResolverContext extends ResolverContextBase, ServerRequest {}

export const createServerResolver = createResolverFactory<ResolverContext>();
