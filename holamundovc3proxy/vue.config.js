// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:10080/api",
        secure: false
      }
    }
  }
};
