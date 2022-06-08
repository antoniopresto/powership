/**
 * Used to represent an object as another object field
 */

import { Infer } from '../Infer';
import type { ObjectType } from '../ObjectType';
import type { ObjectDefinitionInput } from '../TObjectConfig';

import { FieldType, FieldTypeParser, isFieldInstance } from './FieldType';

export class ObjectField<
  DefinitionInput extends ObjectDefinitionInput
> extends FieldType<Infer<DefinitionInput>, 'object', DefinitionInput> {
  parse: FieldTypeParser<Infer<DefinitionInput>>;

  utils: {
    object: ObjectType<DefinitionInput>;
  };

  static is(t: any): t is ObjectField<ObjectDefinitionInput> {
    return isFieldInstance(t) && t.typeName === 'object';
  }

  constructor(def: DefinitionInput) {
    super('object', def);

    this.utils = {
      object: require('../ObjectType').createObjectType(def),
    };

    this.parse = this.applyParser({
      parse: (input) => {
        return this.utils.object.parse(input);
      },
    });
  }

  static create = <DefinitionInput extends ObjectDefinitionInput>(
    def: DefinitionInput
  ) => {
    return new ObjectField<DefinitionInput>(def);
  };
}
