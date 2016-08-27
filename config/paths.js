const { resolve } = require('path');

const appPath = (path) => resolve(__dirname, path);

module.exports = {
  app: {
    src: appPath('../app'),
    assets: appPath('../assets'),
    images: appPath('assets/images'),
    config: appPath('./'),
    build: appPath('../build'),
    stylesheets: appPath('../assets/stylesheets/'),
    packageJson: appPath('../package.json'),
    nodeModules: appPath('../node_modules'),
    htmlFile: appPath('../assets/index.ejs'),
  },
  config: appPath('../config'),
  nodeModules: appPath('../node_modules')
};
