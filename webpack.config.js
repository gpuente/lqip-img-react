const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src'),
  output: {
    filename: 'lqip-react.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    libraryTarget: 'umd',
    library: 'lqip-react',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
