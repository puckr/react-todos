module.exports = {
  devtool: 'inline-source-map',
  entry: './lib/app.jsx',
  devServer:{
    inline:true,
    contentBase:'public',
    historyApiFallback: true
  },
  output: {
    path: `${__dirname}/public`,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [' ', '.js', '.jsx']
  },
  module:{
    loaders:[
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      { test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude:/node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      }]
  }
};
