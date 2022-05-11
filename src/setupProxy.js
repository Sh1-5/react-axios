const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://152.136.185.210:5000',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    })
  )
}
