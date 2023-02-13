import { createHandler } from './createHandler';

export function corsHandler(_options = {}) {
  return createHandler('cors', {
    async onRequest(request, { close, response }) {
      response.headers.set('Access-Control-Allow-Origin', '*');

      response.headers.set(
        'Access-Control-Allow-Methods',
        'GET,HEAD,PUT,PATCH,POST,DELETE'
      );

      response.headers.set('Access-Control-Allow-Headers', '*');

      if (request.method === 'OPTIONS') {
        response.statusCode = 200;
        close(response);
      }
    },

    async onResponse(response, { request, close }) {
      response.headers.set('Access-Control-Allow-Origin', '*');

      response.headers.set(
        'Access-Control-Allow-Methods',
        'GET,HEAD,PUT,PATCH,POST,DELETE'
      );

      response.headers.set('Access-Control-Allow-Headers', '*');

      if (request.method === 'OPTIONS') {
        response.statusCode = 200;
        close(response);
      }
    },
  });
}
