const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    stats: {
        children: false,
        assets: true,
        colors: true
    },
    entry: [
        './src/js/app.js',
        './src/scss/app.scss'
    ],
    output: {
        filename: './assets/js/bundle.js',
    },
    plugins: [
        new CleanWebpackPlugin('dist', {
            root: __dirname + '/../'
        }),
        new CopyWebpackPlugin([{
            from: __dirname + '/../src/assets',
            to: __dirname + '/../dist/assets/'
        }]),
        new ExtractTextPlugin({
            filename: './assets/css/styles.css',
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            template: './src/html/index.html',
            filename: './index.html'
        })
    ],
    module: {
        rules: [{
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(css|scss)$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                            loader: "css-loader",
                            options: {
                                url: false
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss',
                                plugins: () => [
                                    require('autoprefixer')(),
                                    require('cssnano')()
                                ]
                            }
                        },
                        'sass-loader'
                    ]
                })
            }
        ]
    }
};
