const path = require("path")
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")

module.exports = {
    plugins: [
        {
            plugin: {
                overrideWebpackConfig: ({ webpackConfig }) => {
                    webpackConfig.resolve.plugins.push(new TsconfigPathsPlugin({}))
                    return webpackConfig
                }
            }
        }
    ]
    // style: {
    //     sass: {
    //         loaderOptions: {
    //             includePaths: "./src/style/variables.scss"
    //         }
    //     }
    // }
}
