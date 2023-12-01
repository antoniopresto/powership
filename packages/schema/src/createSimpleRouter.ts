import { AnyRecord, RouteMatcher, RouteUtils } from '@powership/utils';

import type { InferObjectDefinition } from './fields/Infer';
import type { ObjectDefinitionInput } from './fields/_parseFields';

export type RouteConfig = {
  path: string;
  query?: ObjectDefinitionInput;
};

export type SimpleRoute = RouteConfig & {
  match(route: string): AnyRecord | null;
  mount(config?: { query: AnyRecord }): string;
};

export type SimpleRouter<
  Routes extends Readonly<{ [K: string]: RouteConfig }>
> = {
  [K in Extract<keyof Routes, string>]: { [K in keyof Routes]: Routes[K] } & {
    match: RouteMatcher<K>['match'];
    mount: [InferObjectDefinition<Routes[K]['query']>] extends [never]
      ? () => string
      : (config: {
          query: InferObjectDefinition<Routes[K]['query']>;
        }) => string;
  };
};

export function createSimpleRouter<
  Routes extends Readonly<{ [K: string]: RouteConfig }>
>(config: Routes): SimpleRouter<Routes> {
  const router = Object.create(null);

  Object.entries(config).forEach(([key, definition]) => {
    const { match } = RouteUtils.createRouteMatcher(definition.path);

    const route: SimpleRoute = {
      ...definition,
      match,
      mount(conf?: any) {
        let url = '/' + RouteUtils.normalizePath(definition.path);
        if (conf?.query) {
          url += '?' + RouteUtils.stringifyQueryString(conf.query);
        }
        return url;
      },
    };

    router[key] = route;
  });

  return router;
}
