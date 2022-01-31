import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const packageJson = require('./package.json');

export default {
  input: 'src/index.js',
  external: ['react', 'prop-types', '@emotion/react', '@emotion/styled'],
  output: [
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
    commonjs(),
    peerDepsExternal(),
    terser(),
  ],
};
