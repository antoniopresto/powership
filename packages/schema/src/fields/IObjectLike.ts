export interface ObjectLike {
  definition: { [K: string]: any };
  __isDarchObject: true;
}

export interface DarchTypeLike {
  definition: any;
  __isDarchType: boolean;
}
