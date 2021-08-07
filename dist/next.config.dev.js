"use strict";

var path = require("path");

var withCss = require("@zeit/next-css");

var withSass = require("@zeit/next-sass");

var withImages = require("next-images");

module.exports = withImages(withSass(withCss({
  webpack: function webpack(config, _ref) {
    var isServer = _ref.isServer;

    if (isServer) {
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 100000,
            name: "[name].[ext]"
          }
        }
      });
    }

    return config;
  },
  cssLoaderOptions: {
    url: false
  }
})));