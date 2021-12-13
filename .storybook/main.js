const path = require("path")
const tsconfig = path.resolve(__dirname, "../tsconfig.json")
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")

module.exports = {
    stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/preset-create-react-app", "storybook-vscode-component/register", "storybook-addon-designs"],
    typescript: {
        check: true,
        reactDocgen: "react-docgen-typescript",
        reactDocgenTypescriptOptions: {
            tsconfigPath: tsconfig,
            compilerOptions: {
                allowSyntheticDefaultImports: false,
                esModuleInterop: false
            }
        }
    },
    webpackFinal: async (config, { configType }) => {
        config.resolve.plugins.push(new TsconfigPathsPlugin())

        config.module.rules.push({
            test: /\.s[ac]ss$/i,
            use: ["sass-loader"]
        })

        if (process.env.NODE_ENV === "production" && !process.env.IS_TEST) {
            config.output.publicPath = "/react-cool-components/"
        }
        return config
    },
    managerWebpack: async config => {
        if (process.env.NODE_ENV === "production" && !process.env.IS_TEST) {
            config.output.publicPath = "/react-cool-components/"
        }
        return config
    }
}
