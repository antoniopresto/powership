import { assert, IsExact } from 'conditional-type-checks';

import { ObjectType } from '../../ObjectType/ObjectType';
import { InferField } from '../Infer';

import { _assertFields } from './__assert';

test('infer union types', () => {
  type TUnion = InferField<{
    object: { names: { union: ['string', 'int']; list: true } };
  }>;
  assert<IsExact<TUnion, { names: (string | number)[] }>>(true);

  type TUnionList = InferField<{
    list: true;
    object: { name: { union: ['string', 'int'] } };
  }>;
  assert<IsExact<TUnionList, { name: string | number }[]>>(true);

  type TUnionListOptional = InferField<{
    list: true;
    object: { name: { union: ['string', 'int'] } };
    optional: true;
  }>;

  assert<IsExact<TUnionListOptional, { name: string | number }[] | undefined>>(
    true
  );

  type TUnionListOptionalItem = InferField<{
    list: true;
    object: { name: { union: ['string', 'int?'] } };
    optional: true;
  }>;
  assert<
    IsExact<TUnionListOptionalItem, { name?: string | number }[] | undefined>
  >(true);

  assert<
    IsExact<TUnionListOptionalItem, { name?: string | number }[] | undefined>
  >(true);

  type SampleObject = ObjectType<{
    add: { object: { name: 'string' } };
    addListOptional: {
      list: true;
      object: {
        name: 'string';
        uni: {
          union: [
            { enum: ['a', 'b'] }, //
            'int'
          ];
        };
      };
      optional: true;
    };
    days: { enum: ['0', '1']; list: true; optional: true };
    number: 'int?';
    street: 'string';
  }>;

  type TSampleObjectInfer = InferField<SampleObject>;

  type TSampleObject = {
    add: { name: string };
    addListOptional?:
      | {
          name: string;
          uni: 'a' | 'b' | number;
        }[]
      | undefined;
    days?: ('0' | '1')[] | undefined;
    number?: number | undefined;
    street: string;
  };

  assert<IsExact<TSampleObject, TSampleObjectInfer>>(true);

  type AddressObject = InferField<{
    object: {
      // email type - will validate against email regex
      age: 'int?';
      // another way to define object fields
      deliveryAddress: SampleObject;
      // any string
      email: 'email?';
      // represents an enum
      letter: { enum: ['a', 'b', 'c'] };

      // more detailed way to define enums
      letterOptionalList: {
        enum: ['x', 'y', 'z'];
        list: true;
        optional: true;
      };

      name: 'string';

      // optional integer
      notes: '[int]?';

      // using a previous object as field type
      optionalAddress: {
        type: SampleObject;
        optional: true;
      };

      // declaring a union field - will infer as `string | undefined | number[]`
      unionField: { union: ['string?', '[int]?'] };
    };
  }>;

  _assertFields<
    AddressObject,
    {
      age?: number | undefined;
      deliveryAddress: TSampleObject;
      email?: string | undefined;
      letter: 'a' | 'b' | 'c';
      letterOptionalList?: ('x' | 'y' | 'z')[] | undefined;
      name: string;
      notes?: number[] | undefined;
      optionalAddress?: TSampleObject | undefined;
      unionField?: string | number[] | undefined;
    }
  >(true);
});
