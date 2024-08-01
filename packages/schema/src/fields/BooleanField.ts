import { getTypeName, watchable } from '@powership/utils';

import type { FieldTypeParser } from '../applyValidator';

import { FieldType } from './FieldType';

export const BooleanField = watchable(() => {
  return class BooleanField extends FieldType<boolean, 'boolean', undefined> {
    parse: FieldTypeParser<boolean>;

    constructor() {
      super({
        def: undefined,
        name: 'boolean',
      });
      this.parse = this.applyParser({
        parse: (input) => {
          if (typeof input !== 'boolean') {
            throw new Error(`Expected boolean, found ${getTypeName(input)}`);
          }
          return input;
        },
      });
    }

    static create = (): BooleanField => {
      return new BooleanField();
    };
  };
});
