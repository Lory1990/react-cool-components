import Dropzone, { IDropzoneProps } from "./Dropzone"
import { Meta, Story } from "@storybook/react"
import { getStoryPath } from "@utils/FileUtils"
import { baseAbsolute, file, wd } from "paths.macro"

export default {
    title: "Inputs/Dropzone",
    component: Dropzone,
    parameters: {
        storySource: {
            storyPath: getStoryPath(baseAbsolute, wd, file)
        }
    }
} as Meta

const Template = (args: IDropzoneProps) => <Dropzone {...args} />

export const Plain: Story<IDropzoneProps> = Template.bind({})
export const Disabled: Story<IDropzoneProps> = Template.bind({})
export const Loading: Story<IDropzoneProps> = Template.bind({})
export const Success: Story<IDropzoneProps> = Template.bind({})
export const Error: Story<IDropzoneProps> = Template.bind({})
export const Warning: Story<IDropzoneProps> = Template.bind({})
export const WithTooltip: Story<IDropzoneProps> = Template.bind({})

Plain.args = {
    label: "Select time"
}

Disabled.args = {
    ...Plain.args,
    disabled: true
}

Loading.args = {
    ...Plain.args,
    loading: true
}

Warning.args = {
    ...Plain.args,
    warningMessage: "Warning"
}

Error.args = {
    ...Plain.args,
    errorMessage: "Error"
}

Success.args = {
    ...Plain.args,
    success: true
}
