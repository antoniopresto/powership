import { assert, IsExact } from 'conditional-type-checks';

import { CursorType } from '../_fieldDefinitions';
import { Infer } from '../Infer';

type AnyRecord = { [K: string]: any };

test('ParseFields object typings', () => {
  // ====== SIMPLE STRING DEF =======
  //   any:
  assert<IsExact<Infer<{ object: { name: 'any' } }>, { name: any }>>(true);

  //   boolean:
  type TBoolean = Infer<{ object: { name: 'boolean' } }>;
  assert<IsExact<TBoolean, { name: boolean }>>(true);

  //   cursor:
  type TTCursor = Infer<{ object: { name: 'cursor' } }>;
  assert<IsExact<TTCursor, { name: CursorType }>>(true); //   date:

  //   date
  assert<IsExact<Infer<{ object: { name: 'date' } }>, { name: Date }>>(true);

  //   email:
  assert<IsExact<Infer<{ object: { name: 'email' } }>, { name: string }>>(true);

  //   float:
  assert<IsExact<Infer<{ object: { name: 'float' } }>, { name: number }>>(true);

  //   int:
  assert<IsExact<Infer<{ object: { name: 'int' } }>, { name: number }>>(true);

  //   null:
  assert<IsExact<Infer<{ object: { name: 'null' } }>, { name: null }>>(true);

  //   record:
  assert<IsExact<Infer<{ object: { name: 'record' } }>, { name: AnyRecord }>>(
    true
  );

  //   string:
  assert<IsExact<Infer<{ object: { name: 'string' } }>, { name: string }>>(
    true
  );

  //   ulid:
  assert<IsExact<Infer<{ object: { name: 'ulid' } }>, { name: string }>>(true);

  //   undefined:
  assert<
    IsExact<Infer<{ object: { name: 'undefined' } }>, { name?: undefined }>
  >(true);

  //   unknown:
  assert<IsExact<Infer<{ object: { name: 'unknown' } }>, { name: unknown }>>(
    true
  );

  //   invalid object:
  type TObject = Infer<{ object: { name: 'object' } }>;
  assert<IsExact<TObject, { name: never }>>(true);

  //   union:
  assert<IsExact<Infer<{ object: { name: 'union' } }>, { name: never }>>(true);
  type TSUnion = Infer<{ object: { name: { union: ['string', 'int'] } } }>;
  assert<IsExact<TSUnion, { name: string | number }>>(true);

  //   enum:
  type TSEnum = Infer<{ object: { name: { enum: ['a', 'b'] } } }>;
  assert<IsExact<TSEnum, { name: 'a' | 'b' }>>(true);
  //

  // ====== LIST STRING DEF =======
  //   any:
  assert<IsExact<Infer<{ object: { name: '[any]' } }>, { name: any[] }>>(true);

  //   boolean:
  assert<
    IsExact<Infer<{ object: { name: '[boolean]' } }>, { name: boolean[] }>
  >(true);

  //   cursor:
  assert<
    IsExact<Infer<{ object: { name: '[cursor]' } }>, { name: CursorType[] }>
  >(true); //   date:

  //   date
  assert<IsExact<Infer<{ object: { name: '[date]' } }>, { name: Date[] }>>(
    true
  );

  //   email:
  assert<IsExact<Infer<{ object: { name: '[email]' } }>, { name: string[] }>>(
    true
  );

  //   float:
  assert<IsExact<Infer<{ object: { name: '[float]' } }>, { name: number[] }>>(
    true
  );

  //   int:
  assert<IsExact<Infer<{ object: { name: '[int]' } }>, { name: number[] }>>(
    true
  );

  //   null:
  type TNullList = Infer<{ object: { name: '[null]' } }>;
  assert<IsExact<TNullList, { name: null[] }>>(true);

  //   record:
  assert<
    IsExact<Infer<{ object: { name: '[record]' } }>, { name: AnyRecord[] }>
  >(true);

  //   string:
  assert<IsExact<Infer<{ object: { name: '[string]' } }>, { name: string[] }>>(
    true
  );

  //   ulid:
  assert<IsExact<Infer<{ object: { name: '[ulid]' } }>, { name: string[] }>>(
    true
  );

  //   undefined:
  assert<
    IsExact<Infer<{ object: { name: '[undefined]' } }>, { name: undefined[] }>
  >(true);

  //   unknown:
  assert<
    IsExact<Infer<{ object: { name: '[unknown]' } }>, { name: unknown[] }>
  >(true);

  //   object:
  assert<IsExact<Infer<{ object: { name: '[object]' } }>, { name: never[] }>>(
    true
  );

  //   union:
  assert<IsExact<Infer<{ object: { name: '[union]' } }>, { name: never[] }>>(
    true
  );

  //   enum:
  assert<IsExact<Infer<{ object: { name: '[enum]' } }>, { name: never[] }>>(
    true
  );
  //

  // ====== LIST OPTIONAL STRING DEF =======
  //   any:
  assert<
    IsExact<Infer<{ object: { name: '[any]?' } }>, { name?: any[] | undefined }>
  >(true);

  //   boolean:
  assert<
    IsExact<
      Infer<{ object: { name: '[boolean]?' } }>,
      { name?: boolean[] | undefined }
    >
  >(true);

  //   cursor:
  assert<
    IsExact<
      Infer<{ object: { name: '[cursor]?' } }>,
      { name?: CursorType[] | undefined }
    >
  >(true); //   date:

  //   date
  assert<
    IsExact<
      Infer<{ object: { name: '[date]?' } }>,
      { name?: Date[] | undefined }
    >
  >(true);

  //   email:
  assert<
    IsExact<
      Infer<{ object: { name: '[email]?' } }>,
      { name?: string[] | undefined }
    >
  >(true);

  //   float:
  assert<
    IsExact<
      Infer<{ object: { name: '[float]?' } }>,
      { name?: number[] | undefined }
    >
  >(true);

  //   int:
  assert<
    IsExact<
      Infer<{ object: { name: '[int]?' } }>,
      { name?: number[] | undefined }
    >
  >(true);

  //   null:
  assert<
    IsExact<
      Infer<{ object: { name: '[null]?' } }>,
      { name?: null[] | undefined }
    >
  >(true);

  //   record:
  assert<
    IsExact<
      Infer<{ object: { name: '[record]?' } }>,
      { name?: AnyRecord[] | undefined }
    >
  >(true);

  //   string:
  type TStringOptList = Infer<{ object: { name: '[string]?' } }>;
  assert<IsExact<TStringOptList, { name?: string[] | undefined }>>(true);

  //   ulid:
  type TUlid = Infer<{ object: { name: '[ulid]?' } }>;
  assert<IsExact<TUlid, { name?: string[] | undefined }>>(true);

  //   undefined:
  assert<
    IsExact<
      Infer<{ object: { name: '[undefined]?' } }>,
      { name?: undefined[] | undefined }
    >
  >(true);

  //   unknown:
  type TUnknownOptList = Infer<{ object: { name: '[unknown]?' } }>;
  assert<IsExact<TUnknownOptList, { name?: unknown[] | undefined }>>(true);

  //   object:
  assert<
    IsExact<
      Infer<{ object: { name: '[object]?' } }>,
      { name?: never[] | undefined }
    >
  >(true);

  //   union:
  assert<
    IsExact<
      Infer<{ object: { name: '[union]?' } }>,
      { name?: never[] | undefined }
    >
  >(true);

  //   enum:
  assert<
    IsExact<
      Infer<{ object: { name: '[enum]?' } }>,
      { name?: never[] | undefined }
    >
  >(true);
});
