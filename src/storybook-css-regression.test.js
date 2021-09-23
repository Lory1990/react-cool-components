import initStoryshots from "@storybook/addon-storyshots"
import path from 'path'
import { imageSnapshot } from "@storybook/addon-storyshots-puppeteer"

//https://github.com/storybookjs/storybook/tree/master/addons/storyshots/storyshots-puppeteer#customizing-a-page-instance
const shouldWaitForAnimationComplete = (kind, story) => { 
    return story.toLowerCase().includes('modal') || kind.toLowerCase().includes('modal') 
  }

//https://www.gitmemory.com/issue/storybookjs/storybook/7587/790395185

const getGotoOptions = ({ context, url }) => { 
    return { 
      waitUntil: 'networkidle2', 
    } 
}

const beforeScreenshot = (page, { context: { kind, story }, url }) => { 
  const screen = page.$('#root > *').then(root => root ?? undefined) 
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
        //storybookUrl: "http://localhost:6006/",
        storybookUrl: `file://${path.resolve(__dirname, "../storybook-static")}`,
        beforeScreenshot,
        getScreenshotOptions,
        getGotoOptions,
    }),
    framework: "react"
})
