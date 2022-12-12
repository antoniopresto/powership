import { FilterConditions, isFilterConditionKey } from './Transporter';
import {
  encodeNumber,
  getByPath,
  getKeys,
  inspectObject,
} from '@backland/utils';
import {
  IndexKeyHash,
  IndexPartKind,
  ParsedIndexPart,
} from './CollectionIndex';
import { parseIndexFieldName } from './parseIndexFieldName';

export function pickIndexKeyPartsFromDocument(param: {
  acceptNullable: boolean;
  doc: Record<string, any>;
  indexField: ParsedIndexPart['indexField'];
  // (`#${string}` | `.${string}`)[]
  indexPartKind: IndexPartKind;
  indexParts: ReadonlyArray<IndexKeyHash>; // when mounting filter for search, SK can be omitted
  destination: 'filter' | 'document';
}): ParsedIndexPart {
  let {
    indexParts,
    indexField,
    indexPartKind,
    doc,
    acceptNullable,
    destination,
  } = param;

  const invalidFields: ParsedIndexPart['invalidFields'] = [];

  const stringParts: string[] = [];

  let foundEmptyCondition = false;
  let conditionFound: FilterConditions | undefined = undefined;
  let nullableFound: ParsedIndexPart['nullableFound'];
  const requiredFields: ParsedIndexPart['requiredFields'] = [];

  if (destination === 'filter') {
    const destinationIndexFieldName = parseIndexFieldName(
      indexField,
      indexPartKind
    );

    if (typeof doc[destinationIndexFieldName] === 'string') {
      // for when filtering the final field name like '_idPK' instead of
      // searching by the fields that compose that indexField
      indexParts = [`#${doc[destinationIndexFieldName]}`];
    }
  }

  indexParts.forEach((keyPart) => {
    if (nullableFound) return;

    if (keyPart.startsWith('#')) {
      return stringParts.push(keyPart.slice(1));
    }

    if (keyPart.startsWith('.')) {
      const documentField = keyPart.slice(1);
      requiredFields.push(documentField);

      let found = getByPath(doc, documentField);

      if (found === undefined || found === null) {
        if (acceptNullable) return (nullableFound = { value: found });
        //
        return invalidFields.push({
          details: `Expected string or number, found ${found}.`,
          documentField: keyPart,
          indexField: indexField,
          indexPartKind,
          reason: 'missing',
        });
      }

      if (typeof found === 'object') {
        const keys = getKeys(found);

        if (!keys.length && acceptNullable) {
          foundEmptyCondition = true;
          return (nullableFound = { value: undefined });
        }

        if (keys.length === 1) {
          const $op = isFilterConditionKey(keys[0]) ? keys[0] : undefined;
          if ($op) {
            return (conditionFound = {
              [$op]:
                typeof found[$op] === 'number'
                  ? encodeNumber(found[$op])
                  : found[$op],
            });
          }
        }
      }

      const canContinueAsString = !invalidFields.length && !conditionFound;

      if (canContinueAsString && typeof found === 'string') {
        return stringParts.push(found);
      }

      if (canContinueAsString && typeof found === 'number') {
        return stringParts.push(encodeNumber(found));
      }

      return invalidFields.push({
        details: `Expected string or number, found ${typeof found} with value: ${inspectObject(
          found,
          {
            tabSize: 0,
          }
        )}.`,
        documentField: keyPart,
        indexField,
        indexPartKind,
        reason: 'invalid',
      });
    }

    return invalidFields.push({
      details: `Expected key part to match ".\${string}" or "#\${string}", found ${keyPart}`,
      documentField: keyPart,
      indexField,
      indexPartKind,
      reason: 'invalid',
    });
  });

  const result: ParsedIndexPart = {
    foundParts: stringParts,
    indexField,
    invalidFields,
    isFilter: false,
    requiredFields,
    valid: !invalidFields.length,
    PK_SK: indexPartKind,
  };

  if (foundEmptyCondition) {
    result.foundEmptyCondition = foundEmptyCondition;
  }

  if (nullableFound) {
    result.nullableFound = nullableFound;
  }

  if (foundEmptyCondition || conditionFound) {
    result.isFilter = true;
  }

  if (conditionFound) {
    result.conditionFound = conditionFound;
  }

  if (indexParts.length && !result.isFilter && !result.foundParts.length) {
    result.valid = false;
  }

  return result;
}
