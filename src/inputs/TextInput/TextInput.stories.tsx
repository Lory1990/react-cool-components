import { Meta, Story } from "@storybook/react"
import TextInput, { ITextInputProps } from "./TextInput"
import { getStoryPath } from "utils/FileUtils"
import { baseAbsolute, file, wd } from "paths.macro"

export default {
    title: "Inputs/TextInput",
    component: TextInput,
    parameters: {
        storySource: {
            storyPath: getStoryPath(baseAbsolute, wd, file)
        }
    }
} as Meta

const Template = (args: ITextInputProps) => <TextInput {...args} />

export const Plain: Story<ITextInputProps> = Template.bind({})
export const Disabled: Story<ITextInputProps> = Template.bind({})
export const Loading: Story<ITextInputProps> = Template.bind({})
export const Success: Story<ITextInputProps> = Template.bind({})
export const Warning: Story<ITextInputProps> = Template.bind({})
export const Error: Story<ITextInputProps> = Template.bind({})
export const Tooltip: Story<ITextInputProps> = Template.bind({})
export const Password: Story<ITextInputProps> = Template.bind({})
export const Number: Story<ITextInputProps> = Template.bind({})

Plain.args = {
    label: "Text field label"
}

Disabled.args = {
    ...Plain.args,
    disabled: true
}

Warning.args = {
    ...Plain.args,
    warningMessage: "This is the warning message"
}

Error.args = {
    ...Plain.args,
    errorMessage: "This is the error message"
}

Tooltip.args = {
    ...Plain.args,
    tooltip: {
        title: "Tooltip",
        type: "SUCCESS"
    },
    label: "Text field label"
}

Password.args = {
    ...Plain.args,
    type: "password"
}

Loading.args = {
    ...Plain.args,
    loading: true
}

Success.args = {
    ...Plain.args,
    success: true
}

Number.args = {
    ...Plain.args,
    type: "number",
    min: -50,
    max: 50
}
