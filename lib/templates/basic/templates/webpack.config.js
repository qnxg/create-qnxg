const config = require('./webpack.dev.config');

module.exports = {
  ...config,
  mode: 'production',
  devtool: 'none',
};
