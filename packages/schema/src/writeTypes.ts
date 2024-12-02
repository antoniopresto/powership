import path from 'path';

import { formatWithPrettier, Process } from '@powership/utils';
import { Emitter, mitt } from '@powership/utils';
import { fsExtra } from '@powership/utils/server-utils';

const { ensureFileSync, writeFileSync } = fsExtra;

import type { Resolver } from './Resolver';
import type { GraphTypeLike } from './fields/IObjectLike';

export type CustomTypesWriterEvent = {
  body?: string[];
  footer?: string[];
  head?: string[];
  name: string;
};

export const PowershipWatchTypesPubSub: Emitter<{
  created: {
    custom?: CustomTypesWriterEvent;
    graphType?: GraphTypeLike;
    resolver?: Resolver;
  };
}> = mitt();

const typesRecord: Record<string, GraphTypeLike> = {};
const resolversRecord: Record<string, Resolver> = {};
const customTypeRecord: Record<string, CustomTypesWriterEvent> = {};

// APLICAR AOS RESOLVERS DA ENTITY, etc.
// @onlyServer
PowershipWatchTypesPubSub.on('created', async (event) => {
  if (event.graphType?.optionalId) {
    typesRecord[`${event.graphType?.optionalId}`] = event.graphType;
  }

  if (event.resolver) {
    resolversRecord[`${event.resolver.name}`] = event.resolver;
  }

  if (event.custom) {
    customTypeRecord[event.custom.name] = event.custom;
  }

  save();
});

export interface WriteTypesOptions {
  dest?: string;
}

export const defaultTypesDest = path.resolve(
  Process.cwd(),
  'src/generated/powership.d.ts'
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

    txt += `\n export const Powership = { createType, getType };\n`;

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

    txt += `\n export const Powership = { createResolver, getResolver };\n`;

    return txt;
  });

  const head: string[] = [];
  const body: string[] = [];
  const footer: string[] = [];

  Object.values(customTypeRecord).forEach((item) => {
    item.head && head.push(...item.head);
    item.body && head.push(...item.body);
    item.footer && head.push(...item.footer);
  });
  // @onlyServer
  const typesInterface = await powership.objectToTypescript(
    'RuntimeTypes',
    typesRecord
  );

  let definitions = Object.entries(typesRecord).reduce((acc, [id, next]) => {
    acc += `\n"${id}": ${powership.LiteralField.utils.serialize(
      next.definition
    )}\n;`;
    return acc;
  }, '');

  definitions = `export interface RuntimeDefinitions {\n${definitions}\n}`;

  let content = template({
    creators,
    definitions,
    extraCustomBody: body,
    extraCustomFooter: footer,
    extraCustomHead: head,
    resolvers,
    typesInterface,
  });

  content = await formatWithPrettier(content, {
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
  extraCustomHead,
  extraCustomBody,
  extraCustomFooter,
}: {
  creators: string[];
  definitions: string;
  extraCustomBody: string[];
  extraCustomFooter: string[];
  extraCustomHead: string[];
  resolvers: string[];
  typesInterface: string;
}) {
  return `
/* tslint-disable */
/* tslint:disable */
/* eslint-disable */
declare global {
  module '@powership/schema' {
    export * from '@powership/schema';
    import { ObjectFieldInput, ValidationCustomMessage, FieldDefinition } from '@powership/schema';
    import { Merge } from '@powership/utils';
  
    import {
      GraphQLField,
      GraphQLFieldConfig,
      GraphQLResolveInfo,
    } from 'graphql';
    
    ${extraCustomHead.join('\n')}

    export class GraphTypeRuntime<Definition extends FieldDefinition, Type, Name> {
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
      
      ${extraCustomBody.join('\n')}
      
      ${definitions}
      
      ${typesInterface}
      
      ${extraCustomFooter.join('\n')}
  }
}
`;
}

let timeoutRef: any;

function save() {
  clearTimeout(timeoutRef);

  let EMIT = process.env.POWERSHIP_EMIT_TYPES;
  if (!EMIT) return;

  let timeout = +EMIT;
  if (!(timeout > 0)) timeout = 2000;
  timeout = Math.max(timeout, 1000);

  timeoutRef = setTimeout(() => {
    writeTypes().catch((err) => {
      console.error('writeTypes:', err.message);
    });
  }, timeout);
}

process.on('unhandledRejection', () => {
  clearTimeout(timeoutRef);
});
