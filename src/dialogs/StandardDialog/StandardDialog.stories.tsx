import { Meta, Story } from "@storybook/react"
import { getStoryPath } from "@utils/FileUtils"
import { baseAbsolute, file, wd } from "paths.macro"
import StandardDialog, { IStandardDialogProps} from './StandardDialog'
import React from "react"

export default {
    title: "Dialog/StandardDialog",
    component: StandardDialog,
    parameters: {
        actions:{ argTypesRegex: ""  },
        storySource: {
            storyPath: getStoryPath(baseAbsolute, wd, file)
        }
    }
} as Meta

const Template = (args: IStandardDialogProps) => <StandardDialog {...args} />

export const Plain: Story<IStandardDialogProps> = Template.bind({})
export const WithTitle: Story<IStandardDialogProps> = Template.bind({})
export const WithChildren: Story<IStandardDialogProps> = Template.bind({})
export const WithButtons: Story<IStandardDialogProps> = Template.bind({})

Plain.args = {
    open: true
} as IStandardDialogProps

WithTitle.args = {
    open: true,
    title: "This is the title"
} as IStandardDialogProps

WithChildren.args = {
    open: true,
    children: <div>The main content</div>
} as IStandardDialogProps

WithButtons.args = {
    open: true,
    children: <div>The main content</div>,
    buttons:[
        {
            children: "Cancel",
            variant: "outlined"
        },
        {
            children: "Ok",
            color: "primary",
            variant: "contained"
        },
        
    ]
} as IStandardDialogProps
