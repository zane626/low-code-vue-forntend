/**
 * Created by zane on 2022/1/8 14:57
 * @description .
 */
const config = require('../config').local
module.exports = {
  css: {
    sourceMap: config.cssSourceMap
  },
  lintOnSave: config.lintOnSave,
  chainWebpack: webpackConfig => {
    webpackConfig
      .devServer
      .set('port', config.port)
      .end()
      .devServer.set('proxy', config.proxyTable)
  }
}
