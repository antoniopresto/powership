import type { App, CloseResponseFunction, Handler } from './App';
import type { AppRequest } from './AppRequest';
import type { AppResponse } from './AppResponse';
import { createHandler } from './createHandler';
import type { GetRouteParams } from './routeMatch';
import { createRouteMatcher } from './routeMatch';

export type RouteHandlerContext<Path extends string = string> = {
  path: Path;
  request: AppRequest;
  response: AppResponse;
  close: CloseResponseFunction;
  app: App;
  params: GetRouteParams<Path>;
};

export interface RouteHandlerCallback<Path extends string> {
  (this: RouteHandlerContext<Path>, context: RouteHandlerContext<Path>): any;
}

export function createRouteHandler<
  Path extends string,
  Callback extends RouteHandlerCallback<Path>
>(path: Path, handler: RouteHandlerCallback<Path>): Handler<undefined>;

export function createRouteHandler<
  Path extends string,
  Callback extends RouteHandlerCallback<Path>,
  StaticData extends Record<string, any>
>(
  path: Path,
  handler: RouteHandlerCallback<Path>,
  data: StaticData
): Handler<StaticData>;

export function createRouteHandler(
  path: string,
  handler: RouteHandlerCallback<string>,
  data?: Record<string, any>
) {
  //
  const matcher = createRouteMatcher(path);

  return createHandler(
    path,
    {
      async onRequest(request, { response, app, close }): Promise<any> {
        const { pathname: request_path } = request;

        const params = matcher.match(request_path);
        if (!params) return;

        const context: RouteHandlerContext = {
          path: request_path,
          request,
          response,
          close,
          app,
          params,
        };

        await handler.call(context, context);
      },
    },
    data as any
  );
}
