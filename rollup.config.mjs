import { babel } from '@rollup/plugin-babel';
import del from 'rollup-plugin-delete';
import external from 'rollup-plugin-peer-deps-external';
import nodeExternals from 'rollup-plugin-node-externals';
import resolve from '@rollup/plugin-node-resolve';
import scss from 'rollup-plugin-scss';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import svgr from '@svgr/rollup';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default [
  {
    input: './src/index.ts',
    output: [
      {
        file: 'lib/index.es.js',
        format: 'es',
        exports: 'named',
        sourcemap: true,
      },
    ],
    plugins: [
      del({
        targets: 'lib/*',
      }),
      babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: ['@babel/plugin-transform-runtime'],
      }),
      scss({
        output: true,
        failOnError: true,
        outputStyle: 'compressed',
        sourceMap: true,
      }),
      nodeExternals(),
      external(),
      resolve(),
      svgr(),
      json(),
      commonjs({
        // namedExports: {
        //   'node_modules/lodash/lodash.js': [
        //     'noop',
        //     'get',
        //     'unionBy',
        //     'union',
        //     'reduce',
        //     'find',
        //     'forEach',
        //     'includes',
        //     'endsWith',
        //   ],
        // },
      }),
      typescript(),
      terser(),
    ],
  },
];
