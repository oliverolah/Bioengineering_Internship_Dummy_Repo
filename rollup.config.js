import babel from 'rollup-plugin-babel';
import npm from "rollup-plugin-node-resolve";

export default {
   input: 'dummyappone/static/js/index.js',
   output: {
      file: 'build/js/rollup-bundle.js',
      format: 'iife',
      name: 'bundle'
   },
   sourceMap: 'inline',
   plugins: [
      babel({
         exclude: 'node_modules/**',
      }),
      npm({
         jsnext: true
      }),
   ],
   moduleId: 'd3',
   moduleName: 'd3'
};