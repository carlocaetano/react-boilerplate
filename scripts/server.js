/*
  eslint
  no-console: 0,
  consistent-return: 0,
  import/imports-first: 0
*/

process.env.NODE_ENV = 'development';

const chalk = require('chalk');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin');
const config = require('../config/webpack.dev.config');

const DEFAULT_PORT = 3000;

const compiler = webpack(config);
const dashboard = new Dashboard();

compiler.apply(new DashboardPlugin(dashboard.setData));

const server = new WebpackDevServer(compiler, {
  publicPath: config.output.publicPath,
  hot: true,
  quiet: true,
  historyApiFallback: true,
  watchOptions: {
    ignored: /node_modules/
  }
});

server.listen(DEFAULT_PORT, 'localhost', (err) => {
  if (err) console.log(chalk.red(err));
  console.log(chalk.cyan(`Server listenning on port ${DEFAULT_PORT}`));
});
