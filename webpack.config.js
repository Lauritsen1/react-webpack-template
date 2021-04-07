const MiniCsssExtractPlugin = require('mini-css-extract-plugin');

let mode = 'development';

if (process.env.NODE_ENV === 'production') {
    mode = 'production';
}

module.exports = {
    mode: mode,
    devtool: 'source-map',

    output: {
        assetModuleFilename: 'images/[hash][ext][query]'
    },

    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset'
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    {
                        loader: MiniCsssExtractPlugin.loader,
                        options: { publicPath: '' }
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },

    plugins: [new MiniCsssExtractPlugin()],

    resolve: {
        extensions: [".js", ".jsx"]
    },

    devServer: {
        contentBase: './dist',
        hot: true
    }
}