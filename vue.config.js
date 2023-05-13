const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  pwa: {
    name: 'Calculator',
    themeColor: '#dc143c'
  }
})
