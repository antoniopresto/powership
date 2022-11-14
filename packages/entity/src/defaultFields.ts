import { ParseFields, parseObjectDefinition } from '@backland/schema';

export const createEntityDefaultFields = <Optional extends Readonly<boolean>>(
  optional: Optional = false as Optional
): EntityDefaultFieldsDef<Optional> =>
  parseObjectDefinition({
    _v: {
      hidden: true,
      ulid: { autoCreate: true },
      optional: optional,
    },
    createdAt: { type: 'date', optional },
    createdBy: {
      optional: true,
      type: 'string',
    },
    id: { type: 'string', optional },
    ulid: { type: 'ulid', optional },
    updatedAt: { type: 'date', optional },
    updatedBy: {
      optional: true,
      type: 'string',
    },
  }).definition as any;

export type EntityOptionalDefaultFieldsDef = EntityDefaultFieldsDef<true>;

export type EntityDefaultFieldsDef<Optional extends boolean = false> =
  ParseFields<{
    _v: {
      hidden: true;
      ulid: { autoCreate: true };
      optional: Optional;
    };
    createdAt: { type: 'date'; optional: Optional };
    createdBy: {
      optional: true;
      type: 'string';
    };
    id: { type: 'string'; optional: Optional };
    ulid: { type: 'ulid'; optional: Optional };
    updatedAt: { type: 'date'; optional: Optional };
    updatedBy: {
      optional: true;
      type: 'string';
    };
  }>;
