import { $var } from './$var';
import { $pick, $pick_def } from './$pick';
import { $or, $or_def } from './$or';
import { $type, $type_def } from './$type';
import { $template, $template_def } from './$template';
import { $shape } from './$shape';
import { $merge, $merge_def } from './$merge';

// $op param
export type $oparam_list = ($one_op | $var)[] | ReadonlyArray<$one_op | $var>;
export type $oparam = $one_op | $var | $oparam_list;

export type t<OP extends $oparam, P1, P2> =
  //
  OP extends unknown
    ? P1 extends unknown
      ? P2 extends unknown
        ? _t<OP, P1, P2>
        : never
      : never
    : never;

type _t<OP, P1, P2> =
  //
  [OP] extends [$var]
    ? $pick<OP, P1, P2>
    : //

    keyof OP extends infer OPK
    ? OPK extends $op_key
      ? {
          $or: $or<$gop<OP, '$or'>, P1, P2>;
          $pick: $pick<$gop<OP, '$pick'>, P1, P2>;
          $template: $template<$gop<OP, '$template'>, P1, P2>;
          $type: $type<$gop<OP, '$type'>, P1, P2>;
          $shape: $shape<$gop<OP, '$shape'>, P1, P2>;
          $merge: $merge<$gop<OP, '$merge'>, P1, P2>;
        }[OPK]
      : never
    : never;

export interface $ops {
  $or?: $or_def;
  $merge?: $merge_def;
  $pick?: $pick_def;
  $template?: $template_def;
  $type?: $type_def;
  $shape?: { [K: string]: $oparam };

  // $if?: $oparam;
  // $is?: $type_def | $oparam;
  // $extends?: $type_def | $oparam;
  // $kin?: 'string' | 'number' | 'string?' | 'number?';
  // $kof?: $oparam;
  // $all?: $oparam_list;
  // $not?: $oparam_list;
  // $has?: $oparam;
  // $map?: $oparam;
  // $each?: $oparam;
  // $filter?: $oparam;
  // $flat?: true;
  // $merge?: $oparam_list;
  // $and?: $oparam_list;
  // $let?: { [K: string]: $oparam };
}

export type $op_key = Extract<keyof $ops, string>;

export type $ops_required = {
  [K in $op_key]: Exclude<$ops[K], undefined>;
};

export type $one_op = {
  [K in $op_key]: { [L in K]: Exclude<$ops[K], undefined> };
}[$op_key];

// get operation value
export type $gop<O, K extends $op_key> = [K] extends [keyof O]
  ? O[K] extends $ops_required[K]
    ? O[K]
    : never
  : never;
