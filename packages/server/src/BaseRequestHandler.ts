import { getTypeName } from '@backland/utils';
import { AppLogger } from './AppLogger';
import { UnhandledSymbol } from './Symbol';
import { createRouteMatcher, RouteMatcher } from './routeMatch';
import { inspectObject, isProduction } from 'backland';
import { HttpError, InternalServerError, isHttpError, PreconditionFailed } from 'http-errors';
import { StatusCodes as StatusCodesEnum } from 'http-status-codes';
import qs, { ParsedQs } from 'qs';

export { HttpError, isHttpError };

export type BaseRequestHandlerInit = {
  url?: string;
  headers?: HeaderRecordInit | Headers;
  body?: RequestBody;
  statusCode?: AppResponseStatus;
  method?: string;
};

export class BaseRequest {
  urlObject!: URL;
  pathname!: string;
  host!: string;
  port!: string;
  query!: ParsedQs;
  headers!: Headers;
  method!: string;
  input!: BaseRequestHandlerInit;

  constructor(init: BaseRequestHandlerInit) {
    this.replace(init);
  }

  replace = (init: BaseRequestHandlerInit) => {
    this.input = init;

    const {
      //
      query,
      method,
      host,
      headers,
      pathname,
      port,
      urlObject,
    } = this.parseInit(init);

    this.query = query;
    this.method = method;
    this.headers = headers;
    this.host = host;
    this.pathname = pathname;
    this.port = port;
    this.urlObject = urlObject;

    return this;
  };

  parseInit = (init: BaseRequestHandlerInit) => {
    const headers = BaseRequest.parseHeaders(init.headers);
    const host = headers.get('host') || 'UNKNOWN';
    const method = (init.method || 'UNKNOWN').toUpperCase();

    const urlObject = new URL(
      init.url || '',
      `http://${host}` // fixme get protocol
    );

    const query = qs.parse(urlObject.search);
    const pathname = urlObject.pathname;
    const port = urlObject.port;

    return { headers, host, method, query, pathname, port, urlObject };
  };

  static parseHeaders = (input: BaseRequestHandlerInit['headers']): Headers => {
    if (input === undefined) return new Headers();
    if (input instanceof Headers) return input;
    if (input && typeof input === 'object') {
      const headers = new Headers();
      Object.entries(input).forEach(([name, v]) => {
        //
        if (Array.isArray(v)) {
          v.forEach((el) => {
            if (typeof el !== 'string') {
              throw new Error(`INVALID_HEADER_TYPE: ${typeof el}`);
            }
            headers.append(name, `${v}`);
          });
          return;
        }

        switch (typeof v) {
          case 'boolean':
          case 'string': {
            headers.append(name, `${v}`);
            break;
          }
          default: {
            throw new Error(`INVALID_HEADER_TYPE: ${typeof v}`);
          }
        }
      });
      return headers;
    }
    throw new Error('INVALID_HEADERS_CONFIG');
  };
}

export type _GraphQLDataBasic = null | undefined | string | number;

export type GraphQLDataResponse =
  | _GraphQLDataBasic
  | GraphQLDataResponse[]
  | Record<string, _GraphQLDataBasic>;

export type GraphQLResponseRecord = {
  [K: string]: GraphQLDataResponse;
};

export class BaseRequestHandler extends BaseRequest {
  body: string | Record<string, any> | UnhandledSymbol;
  headers: Headers;
  statusCode: AppResponseStatus;

  constructor(input: BaseRequestHandlerInit = {}) {
    super(input);

    const { body = UnhandledSymbol, headers, statusCode = 404 } = input;

    this.statusCode = statusCode;
    this.body = body;
    this.headers = BaseRequestHandler.parseHeaders(headers);
  }

  graphQLData(): GraphQLResponseRecord {
    const { data, errors } = this.graphQLResponse();
    if (errors?.length) {
      throw new PreconditionFailed(errors.map((el) => el.message).join('. '));
    }
    return data;
  }

  graphQLResponse(): {
    errors?: { message: string; path: string }[];
    data: GraphQLResponseRecord;
  } {
    try {
      const response = BaseRequestHandler.jsonBody(this.body);
      const { errors, data } = response;

      if (!errors && !('data' in response)) {
        return { errors: [{ message: 'Empty response.', path: '' }], data: {} };
      }

      return { errors, data };
    } catch (e: any) {
      return { errors: [{ message: e.message, path: '' }], data: {} };
    }
  }

  toHttpResponse = (): HTTPHandlerParsed => {
    return BaseRequestHandler.toHttp(this, 'RESPONSE');
  };

  toHttpRequest = (): HTTPHandlerParsed => {
    return BaseRequestHandler.toHttp(this, 'REQUEST');
  };

  /**
   * Return the matched routePattern parameters or null
   * if the route has no parameters, an empty object is returned
   * https://github.com/snd/url-pattern
   * @param routePattern
   */
  testRoute = <Path extends string>(routePattern: Path) => {
    return BaseRequestHandler.createRouteMatcher(routePattern).match(
      this.urlObject.pathname.replace(/\/$/, '')
    );
  };

  static createRouteMatcher<Path extends string>(routePattern: Path): RouteMatcher<Path> {
    return createRouteMatcher(routePattern);
  }

  static httpStatusCode(statusCode: AppResponseStatus): number {
    if (statusCode in StatusCodesEnum) {
      if (statusCode?.toString().match(/^\d*$/)) {
        return +statusCode;
      }
      return +StatusCodesEnum[statusCode];
    }
    return StatusCodesEnum.INTERNAL_SERVER_ERROR;
  }

  static httpResponseBody(body: BaseRequestHandler['body']) {
    if (typeof body === 'string') return body;

    if (body === UnhandledSymbol) return '';

    if (!body) return '';

    if (typeof body === 'object') {
      try {
        return JSON.stringify(body);
      } catch (e) {
        AppLogger.fatal(e);
        throw new InternalServerError();
      }
    }

    return '';
  }

  static jsonBody(body: BaseRequestHandler['body']): Record<string, any> {
    const constructorName = getTypeName(body);

    if (constructorName === 'String') {
      try {
        return JSON.parse(body as string);
      } catch (e) {
        console.error(`Failed to parse json.`);
        if (!isProduction()) {
          console.error(inspectObject(e));
        }
      }
    }

    if (constructorName === 'Object') {
      return body as object;
    }

    AppLogger.fatal(`Invalid body`, inspectObject(body));
    return {};
  }

  static headersNamed(headers: BaseRequestHandlerInit['headers']): HeaderNamed[] {
    const parsed = BaseRequestHandler.parseHeaders(headers);

    // @ts-ignore
    return [...parsed.entries()].reduce((acc, [name, value]) => {
      return [...acc, { name, value }];
    }, []);
  }

  static httpHeaders(headers: BaseRequestHandlerInit['headers']): HeaderRecord {
    return BaseRequestHandler.headersNamed(headers).reduce(
      (acc, { name, value }) => ({ ...acc, [name]: value }),
      {}
    );
  }

  static toHttp(
    input: BaseRequestHandlerInit | BaseRequestHandler,
    type: 'REQUEST' | 'RESPONSE'
  ): HTTPHandlerParsed {
    const req = new BaseRequest(input);

    return {
      body:
        type === 'RESPONSE'
          ? this.httpResponseBody(input.body ?? UnhandledSymbol)
          : input.body === UnhandledSymbol
          ? ''
          : input.body,

      headers: this.httpHeaders(input.headers),
      statusCode: this.httpStatusCode(input.statusCode ?? 404),
      headersNamed: this.headersNamed(input.headers),
      payload: {},
      method: req.method,
      query: req.query,
      type,
    };
  }
}

export type HTTPHandlerParsed = {
  headers: HeaderRecord;
  body: any;
  statusCode: number;
  headersNamed: HeaderNamed[];
  payload: Record<string, unknown>;
  method: string;
  query: ParsedQs;
  type: 'REQUEST' | 'RESPONSE';
};

export type RequestBody = string | Record<string, unknown> | UnhandledSymbol;

export type HeaderNamed = { name: string; value: string };

export type HeaderRecord = {
  [K: string]: string[];
};

export type HeaderRecordInit = {
  [K: string]: string | boolean | string[] | undefined;
};

export type AppResponseStatus = keyof typeof StatusCodesEnum | StatusCodesEnum;
