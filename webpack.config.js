const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  plugins: [
    new VueLoaderPlugin() // vue ->jsにへんかんする
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: 'www',
    port: 4000,
    inline: true
  },
  resolve: {
    extensions: [".js", ".vue"],
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // おまじない
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/
      },

    ]
  }
};
