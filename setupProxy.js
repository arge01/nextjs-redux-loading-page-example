/* eslint-disable prettier/prettier */
/* eslint-disable func-names */
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://rickandmortyapi.com/api',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
      secure: false,
      onProxyRes: (proxyRes, req, res) => {
        const cookies = res.getHeader('Set-Cookie');
        const newCookies = [];
        if (!cookies) {
          return;
        }

        if (Array.isArray(cookies)) {
          cookies.forEach((cookie) => {
            newCookies.push(
              cookie
                .replace(' Secure;', '')
                .replace('SameSite=Lax', 'SameSite=None')
            );
          });
        } else {
          newCookies.push(
            cookies
              .replace(' Secure;', '')
              .replace('SameSite=Lax', 'SameSite=None')
          );
        }

        res.setHeader('Set-Cookie', newCookies);
      },
    })
  );
};
