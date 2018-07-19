import path from 'path';
import nodeResolve from 'rollup-plugin-node-resolve';
import alias from 'rollup-plugin-alias';
import vue from 'rollup-plugin-vue';
import livereload from 'rollup-plugin-livereload';
import replace from 'rollup-plugin-replace';
import scss from 'rollup-plugin-scss';
import copy from 'rollup-plugin-copy';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import { terser } from 'rollup-plugin-terser';


const plugins = [
  nodeResolve(),
  alias({
    resolve: ['.vue', '.js', '.mjs'],
    layouts: path.resolve('src/views/layouts'),
    components: path.resolve('src/views/components'),
    store: path.resolve('src/views/store/index'),
    routes: path.resolve('src/views/routes')
  }),
  scss({
    output: 'public/css/application.min.css',
    includePaths: ['src/sass/'],
    sourceMap: false,
    failOnError: true,
    processor: css => postcss([autoprefixer, cssnano]).process(css).then(result => result.css),
  }),
  vue({
    compileTemplate: true,
    css: false,
    styleToImports: false,
    autoStyles: false,
    style: {
      preprocessOptions: {
        scss: {
          includePaths: ['src/sass/']
        }
      }
    }
  }),
  replace({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
  copy({
    'node_modules/vue/dist/vue.min.js': 'public/js/vue.min.js',
  }),
  terser(),
];

// Include files to watch for rollup changes
const watch = {
  include: 'src/**',
};

if (process.env.NODE_ENV === 'development') {
  plugins.push(livereload());
}

export default [
  {
    input: 'src/js/application.js',
    output: {
      file: 'public/legacy/js/application.min.js',
      format: 'system',
      sourcemap: true,
    },
    plugins,
    watch,
  },
  {
    input: 'src/js/application.js',
    output: {
      file: 'public/js/application.min.js',
      format: 'es',
      sourcemap: true,
    },
    plugins,
    watch,
  },
];
