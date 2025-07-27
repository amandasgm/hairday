const path = require("path") // -  importação tem q ser feita assim
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const webpackTeste = require("webpack");


// ! NA DOCUMENTAÇÃO POSSUI O MESMO CODIGO ABAIXO. CONFIGURAÇÃO PADRÃO
module.exports = {
  target: "web",
  mode: "development",

  entry: path.resolve(__dirname, "src", "main.js"), // - facilita o encontro da pasta em sistemas operacionais
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 4000,
    open: true,
    liveReload: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
      favicon: path.resolve("src", "assets", "scissors.svg")
    }),
    new CopyWebpackPlugin ({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets"),
          to: path.resolve(__dirname, "dist", "src", "assets")
        }
      ]
    }),
    new webpackTeste.DefinePlugin({
      'process.env.API_BASE_URL': JSON.stringify('http://localhost:3333')
    })
  ],

  module: {
    rules: [
      {
        test: /\.css$/, // - td que terminar com css
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env']
            ]
          }
        }
      }
    ]
  }
}