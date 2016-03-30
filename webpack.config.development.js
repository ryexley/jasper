/* eslint strict: 0 */
"use strict";

const path = require( "path" );
const webpack = require( "webpack" );
const webpackTargetElectronRenderer = require( "webpack-target-electron-renderer" );
const baseConfig = require( "./webpack.config.base" );
const autoprefixer = require( "autoprefixer" );
const imports = require( "postcss-import" );
const nested = require( "postcss-nested" );
const variables = require( "postcss-simple-vars" );
const mixins = require( "postcss-mixins" );

const config = Object.create( baseConfig );

config.debug = true;

config.devtool = "cheap-module-eval-source-map";

config.entry = [
  "webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr",
  "./app/index"
];

config.output.publicPath = "http://localhost:3000/dist/";

config.module.loaders.push( {
  test: /\.global\.css$/,
  loaders: [
    "style-loader",
    "css-loader?sourceMap",
    "postcss-loader"
  ]
}, {
  test: /^((?!\.global).)*\.css$/,
  loaders: [
    "style-loader",
    "css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]",
    "postcss-loader"
  ]
} );

config.postcss = function() {
  return [
    autoprefixer( { browsers: [ "last 2 version" ] } ),
    imports( { path: path.join( __dirname, "app/css" ), glob: true } ),
    mixins,
    nested,
    variables()
  ];
};

config.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin( {
    __DEV__: true,
    "process.env": {
      NODE_ENV: JSON.stringify( "development" )
    }
  } )
);

config.target = webpackTargetElectronRenderer( config );

module.exports = config;
