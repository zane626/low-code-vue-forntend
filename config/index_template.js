/**
 * Created by zane on 2022/1/8 14:58
 * @description .
 */

module.exports = {
  projectName: 'lowCodeVueFrontend',
  local: {
    // proxyTable: {
    //   '/api': {
    //     changeOrigin: true,
    //     target: 'https://',
    //     xfwd: true,
    //     headers: {}
    //   }
    // },
    cssSourceMap: true,
    lintOnSave: 'error',
    port: 8080
  },
  build: {
    productionSourceMap: false,
    lintOnSave: 'error'
  }
}
