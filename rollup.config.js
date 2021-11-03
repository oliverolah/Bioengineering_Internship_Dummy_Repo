import babel from 'rollup-plugin-babel';
import npm from "rollup-plugin-node-resolve";

export default {
   input: 'js/main.js',
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
};