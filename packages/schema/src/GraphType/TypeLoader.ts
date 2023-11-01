import { AnyRecord, IsKnown, MaybePromise, stringCase } from '@powership/utils';

import { CircularDeps } from '../CircularDeps';
import { Infer } from '../Infer';
import { createResolver, Resolver } from '../Resolver';
import { ObjectDefinitionInput } from '../fields/_parseFields';

import type { GraphType } from './GraphType';

export interface DataTypeLoaderContext {
  // to be extended in application
}

export interface TypeLoaderExecutionPayload<
  Args extends AnyRecord,
  Context extends DataTypeLoaderContext,
  Parent extends unknown
> {
  args: Args;
  context: Context;
  parent?: Parent;
  info?: AnyRecord;
}

export type TypeLoaderKind = 'query' | 'mutation' | 'subscription';
export interface TypeLoaderDefinition<
  Type extends any,
  ArgsDefinition extends ObjectDefinitionInput,
  Context extends DataTypeLoaderContext = DataTypeLoaderContext,
  ParentField extends unknown = unknown
> {
  kind?: TypeLoaderKind;
  name: string;
  description?: string;
  args: ArgsDefinition;
  load: Infer<Type> extends infer Result
    ? [IsKnown<Result>] extends [1]
      ? [IsKnown<ArgsDefinition>] extends [1]
        ? Infer<{ object: ArgsDefinition }> extends infer Args
          ? <Parent extends unknown = ParentField>(
              payload: TypeLoaderExecutionPayload<
                { [K in keyof Args]: Args[K] } & {},
                Context,
                Parent
              > // o<
            ) => MaybePromise<Result>
          : never
        : never
      : never
    : never;
}

export class TypeLoader<
  Type extends any,
  ArgsDefinition extends ObjectDefinitionInput,
  Context extends DataTypeLoaderContext = DataTypeLoaderContext,
  ParentField extends unknown = unknown
> {
  readonly __isPSTypeLoader = true;
  readonly loaderName: string;
  readonly kind: TypeLoaderKind;
  argsType: GraphType<{ object: ArgsDefinition }>;
  outputType: Type;
  description?: string;
  load: (
    payload: TypeLoaderExecutionPayload<
      Infer<{ object: ArgsDefinition }>,
      Context,
      ParentField
    >
  ) => MaybePromise<Infer<Type>>;

  constructor(
    output: Type,
    definition: TypeLoaderDefinition<Type, ArgsDefinition, Context, ParentField>
  ) {
    let type: GraphType<any> = output as any;

    // @ts-ignore
    CircularDeps.GraphType.GraphType.assert(type);

    let { load, args, name, kind = 'query', description } = definition;

    this.kind = kind;
    this.loaderName = name;
    this.description = description;

    if (!type.optionalId) {
      type = type.clone((el) =>
        el.graphType(`${stringCase.capitalized(name)}Payload`)
      ) as any;
    }

    this.outputType = type as any;

    // @ts-ignore
    this.argsType = args
      ? CircularDeps.GraphType.createType(`${type.id}Input`, {
          object: args,
        } as any)
      : (null as any);

    const { argsType } = this;
    const outputType = this.outputType as GraphType<any>;

    // @ts-ignore
    this.load = async function loadData(
      payload: TypeLoaderExecutionPayload<ArgsDefinition, any, any>
    ) {
      let { args: input } = payload;

      payload.args = argsType
        ? argsType.parse(input, {
            customMessage: (_, error) => {
              return `${outputType.id} loader":\n ${error.message}`;
            },
          })
        : Object.create(null);

      // @ts-ignore
      const result = await load(payload);

      return outputType.parse(result, {
        customMessage: (_, error) => {
          return `${outputType.id} loader":\n ${error.message}`;
        },
      });
    };
  }

  _resolver: Resolver<any, any, any, any>;

  get asGraphQLField(): Resolver<any, any, any, any> {
    return (this._resolver =
      this._resolver ||
      ((createResolver as any)({
        type: this.outputType,
        args: this.argsType,
        name: this.loaderName,
        kind: this.kind,
        description: this.description,
        resolve: async (parent, args, context, info): Promise<any> => {
          return this.load({
            args,
            context,
            parent,
            info,
          }) as any;
        },
      }) as any));
  }

  private _ts: [Promise<string>, Promise<string>];

  get asTypescript(): Promise<string> {
    this._ts = this._ts || [
      this.argsType.typescriptPrint(),
      (this.outputType as GraphType<any>).typescriptPrint(),
    ];

    return Promise.all(this._ts).then(async ([args, output]) => {
      return `${args}\n${output}`;
    });
  }
}
