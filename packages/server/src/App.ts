import * as HTTP from 'http';
import type { AddressInfo } from 'net';

import { hope, Hope, NodeLogger } from '@swind/utils';
import { AppLogger } from './AppLogger';
import { AppRequest } from './AppRequest';
import { AppResponse } from './AppResponse';
import { isHttpError, RequestBody } from './BaseRequestHandler';
import { UnhandledSymbol } from './Symbol';
import { _404 } from './_404';
import { parseHTTPBody } from './bodyParserHandler';
import { createHandler } from './createHandler';
import { AnyFunction, Compute, isProduction, nonNullValues } from 'solarwind';
import { InternalServerError, NotFound } from 'http-errors';
import { createAsyncPlugin } from 'plugin-hooks';
import { log } from '@0k/backend/log';

export type AppDefinition = {
  handlers: Handler<any>[];
};

export class App {
  defaultHandlers = [
    createHandler('defaultErrorHandler', {
      // Handling errors
      onError(_response, { close, error }) {
        if (this.handledCount) return;

        // initial Response

        AppLogger.error(error);

        const httpError = isHttpError(error) ? error : new InternalServerError();

        const errorResponse = AppResponse.create(httpError);

        close(errorResponse);
      },
    }),

    createHandler('notFoundHandler', {
      onResponse(_request, { close }) {
        if (this.handledCount) return; // TODO should be the last handler. check

        const httpError = new NotFound();
        httpError.body = _404();
        const errorResponse = AppResponse.create(httpError);

        close(errorResponse);
      },
    }),
  ];

  constructor(definition: AppDefinition) {
    this.definitionInput = definition;
    this.handlers = [...definition.handlers, ...this.defaultHandlers];
  }

  static create = (definition: AppDefinition) => {
    return new App(definition);
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

  usedDefinition?: AppDefinition;
  hasStarted = false;

  readonly definitionInput: AppDefinition | ((app: App) => AppDefinition);

  readonly handlers: Handler[];

  handleRequest = (request: AppRequest): Hope<AppResponse> => {
    let closed = false;
    const app = this;

    const hopeForResponse = hope<AppResponse>();

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
                onError(e).catch(AppLogger.error);
              }
            }
          };

          let appResponse = AppResponse.create();

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

  withServer: AppServerInfo | false = false;

  start(port: number): Promise<AppStartResult>;
  start(port?: undefined): Promise<App & { withServer: false }>;
  async start(port?: number | undefined) {
    const app = this;

    if (!app.hasStarted) {
      this._startHandlers();
    }

    if (app.hasStarted) {
      AppLogger.info('RESTARTING_APP');
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

        const requestBody = await parseHTTPBody(httpServerRequest, httpServerResponse);

        const appRequest = AppRequest.create({
          body: requestBody,
          headers: httpServerRequest.headers,
          locals: {},
          url: httpServerRequest.url,
          method: httpMethod,
        });

        const response = await app.handleRequest(appRequest);

        const { statusCode, body, headersNamed } = response.toHttpResponse();
        httpServerResponse.statusCode = statusCode;

        headersNamed.forEach(({ name, value }) => {
          httpServerResponse.setHeader(name, value);
        });

        httpServerResponse.end(body);
      } catch (error) {
        console.trace(error);
        AppLogger.error(error);

        if (httpServerResponse.headersSent) {
          AppLogger.error(`ERROR_AFTER_HEADERS_SENT`, error);
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
            AppLogger.info({ addressInfo });
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
    this.handlers.forEach((appHandler, num) => {
      const { hooks, name } = appHandler;

      if (handlerByName[name] && handlerByName[name] !== appHandler) {
        console.warn(`Handler with name "${name}" already registered.`);
      } else {
        handlerByName[name] = appHandler;
      }

      Object.entries(hooks).forEach(([hookName, handler]) => {
        try {
          Object.defineProperty(handler, 'name', { value: `${name}_${hookName}` });
        } catch (e) {}

        this.hooks[hookName].pushMiddleware(handler);
      });
    });
    return handlerByName;
  };
}

export type Handler<Data extends Record<string, any> | undefined = {} | undefined> = {
  name: string;
  hooks: AppHooksRecord;
  data: Data;
};

export type AppHooksRecord = {
  [K in keyof AppHooks]?: Parameters<AppHooks[K]>[0] extends infer Register ? Register : never;
};

export type AppHooks = ReturnType<typeof createHooks>;

function createHooks() {
  return {
    willStartServer: createAsyncPlugin<HTTP.Server, { app: App }>(),
    started: createAsyncPlugin<HTTP.Server, { app: App }>(),
    onParseBody: createAsyncPlugin<
      RequestBody | UnhandledSymbol,
      {
        req: AppRequest;
        res: AppResponse;
        app: App;
        close: CloseResponseFunction;
      }
    >(),
    onRequest: createAsyncPlugin<
      AppRequest,
      { response: AppResponse; app: App; close: CloseResponseFunction }
    >(),
    onResponse: createAsyncPlugin<
      AppResponse,
      { request: AppRequest; app: App; close: CloseResponseFunction }
    >(),
    onError: createAsyncPlugin<
      AppResponse,
      {
        request: AppRequest;
        error: Error;
        close: CloseResponseFunction;
      }
    >(),
  };
}

export type AppServerInfo = Compute<{ server: HTTP.Server } & AddressInfo>;

export type AppStartResult = App & AppServerInfo & { withServer: AppServerInfo };

export interface CloseResponseFunction {
  (response?: AppResponse | AppResponse['statusCode']): void;
}
