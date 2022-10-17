import { ObjectType } from '@backland/schema';
import { notNull } from '@backland/utils/lib/invariant';
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

  constructor() {}

  async start() {
    this.mongoServer = await MongoMemoryServer.create();
    const url = this.mongoServer.getUri();
    this.client = new MongoClient(url);
    this._transporter = new MongoTransporter({
      client: this.client,
      collection: 'users',
    });
    await this.transporter.connect();
    return this;
  }

  async reset() {
    await this.mongoServer?.stop({ doCleanup: true, force: true });
    await ObjectType.reset();
  }

  collection(name = 'testing') {
    return notNull(this.client).db.collection(name);
  }

  get db() {
    return notNull(this.client).db;
  }
}

export function createAppMock() {
  return new AppMock();
}
