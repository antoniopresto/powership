import { FieldType, FieldTypeParser } from '../FieldType';
import type { Schema } from '../Schema';

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

let cursorSchema: Schema<CursorDef> | undefined;

function getCursorSchema() {
  // circular dependency
  const { createSchema } = require('../Schema');
  cursorSchema = cursorSchema || createSchema('Cursor', def);
  return cursorSchema;
}

export class CursorField extends FieldType<CursorType, 'cursor', undefined> {
  parse: FieldTypeParser<CursorType>;

  get schema() {
    return getCursorSchema()!;
  }

  static schema() {
    return getCursorSchema()!;
  }

  constructor() {
    super('cursor', undefined);

    const parser = this.schema.parse.bind(this.schema);

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
