module.exports = {
  entry: './src/',
  output: {
      path:     './app/builds',
      filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
          test: /\.js/,
          include: __dirname + '/src',
          loader: 'babel',
          query: {
              presets: ['react', 'es2015']
          },
      },
      { test: /\.scss$/, loaders: ["style", "css", "sass"], }
    ]
  }
}
