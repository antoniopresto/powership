import { createType } from '../GraphType/GraphType';
import { createObjectType } from '../ObjectType';
import { createResolver } from '../Resolver';
import {
  createGraphQLSchema,
  resolversTypescriptParts,
} from '../createGraphQLSchema';
import { objectToTypescript } from '../objectToTypescript';

describe('objectToTypescript', () => {
  it('works', async () => {
    const object = createObjectType({
      name: 'string',
      date: 'date',
      pointers: '[cursor]',
      bool: 'boolean?',
      ulids: '[ulid]?',
      dates: '[date]',
      id: '[ID]?',
      sex: {
        union: [
          {
            enum: ['m', 'f', 'o'],
            optional: true,
          },
        ],
      },
      addresses: {
        union: [
          {
            object: {
              kind: { enum: ['home'] },
              street: 'string',
              number: {
                union: ['string', 'float'],
              },
            },
            optional: true,
            list: true,
            description: 'Home address',
          },
          {
            object: {
              kind: { enum: ['work'] },
              week_days: {
                enum: ['0', '1', '2', '3', '4', '5', '6'],
              },
              name: {
                object: {
                  firstName: 'string',
                  lastName: 'string',
                },
              },
            },
          },
        ],
      },
    } as const)
      .describe('My Custom Object')
      .describe({ name: 'person name', pointers: 'some pointers' });

    const ts = await objectToTypescript('MyObject', object);

    expect(ts.split('\n')).toEqual([
      '/**',
      ' * My Custom Object',
      ' */',
      'export interface MyObject {',
      '  /**',
      '   * person name',
      '   */',
      '  name: string;',
      '  date: Date;',
      '  pointers: Cursor[];',
      '  bool?: boolean;',
      '  ulids?: Ulid[];',
      '  dates: Date[];',
      '  id?: ID[];',
      '  sex?: "m" | "f" | "o";',
      '  addresses?:',
      '    | {',
      '        kind: "home";',
      '        /**',
      '         * person name',
      '         */',
      '        street: string;',
      '        number: string | number;',
      '      }[]',
      '    | {',
      '        kind: "work";',
      '        week_days: "0" | "1" | "2" | "3" | "4" | "5" | "6";',
      '        name: {',
      '          /**',
      '           * person name',
      '           */',
      '          firstName: string;',
      '          /**',
      '           * person name',
      '           */',
      '          lastName: string;',
      '        };',
      '      };',
      '}',
      '',
    ]);
  });

  it('handle union', async () => {
    const IntervalType = createType('Interval', {
      union: [
        // (10|7|5|3)
        {
          object: {
            from: { literal: 10 },
          },
        },
        {
          object: {
            from: { literal: 7 },
          },
        },
        {
          object: {
            from: { literal: 5 },
          },
        },
        {
          object: {
            from: { literal: 3 },
          },
        },
      ],
    });

    const resolver = createResolver({
      type: IntervalType,
      name: 'getIntervals',
      async resolve() {
        return IntervalType.parse({});
      },
    });

    const gil = createType('IntervalList', {
      type: IntervalType,
      list: true,
    });

    const resolverList = createResolver({
      type: gil,
      name: 'getIntervalsList',
      async resolve() {
        return [IntervalType.parse({})];
      },
    });

    const schema = createGraphQLSchema([resolver, resolverList]);
    const ts = await resolversTypescriptParts({
      name: 'Tools',
      options: {},
      resolvers: schema.utils.resolvers,
    });

    expect(ts.code.split('\n')).toEqual([
      'export type getIntervalsInput = {',
      '  [k: string]: unknown | undefined;',
      '};',
      'export type Interval =',
      '  | {',
      '      from: 10;',
      '    }',
      '  | {',
      '      from: 7;',
      '    }',
      '  | {',
      '      from: 5;',
      '    }',
      '  | {',
      '      from: 3;',
      '    };',
      'export type getIntervalsListInput = {',
      '  [k: string]: unknown | undefined;',
      '};',
      'export type IntervalList = (',
      '  | {',
      '      from: 10;',
      '    }',
      '  | {',
      '      from: 7;',
      '    }',
      '  | {',
      '      from: 5;',
      '    }',
      '  | {',
      '      from: 3;',
      '    }',
      ')[];',
      'export interface Tools {',
      '  getIntervals: { input: getIntervalsInput; payload: Interval };',
      '  getIntervalsList: { input: getIntervalsListInput; payload: IntervalList };',
      '}',
      'export type QueryResolvers = {',
      '  getIntervals(args: getIntervalsInput): Promise<Interval>;',
      '  getIntervalsList(args: getIntervalsListInput): Promise<IntervalList>;',
      '};',
      'export type MutationResolvers = {};',
      'export type SubscriptionResolvers = {};',
      '',
    ]);
  });
});
