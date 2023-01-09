import { DescribeField, ExtendObjectDefinition } from '@backland/schema';
import {
  CreateOne,
  DeleteMany,
  DeleteOne,
  FindById,
  FindMany,
  FindOne,
  Paginate,
  UpdateMany,
  UpdateOne,
} from '@backland/transporter';

import { EntityGraphQLFieldConditionsType } from '../EntityFilterConditionType';

import { EntityTypesContext } from './Context';

export type EntityLoaderMethods<Context extends EntityTypesContext<any, any>> =
  _EntityLoaderMethods<Context> extends infer Methods
    ? {
        [K in keyof Methods]: Methods[K] extends (
          options: infer Options
        ) => infer Res
          ? Options extends Record<string, any>
            ? ((options: Options) => Res) & _EntityLoaderUtils<Options, Context>
            : Methods[K]
          : Methods[K];
      } & {}
    : never;

export interface _EntityLoaderUtils<
  Options extends Record<string, any>,
  Context extends EntityTypesContext<any, any>
> {
  indexInfo: Context['indexes'];

  filterDef: ExtendObjectDefinition<this['__filterDef'], this['__filterDef']>;

  queryArgs: this['__filterDef'] extends infer FilterDef
    ? {
        after: 'ID?';
        condition: {
          object: EntityGraphQLFieldConditionsType<Context['outputDefinition']>;
          optional: true;
        };
        filter: { type: 'object'; def: FilterDef };
        first: {
          optional: true;
          type: 'int';
        };
      }
    : never;

  __filterDef: _GetLoaderFilterDef<Options, Context['outputDefinition']>;
}

export type _EntityLoaderMethods<Context extends EntityTypesContext<any, any>> =
  {
    createOne: CreateOne<
      Context['documentCreationInput'],
      Context['document'],
      Context['indexes']
    >;

    findOne: FindOne<Context['document'], Context['indexes']>;

    findMany: FindMany<Context['document'], Context['indexes']>;

    paginate: Paginate<Context['document'], Context['indexes']>;

    deleteMany: DeleteMany<Context['document'], Context['indexes']>;

    deleteOne: DeleteOne<Context['document'], Context['indexes']>;

    findById: FindById<Context['document'], Context['indexes']>;

    updateMany: UpdateMany<Context['document'], Context['indexes']>;

    updateOne: UpdateOne<Context['document'], Context['indexes']>;
  };

export type _GetLoaderFilterDef<LoaderConfig, DocDef> =
  //
  LoaderConfig extends { filter: infer Filter }
    ? {
        [K in keyof Filter as K extends keyof DocDef
          ? K
          : never]: K extends keyof DocDef
          ? Omit<DescribeField<DocDef[K]>, 'optional'> & {
              optional: true;
            }
          : never;
      } extends infer Def
      ? { [K in keyof Def]: Def[K] }
      : {}
    : {};
