import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import { babel } from '@rollup/plugin-babel';

export default {
  input: 'index.ts',
  output: {
    dir: 'dist',
    format: 'cjs',
    exports: 'named',
    globals: {
      'react': 'React',
      'react-dom': 'ReactDOM'
    }
  },
  plugins: [
    babel({
      babelHelpers: 'runtime',
      extensions: ['.ts', '.tsx'],
      presets: [
        '@babel/preset-react',
        '@babel/preset-typescript'
      ],
      plugins: [
        '@babel/plugin-transform-runtime'
      ]
    }),
    resolve({
      browser: true,
      preferBuiltins: false
    }),
    postcss({
      extract: true, // Extracts CSS to separate file
      modules: false, // Set to true if using CSS modules
      minimize: true, // Minify CSS in production
      inject: false // Disable automatic injection
    }),
    commonjs({
      include: /node_modules/,
      requireReturnsDefault: 'auto'
    }),
    typescript({
      tsconfig: './tsconfig.json'
    })
  ],
  external: ['react', 'react-dom', 'react/jsx-runtime'],
  
};