import { assert, IsExact } from 'conditional-type-checks';

import { CursorType } from '../_fieldDefinitions';
import { Infer } from '../Infer';

type AnyRecord = { [K: string]: any };

test('infer string def', () => {
  // ====== SIMPLE STRING DEF =======
  //   any:
  assert<IsExact<Infer<'any'>, any>>(true);

  //   boolean:
  type TBoolean = Infer<'boolean'>;
  assert<IsExact<TBoolean, boolean>>(true);

  //   cursor:
  assert<IsExact<Infer<'cursor'>, CursorType>>(true); //   date:

  //   date
  assert<IsExact<Infer<'date'>, Date>>(true);

  //   email:
  assert<IsExact<Infer<'email'>, string>>(true);

  //   float:
  assert<IsExact<Infer<'float'>, number>>(true);

  //   int:
  assert<IsExact<Infer<'int'>, number>>(true);

  //   null:
  assert<IsExact<Infer<'null'>, null>>(true);

  //   record:
  assert<IsExact<Infer<'record'>, AnyRecord>>(true);

  //   string:
  assert<IsExact<Infer<'string'>, string>>(true);

  //   ulid:
  assert<IsExact<Infer<'ulid'>, string>>(true);

  //   undefined:
  assert<IsExact<Infer<'undefined'>, undefined>>(true);

  //   unknown:
  assert<IsExact<Infer<'unknown'>, unknown>>(true);

  //   object:
  type TObject = Infer<'object'>;
  assert<IsExact<TObject, never>>(true);

  //   union:
  assert<IsExact<Infer<'union'>, never>>(true);

  //   enum:
  assert<IsExact<Infer<'enum'>, never>>(true);
  //

  // ====== LIST STRING DEF =======
  //   any:
  assert<IsExact<Infer<'[any]'>, any[]>>(true);

  //   boolean:
  assert<IsExact<Infer<'[boolean]'>, boolean[]>>(true);

  //   cursor:
  assert<IsExact<Infer<'[cursor]'>, CursorType[]>>(true); //   date:

  //   date
  assert<IsExact<Infer<'[date]'>, Date[]>>(true);

  //   email:
  assert<IsExact<Infer<'[email]'>, string[]>>(true);

  //   float:
  assert<IsExact<Infer<'[float]'>, number[]>>(true);

  //   int:
  assert<IsExact<Infer<'[int]'>, number[]>>(true);

  //   null:
  type TNullList = Infer<'[null]'>;
  assert<IsExact<TNullList, null[]>>(true);

  //   record:
  assert<IsExact<Infer<'[record]'>, AnyRecord[]>>(true);

  //   string:
  assert<IsExact<Infer<'[string]'>, string[]>>(true);

  //   ulid:
  assert<IsExact<Infer<'[ulid]'>, string[]>>(true);

  //   undefined:
  assert<IsExact<Infer<'[undefined]'>, undefined[]>>(true);

  //   unknown:
  assert<IsExact<Infer<'[unknown]'>, unknown[]>>(true);

  //   object:
  assert<IsExact<Infer<'[object]'>, never[]>>(true);

  //   union:
  assert<IsExact<Infer<'[union]'>, never[]>>(true);

  //   enum:
  assert<IsExact<Infer<'[enum]'>, never[]>>(true);
  //

  // ====== LIST OPTIONAL STRING DEF =======
  //   any:
  assert<IsExact<Infer<'[any]?'>, any[] | undefined>>(true);

  //   boolean:
  assert<IsExact<Infer<'[boolean]?'>, boolean[] | undefined>>(true);

  //   cursor:
  assert<IsExact<Infer<'[cursor]?'>, CursorType[] | undefined>>(true); //   date:

  //   date
  assert<IsExact<Infer<'[date]?'>, Date[] | undefined>>(true);

  //   email:
  assert<IsExact<Infer<'[email]?'>, string[] | undefined>>(true);

  //   float:
  assert<IsExact<Infer<'[float]?'>, number[] | undefined>>(true);

  //   int:
  assert<IsExact<Infer<'[int]?'>, number[] | undefined>>(true);

  //   null:
  assert<IsExact<Infer<'[null]?'>, null[] | undefined>>(true);

  //   record:
  assert<IsExact<Infer<'[record]?'>, AnyRecord[] | undefined>>(true);

  //   string:
  type TStringOptList = Infer<'[string]?'>;
  assert<IsExact<TStringOptList, string[] | undefined>>(true);

  //   ulid:
  assert<IsExact<Infer<'[ulid]?'>, string[] | undefined>>(true);

  //   undefined:
  assert<IsExact<Infer<'[undefined]?'>, undefined[] | undefined>>(true);

  //   unknown:
  type TUnknownOptList = Infer<'[unknown]?'>;
  assert<IsExact<TUnknownOptList, unknown[] | undefined>>(true);

  //   object:
  assert<IsExact<Infer<'[object]?'>, never[] | undefined>>(true);

  //   union:
  assert<IsExact<Infer<'[union]?'>, never[] | undefined>>(true);

  //   enum:
  assert<IsExact<Infer<'[enum]?'>, never[] | undefined>>(true);
});
