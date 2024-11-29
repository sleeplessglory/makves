import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const config = {
    entry: './src/index.tsx',
    output: {
        publicPath: "/makves/",
        path: path.resolve('build'),
        filename: 'bundle.js',
        clean: true
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|mp4|webm|ogg|mov|mp3|wav|flac|aac)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name].[hash][ext]',
                },               
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.png'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
    ],
    devServer: {
        static: './build',
        port: 3000,
	    hot: true,
        open: true
    },
    mode: 'production',
};
export default config;