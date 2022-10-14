import {
  GraphType,
  ObjectDefinitionInput,
  ObjectFieldInput,
  ObjectType,
  ResolverResolve,
} from '@backland/schema';
import {
  CollectionConfigIndexes,
  DocumentBase,
  Transporter,
} from '@backland/transporter';

import { EntityDefaultFields } from './EntityInterfaces';

export interface EntityOptions<
  TName extends string = string,
  Type extends _EntityGraphType = _EntityGraphType,
  TTransporter extends Transporter = Transporter
> {
  indexes: CollectionConfigIndexes<EntityDocFromType<Type>>;
  name: TName;
  transporter?: TTransporter;
  type: Type;
}

export type AnyEntityOptions = EntityOptions<
  'AnyEntityOptions',
  GraphType<any>,
  Transporter
>;

export type EntityDocFromType<Type> = Type extends {
  parse(...args: any[]): infer Result;
}
  ? Result extends {}
    ? EntityDefaultFields & Result extends infer R
      ? {
          [K in keyof R]: R[K];
        }
      : never
    : never
  : never;

export type EntityFieldResolver<
  Context,
  TypeDef extends ObjectFieldInput,
  ArgsDef extends ObjectDefinitionInput | undefined,
  Root
> = {
  args?: ArgsDef;
  name: string;
  resolve: ResolverResolve<Context, Root, TypeDef, ArgsDef>;
  type: TypeDef;
};

export type _EntityGraphType = {
  __isGraphType: true;
  _object?: ObjectType<any>;
  definition: { def: unknown };
  parse(...args: any[]): DocumentBase;
};
