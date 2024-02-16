import nodePath from 'path';
import { findWorkspacePackages } from '../findWorkspacePackages';

describe('findWorkspacePackages', () => {
  test('basic test', () => {
    const sut = findWorkspacePackages({
      cwd: nodePath.resolve(__dirname),
    });

    expect(sut).toEqual([
      {
        found: [],
        pattern: 'apps/*',
      },
      {
        found: [],
        pattern: 'packages/*',
      },
    ]);
  });
});
