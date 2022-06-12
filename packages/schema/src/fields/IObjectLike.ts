export interface ObjectLike {
  definition: { [K: string]: any };
  __isDarchObject: true;
}

export interface GraphTypeLike {
  definition: any;
  __isGraphType: boolean;
}
