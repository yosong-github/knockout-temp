const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development'

  const config = {
    mode: argv.mode,
    entry: './src/index.js',

    output: {
      path: path.resolve(__dirname, 'dist'),
      clean: true
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: '自定义标题',
        template: path.resolve(__dirname, 'public/index.html')
      }),
      new ESLintPlugin({
        context: path.resolve(__dirname, 'src') // 指定检查的文件目录
      })
    ],

    module: {
      rules: [
        {
          test: /\.less$/i,
          use: [
            // compiles Less to CSS
            'style-loader',
            'css-loader',
            'less-loader'
          ]
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource'
        },
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true, // 开启缓存
              cacheCompression: false, // 关闭缓存文件压缩
              presets: ['@babel/preset-env'],
              plugins: [
                [
                  '@babel/plugin-transform-runtime',
                  {
                    corejs: 3
                  }
                ]
              ]
            }
          }
        },
        { test: /\.txt$/, use: 'raw-loader' }
      ]
    },

    devServer: {
      host: '0.0.0.0',
      port: 8080,
      hot: true
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/')
      }
    }
  }

  if (isDevelopment) {
    config.devtool = 'inline-source-map'
  }
  if (!isDevelopment) {
    config.output.publicPath = './'
  }

  return config
}
