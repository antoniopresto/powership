import nodePath from 'path';

import { createGraphQLSchema, Resolver } from '@swind/schema';
import { AnyRecord, isProduction } from '@swind/utils';
import { graphql } from 'graphql';
import { renderPlaygroundPage } from 'graphql-playground-html';

import { Handler } from '../Server';
import { ServerLogs } from '../ServerLogs';
import { createRouteHandler } from '../createRouteHandler';

import { maskErrors } from './errorHandler';
import { generateTypes } from './generateTypes';

export type ResolversRecord = Record<string, Resolver<any, any, any, any>>;

export type GraphqlHandlerOptions<Resolvers extends ResolversRecord> = {
  path?: string; // defaults to /api/graphql
  playgroundAPIUrl?: string; // defaults path value
  resolvers: Resolvers;
};

export function createGraphQLHandlers<Resolvers extends ResolversRecord>(
  definition: GraphqlHandlerOptions<Resolvers>
): Handler[] {
  const { resolvers, path = '/graphql', playgroundAPIUrl = path } = definition;

  const IS_PROD = isProduction();

  const resolversList = Object.values(resolvers);

  const schema = createGraphQLSchema(resolversList);
  maskErrors(schema);

  const data = { schema, resolvers, definition, resolversList } as const;

  const graphQLHandler = createRouteHandler(
    path,
    async function onRequest({ request, response, close }) {
      // Determine whether we should render GraphiQL instead of returning an API response
      if (request.method === 'GET') {
        Object.assign(response, genPlaygroudResponse(playgroundAPIUrl));
        close(response);
        return;
      } else if (request.method === 'POST') {
        const { operationName, query, variables } = request.body as AnyRecord;

        try {
          const { data, errors } = await graphql({
            contextValue: request,
            schema,
            source: query,
            variableValues: variables,
            operationName,
          });

          response.statusCode = 200;
          response.body = JSON.stringify({ data, errors });

          close(response);
        } catch (e) {
          close(500);
        }
      }
    },
    data
  );

  const typesPath = nodePath.join(path, 'types');
  // const utilsPath = nodePath.join(path, 'utils');
  const mockPath = nodePath.join(path, 'mock');

  const typesHandler = createRouteHandler(
    typesPath,
    async function ({ response, close }) {
      response.body = await generateTypes(schema);
      response.statusCode = 200;
      response.headers.append('Content-Type', 'text/typescript');
      return close(response);
    }
  );

  const mockHandler = createRouteHandler(
    mockPath,
    async function ({ response, close }) {
      if (IS_PROD) {
        response.statusCode = 'METHOD_NOT_ALLOWED';
        response.body = 'NOT_ALLOWED_IN_PRODUCTION';
        return close(response);
      }

      response.body = '';

      response.statusCode = 200;
      response.headers.append('Content-type', 'text/html');
      close(response);
    }
  );

  // const utilsHandler = createRouteHandler(
  //   utilsPath,
  //   async function ({ response, request, close }) {
  //     const body: any = request.body;
  //
  //     const json =
  //       typeof body.json === 'string'
  //         ? JSON.parse(body.json.trim())
  //         : body.json || {};
  //
  //     const page = await solarwindUtilsResolver({
  //       ...body,
  //       json,
  //       url: request.urlObject.pathname,
  //     });
  //
  //     response.body = page.body;
  //     response.headers.set('Content-Type', page.headers['Content-Type']);
  //     response.statusCode = page.statusCode;
  //
  //     return close(response);
  //   }
  // );

  return [
    // utilsHandler,
    typesHandler,
    mockHandler,
    graphQLHandler, //
  ];
}

function genPlaygroudResponse(playgroundAPIUrl: string) {
  let html = renderPlaygroundPage({
    title: 'GraphQL',
    endpoint: playgroundAPIUrl,
    // @ts-ignore
    // https://github.com/graphql/graphql-playground/pull/1401/files#
    shareEnabled: true,
    settings: {
      'editor.cursorShape': 'line',
      'editor.fontFamily':
        "'Source Code Pro', 'Consolas', 'Inconsolata', 'Droid Sans Mono', 'Monaco', monospace",
      'editor.fontSize': 14,
      'editor.reuseHeaders': true,
      'editor.theme': 'dark',
      'general.betaUpdates': false,
      // @ts-ignore
      'prettier.printWidth': 80,
      'prettier.tabWidth': 2,
      'prettier.useTabs': false,
      'request.credentials': 'include',
      'request.globalHeaders': {},
      'schema.disableComments': true,
      'schema.polling.enable': true,
      'schema.polling.endpointFilter': '*localhost*',
      'schema.polling.interval': 10000,
      'tracing.hideTracingResponse': true,
      'tracing.tracingSupported': true,
    },
  });

  html = html.replace(
    '</body>',
    `
    window.addEventListener('load', function (event) {
      document.title = "Playground"
    });
  </body>`
  );

  try {
    return {
      body: html,
      statusCode: 200,
      headers: { 'Content-Type': 'text/html' },
    };
  } catch (e) {
    console.error(e);
    ServerLogs.error(e);
    return {
      body: 'INVALID_REQUEST',
      statusCode: 400,
    };
  }
}
