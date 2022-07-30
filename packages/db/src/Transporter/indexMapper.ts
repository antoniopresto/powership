export type IndexKeyHash<Keys> = `.${Extract<Keys, string>}` | `#${string}`;

// Definition for a document index
export type CollectionFieldIndexConfig<T extends Record<string, unknown>> = {
  field: string;
  PK: IndexKeyHash<Extract<keyof T, string>>[];
  SK?: IndexKeyHash<Extract<keyof T, string>>[];
};

export interface DocumentIndexMapper<Document extends Record<string, unknown>> {
  (): {};
}

export function createDocumentIndexMapper<
  Document extends Record<string, unknown>
>(options: {
  indices: CollectionFieldIndexConfig<any>[];
}): DocumentIndexMapper<Document> {
  
  
  return function documentIndexMapper() {
    return {};
  };
}
