const HtmlWebpackPlugin = require('html-webpack-plugin');
const port = process.env.PORT || 3000;

module.exports = {
    mode: 'development', // 1
    entry: './src/index.js', // 2
    output: { // 3
      filename: 'bundle.[hash].js' // 4
    },
    module: {
        rules: [
          { // 1
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
          },
          {
            test: /\.html$/,
            use: [
              {
                loader: 'html-loader',
                options: {
                  minimize: true,
                },
              },
            ],
          },
          {
            // 파일명이 .css로 끝나는 모든 파일에 적용
    test: /\.css$/i,
            // 배열 마지막 요소부터 오른쪽에서 왼쪽 순으로 적용
            // 먼저 css-loader가 적용되고, styled-loader가 적용되어야 한다.
            // 순서 주의!
    use: ["style-loader", "css-loader"],
            // loader가 node_modules 안의 있는 내용도 처리하기 때문에
            // node_modules는 제외해야 합니다
    // exclude: /node_modules/,
  },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: 'public/index.html',
        })
      ],
      devServer: {
        host: 'localhost',
        port: port,
        open: true,
      },
    
  };