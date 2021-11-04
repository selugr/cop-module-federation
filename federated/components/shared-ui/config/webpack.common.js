const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' )
const { ModuleFederationPlugin } = require("webpack").container
const HtmlWebPackPlugin = require( 'html-webpack-plugin' )
const path = require( 'path' )

const deps = require("../package.json").dependencies;
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve( __dirname, '../dist' ),
        filename: '[name].[contenthash].js',
        library: {
            type: 'commonjs2'
        },
        publicPath: 'auto'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                use: ['babel-loader'],
                test: /\.(js|jsx)$/,
                exclude: /node_modules/
            },
            {
                type: 'asset',
                test: /\.(png|svg|jpg|jpeg|gif)$/i
            }
        ]
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "sharedUi",
            filename: "remoteEntry.js",
            exposes: {
                "./Loader": "./src/Loader",
                "./ButtonFav": "./src/ButtonFav",
            },
            shared: [{
                "nf-ecomm-frame": {
                    singleton: true,
                    requiredVersion: deps["nf-ecomm-frame"],
                },
                "nf-ecomm-api": {
                    singleton: true,
                    requiredVersion: deps["nf-ecomm-api"],
                },
                react: {
                    singleton: true,
                    requiredVersion: deps.react,
                },
                "react-dom": {
                    singleton: true,
                    requiredVersion: deps["react-dom"],
                },
                },
            ],
        }),
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin( {
            template: './public/index.html'
        } )
    ]
}
