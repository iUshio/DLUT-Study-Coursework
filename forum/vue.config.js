const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //关闭eslint校验工具
  lintOnSave:false,
  // 代理跨域
  devServer:{
    proxy:{
      '/api':{
        target:'http://8.218.254.133:5000',
        pathRewrite:{'^/api':''},
      }
    }
  },

})
