import { Darch } from '../Darch';
import type { ObjectType } from '../ObjectType';

import { FieldType, FieldTypeParser } from './FieldType';
import { CursorType } from './_fieldDefinitions';

const def = {
  PK: {
    string: {},
    description: 'Primary Key',
  },
  SK: {
    string: {},
    description: 'Secondary or Sort Key',
    optional: true,
  },
  version: {
    string: {},
    description: 'The Cursor format version',
  },
  prefix: {
    string: {},
    description: 'The prefix to search as "startsWith" in SK',
    optional: true,
  },
  sep: {
    string: {},
    description: 'Composite key separator',
    optional: true,
  },
  limit: {
    int: {},
    // description: '',
    optional: true,
  },
  after: {
    string: {},
    // description: '',
    optional: true,
  },
  fields: {
    string: {},
    // description: '',
    optional: true,
    list: true,
  },
} as const;

type CursorDef = typeof def;

let cursorObject: ObjectType<CursorDef> | undefined;

function getCursorObject() {
  // circular dependency
  const { createObjectType } = Darch.ObjectType;
  cursorObject = cursorObject || createObjectType('Cursor', def);
  return cursorObject;
}

export class CursorField extends FieldType<CursorType, 'cursor', undefined> {
  parse: FieldTypeParser<CursorType>;

  utils: {
    object: ObjectType<CursorDef>;
  };

  static object() {
    return getCursorObject()!;
  }

  constructor() {
    super('cursor', undefined);

    this.utils = {
      object: getCursorObject()!,
    };

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
