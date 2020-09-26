var path = require("path");

module.exports={
  entry:['whatwg-fetch', "./src/app.js"],
  output: { filename: "out.js", path: path.resolve(__dirname, "build") },
  watch: true,
  devServer: {
    contentBase: path.join(__dirname, "./"),
    publicPath: "/build/",
    compress: true,
    port: 3001
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              extract: true
            }
          }
        ]
      }
    ]
  }
}