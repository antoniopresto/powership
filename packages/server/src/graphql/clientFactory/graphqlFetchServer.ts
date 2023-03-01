import {App} from "../../App";
import { AppRequest, AppRequestInit } from '../../AppRequest';



/**
 * Executes graphql calls directly on the server, without using the network.
 
 */
export async function graphqlCall<Method extends GraphQLEntry['name']>(
  method: Method,
  config: GraphQLCallConfig<Method>
): Promise<MethodResponse<Method>> {
  try {
    const { app, args, permissions, userId, locals } = config;
    
    if (!app.hasStarted) {
      await app.start();
    }
    
    const { data: body } = parseFormClientBody(method, {
      data: args as any,
    });
    
    const graphQLRequest = new AppRequest({
      body,
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
      method: 'POST',
      url: '/former/api/graphql',
      permissions,
      userId,
      locals,
    });
    
    const response = await app.handleRequest(graphQLRequest);
    const data = response.graphQLData();
    return data[method] as MethodResponse<Method>;
  } catch (e: any) {
    console.debug(method, inspectObject(config.args, { depth: 20 }));
    throw e;
  }
}

export interface GraphQLMethodsMap {
  /**
   * MethodName: ExpectedArgs
   */
  [K: string]: Record<string, unknown> | null|undefined
}

export interface GraphQLRequestFactoryInit<TMethodsMap extends GraphQLMethodsMap> {
  (app: App):
}

export function createGraphQLRequest(){
  const { app, args } = config;
  
  if (!app.hasStarted) {
    await app.start();
  }
  
  const { data: body } = parseFormClientBody(method, {
    data: args as any,
  });
  
  const graphQLRequest = new AppRequest({
    body,
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
    method: 'POST',
    url: '/former/api/graphql',
    permissions,
    userId,
    locals,
  });
  
  const response = await app.handleRequest(graphQLRequest);
  const data = response.graphQLData();
  return data[method] as MethodResponse<Method>;
}


export type GraphQLCallConfig<Method extends GraphQLEntry['name']> = Omit<
  AppRequestInit,
  'method' | 'url' | 'body' | 'headers'
> & {
  app: App;
  args: ExpectedGraphQLClient[Method]['args'];
};

export type Explain<T> = T extends undefined
  ? never
  : { [K in keyof T]: T[K] } & {};

export type MethodResponse<Method extends GraphQLEntry['name']> = Explain<
  GraphQLMethodResponse<Method>
>;
