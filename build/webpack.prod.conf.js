/**
 * Created by zane on 2022/1/8 14:57
 * @description .
 */
const config = require('../config')

module.exports = {
  publicPath: '/',
  productionSourceMap: config.build.productionSourceMap,
  lintOnSave: config.build.lintOnSave,
  configureWebpack: config => {
    config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
  },
  chainWebpack: webpackConfig => {
    webpackConfig
      .mode('production')
      .output
      .filename(`dist/${config.projectName}/js/[name].[chunkhash].js`)
      .chunkFilename(`dist/${config.projectName}/js/[id].[chunkhash].js`)
    webpackConfig
      .mode('production').performance.hints(false)
  }
}
