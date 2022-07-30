import get from 'lodash/get';
import { ID_SEPARATOR } from '../Transporter/HashPKSKConditionsToTopLevelFilter';
import {CollectionFieldIndexConfig} from "../Transporter/indexMapper";

export type EntityIDOptions = Pick<CollectionFieldIndexConfig<any>, 'PK' | 'SK'>;

export type KeyPart = {
  value: string | number;
  isAnyString: boolean;
  isFieldKey: boolean;
  type: 'string' | 'number';
  kind: 'PK' | 'SK';
  field: string;
};

export function mountEntityKeyParts(
  object: Record<string, any>,
  { PK, SK }: EntityIDOptions
): {
  PK: KeyPart[];
  SK: KeyPart[];
} {
  function process(kind: 'PK' | 'SK', k: string): KeyPart {
    const isFieldKey = k.startsWith('.');
    const isAnyString = k.startsWith('#');

    if (!isFieldKey && !isAnyString) {
      throw new Error(`${k} is not a valid value for "${kind}" hash function`);
    }

    const field = k.replace(/^\.|#/, '');

    let value;

    if (isAnyString) {
      value = field;
    } else if (isFieldKey) {
      value = get(object, field);
    }

    const type = typeof value;

    if (type !== 'string' && type !== 'number') {
      throw new Error(
        `Failed to mount "${kind}".` +
          `\n       Expected type string or number for field "${k}", but found "${type}" with value ${value}`
      );
    }

    return { value, isAnyString, isFieldKey, type, kind, field };
  }

  const PKParts: KeyPart[] = [];
  const SKParts: KeyPart[] = [];

  PK?.forEach((item) => PKParts.push(process('PK', item)));
  SK?.forEach((item) => SKParts.push(process('SK', item)));

  return {
    PK: PKParts,
    SK: SKParts,
  };
}

export const ENTITY_KEY_SEPARATOR = '#';

export function mountEntityIndexString(
  obj: Record<string, any>,
  { PK, SK }: EntityIDOptions
) {
  const parts = mountEntityKeyParts(obj, { PK, SK });

  const _PK = parts.PK.map((el) => el.value).join(ENTITY_KEY_SEPARATOR);
  const _SK = parts.SK.map((el) => el.value).join(ENTITY_KEY_SEPARATOR);

  return `${_PK}${ID_SEPARATOR}${_SK}`;
}

export function mountEntityIDDescriptor(
  obj: Record<string, any>,
  options: EntityIDOptions
) {
  let description = '';

  try {
    const parts = mountEntityKeyParts(obj, options);
    [...parts.PK, ...parts.SK].forEach((item) => {
      if (item.isFieldKey) {
        description += `${item.field}=${item.value}`;
      }
    });
  } catch (e) {
    console.error(e);
  }

  return description;
}
