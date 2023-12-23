import {
  AlphaNumeric,
  AnyRecord,
  NullableToPartial,
  RouteMatcher,
  RouteUtils,
  values,
} from '@powership/utils';

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

type RouteFindResult =
  | ({ params: { [K: string]: AlphaNumeric | undefined } } & SimpleRoute)
  | null;

export type SimpleRouter<
  Routes extends Readonly<{ [K: string]: RouteConfig }>
> = {
  $findRoute(pathname: string): RouteFindResult;
} & {
  [K in Extract<keyof Routes, string>]: {
    [Sub in keyof Routes[K]]: Routes[K][Sub];
  } & {
    match: RouteMatcher<K>['match'];
    mount: [InferObjectDefinition<Routes[K]['query']>] extends [never]
      ? (config?: {}) => string
      : (config: {
          query: NullableToPartial<InferObjectDefinition<Routes[K]['query']>>;
        }) => string;
  };
};

export function createSimpleRouter<
  Routes extends Readonly<{ [K: string]: RouteConfig }>
>(config: Routes): SimpleRouter<Routes> {
  const routeMap: SimpleRouter<Routes> = Object.create(null);

  Object.entries(config).forEach(([key, definition]) => {
    if (definition.path in routeMap) {
      throw new Error(`Multiple routes found with path "${definition.path}".`);
    }

    const matcher = RouteUtils.createRouteMatcher(definition.path);

    // @ts-ignore
    routeMap[key] = {
      ...definition,
      match: matcher.match.bind(matcher),
      mount(conf?: any) {
        let url = '/' + RouteUtils.normalizePath(definition.path);
        if (conf?.query) {
          url += '?' + RouteUtils.stringifyQueryString(conf.query);
        }
        return url;
      },
    };
  });

  const sorted = RouteUtils.sortRoutes(values(routeMap));

  routeMap.$findRoute = function $findRoute(path: string): RouteFindResult {
    for (let i = 0; i < sorted.length; i++) {
      const result = sorted[i].match(path);
      if (result) return { ...sorted[i], params: result } as RouteFindResult;
    }
    return null; // no match
  };

  return routeMap;
}
