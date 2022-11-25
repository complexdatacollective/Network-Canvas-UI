import { babel } from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import scss from 'rollup-plugin-scss';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import svgr from '@svgr/rollup';
import commonjs from '@rollup/plugin-commonjs';

export default [
  {
    input: './src/components/index.ts',
    output: [
      {
        file: 'lib/index.js',
        format: 'cjs',
      },
      {
        file: 'lib/index.es.js',
        format: 'es',
        exports: 'named',
      },
    ],
    plugins: [
      scss({
        output: true,
        failOnError: true,
        outputStyle: 'compressed',
      }),
      svgr(),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        presets: ['@babel/preset-env', '@babel/preset-react'],
        // plugins: ['@babel/plugin-transform-runtime'],
      }),
      commonjs(),
      external(),
      resolve(),
      typescript(),
      terser(),
    ],
  },
];
