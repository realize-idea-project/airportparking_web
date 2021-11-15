const { createProxyMiddleware } = require('http-proxy-middleware');


module.exports = (app) => {
  app.use(
    process.env.REACT_APP_OPEN_API_HOLIDAY_PROXY_KEY,
    createProxyMiddleware({
      target: process.env.REACT_APP_OPEN_API_URL,
      changeOrigin: true,
    }),
  );
};
