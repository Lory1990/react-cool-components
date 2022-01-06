import Select, { ISelectComponentProps } from "./Select"
import { Meta, Story } from "@storybook/react"
import { getStoryPath } from "../../utils/FileUtils"
import { baseAbsolute, file, wd } from "paths.macro"

export default {
    title: "Inputs/Select",
    component: Select,
    parameters: {
        storySource: {
            storyPath: getStoryPath(baseAbsolute, wd, file)
        }
    }
} as Meta

const Template = (args: ISelectComponentProps) => <Select {...args} />

export const Plain: Story<ISelectComponentProps> = Template.bind({})
export const Disabled: Story<ISelectComponentProps> = Template.bind({})
export const Success: Story<ISelectComponentProps> = Template.bind({})
export const Loading: Story<ISelectComponentProps> = Template.bind({})
export const Warning: Story<ISelectComponentProps> = Template.bind({})
export const Error: Story<ISelectComponentProps> = Template.bind({})
export const Tooltip: Story<ISelectComponentProps> = Template.bind({})

Plain.args = {
    label: "This is the checkbox"
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
