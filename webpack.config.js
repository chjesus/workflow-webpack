const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: {
        app:[
            './src/app.js',
        ]
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'js/main.js'
    },
    devServer: {
        contentBase: path.join(__dirname,'dist'),
        compress: true,
        open: true
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'My App',
            template: './src/index.html',
            filename: 'index.html',
            minify: {
                collapseWhitespace: false,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
            
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: '[id].css'
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.(sa|sc|c)ss$/,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: [
                    'default',
                    {
                        discardComments: { removeAll: true}
                    }
                ],
            },
            canPrint: true
        })
    ],
    module:{
        rules: [
            {
                test: /^(?!.*\.{test,min}\.js$).*\.js$/,
                exclude: /(node_modules)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 2,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options:{
                            ident: 'postcss',
                            plugins: () => [
                              postcssPresetEnv({ 
                                    browsers: 'last 2 versions',
                                    autoprefixer: { 
                                        grid: true,
                                        cascade: false
                                    }, 
                                    stage: 3,
                                    features: {
                                      'nesting-rules': true
                                    }
                                }
                              ),
                            ]
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 1,
                        }
                    }
                ]
            },
            {
                test: /\.pug$/,
                use: 'pug-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options:{
                            name: '[name].[ext]',
                            outputPath: 'assets/'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            },
        ]
    }
}