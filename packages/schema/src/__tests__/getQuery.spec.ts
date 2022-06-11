import { QueryBuilder } from '../GraphQLParser/graphGet';

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
});
