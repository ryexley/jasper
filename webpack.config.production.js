/* eslint strict: 0 */
"use strict";

const path = require( "path" );
const webpack = require( "webpack" );
const ExtractTextPlugin = require( "extract-text-webpack-plugin" );
const webpackTargetElectronRenderer = require( "webpack-target-electron-renderer" );
const baseConfig = require( "./webpack.config.base" );
const autoprefixer = require( "autoprefixer" );
const imports = require( "postcss-import" );
const nested = require( "postcss-nested" );
const variables = require( "postcss-simple-vars" );
const mixins = require( "postcss-mixins" );

const config = Object.create( baseConfig );

config.devtool = "source-map";

config.entry = "./app/index";

config.output.publicPath = "../dist/";

config.module.loaders.push( {
  test: /\.global\.css$/,
  loader: ExtractTextPlugin.extract(
    "style-loader",
    "css-loader",
    "postcss-loader"
  )
}, {
  test: /^((?!\.global).)*\.css$/,
  loader: ExtractTextPlugin.extract(
    "style-loader",
    "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]",
    "postcss-loader"
  )
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
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin( {
    __DEV__: false,
    "process.env": {
      NODE_ENV: JSON.stringify( "production" )
    }
  } ),
  new webpack.optimize.UglifyJsPlugin( {
    compressor: {
      screw_ie8: true,
      warnings: false
    }
  } ),
  new ExtractTextPlugin( "style.css", {
    allChunks: true
  } )
);

config.target = webpackTargetElectronRenderer( config );

module.exports = config;
