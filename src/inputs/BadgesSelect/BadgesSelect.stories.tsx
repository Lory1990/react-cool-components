import BadgesSelect, { IBadgesSelectProps } from "./"
import { getStoryPath } from "@utils/FileUtils"
import { baseAbsolute, file, wd } from "paths.macro"
import { Meta, Story } from "@storybook/react"

export default {
    title: "Inputs/BadgesSelect",
    component: BadgesSelect,
    parameters: {
        storySource: {
            storyPath: getStoryPath(baseAbsolute, wd, file)
        }
    }
} as Meta

const Template = (args: IBadgesSelectProps) => <BadgesSelect {...args} />

export const Plain: Story<IBadgesSelectProps> = Template.bind({})
export const Disabled: Story<IBadgesSelectProps> = Template.bind({})
export const Loading: Story<IBadgesSelectProps> = Template.bind({})
export const Success: Story<IBadgesSelectProps> = Template.bind({})
export const Warning: Story<IBadgesSelectProps> = Template.bind({})
export const Error: Story<IBadgesSelectProps> = Template.bind({})
export const Tooltip: Story<IBadgesSelectProps> = Template.bind({})

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

Loading.args = {
    ...Plain.args,
    loading: true
}

Success.args = {
    ...Plain.args,
    success: true
}

Tooltip.args = {
    ...Plain.args,
    tooltip: {
        title: "Tooltip",
        type: "SUCCESS"
    }
}
