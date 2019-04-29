
const config = require('./config/index');
const pkg = require('./package.json');

const xlog = require('./util/log');
const {
  requireTask,
} = require('./util/index');

module.exports = function (options) {
  const { QING_ENV: { nodeRoot, qing, cwd } } = options;

  requireTask('before/', { pkg, options });

  xlog.box(
    {
      content: [
        '-----欢迎使用Qing[' + pkg.version + '](Power By Webpack)-----',
      ]
    }
  )
  xlog.info('Using Node ', c => c.magenta(nodeRoot));
  xlog.info('Using ' + pkg.name, c => c.magenta(qing));
  xlog.info('Current directory', c => c.magenta(cwd));



};
