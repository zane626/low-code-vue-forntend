/**
 * Created by zane on 2022/1/8 14:57
 * @description .
 */
const path = require('path')
const resolve = (dir) => path.join(__dirname, '../', dir)

module.exports = {
  assetsDir: 'dist',
  chainWebpack: config => {
    config.resolve
      .extensions
      .merge(['.ts'])
      .end()
      .alias
      .set('src', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'))
      .set('router', resolve('src/router'))
      .set('store', resolve('src/store'))
      .set('views', resolve('src/views'))
      .end()
  },
  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass')
      }
    }
  }
}
