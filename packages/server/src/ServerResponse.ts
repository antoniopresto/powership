import { ms } from '@powership/utils';

import {
  BaseRequestHandler,
  HeaderRecordInit,
  ServerResponseStatus,
} from './BaseRequestHandler';
import { ServerLogs } from './ServerLogs';
import { UnhandledSymbol } from './Symbol';

export type ServerResponseInit = {
  body?: string | Record<string, any> | UnhandledSymbol;
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

    const maxAge = this.query['max-age'];
    if (typeof maxAge === 'string') {
      try {
        const strMaxAge = ms(maxAge as any);
        this.headers.set('Cache-Control', `max-age=${strMaxAge}`);
      } catch (e) {
        ServerLogs.error(e);
      }
    }
  }

  setHeader = (name: string, value: string) => {
    this.headers.set(name, value);
  };

  static create = (input: ServerResponseInit = {}): ServerResponse => {
    return new ServerResponse(input);
  };
}
