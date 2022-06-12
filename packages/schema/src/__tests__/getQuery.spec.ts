import {
  graphGet,
  GraphGetData,
  QueryBuilder,
} from '../GraphQLParser/graphGet';

describe('graphGet', () => {
  it('works', async () => {
    const { read } = new QueryBuilder((data) => {
      return [
        data.name,
        data.items[0].inner1[0].final, //
        data.author({ full: true, search: { antonio: '🥂' } }).username,
        data.author.age,
        data.author.address.street,
        data.author.address.zipcode,
        data.bananas,
      ];
    });

    expect(read().split('\n')).toEqual([
      'name',
      'items {',
      '  inner1 {',
      '    final',
      '  }',
      '}',
      'author (full: true, search: {antonio: "🥂"}) {',
      '  username',
      '  age',
      '  address {',
      '    street',
      '    zipcode',
      '  }',
      '}',
      'bananas',
    ]);
  });

  it('handle arguments', async () => {
    const queryBuilder = new QueryBuilder((data) => {
      const query = data.query.Query({
        where: { id: 2 },
        orderBy: 'post_date',
      });

      return [
        query.name({ shit: 'happens' }),
        query.going,
        query.how, //
        query.posts(),
        query.posts().title,
        query.age,
      ];
    });

    queryBuilder.read();

    expect(queryBuilder.query.split('\n')).toEqual([
      'query {',
      '  Query (where: {id: 2}, orderBy: "post_date") {',
      '    name (shit: "happens")',
      '    going',
      '    how',
      '    posts {',
      '      title',
      '    }',
      '    age',
      '  }',
      '}',
    ]);
  });

  it('run utils', () => {
    type S = {
      query: {
        Nodes: {
          title: string;
          price: string;
          cart: {
            total?: number;
          };
          near: {
            storeName: string;
            users: {
              name: string;
            }[];
          };
        };
      };
    };

    const queryBuilder = graphGet((data: GraphGetData<S>) => {
      data.query.$name('QueryYeah');
      data.query.Nodes.$aliasFor('Posts');

      const posts = data.query.Nodes;
      const near = posts.near({ id: 'me' });

      return [
        posts.title,
        posts.price,
        posts.cart,
        posts.cart.total, //
        near.storeName,
        near.users.name,
      ];
    });

    const sut = queryBuilder.read();

    expect(sut.split('\n')).toEqual([
      'query QueryYeah {',
      '  Nodes: Posts {',
      '    near (id: "me") {',
      '      storeName',
      '      users {',
      '        name',
      '      }',
      '    }',
      '    title',
      '    price',
      '    cart {',
      '      total',
      '    }',
      '  }',
      '}',
    ]);
  });

  // it('getQuery objectType', () => {
  //   const object = createType('user', {
  //     object: {
  //       name: 'string',
  //     },
  //   });
  //
  //   type ExcludeObjects<T> = T extends Record<string, any>
  //     ? {
  //         [K in keyof T]?: T[K] extends Record<string, any>
  //           ? Partial<ExcludeObjects<T[K]>> & { __a: 1 }
  //           : T[K];
  //       }
  //     : never;
  //
  //   type GraphGet<Schema, Result extends Partial<Schema> = Partial<Schema>> =
  //     //
  //     (
  //       getter: (data: {
  //         data: ExcludeObjects<Schema>;
  //       }) => ExcludeObjects<Result>
  //     ) => string;
  //
  //   type Result = {
  //     user: {
  //       id: string;
  //       name: string;
  //       friends(
  //         first: number,
  //         after: string
  //       ): {
  //         edges: {
  //           cursor: string;
  //           node: {
  //             id: string;
  //             name: string;
  //           };
  //         };
  //       };
  //     };
  //     pageInfo: {
  //       hasNextPage: boolean;
  //     };
  //   };
  //
  //   type F = ExcludeObjects<Result>;
  //
  //   const get: GraphGet<Result> = (getter) => {
  //     return new QueryBuilder(getter as any).read();
  //   };
  //
  //   const sut = get(({ data }) => {
  //     return {
  //       user: {
  //
  //       }
  //     };
  //   });
  //
  //   expect(sut.split('\n')).toEqual([
  //     'data {', //
  //     '  name',
  //     '}',
  //   ]);
  //
  //   // const sut = graphGet((data) => {
  //   //   const posts = data.query.Posts.$alias('').$directives({}).$run({
  //   //     limit: 1,
  //   //   });
  //   //
  //   //   return [posts.title];
  //   // });
  // });
});
