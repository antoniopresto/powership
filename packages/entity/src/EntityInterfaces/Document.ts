import { IsKnown, Merge } from '@powership/utils';

export type EntityDocumentBase = {
  _v: string;
  _c: string;
  createdAt: Date;
  createdBy: string | undefined;
  id: string;
  ulid: string;
  updatedAt: Date;
  updatedBy: string | undefined;
};

export type EntityDocument<Shape> = IsKnown<Shape> extends 1
  ? Merge<EntityDocumentBase, Shape>
  : EntityDocumentBase & { [K: string]: unknown };

export type EntityDocumentInput<Shape = {}> = IsKnown<Shape> extends 1
  ? Merge<Partial<EntityDocumentBase>, Shape>
  : Partial<EntityDocumentBase> & { [K: string]: unknown };
