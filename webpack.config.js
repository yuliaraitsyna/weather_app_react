const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use : {
                    loader: 'babel-loader',
                    options: {
                        presets: [['@babel/preset-env', {targets:"defaults", "debug":true, "useBuiltIns":"usage", "corejs":3}], ['@babel/preset-react', {runtime:"automatic"}]]
                    }
                }
            },
            { 
                test: /\.css$/i,                
                use: [                  {                    
                  loader: MiniCssExtractPlugin.loader,                                       
                  options: { publicPath: "" },
                },                  
                "css-loader",                                                  
                ],              
              },
        ]
    },
    devServer: {
        hot: true,
        port: 3000,
        open: true,
    },
}