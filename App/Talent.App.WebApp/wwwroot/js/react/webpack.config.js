const path = require('path');

module.exports = {
    context: __dirname,
    entry: {
        homePage: './ReactScripts/Home.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    watch: true,
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env', 'babel-preset-react'],
                        plugins: ['transform-runtime'], 
                    },
                },
            },
            {
                test: /\.css$/,
                exclude: /\.module\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.module\.css$/,  // Target CSS files with .module.css extension
                use: [
                    'style-loader',  // Inject styles into DOM
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,  // Enable CSS Modules
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash].[ext]',
                            outputPath: 'images/',
                        },
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash].[ext]',
                            outputPath: 'fonts/',
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            "process": "process/browser"
        }
    },
    
};
