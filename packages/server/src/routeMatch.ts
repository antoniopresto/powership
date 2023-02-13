import { IsKnown } from 'backland';
import UrlPattern from 'url-pattern';

/**
 * A wrapper around UrlPattern with improved typings
 * @param path
 * see: https://github.com/snd/url-pattern
 */
export function createRouteMatcher<Path extends string>(
  path: Path
): RouteMatcher<Path> {
  let _path = path
    // changing the path to the format expected by UrlPattern for optional route parameters
    // https://www.npmjs.com/package/url-pattern#optional-segments-wildcards-and-escaping
    .replace(/(\/:?)([^?/:]*)\?/g, '($1$2)');

  if (_path.endsWith('/')) {
    _path = path.slice(0, -1);
  }

  _path += `(/)`;

  return new UrlPattern(_path, {});
}

export interface RouteMatcher<Path extends string> {
  stringify: (params: GetRouteParams<Path>) => string;
  match(route: string): GetRouteParams<Path> | null;
}

export type AlphaNumeric = string | number;

// extract route params from a string literal
export type ExtractRouteParams<
  Path extends string
> = Path extends `:${infer Param}/${infer Rest}`
  ? Param | ExtractRouteParams<Rest>
  : Path extends `:${infer Param}`
  ? Param
  : Path extends `${string}:${infer Rest}`
  ? ExtractRouteParams<`:${Rest}`>
  : never;

// used to infer if a route needs a params object
export type GetRouteParams<Path extends string> = IsKnown<Path> extends 0
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
      [K in ExcludeOptionalSimbol<keyof Parsed>]: Parsed extends {
        [KK in `${K}?`]: any;
      }
        ? AlphaNumeric | undefined
        : AlphaNumeric;
    }
  : never;

type ExcludeOptionalSimbol<T> = Extract<
  T extends `${infer Value}?` ? Value : T,
  string
>;
