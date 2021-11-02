const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' )
const { merge } = require( 'webpack-merge' )
const common = require( './webpack.common' )

const prodConfig = {
    mode: 'production',
    target: 'web',
    module: {
        rules: [
            {
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
                test: /\.(css)$/i
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ],
    devtool: 'source-map'
}

module.exports = merge( common, prodConfig )
