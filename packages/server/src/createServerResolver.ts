import { createResolverFactory } from '@powership/schema';
import { ResolverContextBase } from '@powership/schema/out/Resolver';

import { ServerRequest } from './ServerRequest';

export interface ResolverContext extends ResolverContextBase, ServerRequest {}

export const createServerResolver = createResolverFactory<ResolverContext>();
