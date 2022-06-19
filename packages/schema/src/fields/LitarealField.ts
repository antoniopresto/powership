import { RuntimeError } from '@darch/utils/lib/RuntimeError';
import { getTypeName } from '@darch/utils/lib/getTypeName';
import { inspectObject } from '@darch/utils/lib/inspectObject';
import { Serializable } from '@darch/utils/lib/typeUtils';

import { FieldType, FieldTypeParser } from './FieldType';
import { CommonFieldDefinition } from './_fieldDefinitions';

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
    serialize(value: any): string {
      if (typeof value === 'string') return value;

      try {
        return inspectObject(value, { tabSize: 0, depth: 0 });
      } catch (e) {
        throw new RuntimeError(`Failed to serialize`, {
          //
        });
      }
    },

    deserialize(def: LiteralFieldDef): any {
      const typename = getTypeName(def.value);

      if (def['__o.proto__'] === typename) return def.value;

      try {
        return JSON.parse(def.value);
      } catch (e) {
        throw new RuntimeError(`Failed deserialize value`, {
          ...def,
        });
      }
    },

    toDef(input: any): LiteralFieldDef {
      if (LiteralField.isLiteralFieldDef(input)) return input;

      return {
        value: LiteralField.utils.serialize(input),
        [PROTO_KEY]: getTypeName(input),
      };
    },
  };

  constructor(def: T) {
    super('literal', LiteralField.utils.toDef(def));
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

  static isFinalTypeDef(t: any): t is CommonFieldDefinition<'literal'> {
    return t?.type === 'literal';
  }

  static is(t: any): t is LiteralField<any> {
    return t?.__isLiteralField === true;
  }

  static isLiteralFieldDef(t: any): t is LiteralFieldDef {
    return typeof t?.[PROTO_KEY] === 'string';
  }
}
