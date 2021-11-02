export default {
   input: 'js/main.js',
   output: {
      file: 'build/js/rollup-bundle.js',
      format: 'iife',
      name: 'bundle'
   },
   sourceMap: 'inline',
};