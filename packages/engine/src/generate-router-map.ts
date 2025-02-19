import { glob } from 'zx';
import { RouteUtils } from '@powership/utils';

export async function generateRouterMap(sourceDir: string) {
  const found = await glob(['{pages,api}/**/*.{ts,tsx}'], {
    cwd: sourceDir,
  });

  const sorted = RouteUtils.sortRoutes(found);

  return sorted.map((filePath) => {
    const routePath = filePath.replace(/\[([^\]]+)\](\.tsx?)?/g, ':$1');

    const routeMatcher = RouteUtils.createRouteMatcher(routePath);

    return {
      filePath,
      path: routePath,
      match: routeMatcher.match.bind(routeMatcher),
      stringify: routeMatcher.stringify.bind(routeMatcher),
    };
  });
}
