import { createType, GraphTypeLike, Infer } from '@darch/schema';
import { Transporter } from './Transporter/Transporter';

export type IndexKeyHash<Keys> = `.${Extract<Keys, string>}` | `#${string}`;

export interface CreateIndexOptions<
  Type extends GraphTypeLike,
  T extends Infer<Type> = Infer<Type>
> {
  type: Type;
  transporter: Transporter;
  PK: IndexKeyHash<keyof T>[];
  SK?: IndexKeyHash<keyof T>[];
}

const user = createType({
  object: {
    name: 'string',
    age: 'string',
  },
});

createIndex({
  type: user,
  PK: ['.name'],
  transporter: {} as any,
});

// loadById startsWith(PK->SK?)
// loadOne(PK:Condition, SK?:Condition)
// loadMany(PK:Condition, SK?:Condition)

export function createIndex<Type extends GraphTypeLike>(
  options: CreateIndexOptions<Type>
) {}
