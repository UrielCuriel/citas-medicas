
module.exports = {
    mode: 'development',
    watch: true,
    entry: ['@babel/polyfill', './src/index.jsx'] ,
    output: {
      path: __dirname + '/public/js',
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.jsx$|\.js$/,
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