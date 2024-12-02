import { MongoClient, MongoTransporter } from '@powership/mongo';

import { resetTypesCache } from '@powership/schema';
import { delay, notNull, randomInt, randomName } from '@powership/utils';
import { MongoMemoryServer } from 'mongodb-memory-server';

export class AppMock {
  client?: MongoClient;
  mongoServer?: MongoMemoryServer;
  _transporter?: MongoTransporter;
  isShuttingDown: boolean = false;

  constructor(collectionName = 'users') {
    this.collectionName = collectionName;
  }

  get transporter() {
    return notNull(this._transporter);
  }

  collectionName: string;

  async createIndexes(collection: any) {
    try {
      await collection.createIndexes(
        [
          {
            key: { _idPK: 1 },
            background: true,
          },
        ],
        {
          maxTimeMS: 10000,
        }
      );
    } catch (error: any) {
      if (
        !error.message?.includes('index already exists') &&
        error.code !== 11600
      ) {
        throw error;
      }
    }
  }

  async start(withTransporter = true) {
    if (withTransporter) {
      try {
        await delay(randomInt(100, 500));

        this.mongoServer = await MongoMemoryServer.create({
          instance: {
            dbName: randomName(),
          },
        });

        const url = this.mongoServer.getUri();
        this.client = new MongoClient(url);
        this._transporter = new MongoTransporter({
          client: this.client,
          collection: 'users',
        });

        await this.transporter.connect();
        await this.createIndexes(
          this.transporter._client.db.collection('users')
        );
      } catch (error) {
        await this.reset();
        throw error;
      }
    }

    return this;
  }

  async reset() {
    if (this.isShuttingDown) return;
    this.isShuttingDown = true;

    try {
      await resetTypesCache();

      await delay(100);

      if (this._transporter) {
        try {
          await this._transporter._client.client.close(true);
        } catch {}
        this._transporter = undefined;
      }

      if (this.client) {
        try {
          await this.client.client.close(true);
        } catch {}
        this.client = undefined;
      }

      await delay(1000);

      if (this.mongoServer?.state === 'running') {
        await this.mongoServer.stop({
          doCleanup: true,
          force: true,
        });
      }

      this.mongoServer = undefined;
    } catch (error) {
      console.error('Error during reset:', error);
    } finally {
      this.isShuttingDown = false;
    }
  }

  collection(name?: string) {
    if (!this.client?.db) {
      throw new Error('Database not initialized. Did you call start()?');
    }
    return this.client.db.collection(name || this.collectionName);
  }

  get db() {
    if (!this.client?.db) {
      throw new Error('Database not initialized. Did you call start()?');
    }
    return this.client.db;
  }
}

export function createAppMock() {
  return new AppMock();
}
