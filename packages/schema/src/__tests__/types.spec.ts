import { assert, IsExact } from 'conditional-type-checks';

import { Infer } from '../Infer';
import { _assertFields } from '../fields/__tests__/__assert';
import {
  createObjectType,
  createType,
  EnumField,
  ObjectType,
  ParseStringDefinition,
} from '../types';

describe('typings', () => {
  test('enum', () => {
    type enumT = ParseStringDefinition<'enum?'>;

    assert<
      IsExact<
        enumT,
        {
          def: undefined;
          description?: string;
          list: false;
          optional: true;
          type: 'enum';
        }
      >
    >(true);
  });

  test('alias', () => {
    const sut = [
      createType('foo', 'unknown'),
      createType('boolean'),
      createType('ga', { object: { name: 'string' } }),
    ]
      .map((el) => el.optionalId)
      .join('');

    expect(sut).toEqual('fooga');
  });

  test('TypeFromObjectDefinition', () => {
    const otherObject = new ObjectType({
      name: 'string',
      status: {
        enum: ['open', 'closed'],
      },
    } as const);

    const definition = {
      name: 'string',
      nameList: '[string]',
      nameListOptional: '[string]?',
      optional: 'string?',
      age: 'int',
      gender: {
        enum: ['male', 'female', 'other'],
        optional: true,
      },
      category: {
        enum: ['general', 'closed'],
      },
      categoryRO: {
        enum: ['general', 'closed'],
      } as const,
      '12Enum': {
        enum: ['1', '2'],
      },
      enumTypeField: EnumField.create(['x', 'xx']),
      otherObject,
      otherObjectList: {
        type: otherObject,
        list: true,
      },
    } as const;

    type T = Infer<{ object: typeof definition }>;

    type Expected = {
      '12Enum': '1' | '2';
      age: number;
      category: 'general' | 'closed';
      categoryRO: 'general' | 'closed';
      enumTypeField: 'x' | 'xx';
      gender?: 'male' | 'female' | 'other' | undefined;
      name: string;
      nameList: string[];
      nameListOptional?: string[] | undefined;
      optional?: string | undefined;
      otherObject: {
        name: string;
        status: 'open' | 'closed';
      };
      otherObjectList: {
        name: string;
        status: 'open' | 'closed';
      }[];
    };

    _assertFields<T, Expected>(true);
  });

  test('object as type', () => {
    const object1 = createObjectType({
      name: 'string',
      age: 'int?',
    });

    type S1 = {
      age?: number | undefined;
      name: string;
    };

    type TS1 = Infer<typeof object1>;
    assert<IsExact<TS1, S1>>(true);

    const object2 = createObjectType({
      people: object1,
      status: {
        enum: ['open', 'closed'],
      },
      names: '[string]?',
    } as const);

    type S2 = {
      names?: string[] | undefined;
      people: S1;
      status: 'open' | 'closed';
    };

    type TS2 = Infer<typeof object2>;

    assert<IsExact<TS2, S2>>(true);

    const object3 = createObjectType({
      classes: object2,
      classesListOptional: {
        type: object2,
        list: true,
        optional: true,
      },
      count: 'int',
    } as const);

    type S3 = {
      classes: S2;
      classesListOptional?: S2[] | undefined;
      count: number;
    };

    type T3 = Infer<{ type: typeof object3 }>;

    assert<IsExact<T3, S3>>(true);
  });

  test('literal object object', () => {
    const object1 = createObjectType({
      a: 'string?',
      b: {
        object: {
          name: 'string?',
          age: 'int',
          numbers: '[float]?',
        },
        optional: true,
        list: true,
      },
    } as const);

    type Result = Infer<typeof object1>;

    type Expected = {
      a?: string | undefined;
      b?:
        | {
            age: number;
            name?: string;
            numbers?: number[];
          }[]
        | undefined;
    };

    assert<IsExact<Result, Expected>>(true);
  });

  // it('union with optional item', () => {
  //   // const soi = UnionField.create([{ type: 'string', optional: true }, 'int'] as const);
  //   const soi_ = [{ type: 'string', optional: true }, 'int?'] as const;
  //   // type soipp = ParsedFieldDefinition<typeof soi>
  //   type soipp_ = ParsedFieldDefinition<typeof soi_>
  //
  //
  //
  //   const si = UnionField.create([{ type: 'string', optional: false }, 'int'] as const);
  //   const si_ = [{ type: 'string', optional: false }, 'int'] as const;
  //
  //   const si2 = UnionField.create([StringField.create(), 'int'] as const);
  //   const si2_ = [StringField.create(), 'int'] as const;
  //
  //   const soli = UnionField.create([StringField.create().toList().toOptional(), 'int'] as const);
  //   const soli_ = [StringField.create().toList().toOptional(), 'int'] as const;
  //
  //   const sli = UnionField.create([StringField.create().toList(), 'int'] as const);
  //   const sli_ = [StringField.create().toList(), 'int'] as const;
  //
  //   // const siol = UnionField.create(['[int]?', UnionField.create(['string'])]);
  //
  //   const colid = UnionField.create(['[cursor]?', 'ulid'] as const);
  //   const colid_ = [['[cursor]?', 'ulid']] as const;
  //
  //   const unk = UnionField.create(['unknown?', 'int'] as const);
  //   const unk_ = ['unknown?', 'int'] as const;
  //
  //   type T1 = {
  //     soi?: string | undefined | number;
  //     si: string | number;
  //     si2: string | number;
  //     soli?: string[] | undefined | number;
  //     sli: string[] | number;
  //     // siol?: string | number[] | undefined;
  //     colid?: CursorType[] | undefined | string;
  //     unk?: unknown;
  //
  //     soi_?: string | undefined | number;
  //     si_: string | number;
  //     si2_: string | number;
  //     soli_?: string[] | undefined | number;
  //     sli_: string[] | number;
  //     // siol_?: string | number[] | undefined;
  //     colid_?: CursorType[] | undefined | string;
  //     unk_?: unknown;
  //   };
  //
  //   const definition = {
  //     soi,
  //     // si,
  //     // si2,
  //     // soli,
  //     // sli,
  //     // // siol,
  //     // colid,
  //     // unk,
  //
  //     soi_,
  //     // si_,
  //     // si2_,
  //     // soli_,
  //     // sli_,
  //     // // siol_,
  //     // colid_,
  //     // unk_,
  //   } as const
  //
  //   const object1 = createObjectType(definition);
  //
  //   type S1 = TypeFromObject<typeof object1>;
  //
  //   assert<IsExact<T1, S1>>(true);
  // });
});
