import { keys } from '@powership/utils';

import { createType, GraphType } from './GraphType/GraphType';
import { FieldDefinitions, FieldTypeName } from './fields/_fieldDefinitions';
import { FieldDefinition } from './fields/_parseFields';
import { types } from './fields/fieldTypes';

export type __Cast<A1 extends any, A2 extends any> = A1 extends A2 ? A1 : A2;

export type CreateType<
  Name extends FieldTypeName,
  Definition extends FieldDefinitions[Name]
> = [Extract<Definition, undefined>] extends [never]
  ? <Def extends Definition>(
      ...params: [name: string, definition: Def] | [definition: Def]
    ) => GraphType<__Cast<{ [N in Name]: Def }, FieldDefinition>>
  : //
    //
    //
    <Def extends Definition>(
      ...params: [name?: string, definition?: Def] | [definition?: Def]
    ) => GraphType<__Cast<{ [N in Name]: Def }, FieldDefinition>>;

export type _Creators<Name extends FieldTypeName> =
  FieldDefinitions[Name] extends unknown
    ? CreateType<Name, FieldDefinitions[Name]>
    : never;

export type Creators = {
  [Name in FieldTypeName]: Name extends unknown ? _Creators<Name> : never;
};

export const t = keys(types).reduce((acc, tname) => {
  function fn(...args: any[]) {
    if (typeof args[0] === 'string') {
      // @ts-ignore
      return createType(args[0], { [tname]: args[1] });
    }
    // @ts-ignore
    return createType({ [tname]: args[1] });
  }

  Object.defineProperty(fn, 'name', { value: `${tname}Type` });

  return { ...acc, [tname]: fn };
}, {} as any) as unknown as Creators;

const {
  boolean: booleanType,
  string: stringType,
  ID: idType,
  any: anyType,
  float: floatType,
  object: objectType,
  undefined: undefinedType,
  cursor: cursorType,
  int: intType,
  array: arrayType,
  date: dateType,
  unknown: unknownType,
  email: emailType,
  literal: literalType,
  enum: enumType,
  null: nullType,
  meta: metaType,
  record: recordType,
  ulid: ulidType,
  union: unionType,
  phone: phoneType,
  alias: aliasType,
} = t;

export {
  booleanType,
  stringType,
  idType,
  anyType,
  floatType,
  objectType,
  undefinedType,
  cursorType,
  intType,
  arrayType,
  dateType,
  unknownType,
  emailType,
  literalType,
  enumType,
  nullType,
  metaType,
  recordType,
  ulidType,
  unionType,
  phoneType,
  aliasType,
};
