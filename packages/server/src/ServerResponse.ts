import {
  BaseRequestHandler,
  HeaderRecordInit,
  RequestBody,
  ServerResponseStatus,
} from './BaseRequestHandler';

export type ServerResponseInit = {
  body?: RequestBody;
  headers?: HeaderRecordInit | Headers;
  statusCode?: ServerResponseStatus;
};

export class ServerResponse extends BaseRequestHandler {
  readonly type = 'RESPONSE';

  constructor(input: ServerResponseInit = {}) {
    super({
      body: input.body,
      headers: BaseRequestHandler.parseHeaders(input.headers),
    });
  }

  setHeader = (name: string, value: string) => {
    this.headers.set(name, value);
  };

  static create = (input: ServerResponseInit = {}): ServerResponse => {
    return new ServerResponse(input);
  };
}
