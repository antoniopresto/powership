import path from 'path';

import { AnyResolver } from '@darch/schema';
import { GraphTypeLike } from '@darch/schema';
import { Emitter, mitt } from '@darch/utils/lib/mitt';
import { ensureFileSync, writeFileSync } from 'fs-extra';

import { Darch } from '../Darch';
import { LiteralField } from '../fields/LitarealField';

const { serialize } = LiteralField.utils;

export const DarchWatchTypesPubSub: Emitter<{
  created: {
    graphType?: GraphTypeLike;
    resolver?: AnyResolver;
  };
}> = mitt();

const typesRecord: Record<string, GraphTypeLike> = {};
const resolversRecord: Record<string, AnyResolver> = {};

DarchWatchTypesPubSub.on('created', async (event) => {
  if (event.graphType) {
    typesRecord[`${event.graphType.id}`] = event.graphType;
  }

  if (event.resolver) {
    resolversRecord[`${event.resolver.name}`] = event.resolver;
  }

  save();
});

export interface WriteTypesOptions {
  dest?: string;
}

export const defaultTypesDest = path.resolve(
  process.cwd(),
  'src/generated/darch.d.ts'
);

export async function writeTypes(options?: WriteTypesOptions) {
  const { dest = defaultTypesDest } = options || {};

  ensureFileSync(dest);

  const creators = Object.keys(typesRecord).map((name) => {
    let txt = '';

    const fn = [
      `function createType<Definition extends ObjectFieldInput>(name: "${name}",`,
      `definition: Definition):`,
      `GraphTypeRuntime<Definition,`,
      `RuntimeTypes["${name}"], "${name}">`,
      '\n',
    ].join(' ');

    const getTypeFn = [
      `function getType(name: "${name}"): GraphTypeRuntime<RuntimeDefinitions["${name}"], RuntimeTypes["${name}"], "${name}">`,
    ].join(' ');

    txt += `\n export ${fn};\n`;
    txt += `\n export ${getTypeFn};\n`;

    txt += `\n export const Darch = { createType, getType };\n`;

    return txt;
  });

  const resolvers = Object.keys(resolversRecord).map((name) => {
    let txt = '';

    const fn = [
      `function createResolver<Context, Source>(`,
      `options: ResolverRuntimeConfig<Context, Source, RuntimeTypes["${name}Payload"], RuntimeTypes["${name}Input"], "${name}">`,
      `): ResolverRuntime<Context, Source, RuntimeTypes["${name}Payload"], RuntimeTypes["${name}Input"], "${name}">`,
    ].join(' ');

    const getTypeFn = [
      `function getResolver(name: "${name}"): ResolverRuntime<Context, Source, RuntimeTypes["${name}Payload"], RuntimeTypes["${name}Input"], "${name}">`,
    ].join(' ');

    txt += `\n export ${fn};\n`;
    txt += `\n export ${getTypeFn};\n`;

    txt += `\n export const Darch = { createResolver, getResolver };\n`;

    return txt;
  });

  const typesInterface = await Darch.objectToTypescript(
    'RuntimeTypes',
    typesRecord
  );

  let definitions = Object.entries(typesRecord).reduce((acc, [id, next]) => {
    acc += `\n"${id}": ${serialize(next.definition)}\n;`;
    acc += `\n"${id}TypeDef": ${serialize(next.definitionInput)}\n;`;
    return acc;
  }, '');

  definitions = `export interface RuntimeDefinitions {\n${definitions}\n}`;

  let content = template({
    typesInterface,
    creators,
    resolvers,
    definitions,
  });

  content = await Darch.prettier.format(content, {
    parser: 'typescript',
    singleQuote: true,
  });

  writeFileSync(dest, content);
}

function template({
  typesInterface,
  creators,
  resolvers,
  definitions,
}: {
  typesInterface: string;
  definitions: string;
  resolvers: string[];
  creators: string[];
}) {
  return `
/* tslint-disable */
/* tslint:disable */
/* eslint-disable */
declare global {
  module '@darch/schema' {
    export * from '@darch/schema';
    import { ObjectFieldInput, ValidationCustomMessage } from '@darch/schema';
    import { Merge } from '@darch/utils/lib/typeUtils';
  
    import {
      GraphQLField,
      GraphQLFieldConfig,
      GraphQLResolveInfo,
    } from 'graphql';

    export class GraphTypeRuntime<Definition, Type, Name> {
      static __isGraphType: true;
      readonly __isGraphType: true;
      
      static reset(): Promise<void>;
      readonly definition: Definition;
      
      readonly id: Name;
      
      clone<Ext, NewName>(
        name: NewName,
        extend?: Ext
      ): GraphTypeRuntime<Definition & Ext, Type, NewName>;
      
      constructor(definition: Definition);
      
      constructor(name: Name, definition: Definition);
      
      parse(input: any, customMessage?: ValidationCustomMessage): Type;
      
      graphQLType(...args: unknown[]): typeof import('graphql').GraphQLNamedType;
      
      graphQLInputType(
        ...args: unknown[]
      ): typeof import('graphql').GraphQLNamedInputType;
      
      graphQLInterface(
        ...args: unknown[]
      ): typeof import('graphql').GraphQLInterfaceType;
      
      addRelation<FieldTypeDef, Name, Context = unknown, ArgsDef>(
        options: Merge<
          { type: FieldTypeDef; name: Name },
          ResolverConfigRuntime<Context, unknown, FieldTypeDef, ArgsDef>
          >
      ): this;
      
      print(): string[];
      
      typescriptPrint(options?: unknown): Promise<string>;
    }
    
    export type ResolverKind = 'query' | 'mutation' | 'subscription';
    
    export interface ResolverConfigRuntime<Context, Source, Type, Args, Name>
      extends Omit<GraphQLFieldConfig<any, any>, 'resolve' | 'args' | 'type'> {
      name: Name;
      kind?: ResolverKind;
      args?: unknown;
      type: unknown;
      
      resolve(
        root: Source,
        args: Args,
        context: Context,
        info: GraphQLResolveInfo
      ): Type | Promise<Type>;
    }
    
    export interface ResolverRuntime<Context, Source, Type, Args, Name>
      extends Omit<GraphQLFieldConfig<any, any>, 'resolve' | 'args' | 'type'> {
      __isResolver: true;
      __isRelation: boolean;
      __graphTypeId: string;
      __relatedToGraphTypeId: string;
      
      resolve(
        root: Source,
        args: Args,
        context: Context,
        info: GraphQLResolveInfo
      ): Type | Promise<Type>;
      
      name: Name;
      kind: 'query' | 'subscription' | 'mutation';
      
      typeDef: any;
      argsDef: any;
      payloadType: GraphTypeRuntime<any, Type, any>;
      argsType: GraphTypeRuntime<any, Args, any>;
      type: any;
      args: any;
      
      asObjectField(name?: string): GraphQLField<any, any>;
    }
  
      ${creators.join('\n')}
      
      ${resolvers.join('\n')}
      
      ${definitions}
      
      ${typesInterface}
  }
}
`;
}

let timeoutRef: any;
let timeoutMS = 2000;
function save() {
  clearTimeout(timeoutRef);

  if (process.env.darch_emit_interval) {
    timeoutMS =
      +process.env.darch_emit_interval > 0
        ? +process.env.darch_emit_interval
        : timeoutMS;

    timeoutRef = setTimeout(() => {
      writeTypes().catch((err) => {
        console.error('writeTypes:', err.message);
      });
    }, timeoutMS);
  }
}

process.on('unhandledRejection', () => {
  clearTimeout(timeoutRef);
});
