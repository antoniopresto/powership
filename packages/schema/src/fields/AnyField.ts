import { watchable } from '@powership/utils';

import type { FieldTypeParser } from '../applyValidator';

import { FieldType } from './FieldType';

export const AnyField = watchable(() => {
  return class AnyField extends FieldType<any, 'any', any> {
    parse: FieldTypeParser<any>;

    constructor(..._args: any) {
      super({
        def: undefined,
        name: 'any',
      });

      this.parse = this.applyParser({
        parse: (input) => {
          return input;
        },
      });
    }

    static create = (..._args: any): AnyField => {
      return new AnyField();
    };
  };
});

export type AnyField = typeof AnyField;
