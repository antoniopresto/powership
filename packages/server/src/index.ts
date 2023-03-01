import './polyfills';

import { App } from './App';
import { AppLogger } from './AppLogger';
import { UnhandledSymbol } from './Symbol';
import { createGraphQLHandlers } from './graphql/graphqlHandler';
import { createRouteHandler } from './createRouteHandler';
import { createRouteMatcher } from './routeMatch';

export * from './AppResponse';
export * from './AppRequest';
export * from './BaseRequestHandler';
export * from './types/CampaignType';
export * from '@appTypes/AnswerType';
export * from './types/PermissionsEnum';
export * from '@entity/Answer/AnswerEntity';
export * from '@entity/Campaign/CampaignEntity';
export * from './graphQLFetchServer';

export {
  App,
  AppLogger,
  createRouteHandler,
  createGraphQLHandlers,
  createEntity,
  UnhandledSymbol,
  createRouteMatcher,
};

export const FormerServer = App.create({
  handlers: [
    createRouteHandler('/ping/:example_optional?', function ({ params }) {
      console.info('example_optional:', params.example_optional);
      this.close(200);
    }),
    
    ...createGraphQLHandlers({
      path: '/former/api/graphql',
      playgroundAPIUrl: '/former/api/graphql/',
      resolvers: resolvers,
    }),
  ],
});
