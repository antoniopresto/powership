import { Compute } from '@backland/utils';

import { DocumentIndexesConfig } from './CollectionIndex';
import {
  CreateOneConfig,
  CreateOneResult,
  DeleteManyConfig,
  DeleteManyResult,
  DeleteOneConfig,
  DeleteOneResult,
  DocumentBase,
  FindByIdConfig,
  FindManyConfig,
  FindManyResult,
  FindOneConfig,
  FindOneResult,
  PaginationResult,
  UpdateManyConfig,
  UpdateManyResult,
  UpdateOneConfig,
  UpdateOneResult,
} from './Transporter';

type IndexField<T, Else = never> = T extends `.${infer S}` ? S : Else;
type _excludeIndexConfig<T> = {
  [K in keyof T as K extends 'indexConfig' ? never : K]: T[K];
};

export interface IndexMethods<
  Doc extends DocumentBase,
  Indexes extends DocumentIndexesConfig
> {
  createOne: CreateOne<Doc, Doc, Indexes>;
  findOne: FindOne<Doc, Indexes>;
  findMany: FindMany<Doc, Indexes>;
  paginate: Paginate<Doc, Indexes>;
  deleteMany: DeleteMany<Doc, Indexes>;
  deleteOne: DeleteOne<Doc, Indexes>;
  findById: FindById<Doc, Indexes>;
  updateMany: UpdateMany<Doc, Indexes>;
  updateOne: UpdateOne<Doc, Indexes>;
}

export interface CreateOne<
  Input extends DocumentBase,
  Output extends DocumentBase,
  Indexes extends DocumentIndexesConfig
> {
  (
    options: Indexes[number] extends infer I
      ? I extends unknown
        ? I extends {
            PK: ReadonlyArray<infer PK>;
            SK?: ReadonlyArray<infer SK>;
          }
          ? Compute<
              _excludeIndexConfig<
                CreateOneConfig<
                  Input,
                  IndexField<PK>, //
                  IndexField<SK, undefined>
                >
              >
            >
          : never
        : never
      : never
  ): Promise<Compute<CreateOneResult<Output>>>;
}

export interface FindOne<
  Doc extends DocumentBase,
  Indexes extends DocumentIndexesConfig
> {
  (
    options: Indexes[number] extends infer I
      ? I extends unknown
        ? I extends {
            PK: ReadonlyArray<infer PK>;
            SK?: ReadonlyArray<infer SK>;
          }
          ? Compute<
              _excludeIndexConfig<
                FindOneConfig<
                  Doc,
                  IndexField<PK>, //
                  IndexField<SK, undefined>
                >
              >
            >
          : never
        : never
      : never
  ): Promise<Compute<FindOneResult<Doc>>>;
}

export interface FindById<
  Doc extends DocumentBase,
  Indexes extends DocumentIndexesConfig
> {
  (
    options: Indexes[number] extends infer I
      ? I extends unknown
        ? I extends {
            PK: ReadonlyArray<infer PK>;
            SK?: ReadonlyArray<infer SK>;
          }
          ? Compute<
              _excludeIndexConfig<
                FindByIdConfig<
                  Doc,
                  IndexField<PK>, //
                  IndexField<SK, undefined>
                >
              >
            >
          : never
        : never
      : never
  ): Promise<Compute<FindOneResult<Doc>>>;
}

export interface FindMany<
  Doc extends DocumentBase,
  Indexes extends DocumentIndexesConfig
> {
  (
    options: Indexes[number] extends infer I
      ? I extends unknown
        ? I extends {
            PK: ReadonlyArray<infer PK>;
            SK?: ReadonlyArray<infer SK>;
          }
          ? Compute<
              _excludeIndexConfig<
                FindManyConfig<
                  Doc,
                  IndexField<PK>, //
                  IndexField<SK, undefined>
                >
              >
            >
          : never
        : never
      : never
  ): Promise<{ [K in keyof FindManyResult<Doc>]: FindManyResult<Doc>[K] } & {}>;
}

export interface Paginate<
  Doc extends DocumentBase,
  Indexes extends DocumentIndexesConfig
> {
  (
    options: Indexes[number] extends infer I
      ? I extends unknown
        ? I extends {
            PK: ReadonlyArray<infer PK>;
            SK?: ReadonlyArray<infer SK>;
          }
          ? Compute<
              _excludeIndexConfig<
                FindManyConfig<
                  Doc,
                  IndexField<PK>, //
                  IndexField<SK, undefined>
                >
              >
            >
          : never
        : never
      : never
  ): Promise<Compute<PaginationResult<Doc>>>;
}

export interface DeleteMany<
  Doc extends DocumentBase,
  Indexes extends DocumentIndexesConfig
> {
  (
    options: Indexes[number] extends infer I
      ? I extends unknown
        ? I extends {
            PK: ReadonlyArray<infer PK>;
            SK?: ReadonlyArray<infer SK>;
          }
          ? Compute<
              _excludeIndexConfig<
                DeleteManyConfig<
                  Doc,
                  IndexField<PK>, //
                  IndexField<SK, undefined>
                >
              >
            >
          : never
        : never
      : never
  ): Promise<Compute<DeleteManyResult>>;
}

export interface DeleteOne<
  Doc extends DocumentBase,
  Indexes extends DocumentIndexesConfig
> {
  (
    options: Indexes[number] extends infer I
      ? I extends unknown
        ? I extends {
            PK: ReadonlyArray<infer PK>;
            SK?: ReadonlyArray<infer SK>;
          }
          ? Compute<
              _excludeIndexConfig<
                DeleteOneConfig<
                  Doc,
                  IndexField<PK>, //
                  IndexField<SK, undefined>
                >
              >
            >
          : never
        : never
      : never
  ): Promise<Compute<DeleteOneResult<Doc>>>;
}

export interface UpdateOne<
  Doc extends DocumentBase,
  Indexes extends DocumentIndexesConfig
> {
  (
    options: Indexes[number] extends infer I
      ? I extends unknown
        ? I extends {
            PK: ReadonlyArray<infer PK>;
            SK?: ReadonlyArray<infer SK>;
          }
          ? Compute<
              _excludeIndexConfig<
                UpdateOneConfig<
                  Doc,
                  IndexField<PK>, //
                  IndexField<SK, undefined>
                >
              >
            >
          : never
        : never
      : never
  ): Promise<Compute<UpdateOneResult<Doc>>>;
}

export interface UpdateMany<
  Doc extends DocumentBase,
  Indexes extends DocumentIndexesConfig
> {
  (
    options: Indexes[number] extends infer I
      ? I extends unknown
        ? I extends {
            PK: ReadonlyArray<infer PK>;
            SK?: ReadonlyArray<infer SK>;
          }
          ? Compute<
              _excludeIndexConfig<
                UpdateManyConfig<
                  Doc,
                  IndexField<PK>, //
                  IndexField<SK, undefined>
                >
              >
            >
          : never
        : never
      : never
  ): Promise<Compute<UpdateManyResult>>;
}
