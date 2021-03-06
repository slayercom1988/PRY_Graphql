const whitSass = require('@zeit/next-sass');
const path = require('path');
module.exports = whitSass({
  cssModules: true,
  cssLoaderOptions: {
    localIdentName: '[name]__[local]__[hash:base64:5]'
  },
  webpack: config => {
    config.resolve.alias.styles = path.resolve(__dirname, './src/shared/styles');
    return config
  }
});
