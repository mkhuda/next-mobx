const withCss = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')

module.exports = withSass(withCss({
    webpack (config) {
        config.module.rules.push({
            test: /\.(svg|eot|otf|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000,
                    publicPath: './',
                    outputPath: 'static/',
                    name: '[name].[ext]'
                }
            }
        })

        return config
    }
}))

