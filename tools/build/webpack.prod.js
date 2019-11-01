const $ = require('./helpers');
const path = require('path')


const uglifyJSPlugin = require('uglifyjs-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  target: 'node',
  entry: {
    'techtips': $.root('./src/techtips/index.ts'),
    'techtasks': $.root('./src/techtasks/index.ts'),
    'codesnippets': $.root('./src/codesnippets/index.ts'),
    'projects': $.root('./src/projects/index.ts')
   
  },
  output: {
    path: $.root('dist'),
    filename: '[name]/index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'awesome-typescript-loader?declaration=false',
        exclude: [/\.(spec|e2e)\.ts$/]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {
      'hiredis': path.resolve(__dirname, './aliases/hiredis.js')
    },
    modules: [
      'node_modules',
      'src'
    ]
  },
  plugins: [
    new uglifyJSPlugin({
      uglifyOptions: {
        ecma: 6
      }
    }),
    new copyWebpackPlugin([
      {
        from: 'src/host.json',
        to: 'host.json'
      },
      {
        context: 'src',
        from: '**/function.json',
        to: ''
      }
    ])
  ],
  node: {
    __filename: false,
    __dirname: false,
  }
};
