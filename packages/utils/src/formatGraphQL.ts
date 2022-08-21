import { ASTNode, parse, print } from 'graphql';

export function formatGraphQL(schemaSdl: string) {
  const node: any = walkAST(parse(schemaSdl), 'definitions');
  return print(node);
}

function sortSchema(key: string, value) {
  if (key === 'definitions' || key === 'fields' || key === 'arguments') {
    return value.slice().sort((a, b) => {
      if (a.kind === 'SchemaDefinition') {
        return -1;
      }

      if (b.kind === 'SchemaDefinition') {
        return 1;
      }

      return a.name.value.localeCompare(b.name.value);
    });
  }

  return value;
}

function walkAST(node: ASTNode, key?: string) {
  // Map a node type to the child node type we should walk down next
  const nextKey = {
    arguments: null,
    definitions: 'fields',
    fields: 'arguments',
  };

  if (!key) {
    return node;
  }

  if (!Array.isArray(node[key])) {
    return node;
  }

  node[key] = sortSchema(key, node[key]).map((child) => {
    return walkAST(child, nextKey[key]);
  });

  return node;
}
