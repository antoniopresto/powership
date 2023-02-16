import { AppLogger } from './AppLogger';
import {
  AppResponseStatus,
  BaseRequestHandler,
  HeaderRecordInit,
} from './BaseRequestHandler';
import { UnhandledSymbol } from './Symbol';
import { ms } from 'solarwind';

export type AppResponseInit = {
  body?: string | Record<string, any> | UnhandledSymbol;
  headers?: HeaderRecordInit | Headers;
  statusCode?: AppResponseStatus;
};

export class AppResponse extends BaseRequestHandler {
  readonly type = 'RESPONSE';

  constructor(input: AppResponseInit = {}) {
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
        AppLogger.error(e);
      }
    }
  }

  setHeader = (name: string, value: string) => {
    this.headers.set(name, value);
  };

  static create = (input: AppResponseInit = {}): AppResponse => {
    return new AppResponse(input);
  };
}
