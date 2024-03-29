const path = require('path');
const webpack = require('webpack')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@$', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('profile', resolve('src/profile'))
      .set('components', resolve('src/components'))
      .set('http', resolve('src/http'))
      .set('models', resolve('src/models'))
      .set('storage', resolve('src/storage'))
      .set('store', resolve('src/store'))
      .set('utils', resolve('src/utils'))
      .set('router', resolve('src/router'))
      .set('views', resolve('src/views'))
      .set('static', resolve('./public'))
  },
  baseUrl: process.env.NODE_ENV === 'production' ? '/online/' : '/',
  // outputDir: 在npm run build时 生成文件的目录 type:string, default:'dist'
  // outputDir: 'dist',
  // pages:{ type:Object,Default:undfind } 
  devServer: {
    port: 3333, // 端口号
    host: 'localhost',
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    // proxy: 'http://39.104.110.111:8765' // 配置跨域处理,只有一个代理
    proxy: {
      '/dev': {
        target: 'http://39.104.110.111:8765/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/dev': ''
        }
      },
      // '/foo': {
      //   target: '<other_url>'
      // }
    },
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery"
      })
    ]
  },
  css: {
    loaderOptions: {
      // 给 stylus-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/common/stylus/color.styl` 这个文件
        data: '@import "~@/assets/css/fontColor.scss";'
      }
    }
  }
}
