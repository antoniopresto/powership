import {createObjectType, GraphType, GraphTypeLike, Infer,} from '@darch/schema';

import {Transporter, QueryConditions} from '../Transporter/Transporter';
import {tuple} from '@darch/utils/lib/typeUtils';
import {Waterfall} from '@darch/utils/lib/hooks';
import {DocumentIndexItem} from "../Transporter/DocumentIndex";

export type EntityOptions<
  DefinitionInput extends Readonly<SchemaDefinitionInput>
> = {
  name: string;

  type: DefinitionInput;

  index: [
    DocumentIndexItem<DefinitionInput>,
    ...DocumentIndexItem<DefinitionInput>[]
  ];

  collection?: string;
  transporter?: Transporter;
};

export type SchemaDefinitionInput = GraphTypeLike;

export interface CreateOneOptions<InputType, Context> {
  item: InferEntity<InputType>;
  replace?: boolean;
  checkExisting?: boolean;
  transporter?: Transporter;
  condition?: QueryConditions;
  dataloaderContext?: object;
  context: Context;
}

export interface LoadOneOptions<InputType, Context> {
  item: { id: string };
  transporter?: Transporter;
  dataloaderContext?: object;
  projection?: string[];
  consistent?: boolean;
  context: Context;
}

// export type EntityMethodOptions<
//   DefinitionInput extends Readonly<SchemaDefinitionInput>,
//   Context = Record<string, unknown>
// > = {
//   // createOne
//   // loadById startsWith(PK->SK?)
//   // loadOne(PK:Condition, SK?:Condition)
//   // loadMany(PK:Condition, SK?:Condition)
//
//   createOne: {
//     item: Partial<InferEntity<DefinitionInput>>;
//     replace?: boolean;
//     checkExisting?: boolean;
//     transporter?: Transporter;
//     condition?: UpdateConditions;
//     dataloaderContext?: object;
//     context: Context;
//   };
//
//   loadOne: {
//     item: Partial<ParsedTypeFromEntity<DefinitionInput>>;
//     transporter?: Transporter;
//     dataloaderContext?: object;
//     projection?: string[];
//     consistent?: boolean;
//     context: ParsedRequest;
//   };
//
//   // loadMany: {
//   //   item: Partial<ParsedTypeFromEntity<DefinitionInput>>;
//   //   transporter?: Transporter;
//   //   dataloaderContext?: object;
//   //   projection?: string[];
//   //   consistent?: boolean;
//   //   context: ParsedRequest;
//   // };
//   // removeOne: {
//   //   item: Partial<ParsedTypeFromEntity<DefinitionInput>>;
//   //   condition?: UpdateConditions;
//   //   transporter?: Transporter;
//   //   dataloaderContext?: object;
//   //   context: ParsedRequest;
//   // };
//   // createOne: {
//   //   item: Partial<ParsedTypeFromEntity<DefinitionInput>>;
//   //   replace?: boolean;
//   //   checkExisting?: boolean;
//   //   transporter?: Transporter;
//   //   dataloaderContext?: object;
//   //   condition?: UpdateConditions;
//   //   context: ParsedRequest;
//   // };
//
//   // updateOne: {
//   //   item: Partial<ParsedTypeFromEntity<DefinitionInput>>;
//   //   update: UpdateExpression<ParsedTypeFromEntity<DefinitionInput>>;
//   //   upsert?: boolean;
//   //   condition?: UpdateConditions<
//   //     Extract<keyof ParsedTypeFromEntity<DefinitionInput>, string>
//   //   >;
//   //   dataloaderContext?: object;
//   //   transporter?: Transporter;
//   //   context: ParsedRequest;
//   // };
// };

export type EntityParserInputOptions<
  DefinitionInput extends Readonly<SchemaDefinitionInput> = Readonly<SchemaDefinitionInput>,
  Context = EntityRequestContext
> = (
  | {
      op: 'loadById';
      methodOptions: any; // FIXME EntityMethodOptions<DefinitionInput>['loadOne'];
    }
  // | {
  //     op: 'loadMany';
  //     methodOptions: EntityMethodOptions<DefinitionInput>['loadMany'];
  //   }
  | {
      op: 'createOne';
      methodOptions: CreateOneOptions<DefinitionInput, Context>;
    }
) & {
  // | {
  //     op: 'updateOne';
  //     methodOptions: EntityMethodOptions<DefinitionInput>['updateOne'];
  //   }
  // | {
  //     op: 'removeOne';
  //     methodOptions: EntityMethodOptions<DefinitionInput>['removeOne'];
  //   }
  partial?: boolean | (keyof DefinitionInput)[];
};

export type InferEntity<Entity> = Entity extends { type: infer Type }
  ? Type extends GraphTypeLike
    ? Infer<SchemaTypeWithGeneratedFields<Type>>
    : never
  : never;

export interface EntityRequestContext {
  userId(...args: unknown[]): string | Promise<string>;
}

export type EntityOperationInfoContext<
  Context extends EntityRequestContext = EntityRequestContext
> = {
  op: 'loadMany' | 'loadOne' | 'createOne' | 'updateOne' | 'removeOne';
  isLoad: boolean;
  isUpdate: boolean;
  isCreate: boolean;
  isLoadMany: boolean;
  isLoadOne: boolean;
  isUpdateOne: boolean;
  isDeleteOne: boolean;
  isUpsert: boolean;
  isCreateOne: boolean;
  input: EntityParserInputOptions;
  context: Context;
};

export type PkSkId = {
  PK: string;
  SK?: string;
  ID: string;
  [key: string]: any;
};

export const PublishedStatusEnum = tuple('published', 'draft');
export type PublishedStatus = typeof PublishedStatusEnum[number];

export const EntityGeneratedFieldsType = createObjectType({
  ulid: { ulid: { autoCreate: true } },
  PK: 'string',
  SK: 'string?',
  createdAt: 'date?',
  updatedAt: 'date?',
  owner: 'ID',
  createdBy: 'ID',
  publishedAt: 'date?',
  publishedBy: 'ID?',
  publishedStatus: { enum: PublishedStatusEnum, defaultValue: 'draft' },
});

export const EntityGeneratedFieldNames = Object.keys(
  EntityGeneratedFieldsType.definition
);

export type EntityGeneratedFieldsDef =
  typeof EntityGeneratedFieldsType['definition'];

export type SchemaTypeWithGeneratedFields<
  Definition extends Readonly<SchemaDefinitionInput>
> = Definition extends { definition: { def: infer Def } }
  ? GraphType<{ object: Def & EntityGeneratedFieldsDef }>
  : never;

export type EntityHooks<T> = {
  preParse: Waterfall<any, EntityOperationInfoContext>;
  postParse: Waterfall<InferEntity<T>, EntityOperationInfoContext>;
  filterResult: Waterfall<InferEntity<T>[], EntityOperationInfoContext>;
  beforeQuery: Waterfall<never, EntityOperationInfoContext>;
};
