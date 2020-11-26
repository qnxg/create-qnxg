const {merge} = require('webpack-merge');
const {common, dev, prod} = require('./config');

module.exports = env => {
  const isDev = env.NODE_ENV;

  if (isDev === 'dev') {
    return merge(common, dev);
  }

  return merge(common, prod);
};
