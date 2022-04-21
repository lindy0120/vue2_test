const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //关闭eslint
  lintOnSave: false,
  //代理跨域
  devServer: {
    proxy: {
      '/api': {
        target: 'http://39.98.123.211',  //服务器地址
        ws: true, //websocket
        secure: false,
        changeOrigin: true, //可否跨域
        //路径重写,增加/api是为了与本地请求混淆，但此处实际路径确实需要/api
        // pathRewrite: { '/api': '' },
        logLevel: 'debug'   //查看具体请求地址，没起作用？？
      },
    },
  },
})
