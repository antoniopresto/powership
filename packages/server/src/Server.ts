import * as HTTP from 'http';
import type { AddressInfo } from 'net';

import { hope, Hope, NodeLogger } from '@powership/utils';
import { Compute, nonNullValues } from '@powership/utils';
import httpErrors from 'http-errors';
import { createAsyncPlugin } from 'plugin-hooks';

import { isHttpError, RequestBody } from './BaseRequestHandler';
import { ServerLogs } from './ServerLogs';
import { ServerRequest } from './ServerRequest';
import { ServerResponse } from './ServerResponse';
import { UnhandledSymbol } from './Symbol';
import { _404 } from './_404';
import { parseHTTPBody } from './bodyParserHandler';
import { createHandler } from './createHandler';

const { InternalServerError, NotFound } = httpErrors;

export type ServerDefinition = {
  handlers: Handler<any>[];
};

export class Server {
  defaultHandlers = [
    createHandler('defaultErrorHandler', {
      // Handling errors
      onError(_response, { close, error }) {
        if (this.handledCount) return;

        // initial Response

        ServerLogs.error(error);

        const httpError = isHttpError(error)
          ? error
          : new InternalServerError();

        const errorResponse = ServerResponse.create(httpError);

        close(errorResponse);
      },
    }),

    createHandler('notFoundHandler', {
      onResponse(_request, { close }) {
        if (this.handledCount) return; // TODO should be the last handler. check

        const httpError = new NotFound();
        httpError.body = _404();
        const errorResponse = ServerResponse.create(httpError);

        close(errorResponse);
      },
    }),
  ];

  constructor(definition: ServerDefinition) {
    this.definitionInput = definition;
    this.handlers = [...definition.handlers, ...this.defaultHandlers];
  }

  static create = (definition: ServerDefinition) => {
    return new Server(definition);
  };

  hooks = createHooks();

  private server?: HTTP.Server;

  closeServer = async (): Promise<'NOT_STARTED' | 'CLOSED'> => {
    const server = this.server;
    if (!server) return 'NOT_STARTED';

    return new Promise((resolve, reject) => {
      server.close((err) => {
        if (err) return reject(err);
        resolve('CLOSED');
      });
    });
  };

  usedDefinition?: ServerDefinition;
  hasStarted = false;

  readonly definitionInput:
    | ServerDefinition
    | ((app: Server) => ServerDefinition);

  readonly handlers: Handler[];

  handleRequest = (request: ServerRequest): Hope<ServerResponse> => {
    let closed = false;
    const app = this;

    const hopeForResponse = hope<ServerResponse>();

    (async () => {
      try {
        if (!app.hasStarted) {
          await this.start();
        }

        const hooks = app.hooks;

        await (async () => {
          const close: CloseResponseFunction = function close(...args) {
            //
            const finalResponse = (() => {
              const arg0 = args[0];
              if (!arg0) return appResponse;
              if (typeof arg0 === 'object') return arg0;
              appResponse.statusCode = arg0;
              return appResponse;
            })();

            if (closed || hopeForResponse.result || hopeForResponse.error) {
              closed = true;
              return;
            } else {
              closed = true;
            }

            if (!finalResponse) {
              closed = true;
              hopeForResponse.resolve(appResponse);
              return;
            }

            try {
              hopeForResponse.resolve(finalResponse);
            } catch (e: any) {
              if (!(hopeForResponse.result || hopeForResponse.error)) {
                onError(e).catch(ServerLogs.error);
              }
            }
          };

          let appResponse = ServerResponse.create();

          request.body = await hooks.onParseBody.dispatch(request.body, {
            req: request,
            res: appResponse,
            app,
            close,
          });

          request = await hooks.onRequest.dispatch(request, {
            app,
            response: appResponse,
            close,
          });

          appResponse = await hooks.onResponse.dispatch(appResponse, {
            app,
            request,
            close,
          });

          async function onError(error: Error) {
            const errorResponse = await hooks.onError.dispatch(appResponse, {
              request,
              error,
              close,
            });

            close(errorResponse);
          }

          if (!closed) {
            close(appResponse);
          }
        })();
      } catch (e: any) {
        hopeForResponse.reject(e);
      }
    })();

    return hopeForResponse;
  };

  withServer: ServerServerInfo | false = false;

  start(port: number): Promise<ServerStartResult>;
  start(port?: undefined): Promise<Server & { withServer: false }>;
  async start(port?: number | undefined) {
    const app = this;

    if (!app.hasStarted) {
      this._startHandlers();
    }

    if (app.hasStarted) {
      ServerLogs.info('RESTARTING_APP');
      await this.closeServer();
    }

    app.hasStarted = true;

    this.usedDefinition = await (() => {
      if (typeof this.definitionInput === 'function') {
        return this.definitionInput(this);
      }
      return this.definitionInput;
    })();

    const hooks = this.hooks;

    if (port === undefined) return app;

    if (!hooks.onResponse.middlewares.length) {
      NodeLogger.logWarning(`⚠️ No handlers listening to onResponse.`);
    }

    let server = HTTP.createServer(async function _requestListener(
      httpServerRequest,
      httpServerResponse
    ) {
      try {
        const { httpMethod } = nonNullValues({
          httpMethod: httpServerRequest.method,
        });

        const requestBody = await parseHTTPBody(
          httpServerRequest,
          httpServerResponse
        );

        const appRequest = ServerRequest.create({
          body: requestBody,
          headers: httpServerRequest.headers,
          locals: {},
          url: httpServerRequest.url,
          method: httpMethod,
        });

        const response = await app.handleRequest(appRequest);

        const { statusCode, body, headersNamed, streamBody } =
          response.toHttpResponse();

        httpServerResponse.statusCode = statusCode;

        headersNamed.forEach(({ name, value }) => {
          httpServerResponse.setHeader(name, value);
        });

        if (streamBody) {
          streamBody.on('error', (error) => {
            ServerLogs.error(error);
            httpServerResponse.statusCode = 500;
            httpServerResponse.end();
          });
          streamBody.pipe(httpServerResponse);
        } else {
          httpServerResponse.end(body);
        }
      } catch (error) {
        console.trace(error);
        ServerLogs.error(error);

        if (httpServerResponse.headersSent) {
          ServerLogs.error(`ERROR_AFTER_HEADERS_SENT`, error);
        } else {
          const error = new InternalServerError();
          httpServerResponse.statusCode = error.statusCode;
          if (error.headers) {
            Object.entries(error.headers).forEach(([k, v]) => {
              httpServerResponse.setHeader(k, v as any);
            });
          }
          httpServerResponse.end(error.message);
        }
      }
    });

    // server = await this.hooks.willStartServer.dispatch(server, { app: this });

    return new Promise(async (resolve, reject) => {
      try {
        server.listen(port, () => {
          const addressInfo = server.address();

          if (!addressInfo || typeof addressInfo !== 'object') {
            ServerLogs.info({ addressInfo });
            throw new Error(`Failed to recovery server addressInfo.`);
          }

          app.withServer = {
            server,
            ...addressInfo,
          };

          resolve(
            Object.assign(app, {
              server,
              ...addressInfo,
            })
          );
        });
        await this.hooks.started.dispatch(server, { app: this });
      } catch (e) {
        reject(e);
      }
    });
  }

  private _startHandlers = () => {
    const handlerByName: { [K: string]: Handler } = {};
    this.handlers.forEach((appHandler) => {
      const { hooks, name } = appHandler;

      if (handlerByName[name] && handlerByName[name] !== appHandler) {
        console.warn(`Handler with name "${name}" already registered.`);
      } else {
        handlerByName[name] = appHandler;
      }

      Object.entries(hooks).forEach(([hookName, handler]) => {
        try {
          Object.defineProperty(handler, 'name', {
            value: `${name}_${hookName}`,
          });
        } catch (e) {}

        this.hooks[hookName].pushMiddleware(handler);
      });
    });
    return handlerByName;
  };
}

export type Handler<
  Data extends Record<string, any> | undefined = {} | undefined
> = {
  name: string;
  hooks: ServerHooksRecord;
  data: Data;
};

export type ServerHooksRecord = {
  [K in keyof ServerHooks]?: Parameters<
    ServerHooks[K]
  >[0] extends infer Register
    ? Register
    : never;
};

export type ServerHooks = ReturnType<typeof createHooks>;

function createHooks() {
  return {
    willStartServer: createAsyncPlugin<HTTP.Server, { app: Server }>(),
    started: createAsyncPlugin<HTTP.Server, { app: Server }>(),
    onParseBody: createAsyncPlugin<
      RequestBody | UnhandledSymbol,
      {
        req: ServerRequest;
        res: ServerResponse;
        app: Server;
        close: CloseResponseFunction;
      }
    >(),
    onRequest: createAsyncPlugin<
      ServerRequest,
      { response: ServerResponse; app: Server; close: CloseResponseFunction }
    >(),
    onResponse: createAsyncPlugin<
      ServerResponse,
      { request: ServerRequest; app: Server; close: CloseResponseFunction }
    >(),
    onError: createAsyncPlugin<
      ServerResponse,
      {
        request: ServerRequest;
        error: Error;
        close: CloseResponseFunction;
      }
    >(),
  };
}

export type ServerServerInfo = Compute<{ server: HTTP.Server } & AddressInfo>;

export type ServerStartResult = Server &
  ServerServerInfo & { withServer: ServerServerInfo };

export interface CloseResponseFunction {
  (response?: ServerResponse | ServerResponse['statusCode']): void;
}
