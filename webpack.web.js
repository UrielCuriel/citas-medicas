
module.exports = {
    mode: 'development',
    watch: true,
    entry: ['@babel/polyfill', './src/web/index.jsx'] ,
    output: {
      path: __dirname + 'dist/public/js',
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