var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: 'source-map',
  entry: {
    'react-liberator': './index.js'
  },
  output: {
    path: __dirname + "/dist",
    filename: './react-liberator.js',
    sourceMapFilename: './react-liberator.js.map',
    devtoolModuleFilenameTemplate: '../[resource-path]',
    libraryTarget: "umd",
    library: "ReactLiberator"
  },
  externals: {
    'react': {
      'commonjs': 'react',
      'commonjs2': 'react',
      'amd': 'react',
      'root': 'React'
    },
    'react-dom': {
      'commonjs': 'react-dom',
      'commonjs2': 'react-dom',
      'amd': 'react-dom',
      'root': 'ReactDOM'
    },
    'lodash': {
      'commonjs': 'lodash',
      'commonjs2': 'lodash',
      'amd': 'lodash',
      'root': 'Lodash'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.NormalModuleReplacementPlugin(/\/react\/lib\/cloneWithProps/, "../../react-clonewithprops/index.js"),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: "babel-loader",
      exclude: /node_modules/,
      include: path.join(__dirname, 'src')
    }]
  },
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"]
  }
};
