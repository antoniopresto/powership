import * as HTTP from 'http';

import bodyParser from 'body-parser';

export function parseHTTPBody(
  req: HTTP.IncomingMessage & { body?: any },
  res: HTTP.ServerResponse
): Promise<any> {
  const parseRaw = bodyParser.raw({
    type: 'text/html',
  });

  const parseJSON = bodyParser.json({
    type: 'application/json',
  });

  return new Promise((resolve, reject) => {
    parseRaw(req, res, (err) => {
      if (err) return reject(err);
      parseJSON(req, res, (err) => {
        if (err) return reject(err);
        resolve(req.body);
      });
    });
  });
}
