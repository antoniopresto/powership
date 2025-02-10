import { defineConfig } from 'vite';
import babel from 'vite-plugin-babel';
import externals from 'rollup-plugin-node-externals';

export default defineConfig({
  plugins: [
    externals(),
    babel({
      babelConfig: {
        configFile: true,
      },
      include: ['src/**/*'],
    }),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: 'bundle',
    },
    // rollupOptions: {
    //   external: (id) => /node_modules/.test(id),
    //   output: {
    //     // inlineDynamicImports: true,
    //     entryFileNames: 'bundle.mjs',
    //   },
    // },
    // ssr: true,
  },
});
