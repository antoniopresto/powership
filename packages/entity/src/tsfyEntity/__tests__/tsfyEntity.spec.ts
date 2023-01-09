import { tsfyEntity } from '../tsfyEntity';
import { UserEntity } from './demo/UserEntity';

describe('tsfyEntity', () => {
  // afterEach();

  test('works', () => {
    const sut = tsfyEntity({ entities: [UserEntity] }).split('\n');

    expect(sut).toEqual([]);
  });
});
