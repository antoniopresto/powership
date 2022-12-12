import { ObjectType } from '@backland/schema';
import { notNull } from '@backland/utils';
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

  async start() {
    this.mongoServer = await MongoMemoryServer.create();
    const url = this.mongoServer.getUri();
    this.client = new MongoClient(url);
    this._transporter = new MongoTransporter({
      client: this.client,
      collection: 'users',
    });
    await this.transporter.connect().then((res) => {
      res.collection('users').createIndexes([
        {
          key: { _idPK: 1 },
        },
      ]);
    });
    return this;
  }

  async reset() {
    await this.mongoServer?.stop({ doCleanup: true, force: true });
    await ObjectType.reset();
  }

  collection(name?: string) {
    return this.client!.db.collection(name||this.collectionName);
  }

  get db() {
    return this.client!.db;
  }
}

export function createAppMock() {
  return new AppMock();
}
