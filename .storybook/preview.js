import {Suspense, StrictMode} from 'react'
import { wd } from "paths.macro"

const workingDirPath = wd ? `/${wd}` : "/"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "centered",
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  storySource: {
    repository: "https://github.com/Lory1990/react-cool-components",
    branch: "main",
    workingDir: workingDirPath
  },
}

export const decorators = [
  Story => (<StrictMode>
        <Suspense fallback={<div>Loading...</div>}>
          <Story />
        </Suspense>
      </StrictMode>
  )
]