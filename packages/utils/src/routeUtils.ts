import qs from 'qs';
import UrlPattern from 'url-pattern';

import { IsKnown } from './typings';

/**
 * Utilities for handling URL and route-related operations.
 */
export class RouteUtils {
  /**
   * Removes starting and trailing slashes from a path string.
   * @param path The path to be normalized.
   * @returns The path with starting and trailing slashes removed.
   */
  static normalizePath(path: string): string {
    return path.replace(/^\//, '').replace(/\/$/, '').replace(/\/\//gm, '/');
  }

  /**
   * Joins multiple path segments, normalizing slashes.
   * @param segments The path segments to join.
   * @returns The joined path.
   */
  static joinPaths(...segments: (string | null | undefined)[]): string {
    return segments
      .filter(Boolean)
      .map((segment) => RouteUtils.normalizePath(segment as string))
      .join('/');
  }

  /**
   * Parses a query string into an object.
   * @param queryString The query string to parse.
   * @returns The parsed query string object.
   */
  static parseQueryString(queryString: string) {
    return qs.parse(queryString.replace(/^\?/, ''));
  }

  /**
   * Stringifies an object into a query string.
   * @param queryObject The object to be stringified.
   * @returns The query string.
   */
  static stringifyQueryString(queryObject: Record<string, any>) {
    return qs.stringify(queryObject, {
      sort: (a, b) => (a > b ? 1 : -1),
    });
  }

  /**
   * Resorts a query string.
   * @param queryString The query string to resort.
   * @returns The resorted query string.
   */
  static resortQueryString(queryString = ''): string {
    return RouteUtils.stringifyQueryString(
      RouteUtils.parseQueryString(queryString),
    );
  }

  /**
   * Parses a URL or pathname into its components.
   * @param urlOrPathname The URL or pathname to parse.
   * @param defaultDomain The default domain to use if none is provided.
   * @returns The parsed URL components.
   */
  static parseURL(urlOrPathname: string, defaultDomain = ''): ParsedURL {
    let isAbsolutePath = urlOrPathname.startsWith('/');
    let domain = RouteUtils.getDomainPart(defaultDomain || urlOrPathname);

    if (isAbsolutePath) {
      isAbsolutePath = false;
      urlOrPathname = `${domain}/${RouteUtils.normalizePath(urlOrPathname)}`;
    }

    const hasProtocol = /^(?:([^:\/?#]+):\/\/)/.test(urlOrPathname);

    if (!hasProtocol && !isAbsolutePath) {
      throw new Error(
        `Expected input to be a full URL or an absolute path, received "${urlOrPathname}"`,
      );
    }

    const url = new URL(urlOrPathname, hasProtocol ? urlOrPathname : domain);
    const { pathname, search, hash } = url;

    const id = [
      RouteUtils.normalizePath(pathname),
      RouteUtils.resortQueryString(search),
      hash.replace(/^#/, ''),
    ].join('^');

    const parsedURL: ParsedURL = {
      domain,
      href: urlOrPathname,
      pathname,
      search,
      hash,
      route: `${pathname}${search}${hash ? `${hash}` : ''}`,
      isAbsolutePath: true,
      id,
    };

    if (isAbsolutePath) return parsedURL;

    return {
      ...parsedURL,
      protocol: url.protocol,
      host: url.host,
      hostname: url.hostname,
      port: url.port,
      isAbsolutePath: false,
    };
  }

  /**
   * Compares if two URLs have the same pathname.
   * @param firstURL The first URL to compare.
   * @param secondURL The second URL to compare.
   * @returns `true` if the pathnames are the same, `false` otherwise.
   */
  static isSamePathname(firstURL: string, secondURL: string): boolean {
    return (
      RouteUtils.parseURL(firstURL).pathname ===
      RouteUtils.parseURL(secondURL).pathname
    );
  }

  /**
   * Creates a route matcher for a specified path.
   * @param path The path pattern to create a matcher for.
   * @returns The route matcher.
   */
  static createRouteMatcher<Path extends string>(
    path: Path,
  ): RouteMatcher<Path> {
    let formattedPath = path
      .replace(/(\/:?)([^?/:]*)\?/g, '($1$2)')
      .concat(path.endsWith('/') ? '' : `(/)`);

    return new UrlPattern(formattedPath, {});
  }

  // Default domain value
  static DEFAULT_DOMAIN = { value: 'http://localhost' };

  // Private helper methods
  private static checkHasProtocol(url = ''): boolean {
    return /:\/\//.test(url);
  }

  private static getDefaultDomain(): string {
    if (
      typeof window === 'object' &&
      RouteUtils.checkHasProtocol(window.location.href)
    ) {
      return RouteUtils.getDomainPart(window.location.href);
    }
    return RouteUtils.DEFAULT_DOMAIN.value;
  }

  private static getDomainPart(url: string): string {
    if (!RouteUtils.checkHasProtocol(url)) return RouteUtils.getDefaultDomain();
    let parts = (url.split('?')[0] || '').split('/').slice(0, 3);
    return parts.join('/') || RouteUtils.getDefaultDomain();
  }

  static sortRoutes = (() => {
    function toValue(str: string) {
      if (str == '*') return 1e11; // wild
      if (/^\:(.*)\?/.test(str)) return 1111; // param optional
      if (/^\:(.*)\./.test(str)) return 11; // param w/ suffix
      if (/^\:/.test(str)) return 111; // param
      return 1; // static
    }

    function toRank(str: string) {
      let i = 0,
        out = '',
        arr = str.split('/');
      for (; i < arr.length; i++) out += toValue(arr[i]);
      return (i - 1) / +out;
    }

    return function sortRoutes<Routes extends (string | { path: string })[]>(
      paths: Routes,
      cache: Record<string, any> = {},
    ): Routes {
      return paths.sort(function (routeA, routeB) {
        const a = typeof routeA === 'string' ? routeA : routeA.path;
        const b = typeof routeB === 'string' ? routeB : routeB.path;

        return (
          (cache[b] = cache[b] || toRank(b)) -
          (cache[a] = cache[a] || toRank(a))
        );
      });
    };
  })();
}

// Types related to routing
export type ParsedURL = {
  pathname: string;
  search: string;
  hash: string;
  route: string;
  id: string;
  href: string;
  domain: string;
} & (
  | {
      isAbsolutePath: true;
    }
  | {
      isAbsolutePath: false;
      protocol: string;
      host: string;
      hostname: string;
      port: string;
    }
);

export interface RouteMatcher<Path extends string> {
  stringify: (params: GetRouteParams<Path>) => string;
  match(route: string): (GetRouteParams<Path> & { _?: string }) | null;
}

export type AlphaNumeric = string | number;

// extract route params from a string literal
export type ExtractRouteParams<Path extends string> =
  Path extends `:${infer Param}/${infer Rest}`
    ? Param | ExtractRouteParams<Rest>
    : Path extends `:${infer Param}`
      ? Param
      : Path extends `${string}:${infer Rest}`
        ? ExtractRouteParams<`:${Rest}`>
        : never;

// used to infer if a route needs a params object
export type GetRouteParams<Path extends string> =
  IsKnown<Path> extends 0
    ? {}
    : [ExtractRouteParams<Path>] extends [never]
      ? {}
      : {
            [K in ExtractRouteParams<Path>]: K extends `${string}?`
              ? AlphaNumeric | undefined
              : AlphaNumeric;
          } extends infer Parsed
        ? {
            // removing ending "?" simbol
            [K in ExcludeOptionalSymbol<keyof Parsed>]: Parsed extends {
              [KK in `${K}?`]: any;
            }
              ? AlphaNumeric | undefined
              : AlphaNumeric;
          }
        : never;

type ExcludeOptionalSymbol<T> = Extract<
  T extends `${infer Value}?` ? Value : T,
  string
>;
