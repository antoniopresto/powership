import { Cast } from '@powership/utils';
import { inspectObject } from '@powership/utils';

import type { FieldTypeParser } from '../applyValidator';

import { arrayFieldParse } from './ArrayFieldParse';
import { FieldType, TAnyFieldType } from './FieldType';
import type { Infer } from './Infer';
import type { ObjectFieldInput } from './_parseFields';

export type ArrayFieldDef<Of = any> = {
  length?: number;
  max?: number;
  min?: number;
  of: Cast<Of, ObjectFieldInput>;
};

export class ArrayField<T extends ArrayFieldDef> extends FieldType<
  Infer<T['of']>[],
  'array',
  T
> {
  //
  parse: FieldTypeParser<Infer<T>[]>;

  utils = {
    listItemType: {} as TAnyFieldType,
  };

  static is(item: any): item is ArrayField<any> {
    return item?.typeName === 'list';
  }

  constructor(def: T) {
    super({ def: def, name: 'array' });

    try {
      this.utils.listItemType = powership.parseObjectField(`ListItem`, def.of, {
        returnInstance: true,
      });
    } catch (e: any) {
      let message = `Filed to parse type:`;
      message += `\n${inspectObject(def, { tabSize: 2 })}`;
      e.stack = message + '\n' + e.stack;
      throw e;
    }

    const self = this;
    this.parse = this.applyParser({
      parse: (input: any, options) => {
        if (input === undefined && this.optional) return input;
        return arrayFieldParse({
          arrayOptions: self.def,
          input,
          parser: self.utils.listItemType.parse,
          parserOptions: options,
        });
      },
    });
  }

  static create = <T extends ArrayFieldDef>(def: T): ArrayField<T> => {
    return new ArrayField(def) as any;
  };
}

Object.assign(powership, {
  ArrayField,
});

declare global {
  interface powership {
    ArrayField: typeof ArrayField;
  }
}
