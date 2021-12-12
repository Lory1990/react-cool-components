import { Meta, Story } from "@storybook/react"
import CheckBox, { ICheckBoxProps } from "./CheckBox"
import { getStoryPath } from "utils/FileUtils"
import { baseAbsolute, file, wd } from "paths.macro"

export default {
    title: "Inputs/CheckBox",
    component: CheckBox,
    parameters: {
        storySource: {
            storyPath: getStoryPath(baseAbsolute, wd, file)
        }
    }
} as Meta

const Template = (args: ICheckBoxProps) => <CheckBox {...args} />

export const Plain: Story<ICheckBoxProps> = Template.bind({})
export const Disabled: Story<ICheckBoxProps> = Template.bind({})
export const Success: Story<ICheckBoxProps> = Template.bind({})
export const Loading: Story<ICheckBoxProps> = Template.bind({})
export const Warning: Story<ICheckBoxProps> = Template.bind({})
export const Error: Story<ICheckBoxProps> = Template.bind({})
export const ReadOnly: Story<ICheckBoxProps> = Template.bind({})
export const Tooltip: Story<ICheckBoxProps> = Template.bind({})

Plain.args = {
    label: "This is the checkbox"
}

Disabled.args = {
    ...Plain.args,
    disabled: true
}

ReadOnly.args = {
    ...Plain.args,
    readOnly: true
}

Warning.args = {
    ...Plain.args,
    warningMessage: "This is the warning message"
}

Error.args = {
    ...Plain.args,
    errorMessage: "This is the error message"
}

Success.args = {
    ...Plain.args,
    success: true
}

Loading.args = {
    ...Plain.args,
    loading: true
}

Tooltip.args = {
    ...Plain.args,
    tooltip: {
        title: "Tooltip",
        type: "SUCCESS"
    }
}
