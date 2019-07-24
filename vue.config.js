const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: false,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@$', resolve('src'))
      .set('@$', resolve('src'))
      .set('assets', resolve('src/assets'))
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
    // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
    proxy: {
      '/api': {
        target: '<url>',
        ws: true,
        changeOrigin: true
      },
      '/foo': {
        target: '<other_url>'
      }
    },
  },
  pluginOptions: {
    
  }
}
