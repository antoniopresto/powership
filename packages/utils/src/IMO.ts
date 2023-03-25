/**
 * IMO A high-performance Conflict-free Replicated Data Type (CRDT) library
 *
 *  IMO provides fast, distributed data replication for conflict resolution in real-time applications.
 *
 * CRDTs enable decentralized data synchronization across multiple replicas, without the need for coordination between nodes.
 * It provides eventual consistency between replicas and supports offline data changes.
 * The purpose of IMO is to create and manipulate graphs and states while managing replication and conflict resolution
 * between different data replicas. The library provides a subscription mechanism to listen for changes in specific parts
 * of the application state and manage applied changes.
 */

import deepDiff, { applyChange, Diff, revertChange } from 'deep-diff';
import { produce } from 'immer';
import { ulid } from 'ulid';

export type MaybePromise<T> = T | Promise<T>;
export type AnyFunction = (...args: any[]) => any;
export type AnyRecord = Record<string, any>;

export type StateSubscriptionID = string;

/**
 * Class representing an IMO node.
 * It holds the data and edges to other connected nodes.
 */
export class IMONode {
  id: NodeID;
  data: any;
  edges: Map<EdgeID, IMOEdge>;

  constructor(data: any) {
    this.id = ulid();
    this.data = data;
    this.edges = new Map();
  }

  addEdge(edge: IMOEdge): void {
    this.edges.set(edge.id, edge);
  }

  removeEdge(edgeId: EdgeID): void {
    this.edges.delete(edgeId);
  }
}

/**
 * Class representing an IMO edge.
 * It maintains a connection between two nodes.
 */
export class IMOEdge {
  id: EdgeID;
  from: IMONode;
  to: IMONode;

  constructor(from: IMONode, to: IMONode) {
    this.id = ulid();
    this.from = from;
    this.to = to;
  }
}

/**
 * Class representing an IMO graph.
 * It manages nodes and edges in the graph.
 */
export class IMOGraph {
  nodes: Map<NodeID, IMONode>;
  edges: Map<EdgeID, IMOEdge>;

  constructor() {
    this.nodes = new Map();
    this.edges = new Map();
  }

  addNode(data: any): IMONode {
    const node = new IMONode(data);
    this.nodes.set(node.id, node);
    return node;
  }

  removeNode(nodeId: NodeID): void {
    const node = this.nodes.get(nodeId);
    if (!node) return;
    node.edges.forEach((edge) => {
      this.removeEdge(edge.id);
    });
    this.nodes.delete(nodeId);
  }

  addEdge(from: IMONode, to: IMONode): IMOEdge {
    const edge = new IMOEdge(from, to);
    this.edges.set(edge.id, edge);
    from.addEdge(edge);
    to.addEdge(edge);
    return edge;
  }

  removeEdge(edgeId: EdgeID): void {
    const edge = this.edges.get(edgeId);
    if (!edge) return;
    edge.from.removeEdge(edgeId);
    edge.to.removeEdge(edgeId);
    this.edges.delete(edgeId);
  }
}

/**
 * Class for managing IMO state configurations.
 * It holds various state configuration settings.
 */
export class IMOStateConfig {
  flushDelay: number | false = 1;
  queueLimit = 100;
  historyLimit = 3000;
  plugins?: IMOPlugin[];
}

/**
 * Interface representing an IMO plugin.
 * This interface defines methods to extend the behavior of IMO through plugins.
 */
export interface IMOPlugin {
  onInit?(imo: IMO<AnyRecord>): void;
  beforeSet?(path: string, value: any): void;
  afterSet?(path: string, value: any): void;
}

/**
 * Interface representing state subscription.
 * This interface describes the state subscription object, including the path
 * and the ID of the subscription.
 */
export interface StateSubscription<
  Values extends AnyRecord,
  Path extends StatePath<Values>
> {
  nodes: IMONode[];
  callback(event: StateEvent<Values, Path>): MaybePromise<void>;
  id: string;
}

/**
 * Class representing the main IMO state.
 * It provides core functionalities for working with states, including
 * subscriptions, plugins, state management, and more.
 */
export class IMO<Values extends AnyRecord> {
  private config = new IMOStateConfig();
  private graph: IMOGraph;
  private listeners = new Map<
    StateSubscriptionID,
    StateSubscription<any, any>
  >();

  private readonly history: AnyDiff[] = [];
  stateId = '';

  private plugins: IMOPlugin[] = [];

  private updateQueue: Map<string, { oldValue: any; newValue: any }> =
    new Map();
  private updateTimeout: any = null;

  constructor(initialData: Values, options: Partial<IMOStateConfig> = {}) {
    this.graph = this.createGraphFromData(initialData);
    Object.assign(this.config, options);

    if (options.plugins) {
      this.plugins.push(...options.plugins);
    }
  }

  private createGraphFromData(data: any): IMOGraph {
    const graph = new IMOGraph();

    const traverse = (obj: any, parent: any) => {
      if (typeof obj !== 'object' || obj === null) {
        return;
      }

      for (const [key, value] of Object.entries(obj)) {
        let newNode: IMONode | null = null;

        if (typeof value === 'object' && value !== null) {
          newNode = graph.addNode({ key });
          graph.addEdge(parent, newNode);
          traverse(value, newNode);
        } else {
          newNode = graph.addNode({ key, value });
          if (parent) {
            graph.addEdge(parent, newNode);
          }
        }
      }
    };

    traverse(data, null);
    return graph;
  }

  private getPathNodes(path: string): IMONode[] | null {
    const parts = path.split('.');
    let currentNode = this.graph.nodes.values().next().value as IMONode;

    const nodes = parts.map((part) => {
      const edge = Array.from(currentNode.edges.values()).find(
        (_edge) => _edge.to.data.key === part
      );

      if (!edge) {
        return null;
      }

      currentNode = edge.to;
      return currentNode;
    });

    return nodes.some((node) => node === null) ? null : (nodes as any);
  }

  get(path: string): any {
    const nodes = this.getPathNodes(path);
    if (!nodes) {
      return undefined;
    }
    const lastNode = nodes[nodes.length - 1];
    return lastNode.data.value;
  }

  subscribe<Callback extends AnyFunction>(
    path: string,
    callback: Callback
  ): () => void {
    const subscriptionId = ulid();
    const nodes = this.getPathNodes(path);

    if (nodes) {
      this.listeners.set(subscriptionId, {
        id: subscriptionId,
        nodes,
        callback,
      });
    }

    return () => {
      this.listeners.delete(subscriptionId);
    };
  }

  private merge(obj1: any, obj2: any): any {
    return produce(obj1, (draft) => {
      for (const key in obj2) {
        if (typeof obj2[key] === 'object' && obj2[key] !== null) {
          if (!draft[key]) {
            draft[key] = {};
          }
          draft[key] = this.merge(draft[key], obj2[key]);
        } else {
          draft[key] = obj2[key];
        }
      }
    });
  }

  toJSON(): Values {
    let result: any = {};

    for (const node of this.graph.nodes.values()) {
      if (!node.edges.size) {
        const path = this.getPath(node);
        const obj = this.pathToObject(path, node.data.value);
        result = this.merge(result, obj);
      }
    }

    return result as Values;
  }

  private getPath(node: IMONode): string {
    const parts: string[] = [];
    let currentNode = node;

    while (currentNode) {
      parts.unshift(currentNode.data.key);
      // @ts-ignore FIXME
      currentNode = this.getParentNode(currentNode);
    }

    return parts.join('.');
  }

  private getParentNode(node: IMONode): IMONode | null {
    const parentEdge = Array.from(node.edges.values()).find(
      (edge) => edge.to.id === node.id
    );

    return parentEdge ? parentEdge.from : null;
  }

  private pathToObject(path: string, value: any): any {
    const parts = path.split('.');
    let obj = {};

    parts.reduce((accumulator, part, index) => {
      accumulator[part] = index === parts.length - 1 ? value : {};
      return accumulator[part];
    }, obj);

    return obj;
  }

  private triggerListeners(): void {
    this.updateQueue.forEach((update, path) => {
      const subscription = this.listeners.get(path);
      if (subscription) {
        subscription.callback({
          path,
          oldValue: update.oldValue,
          value: update.newValue,
        });
      }
    });

    this.updateQueue.clear();
    this.updateTimeout = null;
  }

  set(path: string, value: any): void {
    this.plugins.forEach(
      (plugin) => plugin.beforeSet && plugin.beforeSet(path, value)
    );

    const nodes = this.getPathNodes(path);
    if (nodes) {
      const lastNode = nodes[nodes.length - 1];
      const oldValue = lastNode.data.value;
      lastNode.data.value = value;

      this.plugins.forEach(
        (plugin) => plugin.afterSet && plugin.afterSet(path, value)
      );

      // Adicione a atualização à fila e programe a chamada de triggerListeners
      this.updateQueue.set(path, { oldValue, newValue: value });
      this.scheduleTriggerListeners();
    }
  }

  private scheduleTriggerListeners(): void {
    clearTimeout(this.updateTimeout);

    this.updateTimeout = setTimeout(() => {
      this.triggerListeners();
    }, 1);
  }

  registerPlugin(plugin: IMOPlugin) {
    this.plugins.push(plugin);
  }

  mergeChanges(changeLists: AnyDiff[]): AnyDiff[] {
    const mergedChangeLists: AnyDiff[] = [];

    for (const change of changeLists) {
      const existingChangeIndex = mergedChangeLists.findIndex(
        (mergedChange) =>
          mergedChange.path === change.path && mergedChange.kind === change.kind
      );

      if (existingChangeIndex >= 0) {
        switch (change.kind) {
          case 'update':
            mergedChangeLists[existingChangeIndex].newValue = change.newValue;
            break;

          case 'add':
            if (mergedChangeLists[existingChangeIndex].kind === 'remove') {
              mergedChangeLists[existingChangeIndex].kind = 'update';
            }
            mergedChangeLists[existingChangeIndex].newValue = change.newValue;
            break;

          case 'remove':
            if (mergedChangeLists[existingChangeIndex].kind === 'add') {
              mergedChangeLists.splice(existingChangeIndex, 1);
            }
            break;

          default:
            throw new Error(`Invalid change kind ${change.kind}`);
        }
      } else {
        // If no existing change, add the new change to the merged list
        mergedChangeLists.push(change);
      }
    }

    return mergedChangeLists;
  }

  /**
   * Reverts the last change applied to the state.
   */
  undo(): void {
    if (!this.history.length) {
      return;
    }

    const change = this.history.pop();

    if (change) {
      this.set(change.path, change.oldValue);
    }
  }

  /**
   * Sets the state to a specific stateId.
   * @param stateId The stateId to go to.
   */
  goto(stateId: string): void {
    const stateIndex = this.history.findIndex(
      (changeList) => changeList.id === stateId
    );

    if (stateIndex === -1) {
      return;
    }

    // TODO
  }
}

export type ObjectPath<
  Obj,
  Limit extends number = 10,
  Level extends number[] = []
> = Level['length'] extends Limit
  ? never
  : Obj extends { [K: string]: any }
  ? {
      [K in keyof Obj]: K extends string | number
        ? Obj[K] extends { [K: string]: any }
          ? Obj[K] extends ReadonlyArray<any>
            ? /*When array: */
              | K
                | `${K}.${number}`
                | `${K}.${number}.${ObjectPath<Obj[K][number]>}`
            : //
              /*When object: */
              K | `${K}.${ObjectPath<Obj[K], Limit, [...Level, 1]>}`
          : K
        : never; // not string (never))
    }[keyof Obj]
  : never;

export type StatePath<Values> = ObjectPath<Values> | '';

export interface StateEvent<
  Values extends AnyRecord,
  Path extends StatePath<Values>
> {
  path: Path;
  value: GetFieldByDotNotation<Values, Path>;
  oldValue: GetFieldByDotNotation<Values, Path>;
}

// get an object field from a given dot notation
// eg: GetFieldByDotNotation<{a: { b: 1 }}, 'a.b'> === 1
export type GetFieldByDotNotation<Obj, DotNotation> =
  // When array
  DotNotation extends `${number}`
    ? number extends keyof Obj
      ? Obj[number]
      : undefined
    : //

    // When other objects (not array)
    DotNotation extends keyof Obj
    ? Obj[DotNotation]
    : DotNotation extends `${infer Left}.${infer Right}`
    ? Left extends keyof Obj
      ?
          | GetFieldByDotNotation<Exclude<Obj[Left], undefined>, Right>
          | Extract<Obj[Left], undefined>
      : undefined
    : undefined;

export type NodeID = string;
export type EdgeID = string;
export type ChangeKind = 'add' | 'remove' | 'update';

export function objectDiffPaths<Obj>(
  origin: Obj,
  next: any
): ObjectDiff<Obj>[] {
  const differences = deepDiff(origin, next) || [];

  const parentId = ulid();

  return differences.map((dd, index) => {
    const { newValue, oldValue, path, paths, kind } = processPaths(dd);

    return {
      id: `${parentId}:${index}`,
      path,
      kind,
      paths,
      newValue,
      oldValue,
      dd,
    } as ObjectDiff<Obj>;
  });
}

export function applyChanges(target: any, changes: AnyDiff[], source = {}) {
  changes.forEach((change) => {
    applyChange(target, source, change.dd);
  });
  return target;
}

export function revertChanges(target: any, changes: AnyDiff[], source = {}) {
  changes.forEach((change) => {
    revertChange(target, source, change.dd);
  });
  return target;
}

export type AnyDiff<Value = any> = {
  kind: 'add' | 'remove' | 'update';
  newValue: Value;
  oldValue: Value;
  path: string;
  paths: string[];
  id: string;
  dd: Diff<any>;
};

export type ObjectDiff<Obj = any> = ObjectPath<Obj, 5> extends infer Path
  ? Path extends unknown
    ? GetFieldByDotNotation<Obj, Path> extends infer Value
      ? {
          kind: 'add' | 'remove' | 'update';
          newValue: Value;
          oldValue: Value;
          path: Path;
          paths: string[];
          id: string;
          dd: Diff<any>;
        }
      : never
    : never
  : never;

function processPaths(difference: Diff<any>): {
  newValue?: any;
  oldValue?: any;
  path: string;
  paths: string[];
  kind: ChangeKind;
} {
  if (difference.kind === 'N') {
    return {
      kind: 'add',
      newValue: difference.rhs,
      ...affectedPaths(difference.path),
    };
  }

  if (difference.kind === 'A') {
    return processPaths({
      ...difference,
      ...difference.item,
      path: [...difference.path!, difference.index],
    });
  }

  if (difference.kind === 'E') {
    return {
      kind: 'update',
      oldValue: difference.lhs,
      newValue: difference.rhs,
      ...affectedPaths(difference.path),
    };
  }

  if (difference.kind === 'D') {
    const { paths, path } = affectedPaths(difference.path);
    return {
      kind: 'remove',
      oldValue: difference.lhs,
      paths,
      path,
    };
  }

  throw new Error(`Invalid diff.`);
}

function affectedPaths(pathParts: (string | number)[] = []): {
  paths: string[];
  path: string;
} {
  if (!pathParts[0]) return { path: '', paths: [] };

  const p: (string | number)[] = [];

  let full = pathParts[0];
  p.push(full);

  pathParts.slice(1).forEach((pathPart) => {
    full += `.${pathPart}`;
    p.push(full);
  }, []);

  return {
    path: full.toString(),
    paths: p.map((el) => el.toString()),
  };
}
