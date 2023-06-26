// eslint-disable-next-line
module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          root: ['./'],
          alias: {
            $root: './',
            $src: './src',
            $assets: './assets',
          },
        },
      ],
    ],
  }
}
