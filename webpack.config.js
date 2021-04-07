const MiniCsssExtractPlugin = require('mini-css-extract-plugin');

let mode = 'development';

if (process.env.NODE_ENV === 'production') {
    mode = 'production';
}

module.exports = {
    mode: mode,
    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    MiniCsssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },

    plugins: [new MiniCsssExtractPlugin()],

    devServer: {
        contentBase: './dist',
        hot: true
    }
}