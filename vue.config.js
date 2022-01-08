/**
 * Created by zane on 2022/1/8 14:55
 * @description .
 */
const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./build/webpack.base.conf')
const isDev = process.env.NODE_ENV === 'development'
module.exports = merge(baseWebpackConfig, isDev ? require('./build/webpack.local.conf') : require('./build/webpack.prod.conf'))
