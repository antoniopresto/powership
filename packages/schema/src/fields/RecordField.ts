import { expectedType } from '@swind/utils';
import { inspectObject } from '@swind/utils';

import { CircularDeps } from '../CircularDeps';
import { Infer } from '../Infer';
import type { FieldDefinitionConfig } from '../TObjectConfig';

import { FieldType, FieldTypeParser, TAnyFieldType } from './FieldType';

const validKeyTypes = ['int', 'string', 'float'] as const;
type ValidKeyType = typeof validKeyTypes[number];

export type RecordFieldDef = {
  keyType?: ValidKeyType;
  type?: FieldDefinitionConfig;
};

export type InferRecordFieldType<Def> = Def extends { keyType: 'int' | 'float' }
  ? {
      [K: number]: Infer<
        Def extends { type: FieldDefinitionConfig } ? Def['type'] : 'any'
      >;
    }
  : {
      [K: string]: Infer<
        Def extends { type: FieldDefinitionConfig } ? Def['type'] : 'any'
      >;
    };

export class RecordField<Def extends RecordFieldDef> extends FieldType<
  InferRecordFieldType<Def>,
  'record',
  Def | undefined
> {
  __isRecordField = true;

  static is(input: any): input is RecordField<RecordFieldDef> {
    return !!(input && typeof input === 'object' && input.__isRecordField);
  }
  //
  parse: FieldTypeParser<InferRecordFieldType<Def>>;

  constructor(def: Def = { keyType: 'string', type: 'any' } as any) {
    super({ def: def, name: 'record' });

    const { parseObjectField } = CircularDeps;

    let parser: TAnyFieldType;
    try {
      parser = parseObjectField(`RecordField`, def?.type || 'any', true);
    } catch (e: any) {
      e.message = `RecordField: failed to create parser for record values: ${
        e.message
      }\n${inspectObject({ receivedDef: def }, { tabSize: 2 })}`;
      e.stack = e.message;
      throw e;
    }

    let keyParser: TAnyFieldType;

    try {
      if (!validKeyTypes.includes(def.keyType as any)) {
        throw new Error(`keyType should be on of ${validKeyTypes}`);
      }

      keyParser = parseObjectField('RecordFieldKey', def.keyType!, true);
    } catch (e: any) {
      e.message = `RecordField: failed to create parser for record keys: ${
        e.message
      }\n${inspectObject({ receivedDef: def }, { tabSize: 2 })}`;
      e.stack = e.message;
      throw e;
    }

    this.parse = this.applyParser({
      parse: (input: any) => {
        expectedType({ value: input }, 'object');

        const result: any = {};

        for (let key in input) {
          keyParser.parse(key, (_, err) => {
            return `Unexpected record key \`${key}\`. ${err.message}`;
          });
        }

        for (let key in input) {
          try {
            result[key] = parser.parse(input[key]);
          } catch (e: any) {
            throw new Error(`field '${key}': ${e.message}`);
          }
        }

        return result;
      },
    });
  }

  static create = <
    Def extends RecordFieldDef = { keyType: 'string'; type: 'any' }
  >(
    def?: Def
  ): RecordField<Def> => {
    def = { keyType: 'string', type: 'any', ...def } as any;
    return new RecordField(def);
  };
}
