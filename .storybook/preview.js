import { Suspense, StrictMode } from "react"
import { wd } from "paths.macro"
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"
import "../src/style/index.scss"

const workingDirPath = wd ? `/${wd}` : "/"

export const parameters = {
    // actions: { argTypesRegex: "^on[A-Z]*" },
    layout: "centered",
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    },
    storySource: {
        repository: "https://github.com/Lory1990/react-cool-components",
        branch: "main",
        workingDir: workingDirPath
    },
    viewport: {
        viewports: INITIAL_VIEWPORTS
    }
}

export const decorators = [
    Story => (
        <StrictMode>
            <Suspense fallback={<div>Loading...</div>}>
                <Story />
            </Suspense>
        </StrictMode>
    )
]
