import type {
  JDContext,
  MaybePromise,
  StringValue as TimeString,
} from '@swind/utils';

import { Infer } from '../Infer';
import { Shape } from '../fields/_parseFields';

export type Milliseconds = number;
export interface DiffContext extends JDContext {}

export interface DurableConfig<
  S extends Shape,
  Data extends Infer<{ object: S }> = Infer<{ object: S }>
> extends DurableFieldConfig {
  schema: S;
  initial: Data | (() => MaybePromise<Data>);
  onChange?(
    name: string,
    context: DiffContext
  ): MaybePromise<DiffContext | void>;
  flushDelay?: number | false;
  queueLimit?: number;
  historyLimit?: number;
  onUnmount?(current: this): any;
  onReady?(current: this): any;

  // used to match objects when diffing arrays, by default only === operator is used
  objectHash?: (item: any, index: number) => string;

  arrays?: {
    // default true, detect items moved inside the array (otherwise they will be registered as remove+add)
    detectMove: boolean;
    // default false, the value of items moved is not included in deltas
    includeValueOnMove: boolean;
  };

  textDiff?: {
    // default 60, minimum string length (left and right sides) to use text diff algorythm: google-diff-match-patch
    minLength: number;
  };

  /**
   * this optional function can be specified to ignore object properties (eg. volatile data)
   * @param name property name, present in either context.left or context.right objects
   * @param context the diff context (has context.left and context.right objects)
   */
  /**
   *
   */
  propertyFilter?: (name: string, context: DiffContext) => boolean;

  /**
   *  default false. if true, values in the obtained delta will be cloned (using jsondiffpatch.clone by default),
   *  to ensure delta keeps no references to left or right objects. this becomes useful if you're diffing and patching
   *  the same objects multiple times without serializing deltas.
   *
   *  instead of true, a function can be specified here to provide a custom clone(value)
   */
  cloneDiffValues?: boolean | ((value: any) => any);
}

export interface DurableFieldConfig {
  ttl?: TimeString | Milliseconds;
  persist?: boolean; // defaults to true
}

const _keys: {
  [K in keyof DurableFieldConfig]-?: 1;
} = {
  persist: 1,
  ttl: 1,
};

export const durableFieldConfigKeys = Object.keys(
  _keys
) as (keyof typeof _keys)[];
