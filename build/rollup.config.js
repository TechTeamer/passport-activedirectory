import babel from '@rollup/plugin-babel'

export default {
  input: 'src/strategy.js',
  output: {
    file: 'index.js',
    format: 'cjs',
    exports: 'auto', 
  },
  plugins: [
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    })
  ]
}