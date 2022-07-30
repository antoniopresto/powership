import { createObjectType } from '@darch/schema';
import { ULID_REGEX } from '@darch/schema/lib/fields/UlidField';
import { delay } from '@darch/utils/lib/delay';

import { Transporter } from '../../Transporter/Transporter';
import { AppMock } from '../../__tests__/appMock';
import { Entity } from '../Entity';

describe('Entity', () => {
  let entity: Entity<any>;

  beforeEach(() => {
    entity = new Entity({
      name: 'myType',
      schema: {
        name: 'string',
        status: { enum: ['open', 'closed'] },
      } as const,
    });

    Entity.reset();
  });

  afterEach(() => {
    jest.restoreAllMocks();
    Entity.reset();
  });

  it('creates GQL type', () => {
    const sdl = entity.toGraphQL().typeToString().split('\n');
    expect(sdl).toEqual([
      'type MyType {',
      '  SK: String',
      '  name: String!',
      '  status: MyTypeStatusEnum!',
      '  PK: String!',
      '  ID: Ulid!',
      '}',
    ]);
  });

  it('extend', () => {
    const type = new Entity({
      name: 'myType',
      schema: createObjectType({
        name: 'string',
        status: { enum: ['open', 'closed'] },
      } as const),
    }).extend((type) => {
      return {
        sayHy(yourName: string) {
          return `Hy ${yourName}. From ${type.entityName}`;
        },
      };
    });

    expect(type.sayHy('antonio')).toBe('Hy antonio. From MyType');
  });

  it('handle extend error', () => {
    const sut = () =>
      new Entity({
        name: 'myType',
        schema: createObjectType({
          name: 'string',
          status: { enum: ['open', 'closed'] },
        } as const),
      }).extend(() => {
        throw new Error(`SubError`);
      });

    expect(sut).toThrow('Failed to extend entity MyType: SubError');
  });

  it('creates PK and SK fields', () => {
    const entity = new Entity({
      name: 'myType',
      schema: createObjectType({
        name: 'string',
        status: { enum: ['open', 'closed'] },
      } as const),
    });

    expect(entity.type.definition.PK).toEqual({
      list: false,
      optional: false,
      type: 'string',
    });

    expect(entity.type.definition.SK).toEqual({
      def: [
        {
          list: false,
          optional: false,
          type: 'string',
        },
        {
          list: false,
          optional: false,
          type: 'int',
        },
      ],
      list: false,
      optional: true,
      type: 'union',
    });
  });

  it('should run hooks parse hooks', async () => {
    const entity = new Entity({
      name: 'myType',
      schema: createObjectType({
        steps: '[string]',
        status: { enum: ['open', 'closed'] },
      } as const),
    });

    const parallelHooks: string[] = [];

    entity.registerPlugins((hooks) => {
      hooks.preParseParallel.register(async function plugin1() {
        await delay(1000);
        parallelHooks.push('preParseParallel__1000ms');
      });

      hooks.preParseParallel.register(async function plugin2(input) {
        parallelHooks.push('preParseParallel2');
      });

      hooks.preParseParallel.register(async function plugin3(input) {
        parallelHooks.push('preParseParallel3');
      });

      hooks.preParse.register(async function plugin4(input) {
        await delay(300);
        input.steps?.push('preParse1');
      });

      hooks.preParse.register(async function plugin5(input) {
        input.steps?.push('preParse2');
      });

      hooks.preParse.register(async function plugi6(input) {
        input.steps?.push('preParse3');
        return input;
      });

      hooks.postParseParallel.register(async function plugin7(input) {
        await delay(300);
        parallelHooks.push('postParseParallel1__300ms');
      });

      hooks.postParseParallel.register(async function plugin8(input) {
        parallelHooks.push('postParseParallel2');
      });

      hooks.postParseParallel.register(async function plugin9(input) {
        parallelHooks.push('postParseParallel3');
      });

      hooks.postParse.register(async function plugin(input) {
        await delay(300);
        input.steps?.push('postParse1');
      });

      hooks.postParse.register(async function plugin(input) {
        input.steps?.push('postParse2');
      });

      hooks.postParse.register(async function plugin(input) {
        input.steps?.push('postParse3');
        return input;
      });
    });

    const value = await entity.parse({
      op: 'createOne',
      methodOptions: {
        item: { steps: [], status: 'open', PK: '1' },
      },
    });

    expect(value.steps).toEqual([
      'preParse1',
      'preParse2',
      'preParse3',

      // post
      'postParse1',
      'postParse2',
      'postParse3',
    ]);

    await delay(1000); // await parallel hooks

    expect(parallelHooks).toEqual([
      'preParseParallel2',
      'preParseParallel3',

      'postParseParallel2',
      'postParseParallel3',

      'postParseParallel1__300ms',
      'preParseParallel__1000ms',
    ]);
  });

  it('should mount PK from keys', async () => {
    const entity = new Entity({
      name: 'myType',
      schema: createObjectType({
        name: 'string',
        status: { enum: ['open', 'closed'] },
      } as const),
      PK: [`#users`, '.name', '.status'],
    });

    const sut = await entity.parse({
      op: 'createOne',
      methodOptions: {
        item: { name: 'antonio', status: 'open' },
      },
    });

    expect(sut.PK).toBe('users#antonio#open');
  });

  it('should allow SK to use PK and ID values', async () => {
    const entity = new Entity({
      name: 'myType',
      schema: createObjectType({
        name: 'string',
        status: { enum: ['open', 'closed'] },
      } as const),
      PK: [`#users`, '.name', '.status'],
      SK: ['.PK', '.ulid'],
    });

    const sut = await entity.parse({
      op: 'createOne',
      methodOptions: { item: { name: 'antonio', status: 'open' } },
    });

    expect(sut.SK).toBe(sut.PK + '#' + sut.ulid);
  });

  it('should mount  ID as ulid on create', async () => {
    const entity = new Entity({
      name: 'myType',
      schema: createObjectType({
        name: 'string',
        status: { enum: ['open', 'closed'] },
      } as const),
      PK: [`#users`, '.name', '.status'],
    });

    const sut = await entity.parse({
      methodOptions: { item: { name: 'antonio', status: 'open' } },
      op: 'createOne',
    });

    expect(sut.ulid).toMatch(ULID_REGEX);
  });

  it('create', async () => {
    const putItem: Transporter['putItem'] = async (options) => ({
      updated: true,
      created: true,
      item: options.item,
      original: options.item,
    });

    const transporter: any = {
      putItem,
    };

    const spy = jest.spyOn(transporter, 'putItem');

    const single = await entity.createOne({
      item: { name: 'antonios bar', status: 'open', PK: '1' },
      transporter,
    });

    expect(spy).toBeCalledWith(
      expect.objectContaining({
        item: {
          ID: expect.stringMatching(/^01/),
          name: 'antonios bar',
          status: 'open',
          PK: '1',
        },
      })
    );

    expect(single.created).toEqual(true);
  });

  describe('createOne', () => {
    let mockApp: AppMock;

    beforeEach(() => {
      Entity.reset();
    });

    afterEach(() => {
      mockApp?.reset();
    });

    it('should require transporter', async () => {
      const entity = new Entity({
        name: 'myType',
        PK: ['#user', '.username', '.status', '.age'],
        schema: {
          username: 'string',
          status: { enum: ['open', 'closed'] } as const,
          age: 'int?',
        } as const,
      });

      await expect(
        entity.createOne({
          item: { username: 'antonio', status: 'open', age: 32 },
        })
      ).rejects.toThrow('no transporter defined');
    });

    it('should pass right parameters to transporter without SK setter', async () => {
      const entity = new Entity({
        name: 'myType',
        PK: ['#user', '.username', '.status', '.age'],
        schema: {
          username: 'string',
          status: { enum: ['open', 'closed'] },
          age: 'int?',
        } as const,
      });

      const transporter: any = { putItem: jest.fn() };

      const sutParams = {
        transporter,
        replace: true,
        condition: {},
        dataloaderContext: {},
      };

      await entity.createOne({
        item: { username: 'antonio', status: 'open', age: 32 },
        ...sutParams,
      });

      expect(transporter.putItem).toBeCalledWith({
        SKType: 'string',
        condition: {},
        item: {
          ID: expect.stringMatching(/^01/), //
          PK: 'user#antonio#open#32',
          age: 32,
          username: 'antonio',
          status: 'open',
        },
        replace: true,
      });
    });

    it('should pass right parameters to transporter with SK setter', async () => {
      const entity = new Entity({
        name: 'myType',
        PK: ['#user', '.username'],
        SK: ['.status'],
        schema: {
          username: 'string',
          status: { enum: ['open', 'closed'] },
          age: 'int?',
        } as const,
      });

      const transporter: any = { putItem: jest.fn() };
      const sutParams = {
        transporter,
        replace: false,
        condition: { a: { $eq: 1 } },
        dataloaderContext: {},
      };

      await entity.createOne({
        item: { username: 'antonio', status: 'open', age: 32 },
        ...sutParams,
      });

      expect(transporter.putItem).toBeCalledWith({
        SKType: 'string',
        condition: { a: { $eq: 1 } },
        item: {
          ID: expect.stringMatching(/^01/), //
          PK: 'user#antonio',
          SK: 'open',
          age: 32,
          username: 'antonio',
          status: 'open',
        },
        replace: false,
      });
    });
  });

  describe('loadOne', () => {
    let mockApp: AppMock;

    beforeEach(() => {
      Entity.reset();
    });

    afterEach(() => {
      mockApp?.reset();
    });

    it('should mount Key with skType number', async () => {
      const entity = new Entity({
        name: 'myType',
        PK: ['#user', '.username'],
        SK: ['.age'],
        schema: {
          username: 'string',
          status: { enum: ['open', 'closed'] },
          age: 'int?',
        } as const,
      });

      const transporter: any = { getItem: jest.fn() };

      const sutParams = { transporter, dataloaderContext: {} };

      await entity.loadOne({
        ...sutParams,
        item: { username: 'antonio', status: 'open', age: 32 },
      });

      expect(transporter.getItem).toBeCalledWith({
        dataloaderContext: {},
        query: {
          PK: 'user#antonio',
          SK: '32',
          SKType: 'number',
          consistent: undefined,
          projection: undefined,
        },
      });
    });

    it('should mount Key with sktype string', async () => {
      const entity = new Entity({
        name: 'myType',
        PK: ['#user', '.username'],
        SK: ['.age', '.age'],
        schema: {
          username: 'string',
          status: { enum: ['open', 'closed'] },
          age: 'int?',
        } as const,
      });

      const transporter: any = { getItem: jest.fn() };

      const sutParams = { transporter, dataloaderContext: {} };

      await entity.loadOne({
        ...sutParams,
        item: { username: 'antonio', status: 'open', age: 32 },
      });

      expect(transporter.getItem).toBeCalledWith({
        dataloaderContext: {},
        query: {
          PK: 'user#antonio',
          SK: '32#32',
          SKType: 'string',
          consistent: undefined,
          projection: undefined,
        },
      });
    });
  });

  describe('updateOne', () => {
    let mockApp: AppMock;

    beforeEach(() => {
      Entity.reset();
    });

    afterEach(() => {
      mockApp?.reset();
    });

    it('should require transporter', async () => {
      const entity = new Entity({
        name: 'myType',
        PK: ['#user', '.username', '.status', '.age'],
        schema: {
          username: 'string',
          status: { enum: ['open', 'closed'] },
          age: 'int?',
        } as const,
      });

      await expect(
        entity.updateOne({
          item: { username: 'antonio', status: 'open', age: 32 },
          update: { $set: { status: 'closed' } },
        })
      ).rejects.toThrow('no transporter defined');
    });

    it('should pass right parameters to transporter without SK setter', async () => {
      const entity = new Entity({
        name: 'myType',
        PK: ['#user', '.username', '.status'],
        schema: {
          username: 'string',
          status: { enum: ['open', 'closed'] },
          age: 'int?',
        } as const,
      });

      const transporter: any = { updateItem: jest.fn() };

      await entity.updateOne({
        item: { username: 'antonio', status: 'open', age: 32 },
        update: { $set: { age: 1 } },
        transporter,
        condition: {},
        dataloaderContext: {},
        upsert: true,
      });

      expect(transporter.updateItem).toBeCalledWith({
        PK: 'user#antonio#open',
        SK: null,
        SKType: 'string',
        update: [
          { operator: '$set', entries: [['age', 1]] },
          {
            operator: '$setOnInsert',
            entries: [
              ['username', 'antonio'],
              ['status', 'open'],
              ['age', 32],
              ['ID', expect.stringMatching(/^01/)],
              ['PK', 'user#antonio#open'],
            ],
          },
        ],
        upsert: true,
        condition: {},
      });
    });

    it('should pass right parameters to transporter with SK setter', async () => {
      const entity = new Entity({
        name: 'myType',
        PK: ['#user', '.username'],
        SK: ['.age'],
        schema: {
          username: 'string',
          status: { enum: ['open', 'closed'] },
          age: 'int?',
        } as const,
      });

      const transporter: any = { updateItem: jest.fn() };

      await entity.updateOne({
        item: { username: 'antonio', status: 'closed', age: 31 },
        update: { $set: { status: 'open' } },
        transporter,
        condition: {},
        dataloaderContext: {},
      });

      expect(transporter.updateItem).toBeCalledWith({
        PK: 'user#antonio',
        SK: '31',
        SKType: 'number',
        update: [
          {
            operator: '$set',
            entries: [['status', 'open']],
          },
        ],
        upsert: undefined,
        condition: {},
      });
    });

    it('should block Key member fields update', async () => {
      const entity = new Entity({
        name: 'myType',
        PK: ['#user', '.username'],
        SK: ['.age'],
        schema: {
          username: 'string',
          status: { enum: ['open', 'closed'] },
          age: 'int?',
          loginTimes: '[int]?',
        } as const,
      });

      const transporter: any = { updateItem: jest.fn() };

      const expression = {
        item: { username: 'antonio', status: 'closed', age: 31 },
        update: {
          $set: { username: '1', age: 1 },
          $setIfNull: { status: 'closed' },
          $pull: { status: [] as any },
        },
        transporter,
        condition: {},
        dataloaderContext: {},
      } as const;

      await expect(entity.updateOne(expression)).rejects.toThrow(
        `Can't update field "username" - member of PK.`
      );
      await expect(entity.updateOne(expression)).rejects.toThrow(
        `Can't update field "age" - member of SK.`
      );
    });

    it('should require fields when upsert is true', async () => {
      const entity = new Entity({
        name: 'myType',
        PK: ['#user', '.username'],
        schema: {
          username: 'string',
          status: { enum: ['open', 'closed'] },
          age: 'int?',
          loginTimes: '[int]?',
        } as const,
      });

      const transporter: any = { updateItem: jest.fn() };

      await expect(
        entity.updateOne({
          item: { username: 'antonio', age: 31 },
          update: {
            $set: { age: 1 },
            $setOnInsert: { username: 'newUserName' },
          },
          transporter,
          condition: {},
          dataloaderContext: {},
          upsert: true,
        })
      ).rejects.toThrow('field "status"');
    });

    it('should allow Key member fields update on upsert', async () => {
      const entity = new Entity({
        name: 'myType',
        PK: ['#user', '.username'],
        schema: {
          username: 'string',
          status: { enum: ['open', 'closed'] },
          age: 'int?',
          loginTimes: '[int]?',
        } as const,
      });

      const transporter: any = { updateItem: jest.fn() };

      await entity.updateOne({
        item: { username: 'antonio', status: 'closed', age: 31 },
        update: {
          $set: { age: 1 },
          $setOnInsert: { username: 'newUserName' },
        },
        transporter,
        condition: {},
        dataloaderContext: {},
        upsert: true,
      });

      expect(transporter.updateItem).toBeCalledWith({
        PK: 'user#antonio',
        SK: undefined,
        SKType: 'string',
        update: [
          { operator: '$set', entries: [['age', 1]] },
          {
            operator: '$setOnInsert',
            entries: [
              ['username', 'newUserName'],
              ['status', 'closed'],
              ['age', 31],
              ['ID', expect.stringMatching(/^01/)],
              ['PK', 'user#antonio'],
            ],
          },
        ],
        upsert: true,
        condition: {},
      });
    });
  });

  describe('removeOne', () => {
    let mockApp: AppMock;

    beforeEach(() => {
      Entity.reset();
    });

    afterEach(() => {
      mockApp?.reset();
    });

    it('should pass right parameters to transporter without SK setter', async () => {
      const entity = new Entity({
        name: 'myType',
        PK: ['#user', '.username', '.status', '.age'],
        schema: {
          username: 'string',
          status: { enum: ['open', 'closed'] },
          age: 'int?',
        } as const,
      });

      const transporter: any = { deleteItem: jest.fn() };

      await entity.removeOne({
        item: { username: 'antonio', status: 'open', age: 32 },
        transporter,
        condition: {},
        dataloaderContext: {},
      });

      expect(transporter.deleteItem).toBeCalledWith({
        PK: 'user#antonio#open#32',
        SK: null,
        SKType: 'string',
        condition: {},
      });
    });

    it('should pass right parameters to transporter with SK setter', async () => {
      const entity = new Entity({
        name: 'myType',
        PK: ['#user', '.username'],
        SK: ['.age'],
        schema: {
          username: 'string',
          status: { enum: ['open', 'closed'] },
          age: 'int?',
        } as const,
      });

      const transporter: any = { deleteItem: jest.fn() };

      await entity.removeOne({
        item: { username: 'antonio', status: 'closed', age: 31 },
        transporter,
        condition: { username: { $exists: true } },
        dataloaderContext: {},
      });

      expect(transporter.deleteItem).toBeCalledWith({
        PK: 'user#antonio',
        SK: '31',
        SKType: 'number',
        condition: { username: { $exists: true } },
      });
    });
  });
});
