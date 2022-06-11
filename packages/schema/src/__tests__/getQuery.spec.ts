import { graphGet, QueryBuilder } from '../GraphQLParser/graphGet';

describe('graphGet', () => {
  it('works', async () => {
    const { read } = new QueryBuilder<any>((data) => {
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
    const queryBuilder = new QueryBuilder<any>((data) => {
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

  it('is cool', () => {
    const sut = graphGet((data) => {
      const posts = data.query.Posts.$alias('').$directives({}).$run({
        limit: 1,
      });

      return [
        posts.title.$req(),
        posts.price.$req(),
        posts.cart.$req(),
        posts.cart.total.$req(),
      ];
    }).read();

    expect(sut.split('\n')).toEqual([
      'query {',
      '  Posts {',
      '    $alias {',
      '      $directives {',
      '        $run (limit: 1) {',
      '          title {',
      '            $req',
      '          }',
      '          price {',
      '            $req',
      '          }',
      '          cart {',
      '            $req',
      '            total {',
      '              $req',
      '            }',
      '          }',
      '        }',
      '      }',
      '    }',
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

    const queryBuilder = graphGet<S>((data): any => {
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
});
