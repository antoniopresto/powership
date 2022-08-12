import { RuntimeError } from '@darch/utils/lib/RuntimeError';
import { Hope, hope } from '@darch/utils/lib/hoper';
import * as mongodb from 'mongodb';

export interface MongoClientOptions {
  dbName?: string;
  clientOptions?: mongodb.MongoClientOptions;
}

function defaulter(options: MongoClientOptions): Required<MongoClientOptions> {
  return {
    dbName: '',
    ...(options as any),
  };
}

export class MongoClient {
  options: Required<MongoClientOptions>;

  client: mongodb.MongoClient;
  _dbPromise?: Hope<mongodb.Db>;

  get db(): mongodb.Db {
    if (!this._dbPromise?.result) {
      let msg = 'MongoClient not connected yet.';
      if (!this.options.dbName) {
        msg += `\nCall MongoClient.connect(dbName?: string) or inform the dbName parameter on constructor to connect automatically.`;
      }
      throw new RuntimeError(msg, this._dbPromise);
    }
    return this._dbPromise.result;
  }

  constructor(url: string, options = {}) {
    this.options = defaulter(options);
    const { clientOptions } = this.options;

    this.client = new mongodb.MongoClient(url, clientOptions);
  }

  async connect(dbName?: string): Promise<mongodb.Db> {
    if (this._dbPromise) return this._dbPromise.promise;

    this._dbPromise = hope();
    const promise = this._dbPromise;

    this.client.connect((err, client) => {
      if (err) {
        promise.reject(err);
        throw err;
      }

      if (!client?.db) {
        promise.reject(new Error('connection failed'));
        throw err;
      }

      const db = client.db(dbName || undefined);
      promise.resolve(db);
    });

    return promise.promise;
  }

  static objectId(id?: string | number | mongodb.ObjectId) {
    return new mongodb.ObjectId(id);
  }
}
