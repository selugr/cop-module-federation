const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' )
const { ModuleFederationPlugin } = require("webpack").container
const HtmlWebPackPlugin = require( 'html-webpack-plugin' )
const path = require( 'path' )

const deps = require("../package.json").dependencies;
module.exports = {
    entry: './src/entry.js',
    output: {
        path: path.resolve( __dirname, '../dist' ),
        filename: 'main.js',
        publicPath: 'http://localhost:8091/'
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
            name: "home",
            filename: "remoteEntry.js",
            remotes: {
                home: "home@http://localhost:8091/remoteEntry.js",
                itemsList: "itemsList@http://localhost:8092/remoteEntry.js",
                itemDetails: "itemDetails@http://localhost:8093/remoteEntry.js",
            },
            exposes: {
                "./App": "./src/App",
            },
            shared: [{
                "react-router-dom": {
                    singleton: true,
                    requiredVersion: deps["react-router-dom"],
                },
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
            template: './public/index.html',
            favicon: './public/favicon.ico'
        } )
    ]
}
