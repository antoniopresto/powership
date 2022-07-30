import { Infer } from '@darch/schema';
import { AnyRecord, IfExtends } from '@darch/utils/lib/typeUtils';

import { PkSkId } from './EntityInterfaces';

type KeysOfAType<TSchema, Type> = {
  [key in keyof TSchema]: NonNullable<TSchema[key]> extends Type ? key : never;
}[keyof TSchema];

type Unpacked<Type> = Type extends ReadonlyArray<infer Element> ? Element : Type;

type NotAcceptedFields<TSchema, FieldType> = {
  readonly [key in KeysOfOtherType<TSchema, FieldType>]?: never;
};

type KeysOfOtherType<TSchema, Type> = {
  [key in keyof TSchema]: NonNullable<TSchema[key]> extends Type ? never : key;
}[keyof TSchema];

type SetFields<TSchema> = ({
  readonly [key in KeysOfAType<TSchema, ReadonlyArray<any> | undefined>]?: Unpacked<TSchema[key]>;
} &
  NotAcceptedFields<TSchema, ReadonlyArray<any> | undefined>) & {
  readonly [key: string]: any;
};

type PullOperator<TSchema> = ({
  readonly [key in KeysOfAType<TSchema, ReadonlyArray<any>>]?: Partial<Unpacked<TSchema[key]>>;
} &
  NotAcceptedFields<TSchema, ReadonlyArray<any>>) & {
  readonly [key: string]: any;
};

export type SKConditions<T> = {
  $eq?: T;
  $lte?: T;
  $lt?: T;
  $gt?: T;
  $gte?: T;
  startsWith?: T;
  $between?: [T, T];
};

export type OptionalPKFromSchema<TSchema> = TSchema extends {
  definition: { PK: any };
}
  ? Infer<TSchema>
  : Omit<Infer<TSchema>, 'PK'> & { PK?: string };

export type EQuery<Type> = {
  collectionName: string;
  PK: string;
  SK?: SKConditions<string>;
  projection?: Extract<keyof Type, string>[];
  onlyOne?: boolean;
  limit?: number;
  order?: 'ASC' | 'DESC';
  transporter?: EntityTransporter;
  dataloaderContext: AnyRecord | null;
};

export type EUpdateDoc<Type> = {
  PK: string;
  SK?: SKConditions<string>;
  transporter?: EntityTransporter;

  updateMany?: boolean;

  // SET—Modifying or Adding Item Attributes
  $set?: { [K in keyof Type]?: Type[K] };

  // DELETE—Removing Elements from a Set
  $pull?: { [K in keyof Type]?: Type[K] };

  // ADD—Updating Numbers and Sets
  $add?: SetFields<Type>;

  // REMOVE—Deleting Attributes from an Item
  $remove?: PullOperator<Type>;
};

export type EMutateResult<Multi> = {
  mutated: IfExtends<Multi, true, PkSkId[], PkSkId>;
  errors: any[];
};

export abstract class EntityTransporter<Client = any> {
  abstract query<O extends EQuery<AnyRecord>>(
    options: O
  ): Promise<O extends { onlyOne: true } ? AnyRecord | null : AnyRecord[]>;

  abstract create<Input>(
    input: Input | Input[],
    options: {
      collectionName: string;
      failFast?: boolean;
      dataloaderContext: AnyRecord;
    }
  ): Promise<EMutateResult<Input extends any[] ? true : false>>;

  abstract update<O extends EUpdateDoc<AnyRecord>>(
    options: O
  ): Promise<O extends { updateMany: true } ? string[] : string | null>;

  abstract delete<O extends EQuery<AnyRecord>>(
    options: O
  ): Promise<O extends { onlyOne: true } ? string | null : string[]>;

  abstract client: Client;
}
