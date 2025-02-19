import { glob } from 'zx';

export async function generateRouterMap(sourceDir: string) {
  const found = await glob('**/*.{ts,tsx}', {
    cwd: sourceDir,
  });

  return found.map((el) => {
    return {
      path: el,
    };
  });
}
