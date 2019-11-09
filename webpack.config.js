
module.exports = {
    entry: ['@babel/polyfill', './src/index.jsx'] ,
    output: {
      path: __dirname + '/public/js',
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          use: ['babel-loader']
          
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        }
      ]
    }
}