import * as process from 'process';

import { ObjectType } from '@swind/schema';
import { delay, inspectObject, notNull } from '@swind/utils';
import { MongoMemoryServer } from 'mongodb-memory-server-core';

import { MongoClient } from '../MongoClient';
import { MongoTransporter } from '../MongoTransporter';

export class AppMock {
  client?: MongoClient;
  mongoServer?: MongoMemoryServer;
  _transporter?: MongoTransporter;

  get transporter() {
    return notNull(this._transporter);
  }

  collectionName: string;
  constructor(collectionName = 'users') {
    this.collectionName = collectionName;
  }

  async start(withTransporter = true) {
    if (withTransporter) {
      this.mongoServer = await MongoMemoryServer.create();
      const url = this.mongoServer.getUri();
      this.client = new MongoClient(url);
      this._transporter = new MongoTransporter({
        client: this.client,
        collection: 'users',
      });

      await this.transporter
        .connect()
        .then((res) => {
          res.collection('users').createIndexes([
            {
              key: { _idPK: 1 },
            },
          ]);
        })
        .catch((e) => {
          process.stderr.write(inspectObject(e));
        });
    }

    return this;
  }

  async reset() {
    try {
      await ObjectType.reset();
      const mongoServer = this.mongoServer;

      (() => {
        if (this.mongoServer?.state === 'running') {
          delay(100).then(() => {
            mongoServer
              ?.stop({ doCleanup: true, force: true })
              .catch(console.error);
          });
        }
      })();
    } catch (e) {
      console.error(e);
    }
  }

  collection(name?: string) {
    return this.client!.db.collection(name || this.collectionName);
  }

  get db() {
    return this.client!.db;
  }
}

export function createAppMock() {
  return new AppMock();
}
