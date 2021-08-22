import { Meta, Story } from "@storybook/react"
import { getStoryPath } from "@utils/FileUtils"
import { baseAbsolute, file, wd } from "paths.macro"
import YesNoDialog, { IYesNoDialogProps} from './YesNoDialog'
import React from "react"

export default {
    title: "Dialog/YesNoDialog",
    component: YesNoDialog,
    parameters: {
        actions:{ argTypesRegex: ""  },
        storySource: {
            storyPath: getStoryPath(baseAbsolute, wd, file)
        }
    }
} as Meta

const Template = (args: IYesNoDialogProps) => <YesNoDialog {...args} />

export const Plain: Story<IYesNoDialogProps> = Template.bind({})
export const WithTitle: Story<IYesNoDialogProps> = Template.bind({})
export const WithChildren: Story<IYesNoDialogProps> = Template.bind({})
export const WithButtons: Story<IYesNoDialogProps> = Template.bind({})

Plain.args = {
    open: true
} as IYesNoDialogProps

WithTitle.args = {
    open: true,
    title: "This is the title"
} as IYesNoDialogProps

WithChildren.args = {
    open: true,
    children: <div>The main content</div>
} as IYesNoDialogProps

WithButtons.args = {
    open: true,
    children: <div>The main content</div>,
    buttons:[
        {
            children: "More info",
        },
        
    ]
} as IYesNoDialogProps
