import nodePath from 'path';
import { findWorkspacePackages } from '../findWorkspacePackages';

describe('findWorkspacePackages', () => {
  test('basic test', () => {
    const sut = findWorkspacePackages({
      cwd: nodePath.resolve(__dirname),
    });

    expect(sut).toEqual([]);
  });

  test('catch top package', () => {
    const sut = findWorkspacePackages({
      cwd: nodePath.resolve(__dirname, '../../'),
    });

    expect(sut).toEqual([
      {
        path: expect.stringMatching(/\/packages\/runmate\/package.json$/),
        json: expect.objectContaining({ name: 'runmate' }),
        relative: './',
        pattern: './',
      },
    ]);
  });
});
