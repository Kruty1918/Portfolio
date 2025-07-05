module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/Portfolio/" : "/",
  devServer: {
    historyApiFallback: true,
  },
};
