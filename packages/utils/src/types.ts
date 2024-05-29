export {};
// import Ajv from 'ajv';
// import RE2 from 're2';
//
// import { cacheable } from '../cacheable';
//
// import { createGetters } from './lazyRun';
//
// const lazy_ajv = lazyRun(() => new Ajv({ code: { regExp: RE2 as any } }));
//
// export type TypedDefinition =
//   | TypedUnionDefinition
//   | TypeOfWrapped
//   | TypedObjectDefinition;
//
// export interface TypedObjectDefinition {
//   [K: string]: TypedDefinition;
// }
//
// export interface TypedUnionDefinition extends ReadonlyArray<TypedDefinition> {}
//
// export class TypeOf<Definition extends TypedDefinition> {
//   constructor(private definition: Definition) {}
//
//   compile = () => {};
//
//   static compile = (input: TypedDefinition) => {
//     const required = new Set<string>();
//     const seen = new Set<string>();
//
//     const { value: ajv } = lazy_ajv;
//
//     function __compile(current: TypedDefinition) {
//       if (isArray(current)) {
//         return {
//           type: current.map((el) => __compile(el)),
//         };
//       }
//
//       if (typeof current === 'string') {
//         const { type, optional, list } = __compile(current);
//         switch (type) {
//           case 'boolean':
//           case 'string':
//           case 'integer':
//           case 'function':
//           case 'email':
//           case 'undefined':
//           case 'object':
//           case 'number':
//           case 'phone':
//           case 'date': {
//             return;
//           }
//           default: {
//             throw new Error(`unexpected type name "${type}".`);
//           }
//         }
//       }
//     }
//
//     return __compile(input) // TODO Return {jsonSchema, parseUsingAJV, };
//   };
//
//   static tokenize = <T extends TypeOfWrapped>(
//     type: T
//   ): {
//     [TOF in TypeOfKey]: { type: TOF; optional: boolean; list: boolean };
//   }[TypeOfKey] => {
//     const res = Object.create(null);
//     res.type = type?.replace?.(/[\[\]?, ]/g, '');
//     this.assertType(res.type);
//     res.list = /]\??$/.test(type);
//     res.optional = /\?$/.test(type);
//     return res;
//   };
//
//   static assertType = (type: any) => {
//     if (!this.typeOf.includes(type)) {
//       throw new Error(
//         `expected type name, found ${type}.\n  valid types are:\n${this.typeOfJoined}.`
//       );
//     }
//   };
//
//   static typeOf = Object.freeze([
//     // ** js typeof ** //
//     'string',
//     'number',
//     'integer',
//     'boolean',
//     'object',
//     'function',
//     'undefined',
//     'symbol',
//     'bigint', // -> use regex "^\-?[0-9]*$" ?
//
//     // ** not part of js "typeof" ** //
//
//     'phone',
//     'date',
//     'email',
//   ] as const);
//
//   static get typeOfJoined() {
//     return cacheable(this, () => this.typeOf.map((el) => `  ${el}`).join('\n'));
//   }
// }
//
// export type TypeOfKey = (typeof TypeOf)['typeOf'][number];
//
// // Some keywords in JSON Schemas can lead to very slow validation for certain data.
// // These keywords include (but may be not limited to):
// // pattern and format for large strings - in some cases using maxLength can help
// // mitigate it, but certain regular expressions can lead to exponential validation
// // time even with relatively short strings (see ReDoS attack).
// // patternProperties for large property names - use propertyNames to mitigate, but
// // some regular expressions can have exponential evaluation time as well.
// // uniqueItems for large non-scalar arrays - use maxItems to mitigate
//
// export type TypeOfWrapped =
//   | TypeOfKey
//   | `${TypeOfKey}?`
//   | `[${TypeOfKey}]`
//   | `[${TypeOfKey}]?`;
//
// export type TypeofToken<T extends TypeOfWrapped> =
//   //
//   T extends TypeOfKey
//     ? T
//     : T extends `[${infer U}]?`
//     ? U
//     : T extends `${infer U}?`
//     ? U
//     : T extends `[${infer U}]`
//     ? U
//     : never;
//
// export type ParseStringDefinition<S> =
//   //
//   S extends TypeOfKey
//     ? {
//         def: undefined;
//         description?: string;
//         list: false;
//         optional: false;
//         type: S;
//       }
//     : //
//     //
//     S extends `${TypeOfKey}?`
//     ? //
//       {
//         def: undefined;
//         description?: string;
//         list: false;
//         optional: true;
//         type: TypeofToken<S>;
//       }
//     : //
//     S extends `[${TypeOfKey}]`
//     ? //
//       {
//         def: undefined;
//         description?: string;
//         list: true;
//         optional: false;
//         type: TypeofToken<S>;
//       }
//     : //
//     S extends `[${TypeOfKey}]?`
//     ? //
//       {
//         def: undefined;
//         description?: string;
//         list: true;
//         optional: true;
//         type: TypeofToken<S>;
//       }
//     : never;
//
// export function isArray<T>(
//   input: T | ReadonlyArray<T> | ArrayLike<T>
// ): input is ArrayLike<T> {
//   return Array.isArray(input) as boolean;
// }
//
// export function lazyRun<T>(run: () => T) {
//   let didSuccess = false;
//   let didFail = false;
//   let value: T | undefined = undefined;
//   let error: any = null;
//
//   function self(): T {
//     if (didSuccess) return value!;
//     if (didFail) throw error;
//
//     try {
//       didSuccess = true;
//       didFail = false;
//       value = run();
//       error = null;
//       return value;
//     } catch (e) {
//       didSuccess = false;
//       didFail = true;
//       value = undefined;
//       error = e;
//       throw e;
//     }
//   }
//
//   return createGetters(Object.create(null), {
//     value: {
//       set(next: T) {
//         value = next;
//         didSuccess = true;
//         didFail = false;
//         return value;
//       },
//       get() {
//         return self();
//       },
//     },
//
//     status: {
//       get() {
//         if (!didSuccess && !didFail) return 'stale';
//         return error ? 'resolved' : 'failed';
//       },
//     },
//
//     error: {
//       get() {
//         return error;
//       },
//     },
//
//     didSuccess: {
//       get() {
//         return didSuccess;
//       },
//     },
//
//     didFail: {
//       get() {
//         return didFail;
//       },
//     },
//   }) as unknown as
//     | { value: T; error: null; status: 'stale' }
//     | { value: T; error: null; status: 'resolved' }
//     | { value: T; error: unknown; status: 'failed' };
// }
