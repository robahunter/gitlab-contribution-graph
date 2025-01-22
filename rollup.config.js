import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.js',
  output: [
    { file: 'dist/index.cjs.js', format: 'cjs' },
    { file: 'dist/index.esm.js', format: 'esm' },
  ],
  plugins: [
    resolve({
      extensions: ['.js', '.jsx'],
    }),
    commonjs(),
    postcss({
      extract: true, // Extract CSS into a separate file
      minimize: true, // Minify the CSS
    }),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx'],
      presets: ['@babel/preset-react'],
    }),
  ],
  external: ['react', 'react-dom'], // Prevent bundling React and ReactDOM
};
