import initStoryshots from "@storybook/addon-storyshots"
import { imageSnapshot } from "@storybook/addon-storyshots-puppeteer"
// import path from "path"

//https://github.com/storybookjs/storybook/tree/master/addons/storyshots/storyshots-puppeteer#customizing-a-page-instance

//https://www.gitmemory.com/issue/storybookjs/storybook/7587/790395185
const beforeScreenshot = page => page.$("#root > *").then(root => root ?? undefined)

const getScreenshotOptions = ({ context, url }) => {
    return {
        encoding: "base64", // encoding: 'base64' is a property required by puppeteer
        fullPage: false // Do not take the full page screenshot. Default is 'true' in Storyshots.,
    }
}

initStoryshots({
    // asyncJest: true,
    suite: "Storyshots - CSS Regression test",
    test: imageSnapshot({
        storybookUrl: "http://localhost:6006/",
        // storybookUrl: `file://${path.resolve(__dirname, "../storybook-static")}`,
        beforeScreenshot,
        getScreenshotOptions
        // getGotoOptions,
    }),
    framework: "react"
})
