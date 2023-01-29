import { runInPackages } from '../runInPackages';

describe('runInPackages', () => {
  // afterEach();

  test('works', async () => {
    const utils: any[] = [];

    await runInPackages(
      './packages/**/*',
      (_utils) => {
        utils.push(_utils);
      },
      {
        cwd: __dirname,
      }
    );

    expect(utils).toMatchObject([
      {
        json: {
          author: 'antoniopresto <antoniopresto@gmail.com>',
        },
        run: expect.any(Function),
        saveJSON: expect.any(Function),
      },
      {},
    ]);
  });
});
