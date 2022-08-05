import { createType, ObjectLike, ObjectType } from '@darch/schema';

import { clearMetaField } from '@darch/schema/lib/fields/MetaFieldField';
import { assertSame } from '@darch/utils/lib/assertSame';
import { simpleObjectClone } from '@darch/utils/lib/simpleObjectClone';
import { hooks } from '@darch/utils/lib/hooks';

import {
  Transporter,
  QueryConditions,
  UpdateItemResult,
} from '../Transporter/Transporter';
import { parseUpdateExpression } from '../Transporter/parseUpdateExpression';

import {
  SchemaTypeWithGeneratedFields,
  EntityGeneratedFieldsType,
  EntityHooks,
  EntityMethodOptions,
  EntityOperationInfoContext,
  EntityOptions,
  EntityParserInputOptions,
  InferEntity,
  SchemaDefinitionInput,
  CreateOneOptions,
  EntityRequestContext,
  LoadOneOptions,
} from './EntityInterfaces';
import { EntityStore } from './EntityStore';
import { isProduction } from '@darch/utils/lib/env';
import { ulid } from '@darch/utils/lib/ulid';
import { mountEntityIndexString } from './mountEntityKeyParts';

export * from './EntityInterfaces';

class EntityClass<
  InputType extends SchemaDefinitionInput,
  Options extends Readonly<EntityOptions<InputType>>
> {
  readonly type: SchemaTypeWithGeneratedFields<InputType>;
  readonly entityName: string;

  static entityStore = EntityStore;
  readonly entityStore = EntityStore;

  static async reset() {
    Entity.entityStore.clear();
    await ObjectType.reset();
  }

  _hooks: EntityHooks<this> = {
    preParse: hooks.waterfall(),
    postParse: hooks.waterfall(),
    filterResult: hooks.waterfall(),
    beforeQuery: hooks.waterfall(),
  };

  readonly usedOptions: Options;

  constructor(options: Options) {
    this.usedOptions = { ...options };
    const { transporter, name, type: inputType } = this.usedOptions;

    if (!inputType._object) {
      throw new Error('Input definition is not ObjectType compatible.');
    }

    const originDef = clearMetaField(inputType._object.definition);

    let objectDef = {
      object: {
        ...EntityGeneratedFieldsType.definition,
        ...originDef,
      },
    };

    this.type = createType(
      `${name}Entity`,
      objectDef
    ) as unknown as SchemaTypeWithGeneratedFields<InputType>;

    this.entityName = name;

    if (this.entityStore.has(name)) {
      throw new Error(`Can't redeclare entity with name "${this.entityName}"`);
    }

    this._transporter = transporter;
    this.entityStore.set(name, this as any);
    this.applyDefaultHooks();
  }

  registerPlugins(handler: (hooks: this['_hooks']) => void) {
    handler(this._hooks);
  }

  private applyDefaultHooks() {
    const { index } = this.usedOptions;

    // pre parse PK, SK and ulid setters
    this._hooks.preParse.register(async function applyDefaultHooks(
      obj: any,
      ctx
    ) {
      const possibleCreate = ctx.isCreate || ctx.isUpsert;
      const possibleUpdate = ctx.isUpdate || ctx.isUpsert;

      if (possibleCreate && !obj.ulid) {
        obj.ulid = obj.ulid || ulid();
      }

      index.forEach((idx) => {
        const { field, SK, PK } = idx;
        if (possibleCreate && (!obj[field] || typeof obj[field] !== 'string')) {
          obj[field] = mountEntityIndexString(obj, { PK, SK });
        }
      });

      if (possibleCreate && !obj.createdAt) {
        obj.createdAt = new Date();
        obj.updatedAt = new Date();
      }

      if (possibleCreate && !obj.createdBy) {
        obj.createdBy = await ctx.context.userId();
      }

      if (possibleUpdate && !obj.updatedAt) {
        obj.updatedAt = new Date();
      }

      if (possibleUpdate && !obj.updatedBy) {
        obj.updatedBy = await ctx.context.userId();
      }
    });
  }

  async parse(
    options: EntityParserInputOptions<InputType>
  ): Promise<InferEntity<InputType>> {
    await this.transporter.connect();

    const operationInfoContext = buildEntityOperationInfoContext(
      options as any
    );

    const { item } = options.methodOptions;

    let clone = simpleObjectClone(item);

    if (clone && typeof clone === 'object') {
      clone = await this._hooks.preParse.exec(clone, operationInfoContext);
    }

    let parsed: any;
    try {
      let _options = options.partial ? ({ partial: true } as const) : undefined;
      parsed = this.type._object!.parse(clone, _options);
    } catch (e: any) {
      e.item = item;
      throw e;
    }

    parsed = await this._hooks.postParse.exec(parsed, operationInfoContext);

    return parsed;
  }

  async createOne<Context extends EntityRequestContext>(
    options: CreateOneOptions<InputType, Context>
  ) {
    const { transporter = this.transporter, replace, condition } = options;

    const parsed = await this.parse({
      op: 'createOne',
      methodOptions: options,
    });

    if (options.checkExisting) {
      const existing = await this.loadById({
        ...options,
        item: parsed,
      });

      if (existing.item) {
        throw new Error('REPEATED_ITEM');
      }
    }

    return await transporter.putItem({
      item: parsed,
      replace,
      condition,
    });
  }

  async loadById<Context>(options: LoadOneOptions<InputType, Context>) {
    const {
      dataloaderContext = {},
      transporter = this.transporter,
      consistent,
      projection,
    } = options;

    const parsed = await this.parse({
      op: 'loadById',
      partial: true,
      methodOptions: options,
    });

    const { PK, SK = null } = parsed;

    return transporter.getItem({
      query: {
        PK,
        SK,
        projection,
        consistent,
      },
      dataloaderContext,
    });
  }

  _transporter?: Transporter;

  get transporter(): Transporter {
    let t = this._transporter;
    if (!t) {
      throw new Error(`Entity ${this.entityName}: no transporter defined.`);
    }
    return t;
  }
}

function EntityConstructor<DefinitionInput extends SchemaDefinitionInput>(
  options: EntityOptions<DefinitionInput>
) {
  const { name } = options;

  if (EntityStore.has(name)) {
    const entity = EntityStore.get(name);

    if (!isProduction()) {
      assertSame(
        `Entity: the cached entity with name "${name}" has a different config`,
        entity.usedOptions,
        options
      );
    }

    return entity;
  }

  const entity = new EntityClass(options as any);
  EntityStore.set(options.name, entity as any);
  return entity;
}

const reserved: any[] = ['name', 'length', 'prototype'];
Reflect.ownKeys(EntityClass).forEach((name) => {
  if (reserved.includes(name)) return;
  EntityConstructor[name] = EntityClass[name];
});

export const Entity = EntityConstructor as unknown as typeof EntityClass;

export type Entity<
  Definition extends Readonly<SchemaDefinitionInput>,
  Options extends Readonly<EntityOptions<Definition>>
> = EntityClass<Definition, Options>;

function buildEntityOperationInfoContext(
  parserInput: EntityParserInputOptions
): EntityOperationInfoContext {
  const { op, methodOptions } = parserInput as any; // FIXME;

  return {
    op: op,
    isLoad: op.startsWith('load'),
    isUpdate: op.startsWith('update'),
    isCreate: op.startsWith('create'),
    isLoadMany: op === 'loadMany',
    isLoadOne: op === 'loadOne',
    isUpdateOne: op === 'updateOne',
    isDeleteOne: op === 'removeOne',
    isUpsert: op === 'updateOne' && methodOptions.upsert === true,
    isCreateOne: op === 'createOne',
    input: parserInput,
    context: parserInput.methodOptions.context,
  };
}
export {DocumentIndexItem} from "../Transporter/DocumentIndex";
export {IndexKeyHash} from "../Transporter/DocumentIndex";
