const run = require('./after');
const _ = require('lodash');
const { requireConfig } = require('../utils');

module.exports = function(options) {
  const babelCfgArr = [];
  const cssCfgArr = [];
  if (options.params.isCurrDir) {
    babelCfgArr.push([options.page, '../babel.config.js']);
    babelCfgArr.push([options.page, './babel.config.js']);
    cssCfgArr.push([options.page, '../postcss.config.js']);
    cssCfgArr.push([options.page, './postcss.config.js']);
  } else {
    babelCfgArr.push([options.root, './babel.config.js']);
    babelCfgArr.push([options.page, './babel.config.js']);
    cssCfgArr.push([options.page, './postcss.config.js']);
    cssCfgArr.push([options.page, './postcss.config.js']);
  }

  const defaultBabelCfg = require('../config/default/babel.config')(options);
  const babelCfg = _.merge(defaultBabelCfg, requireConfig(babelCfgArr).data);
  options.babelCfg = babelCfg;

  const defaultPostCssCfg = require('../config/default/postcss.config')(options);
  const cssCfg = _.merge(defaultPostCssCfg, requireConfig(cssCfgArr).data);
  options.cssCfg = cssCfg;
  run(options);
};
