import {
  aggio,
  Aggregation,
  assertEqual,
  nonNullValues,
  ObjectPath,
  pick,
} from '@swind/utils';

import { Infer } from '../Infer';
import { SchemaParser } from '../ObjectType/SchemaParser';

import {
  FieldComposer,
  FieldType,
  FieldTypeParser,
  TAnyFieldType,
} from './FieldType';
import { FieldDefinition, FinalFieldDefinition } from './_parseFields';

export type AliasFieldAggregation<Parent = any> = {
  type: FieldDefinition;
} & (
  | {
      from: ObjectPath<Parent>;
      aggregate: Aggregation<Parent> | Readonly<Aggregation<Parent>>;
    }
  | {
      aggregate: Aggregation<Parent> | Readonly<Aggregation<Parent>>;
      from?: undefined;
    }
  | { from: ObjectPath<Parent>; aggregate?: undefined }
);

export type AliasFieldDef = string | AliasFieldAggregation;

export class AliasField<InputDef extends AliasFieldDef = any> extends FieldType<
  InputDef extends { type: infer T } ? Infer<T> : any,
  'alias',
  AliasFieldDef
> {
  parse: FieldTypeParser<any>;

  _fieldType?: TAnyFieldType;
  utils: {
    fieldType: TAnyFieldType;
  };

  composer: FieldComposer;

  static is(input: any): input is AliasField {
    return input?.__isFieldType && input?.type === 'alias';
  }

  static assert(input: any): asserts input is AliasField {
    assertEqual(this.is(input), true, 'NOT_ALIAS_FIELD');
  }

  constructor(def: AliasFieldDef) {
    super({
      def,
      name: 'alias',
    });

    const self = this;

    this.composer = {
      compose: (parent: Record<string, any>) => {
        if (typeof this.def === 'string') {
          return pick(parent, this.def);
        }
        if (this.def.from) {
          parent = pick(parent, this.def.from);
          if (!this.def.aggregate) return parent;
        }

        nonNullValues({ aggregate: this.def.aggregate });
        return aggio([parent], this.def.aggregate as Aggregation<any>);
      },
      getField: () => {
        if (this._fieldType) return this._fieldType;

        let field: FinalFieldDefinition;

        const parent = this.getParent();
        if (typeof def === 'string') {
          field = SchemaParser.getCachedInstance(
            parent.definition[def]
          ).definition;
        } else {
          field = SchemaParser.getCachedInstance(def.type).definition;
        }

        this._fieldType = SchemaParser.createInstance(
          {
            ...this.asFinalFieldDef,
            ...field,
          },
          { context: { parentObjectType: parent }, omitMeta: true }
        );

        return this._fieldType;
      },
      validate: (value) => {
        return this.utils.fieldType.validate(value);
      },
      setContext: (schema) => {
        self.setContext({ parentObjectType: schema });
      },
    };

    this.parse = (input) => {
      return this.utils.fieldType.parse(input);
    };

    this.utils = Object.defineProperties(
      { ...self.utils },
      {
        fieldType: {
          get: () => {
            if (!self._fieldType) {
              self._fieldType = self.composer.getField();
            }
            return self._fieldType;
          },
        },
      }
    );
  }

  static create = (def: AliasFieldDef): AliasField => {
    return new AliasField(def);
  };
}
