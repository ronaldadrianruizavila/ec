const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HTMLWebpackPlugin =  require('html-webpack-plugin');
const webpackLiveReload = require('webpack-livereload-plugin');
module.exports = {
    entry:'./src/app/index.tsx',
    mode: 'development',
    output:{
        path:path.resolve(__dirname,'src/public'),
        filename:'bundle.js'
    },
    resolve:{
        extensions:['.ts','.tsx','.js','.jsx','.json']
    },
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                loader:'awesome-typescript-loader'
            },
            {
                test:/\.scss$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                enforce:'pre',
                test:/\.js$/,
                loader:'source-map-loader'
            }
        ]
    },
    plugins:[
        new HTMLWebpackPlugin({
            template:'./src/public/index.html'
        }),
        new MiniCssExtractPlugin('style.css'),
        new webpackLiveReload()
    ],
    devtool:'source-map'
};