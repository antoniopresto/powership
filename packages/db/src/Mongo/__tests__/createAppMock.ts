import { ObjectType } from '@darch/schema';
import { MongoMemoryServer } from 'mongodb-memory-server-core';
import { MongoClient } from '../MongoClient';
import { notNull } from '@darch/utils/lib/invariant';

export class AppMock {
  client?: MongoClient;
  mongoServer?: MongoMemoryServer;

  constructor() {}

  async start() {
    this.mongoServer = await MongoMemoryServer.create();
    const url = this.mongoServer.getUri();
    this.client = new MongoClient(url);
    await this.client.connect();
    return this;
  }

  async reset() {
    await this.mongoServer?.stop({ doCleanup: true, force: true });
    await ObjectType.reset();
  }

  collection(name = 'testing') {
    return notNull(this.client).db.collection(name);
  }
}

export function createAppMock() {
  return new AppMock();
}
