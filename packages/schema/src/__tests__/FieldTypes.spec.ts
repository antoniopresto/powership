import '../__globals__';

import { assert, IsExact } from 'conditional-type-checks';

import { _assertFields } from '../fields/__tests__/__assert';
import type { CursorType } from '../fields/_fieldDefinitions';
import { objectToGQL } from '../objectToGQL';

import type { InferObjectDefinition } from '../fields/Infer';
import { objectToTypescript } from '../objectToTypescript';
import { DateField } from '../fields/DateField';
import { CursorField } from '../fields/CursorField';
import { createObjectType } from '../ObjectType';
import { UlidField } from '../fields/UlidField';
import { FloatField } from '../fields/FloatField';
import { IntField } from '../fields/IntField';
import { EnumField } from '../fields/EnumField';
import { EmailField } from '../fields/EmailField';
import { RecordField } from '../fields/RecordField';
import { BooleanField } from '../fields/BooleanField';
import { UnknownField } from '../fields/UnknownField';

describe('FieldTypes', () => {
  describe('StringField', () => {
    it('parses', () => {
      expect(() => powership.StringField.create({ min: 1 }).parse('')).toThrow(
        '0 is less than the min string length 1.'
      );
      expect(() =>
        powership.StringField.create({ max: 2 }).parse('123')
      ).toThrow('3 is more than the max string length 2.');
      expect(
        powership.StringField.create({
          regex: ['^MIN.$', 'i'],
        }).parse('mine')
      ).toBe('mine');
      expect(() =>
        powership.StringField.create({ regex: ['MIN.'] }).parse('mine')
      ).toThrowError(`RegexMismatch`);
    });

    it('accept custom parse message', () => {
      expect(() =>
        powership.StringField.create({ min: 5 }).parse('abc', 'custom')
      ).toThrowError('custom');

      expect(() =>
        powership.StringField.create({ min: 5 }).parse(
          'abc',
          (v) => `hmm ${v} is not enough`
        )
      ).toThrowError('hmm abc is not enough');

      expect(() =>
        powership.StringField.create({ min: 5 }).parse(
          'xpt',
          () => new TypeError('tt')
        )
      ).toThrowError('tt');
    });

    test('types', () => {
      const def = {
        name: 'string',
        nameOpt: 'string?',
        nameList: '[string]',
        nameListOptional: '[string]?',
        nameFromType: powership.StringField.create().toList().toOptional(),
        defObject: {
          type: 'string',
          optional: true,
          list: true,
        },
      } as const;

      const gql = objectToGQL('TempString', def);

      expect(gql.typeToString().split('\n')).toEqual([
        'type TempString {',
        '  name: String!',
        '  nameOpt: String',
        '  nameList: [String]!',
        '  nameListOptional: [String]',
        '  nameFromType: [String]',
        '  defObject: [String]',
        '}',
      ]);

      type T = InferObjectDefinition<typeof def>;

      assert<
        IsExact<
          T,
          {
            defObject?: string[] | undefined;
            name: string;
            nameFromType?: string[] | undefined;
            nameList: string[];
            nameListOptional?: string[] | undefined;
            nameOpt?: string | undefined;
          }
        >
      >(true);
    });

    test('null in optional', () => {
      const res = powership.StringField.create().toOptional();
      expect(res.parse(null)).toBe(undefined);

      expect(
        powership
          .createType('nullasoptional', {
            object: {
              a: 'string?',
              b: 'string?',
              c: 'null',
              d: {
                type: 'string',
                defaultValue: 'foo',
              },
            },
          })
          .parse({})
      ).toEqual({
        c: null,
        d: 'foo',
      });
    });
  });

  describe('UlidField', () => {
    it('parses', () => {
      expect(UlidField.create({ autoCreate: true }).parse(undefined)).toMatch(
        powership.ULID_REGEX
      );
      expect(() =>
        UlidField.create({ autoCreate: false }).parse(undefined)
      ).toThrow('RequiredField');

      const VALID = '01FH3RMAQ4QWJ0ZJB73G4BPEEK';
      expect(UlidField.create().parse(VALID)).toEqual(VALID);
      expect(() => UlidField.create().parse('xxx')).toThrow('Invalid ulid.');
      expect(() =>
        UlidField.create().parse('xpt', () => new TypeError('ulid'))
      ).toThrowError('ulid');
    });

    it('should auto create in objects', () => {
      const obj = createObjectType({
        u: { ulid: { autoCreate: true } },
      });

      expect(obj.parse({}).u).toMatch(powership.ULID_REGEX);
    });

    test('types', () => {
      const def = {
        name: 'ulid',
        nameOpt: 'ulid?',
        nameList: '[ulid]',
        nameListOptional: '[ulid]?',
        nameFromType: UlidField.create().toList().toOptional(),
        defObject: {
          type: 'ulid',
          optional: true,
          list: true,
        },
      } as const;

      const gql = objectToGQL('TempUlid', def);

      expect(gql.typeToString().split('\n')).toEqual([
        'type TempUlid {',
        '  name: Ulid!',
        '  nameOpt: Ulid',
        '  nameList: [Ulid]!',
        '  nameListOptional: [Ulid]',
        '  nameFromType: [Ulid]',
        '  defObject: [Ulid]',
        '}',
        '',
        'scalar Ulid',
      ]);

      type T = InferObjectDefinition<typeof def>;

      assert<
        IsExact<
          T,
          {
            defObject?: string[] | undefined;
            name: string;
            nameFromType?: string[] | undefined;
            nameList: string[];
            nameListOptional?: string[] | undefined;
            nameOpt?: string | undefined;
          }
        >
      >(true);
    });
  });

  describe('IntField', () => {
    it('parses', () => {
      expect(() => IntField.create().parse(undefined)).toThrow('RequiredField');
      expect(() => IntField.create({ min: 1000 }).parse(5)).toThrow(
        '5 is less than the minimum 1000.'
      );
      expect(() => IntField.create({ max: 1 }).parse(2)).toThrow(
        '2 is more than the maximum 1.'
      );
      expect(() => IntField.create().parse(0.1)).toThrow(
        '0.1 is not a valid integer.'
      );

      expect(IntField.create().parse('1000044')).toBe(1000044);
      expect(() => IntField.create().parse('abc')).toThrow(
        'Expected value to be of type "number", found string instead.'
      );
      expect(() => IntField.create().parse('')).toThrow(
        'Expected value to be of type "number", found string instead.'
      );
    });

    test('types', () => {
      const def = {
        name: 'int',
        nameOpt: 'int?',
        nameList: '[int]',
        nameListOptional: '[int]?',
        nameFromType: IntField.create().toList().toOptional(),
        defObject: {
          type: 'int',
          optional: true,
          list: true,
        },
      } as const;

      const gql = objectToGQL('TempInt', def);

      expect(gql.typeToString().split('\n')).toEqual([
        'type TempInt {',
        '  name: Int!',
        '  nameOpt: Int',
        '  nameList: [Int]!',
        '  nameListOptional: [Int]',
        '  nameFromType: [Int]',
        '  defObject: [Int]',
        '}',
      ]);

      type T = InferObjectDefinition<typeof def>;

      assert<
        IsExact<
          T,
          {
            defObject?: number[] | undefined;
            name: number;
            nameFromType?: number[] | undefined;
            nameList: number[];
            nameListOptional?: number[] | undefined;
            nameOpt?: number | undefined;
          }
        >
      >(true);
    });
  });

  describe('FloatField', () => {
    it('parses', () => {
      expect(() => FloatField.create().parse(undefined)).toThrow(
        'RequiredField'
      );
      expect(() => FloatField.create({ min: 1000 }).parse(5)).toThrow(
        '5 is less than the minimum 1000.'
      );
      expect(() => FloatField.create({ max: 1 }).parse(2)).toThrow(
        '2 is more than the maximum 1.'
      );
      expect(FloatField.create().parse(0.1)).toBe(0.1);
      expect(FloatField.create().parse('1.5')).toBe(1.5);
      expect(() => FloatField.create().parse('abc')).toThrow(
        'Expected value to be of type "number", found string instead.'
      );
      expect(() => FloatField.create().parse('')).toThrow(
        'Expected value to be of type "number", found string instead.'
      );
    });

    test('types', () => {
      const def = {
        name: 'float',
        nameOpt: 'float?',
        nameList: '[float]',
        nameListOptional: '[float]?',
        nameFromType: FloatField.create().toList().toOptional(),
        defObject: {
          type: 'float',
          optional: true,
          list: true,
        },
      } as const;

      const gql = objectToGQL('TempFloatField', def);

      expect(gql.typeToString().split('\n')).toEqual([
        'type TempFloatField {',
        '  name: Float!',
        '  nameOpt: Float',
        '  nameList: [Float]!',
        '  nameListOptional: [Float]',
        '  nameFromType: [Float]',
        '  defObject: [Float]',
        '}',
      ]);

      type T = InferObjectDefinition<typeof def>;

      assert<
        IsExact<
          T,
          {
            defObject?: number[] | undefined;
            name: number;
            nameFromType?: number[] | undefined;
            nameList: number[];
            nameListOptional?: number[] | undefined;
            nameOpt?: number | undefined;
          }
        >
      >(true);
    });
  });

  describe('EnumField', () => {
    it('parses', () => {
      expect(() => EnumField.create(['a', 'b']).parse(undefined)).toThrow(
        'RequiredField'
      );
      expect(() => EnumField.create(['a', 'b']).parse(null)).toThrow(
        "accepted: 'a' or 'b', found null."
      );

      expect(() =>
        EnumField.create(['xx']).parse('ZZ', (v) => `${v}?`)
      ).toThrowError('ZZ?');
    });

    test('types', () => {
      const def = {
        name: {
          enum: ['a', 'x'],
        },
        nameFromType: EnumField.create(['a', 'x']).toList().toOptional(),
        defObject: {
          type: 'enum',
          optional: true,
          list: true,
          def: ['a', 'x'],
        },
      } as const;

      const gql = objectToGQL('TempEnumField', def);

      expect(gql.typeToString().split('\n')).toEqual([
        'type TempEnumField {',
        '  name: TempEnumField_name!',
        '  nameFromType: [TempEnumField_nameFromType]',
        '  defObject: [TempEnumField_defObject]',
        '}',
        '',
        'enum TempEnumField_name {',
        '  a',
        '  x',
        '}',
        '',
        'enum TempEnumField_nameFromType {',
        '  a',
        '  x',
        '}',
        '',
        'enum TempEnumField_defObject {',
        '  a',
        '  x',
        '}',
      ]);

      // type T = InferObjectDefinition<typeof def>;
      //
      // assert<
      //   IsExact<
      //     T,
      //     {
      //       defObject?: ('a' | 'x')[] | undefined;
      //       name: 'a' | 'x';
      //       nameFromType?: ('a' | 'x')[] | undefined;
      //     }
      //   >
      // >(true);
    });
  });

  describe('EmailField', () => {
    it('parses', () => {
      expect(() => EmailField.create().parse(undefined)).toThrow(
        'RequiredField'
      );
      expect(() => EmailField.create().parse(null)).toThrow(
        'Expected value to be of type "string", found null instead.'
      );
      expect(() => EmailField.create().parse('xx')).toThrow('Invalid email');
      expect(() => EmailField.create().parse('xx', () => 'huu')).toThrow('huu');
      expect(EmailField.create().parse('xx@zz.com')).toEqual('xx@zz.com');
    });

    test('types', () => {
      const def = {
        name: 'email',
        nameOpt: 'email?',
        nameList: '[email]',
        nameListOptional: '[email]?',
        nameFromType: EmailField.create().toList().toOptional(),
        defObject: {
          type: 'email',
          optional: true,
          list: true,
        },
      } as const;

      const gql = objectToGQL('TempEmail', def);

      expect(gql.typeToString().split('\n')).toEqual([
        'type TempEmail {',
        '  name: String!',
        '  nameOpt: String',
        '  nameList: [String]!',
        '  nameListOptional: [String]',
        '  nameFromType: [String]',
        '  defObject: [String]',
        '}',
      ]);

      type T = InferObjectDefinition<typeof def>;

      assert<
        IsExact<
          T,
          {
            defObject?: string[] | undefined;
            name: string;
            nameFromType?: string[] | undefined;
            nameList: string[];
            nameListOptional?: string[] | undefined;
            nameOpt?: string | undefined;
          }
        >
      >(true);
    });
  });

  describe('RecordField', () => {
    it('parses', () => {
      expect(() => RecordField.create().parse(undefined)).toThrow(
        'RequiredField'
      );

      expect(() => RecordField.create().parse(null)).toThrow(
        'Expected value to be of type "object", found null instead.'
      );

      expect(() => RecordField.create().parse([])).toThrow(
        'Expected value to be of type "object", found array instead.'
      );

      expect(() =>
        RecordField.create({ type: 'int' }).parse({ a: 'xx' })
      ).toThrow(
        'field \'a\': Expected value to be of type "number", found string instead.'
      );

      expect(
        RecordField.create({
          type: {
            union: ['int', 'boolean'],
          },
        }).parse({
          a: '1',
          b: true,
        })
      ).toEqual({
        a: 1,
        b: true,
      });

      expect(() =>
        RecordField.create({
          type: 'float',
          keyType: 'int',
        }).parse({ a: '1' })
      ).toThrow(
        'Unexpected record key `a`. Expected value to be of type "number", found string instead.'
      );
    });

    test('types', () => {
      const nameFromType = RecordField.create({
        type: '[int]?',
        keyType: 'int',
      })
        .toList()
        .toOptional();

      const def = {
        name: 'record',
        nameOpt: 'record?',
        nameList: '[record]',
        nameListOptional: '[record]?',
        nameFromType,
        defObject: {
          type: 'record',
          def: {
            keyType: 'int',
            type: {
              record: {
                type: {
                  object: {
                    name: {
                      union: ['string', '[int]?'],
                    },
                  },
                },
              },
            },
          },
          optional: true,
          list: true,
        },
      } as const;

      const gql = objectToGQL('TempRecord', def);

      expect(gql.typeToString().split('\n')).toEqual([
        'type TempRecord {',
        '  name: TempRecord_name!',
        '  nameOpt: TempRecord_nameOpt',
        '  nameList: [TempRecord_nameList]!',
        '  nameListOptional: [TempRecord_nameListOptional]',
        '  nameFromType: [TempRecord_nameFromType]',
        '  defObject: [TempRecord_defObject]',
        '}',
        '',
        'scalar TempRecord_name',
        '',
        'scalar TempRecord_nameOpt',
        '',
        'scalar TempRecord_nameList',
        '',
        'scalar TempRecord_nameListOptional',
        '',
        'scalar TempRecord_nameFromType',
        '',
        'scalar TempRecord_defObject',
      ]);

      // type AnyRecord = Record<string, any>;
      // type T = Infer<ObjectType<typeof def>>;
      //
      // _assertFields<
      //   T,
      //   {
      //     defObject?:
      //       | {
      //           [K: number]: {
      //             [K: string]: { name?: string | number[] | undefined };
      //           };
      //         }[]
      //       | undefined;
      //     name: AnyRecord;
      //     nameFromType?: Record<number, number[] | undefined>[] | undefined;
      //     nameList: AnyRecord[];
      //     nameListOptional?: AnyRecord[] | undefined;
      //     nameOpt?: AnyRecord | undefined;
      //   }
      // >(true);
    });

    // TODO
    xtest('ts-types', async () => {
      const object = createObjectType({
        r1: {
          record: {
            type: {
              object: {
                name: 'string',
                age: 'int',
              },
            },
          },
        },
        r2: 'record?',
        r3: '[record]?',
      });
      // @only-server
      const sut = await objectToTypescript('records', object.definition);

      expect(sut).toEqual('');
    });
  });

  describe('DateField', () => {
    it('parses', () => {
      expect(() => DateField.create().parse(undefined)).toThrow(
        'RequiredField'
      );
      expect(() => DateField.create().parse(null)).toThrow(
        'Expected value to be of type "date or string or number", found null instead.'
      );
      expect(DateField.create().parse('2000-01-01')).toEqual(
        new Date('2000-01-01T00:00:00.000Z')
      );

      expect(() => DateField.create().parse('xx', () => 'huu')).toThrow('huu');

      const now = new Date(1);
      const past = new Date(0);
      const future = new Date(2);

      expect(DateField.create().parse(now)).toEqual(now);

      expect(() => DateField.create({ min: now }).parse(past)).toThrow(
        '1970-01-01T00:00:00.000Z is less than the minimum 1970-01-01T00:00:00.001Z.'
      );

      expect(() => DateField.create({ max: now }).parse(future)).toThrow(
        '1970-01-01T00:00:00.002Z is more than the maximum 1970-01-01T00:00:00.001Z.'
      );

      expect(() =>
        DateField.create({ max: now }).parse(future, () => 'xit')
      ).toThrow('xit');
    });

    test('types', () => {
      const def = {
        name: 'date',
        nameOpt: 'date?',
        nameList: '[date]',
        nameListOptional: '[date]?',
        nameFromType: DateField.create().toList().toOptional(),
        defObject: {
          type: 'date',
          optional: true,
          list: true,
        },
      } as const;

      const gql = objectToGQL('TempDate', def);

      expect(gql.typeToString().split('\n')).toEqual([
        'type TempDate {',
        '  name: Date!',
        '  nameOpt: Date',
        '  nameList: [Date]!',
        '  nameListOptional: [Date]',
        '  nameFromType: [Date]',
        '  defObject: [Date]',
        '}',
        '',
        'scalar Date',
      ]);

      type T = InferObjectDefinition<typeof def>;

      assert<
        IsExact<
          T,
          {
            defObject?: Date[] | undefined;
            name: Date;
            nameFromType?: Date[] | undefined;
            nameList: Date[];
            nameListOptional?: Date[] | undefined;
            nameOpt?: Date | undefined;
          }
        >
      >(true);
    });
  });

  describe('CursorField', () => {
    it('parses', () => {
      expect(() => CursorField.create().parse(undefined)).toThrow(
        'RequiredField'
      );
      expect(() => CursorField.create().parse(null)).toThrow('Invalid input.');
      expect(() => CursorField.create().parse(12)).toThrow(
        'Expected cursor, found 12'
      );
      expect(() => CursorField.create().parse('xx', () => 'huu')).toThrow(
        'huu'
      );

      expect(() =>
        CursorField.create().parse({
          a: 1,
        })
      ).toThrow(`➤ field "PK": RequiredField`);

      expect(
        CursorField.create().parse({
          PK: 'a',
          version: '1',
          prefix: 'b',
          limit: 1,
          after: 'd',
          fields: ['surname'],
        })
      ).toEqual({
        PK: 'a',
        version: '1',
        prefix: 'b',
        limit: 1,
        after: 'd',
        fields: ['surname'],
      });
    });

    test('types', () => {
      const def = {
        name: 'cursor',
        nameOpt: 'cursor?',
        nameList: '[cursor]',
        nameListOptional: '[cursor]?',
        nameFromType: CursorField.create().toList().toOptional(),
        defObject: {
          type: 'cursor',
          optional: true,
          list: true,
        },
      } as const;

      const gql = objectToGQL('TempCursorField', def);

      expect(gql.typeToString().split('\n')).toEqual([
        'type TempCursorField {',
        '  name: Cursor!',
        '  nameOpt: Cursor',
        '  nameList: [Cursor]!',
        '  nameListOptional: [Cursor]',
        '  nameFromType: [Cursor]',
        '  defObject: [Cursor]',
        '}',
        '',
        'type Cursor {',
        '  """Primary Key"""',
        '  PK: String!',
        '',
        '  """Secondary or Sort Key"""',
        '  SK: String',
        '  after: String',
        '  fields: [String]',
        '  limit: Int',
        '',
        '  """The prefix to search as "startsWith" in SK"""',
        '  prefix: String',
        '',
        '  """Composite key separator"""',
        '  sep: String',
        '',
        '  """The Cursor format version"""',
        '  version: String!',
        '}',
      ]);

      type T = InferObjectDefinition<typeof def>['nameFromType'];

      _assertFields<
        T,
        {
          defObject?: CursorType[] | undefined;
          name: CursorType;
          nameFromType?: CursorType[] | undefined;
          nameList: CursorType[];
          nameListOptional?: CursorType[] | undefined;
          nameOpt?: CursorType | undefined;
        }
      >(true);
    });
  });

  describe('BooleanField', () => {
    it('parses', () => {
      expect(() => BooleanField.create().parse(undefined)).toThrow(
        'RequiredField'
      );
      expect(() => BooleanField.create().parse(null)).toThrow(
        'Expected boolean, found null'
      );
      expect(() => BooleanField.create().parse('xx', () => 'huu')).toThrow(
        'huu'
      );
      expect(BooleanField.create().parse(false)).toEqual(false);
      expect(BooleanField.create().parse(true)).toEqual(true);
    });

    test('types', () => {
      const def = {
        name: 'boolean',
        nameOpt: 'boolean?',
        nameList: '[boolean]',
        nameListOptional: '[boolean]?',
        nameFromType: BooleanField.create().toList().toOptional(),
        defObject: {
          type: 'boolean',
          optional: true,
          list: true,
        },
      } as const;

      const gql = objectToGQL('TempBooleanField', def);

      expect(gql.typeToString().split('\n')).toEqual([
        'type TempBooleanField {',
        '  name: Boolean!',
        '  nameOpt: Boolean',
        '  nameList: [Boolean]!',
        '  nameListOptional: [Boolean]',
        '  nameFromType: [Boolean]',
        '  defObject: [Boolean]',
        '}',
      ]);

      type T = InferObjectDefinition<typeof def>;

      _assertFields<
        T,
        {
          defObject?: boolean[] | undefined;
          name: boolean;
          nameFromType?: boolean[] | undefined;
          nameList: boolean[];
          nameListOptional?: boolean[] | undefined;
          nameOpt?: boolean | undefined;
        }
      >(true);
    });
  });

  describe('UnknownField', () => {
    it('parses', () => {
      expect(() => UnknownField.create().parse(undefined)).toThrow(
        'RequiredField'
      );
      expect(UnknownField.create().parse(null)).toBe(null);

      expect(() =>
        UnknownField.create({ types: ['number'] }).parse([])
      ).toThrow();

      expect(UnknownField.create({ types: ['number'] }).parse(1)).toBe(1);

      expect(() =>
        UnknownField.create({ types: ['number'] }).parse('xx', () => 'huu')
      ).toThrow('huu');

      expect(UnknownField.create().parse(false)).toEqual(false);
      expect(UnknownField.create().parse(true)).toEqual(true);
    });

    test('types', () => {
      const def = {
        name: 'unknown',
        nameOpt: 'unknown?',
        nameList: '[unknown]',
        nameListOptional: '[unknown]?',
        nameFromType: UnknownField.create().toList().toOptional(),
        defObject: {
          type: 'unknown',
          optional: true,
          list: true,
          description: '🤔',
        },
      } as const;

      const gql = objectToGQL('TempUnknownField', def);

      expect(gql.typeToString().split('\n')).toEqual([
        'type TempUnknownField {',
        '  name: TempUnknownField_name!',
        '  nameOpt: TempUnknownField_nameOpt',
        '  nameList: [TempUnknownField_nameList]!',
        '  nameListOptional: [TempUnknownField_nameListOptional]',
        '  nameFromType: [TempUnknownField_nameFromType]',
        '',
        '  """🤔"""',
        '  defObject: [TempUnknownField_defObject]',
        '}',
        '',
        'scalar TempUnknownField_name',
        '',
        'scalar TempUnknownField_nameOpt',
        '',
        'scalar TempUnknownField_nameList',
        '',
        'scalar TempUnknownField_nameListOptional',
        '',
        'scalar TempUnknownField_nameFromType',
        '',
        'scalar TempUnknownField_defObject',
      ]);

      type T = InferObjectDefinition<typeof def>;

      assert<
        IsExact<
          T,
          {
            defObject?: unknown[] | undefined;
            name: unknown;
            nameFromType?: unknown[] | undefined;
            // FIXME should infer as optional
            nameList: unknown[];
            nameListOptional?: unknown[] | undefined;
            nameOpt: unknown;
          }
        >
      >(true);
    });
  });
});
