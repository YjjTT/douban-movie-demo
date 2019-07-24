const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("/api", {
      target: "https://api.douban.com",
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        "^/api": "/"
      }
    })
  );
  app.use(
    proxy("/apb", {
      target: "https://movie.douban.com",
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        "^/apb": "/"
      }
    })
  );
  app.use(
    proxy("/openApi", {
      target: "http://118.24.21.99:5000/proxy/movie",
      changeOrigin: true,
      pathRewrite: {
        "^/openApi": "/"
      }
    })
  );
};
