module.exports = {
  devServer: {
    disableHostCheck: true,
    //以上的ip和端口是我们本机的;下面为需要跨域的
    proxy: { //配置跨域
      '/api': {
        target: 'http://api.qingyunke.com/api.php',
        changeOrigin: true,//允许跨域
        pathRewrite: {
          '^/api': ''   //请求的时候使用这个api就可以
        }
      }
    }
  }
}