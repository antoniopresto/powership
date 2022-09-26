import { BJSON } from '@backland/utils/lib/BJSON';
import { RuntimeError } from '@backland/utils/lib/RuntimeError';
import { getTypeName } from '@backland/utils/lib/getTypeName';
import { Serializable } from '@backland/utils/lib/typeUtils';

import { FieldType, FieldTypeParser } from './FieldType';

const PROTO_KEY = '__o.proto__';

export interface LiteralFieldDef {
  '__o.proto__': string;
  value: string;
}

export class LiteralField<T extends Readonly<Serializable>> extends FieldType<
  T,
  'literal',
  LiteralFieldDef
> {
  parse: FieldTypeParser<T>;
  __isLiteralField = true;

  static utils = {
    deserialize(def: LiteralFieldDef): any {
      const typename = getTypeName(def.value);

      if (def[PROTO_KEY] === typename) return def.value;

      try {
        return BJSON.parse(def.value);
      } catch (e) {
        throw new RuntimeError(`Failed deserialize value`, {
          ...def,
        });
      }
    },

    serialize(value: any): string {
      if (typeof value === 'string') return value;

      try {
        return BJSON.stringify(value);
      } catch (e) {
        throw new RuntimeError(`Failed to serialize`, {
          //
        });
      }
    },

    toDef(input: any): LiteralFieldDef {
      if (LiteralField.isLiteralFieldDef(input)) return input;

      return {
        [PROTO_KEY]: getTypeName(input),
        value: LiteralField.utils.serialize(input),
      };
    },
  };

  constructor(def: T) {
    super({ def: LiteralField.utils.toDef(def), name: 'literal' });
    const expected = this.def.value;

    this.parse = this.applyParser({
      parse(input: T) {
        const received = LiteralField.utils.serialize(input);

        if (expected !== received) {
          throw new Error(
            `Unexpected literal value:\nExpected:\n${expected}\nReceived:\n${received}`
          );
        }
        return input;
      },
    });
  }

  static create = <T extends Readonly<Serializable>>(
    def: T
  ): LiteralField<T> => {
    return new LiteralField<T>(def);
  };

  static isFinalTypeDef(t: any): t is LiteralField<any> {
    return t?.type === 'literal';
  }

  static is(t: any): t is LiteralField<any> {
    return t?.__isLiteralField === true;
  }

  static isLiteralFieldDef(t: any): t is LiteralFieldDef {
    return typeof t?.[PROTO_KEY] === 'string';
  }
}
