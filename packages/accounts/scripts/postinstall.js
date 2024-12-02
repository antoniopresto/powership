import { Module } from 'module';

const require = Module.createRequire(import.meta.url);

require('mongodb-memory-server-core/lib/util/postinstallHelper').postInstallEnsureBinary(
  undefined,
  true
);
