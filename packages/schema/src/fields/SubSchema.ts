/**
 * Used to represent a schema as another schema field
 */

import { FieldType, FieldTypeParser, isFieldInstance } from '../FieldType';
import { Infer } from '../Infer';
import type { Schema } from '../Schema';
import type { SchemaDefinitionInput } from '../TSchemaConfig';

export class SubSchemaField<
  DefinitionInput extends SchemaDefinitionInput
> extends FieldType<Infer<DefinitionInput>, 'schema', DefinitionInput> {
  parse: FieldTypeParser<Infer<DefinitionInput>>;
  schema: Schema<DefinitionInput>;

  static is(t: any): t is SubSchemaField<SchemaDefinitionInput> {
    return isFieldInstance(t) && t.typeName === 'schema';
  }

  constructor(def: DefinitionInput) {
    super('schema', def);

    this.schema = require('../Schema').createSchema(def);

    this.parse = this.applyParser({
      parse: (input) => {
        return this.schema.parse(input);
      },
    });
  }

  static create = <DefinitionInput extends SchemaDefinitionInput>(
    def: DefinitionInput
  ) => {
    return new SubSchemaField<DefinitionInput>(def);
  };

  graphql = () => ({
    name: 'Unknown',
    sdl: 'scalar Unknown',
  });
}
