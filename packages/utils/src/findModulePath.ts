const filePathCache: Record<string, string> = Object.create(null);

export function findModulePath(
  moduleName: string,
  currentDirname: string
): string {
  const fs = require('fs');
  const ORIGINAL_REQUIRE = require;

  const cacheKey = `${currentDirname}_${moduleName}`;
  if (filePathCache[cacheKey]) return filePathCache[cacheKey];

  const filePath = ORIGINAL_REQUIRE.resolve(moduleName, {
    paths: [
      currentDirname,
      ...(ORIGINAL_REQUIRE.resolve.paths(currentDirname) || []),
    ],
  });

  if (!fs.existsSync(filePath)) {
    throw new Error(`Cannot find module '${moduleName}'`);
  }

  return (filePathCache[cacheKey] = filePath);
}
