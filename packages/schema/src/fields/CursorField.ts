import { createProxy } from '@powership/utils';

import {CursorType, FieldType, FieldTypeParser, gft, obj } from '../internal';

export class CursorField extends FieldType<
  CursorType,
  'cursor',
  undefined
> {
  parse: FieldTypeParser<CursorType>;

  utils: {
    object: obj.ObjectType<{
      PK: {
        description: 'Primary Key',
        string: {},
      },
      SK: {
        description: 'Secondary or Sort Key',
        optional: true,
        string: {},
      },
      after: {
        // description: '',
        optional: true,
        
        string: {},
      },
      fields: {
        list: true,
        
        // description: '',
        optional: true,
        string: {},
      },
      limit: {
        int: {},
        // description: '',
        optional: true,
      },
      prefix: {
        description: 'The prefix to search as "startsWith" in SK',
        optional: true,
        string: {},
      },
      sep: {
        description: 'Composite key separator',
        optional: true,
        string: {},
      },
      version: {
        description: 'The Cursor format version',
        string: {},
      },
    }>;
  };
  
  constructor() {
    super({ def: undefined, name: 'cursor' });
    
    const parser = this.utils.object.parse.bind(this.utils.object);

    this.parse = this.applyParser({
      parse: (value) => {
        if (typeof value !== 'object') {
          throw new Error(`Expected cursor, found ${value}`);
        }

        return parser(value);
      },
    });
  }

  static create = (): CursorField => {
    return new CursorField();
  };
}
