import { parseObjectDefinition } from '@swind/schema';

export const createEntityDocumentBase = <Optional extends Readonly<boolean>>(
  optional: Optional = false as Optional
): EntityDocumentBaseDef<Optional> =>
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

export type EntityDocumentBaseDef<Optional extends boolean = false> = {
  _v: {
    hidden: true;
    ulid: { autoCreate: true };
    optional: Optional;
  };
  _c: {
    type: 'string';
    optional: Optional;
    description: 'Original document cursor. Aliased in field id.';
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
};
