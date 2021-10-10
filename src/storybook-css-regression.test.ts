import initStoryshots from "@storybook/addon-storyshots"
import path from "path"
import { MatchImageSnapshotOptions } from "jest-image-snapshot"
import { imageSnapshot } from "@storybook/addon-storyshots-puppeteer"
import { Page, ElementHandle, ScreenshotOptions } from "puppeteer"

const ROOT = path.join(__dirname, "../")

//https://github.com/storybookjs/storybook/tree/master/addons/storyshots/storyshots-puppeteer#customizing-a-page-instance
const shouldWaitForAnimationComplete = (kind: string, story: string) => {
    return story.toLowerCase().includes("modal") || kind.toLowerCase().includes("modal")
}

//https://www.gitmemory.com/issue/storybookjs/storybook/7587/790395185

const getGotoOptions = ({ context, url }: any): any => {
    return {
        waitUntil: "networkidle2",
        url: url + "&environment=test"
    }
}

const getMatchOptions = ({ kind, story }: any): MatchImageSnapshotOptions => {
    return {
        customSnapshotsDir: path.join(ROOT, "__image_snapshots__"),
        customDiffDir: path.join(ROOT, "__image_snapshots__", "diff_output"),
        customSnapshotIdentifier: ({ testPath, currentTestName, counter, defaultIdentifier }) => {
            return defaultIdentifier.replace("storybook-css-regression-test-ts-storyshots-css-regression-test-", "")
        }
    }
}

const beforeScreenshot = (page: Page, { context: { kind, story }, url }: any): Promise<void | ElementHandle> => {
    const screen = page.$("#root > *").then(root => root ?? undefined)
    if (shouldWaitForAnimationComplete(kind, story)) {
        return new Promise(resolve =>
            setTimeout(() => {
                resolve()
            }, 500)
        )
    } else {
        return screen
    }
}

const getScreenshotOptions = ({ context, url }: any): ScreenshotOptions => {
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
        //storybookUrl: `file://${path.resolve(__dirname, "../storybook-static")}`,
        beforeScreenshot,
        getScreenshotOptions,
        getMatchOptions,
        getGotoOptions
    }),
    framework: "react"
})
